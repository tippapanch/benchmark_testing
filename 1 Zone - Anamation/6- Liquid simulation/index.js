const { getFileUrl, FPSRecorder, pbApi, DropPercentageRecorder, getTestRunData, getTestScore } = window.pbCommon;

// TC-09 Liquid Tank Swirling Performance Test

// Constants
const TEST_DURATION_MS = 90000; // 1.5 minutes
const EXPECTED_FPS = 60;
const TARGET_FRAME_TIME = 1000 / EXPECTED_FPS;
const DROP_THRESHOLD_PERCENT = 2;
const CANVAS_SIZE = 600;

// Liquid tank simulation constants
const PARTICLE_COUNT = 300;
const TANK_RADIUS = 250;
const TANK_CENTER_X = CANVAS_SIZE / 2;
const TANK_CENTER_Y = CANVAS_SIZE / 2;
const GRAVITY = 0.2;
const VISCOSITY = 0.98;
const SWIRL_FORCE = 0.8;
const PARTICLE_RADIUS = 3;
const BOUNDARY_DAMPING = 0.6;
const SURFACE_TENSION = 0.4;

// Elements
const imageCanvas = document.getElementById('imageCanvas');
const frameCountElement = document.getElementById('frameCount');
const dropCountElement = document.getElementById('dropCount');
const dropPercentageElement = document.getElementById('dropPercentage');
const currentFPSElement = document.getElementById('currentFPS');
const processingTimeElement = document.getElementById('processingTime');
const activeFiltersElement = document.getElementById('activeFilters');

// Filter checkboxes (repurposed for liquid properties)
const blurFilter = document.getElementById('blurFilter');
const brightnessFilter = document.getElementById('brightnessFilter');
const contrastFilter = document.getElementById('contrastFilter');
const saturationFilter = document.getElementById('saturationFilter');

// Test state
let startTime = 0;
let lastFrameTime = 0;
let totalFrames = 0;
let droppedFrames = 0;
let isTestRunning = false;
let fpsRecorder = new FPSRecorder();
let ctx = null;
let particles = [];
let processingTime = 0;
let swirlAngle = 0;

// Liquid particle class for tank simulation
class LiquidParticle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.radius = PARTICLE_RADIUS + Math.random() * 2;
        this.mass = 1;
        this.color = `hsl(${180 + Math.random() * 60}, 70%, ${40 + Math.random() * 30}%)`;
        this.alpha = 0.7 + Math.random() * 0.3;
    }

    update(deltaTime) {
        // Apply gravity towards tank center
        const dx = TANK_CENTER_X - this.x;
        const dy = TANK_CENTER_Y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance > 0) {
            this.vx += (dx / distance) * GRAVITY * 0.1;
            this.vy += (dy / distance) * GRAVITY * 0.1;
        }
        
        // Apply swirling force
        const angle = Math.atan2(dy, dx);
        const swirlRadius = distance / TANK_RADIUS;
        const swirlStrength = SWIRL_FORCE * (1 - swirlRadius);
        
        this.vx += Math.cos(angle + Math.PI/2) * swirlStrength * 0.1;
        this.vy += Math.sin(angle + Math.PI/2) * swirlStrength * 0.1;
        
        // Apply viscosity
        this.vx *= VISCOSITY;
        this.vy *= VISCOSITY;
        
        // Update position
        this.x += this.vx;
        this.y += this.vy;
        
        // Tank boundary collision with damping
        const newDistance = Math.sqrt((this.x - TANK_CENTER_X) ** 2 + (this.y - TANK_CENTER_Y) ** 2);
        if (newDistance > TANK_RADIUS - this.radius) {
            // Calculate normal vector
            const nx = (this.x - TANK_CENTER_X) / newDistance;
            const ny = (this.y - TANK_CENTER_Y) / newDistance;
            
            // Move particle back to boundary
            this.x = TANK_CENTER_X + nx * (TANK_RADIUS - this.radius);
            this.y = TANK_CENTER_Y + ny * (TANK_RADIUS - this.radius);
            
            // Reflect velocity with damping
            const dotProduct = this.vx * nx + this.vy * ny;
            this.vx = (this.vx - 2 * dotProduct * nx) * BOUNDARY_DAMPING;
            this.vy = (this.vy - 2 * dotProduct * ny) * BOUNDARY_DAMPING;
        }
    }

    draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        
        // Draw particle with glow effect
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        
        // Add glow
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        
        // Remove glow for outline
        ctx.shadowBlur = 0;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.lineWidth = 1;
        ctx.stroke();
        
        ctx.restore();
    }
}

// Create results panel if it doesn't exist
if (!document.getElementById('result')) {
    const overlay = document.createElement('div');
    overlay.id = 'result-overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    overlay.style.zIndex = '999';
    overlay.style.display = 'none';
    overlay.style.backdropFilter = 'blur(3px)';
    document.body.appendChild(overlay);
    
    const resultsPanel = document.createElement('div');
    resultsPanel.id = 'result';
    resultsPanel.style.position = 'fixed';
    resultsPanel.style.top = '50%';
    resultsPanel.style.left = '50%';
    resultsPanel.style.transform = 'translate(-50%, -50%)';
    resultsPanel.style.zIndex = '1000';
    resultsPanel.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
    resultsPanel.style.color = 'white';
    resultsPanel.style.padding = '30px';
    resultsPanel.style.borderRadius = '15px';
    resultsPanel.style.fontFamily = 'Arial, sans-serif';
    resultsPanel.style.display = 'none';
    resultsPanel.style.minWidth = '500px';
    resultsPanel.style.maxWidth = '80%';
    resultsPanel.style.boxShadow = '0 0 20px rgba(0,0,0,0.5)';
    document.body.appendChild(resultsPanel);
}

// Initialize canvas
function initCanvas() {
    imageCanvas.width = CANVAS_SIZE;
    imageCanvas.height = CANVAS_SIZE;
    ctx = imageCanvas.getContext('2d');
    
    // Create particles in a circular pattern within the tank
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * TANK_RADIUS * 0.8;
        const x = TANK_CENTER_X + Math.cos(angle) * radius;
        const y = TANK_CENTER_Y + Math.sin(angle) * radius;
        particles.push(new LiquidParticle(x, y));
    }
}

// Apply blur filter (repurposed for liquid viscosity)
function applyBlur(data, width, height, radius = 2) {
    const result = new Uint8ClampedArray(data);
    
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            let r = 0, g = 0, b = 0, a = 0, count = 0;
            
            for (let dy = -radius; dy <= radius; dy++) {
                for (let dx = -radius; dx <= radius; dx++) {
                    const nx = x + dx;
                    const ny = y + dy;
                    
                    if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
                        const index = (ny * width + nx) * 4;
                        r += data[index];
                        g += data[index + 1];
                        b += data[index + 2];
                        a += data[index + 3];
                        count++;
                    }
                }
            }
            
            const index = (y * width + x) * 4;
            result[index] = r / count;
            result[index + 1] = g / count;
            result[index + 2] = b / count;
            result[index + 3] = a / count;
        }
    }
    
    return result;
}

// Apply brightness filter (repurposed for liquid density)
function applyBrightness(data, factor = 1.2) {
    const result = new Uint8ClampedArray(data);
    
    for (let i = 0; i < data.length; i += 4) {
        result[i] = Math.min(255, data[i] * factor);
        result[i + 1] = Math.min(255, data[i + 1] * factor);
        result[i + 2] = Math.min(255, data[i + 2] * factor);
    }
    
    return result;
}

// Apply contrast filter (repurposed for liquid surface tension)
function applyContrast(data, factor = 1.5) {
    const result = new Uint8ClampedArray(data);
    const factor2 = (259 * (factor + 255)) / (255 * (259 - factor));
    
    for (let i = 0; i < data.length; i += 4) {
        result[i] = Math.max(0, Math.min(255, factor2 * (data[i] - 128) + 128));
        result[i + 1] = Math.max(0, Math.min(255, factor2 * (data[i + 1] - 128) + 128));
        result[i + 2] = Math.max(0, Math.min(255, factor2 * (data[i + 2] - 128) + 128));
    }
    
    return result;
}

// Apply saturation filter (repurposed for liquid color intensity)
function applySaturation(data, factor = 1.3) {
    const result = new Uint8ClampedArray(data);
    
    for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        
        const gray = 0.299 * r + 0.587 * g + 0.114 * b;
        
        result[i] = Math.max(0, Math.min(255, gray + factor * (r - gray)));
        result[i + 1] = Math.max(0, Math.min(255, gray + factor * (g - gray)));
        result[i + 2] = Math.max(0, Math.min(255, gray + factor * (b - gray)));
    }
    
    return result;
}

// Process liquid simulation with active properties
function processLiquid() {
    const startTime = performance.now();
    
    // Apply active liquid properties
    if (blurFilter.checked) {
        // Increase viscosity
        particles.forEach(particle => {
            particle.vx *= 0.96;
            particle.vy *= 0.96;
        });
    }
    
    if (brightnessFilter.checked) {
        // Increase particle density effect
        particles.forEach(particle => {
            particle.radius = Math.min(6, particle.radius + 0.05);
        });
    }
    
    if (contrastFilter.checked) {
        // Increase surface tension
        particles.forEach(particle => {
            const connections = particles.filter(p => {
                const dx = p.x - particle.x;
                const dy = p.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                return distance < 25 && distance > 0;
            });
            
            connections.forEach(conn => {
                const dx = conn.x - particle.x;
                const dy = conn.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const force = SURFACE_TENSION * 0.05;
                
                particle.vx += (dx / distance) * force;
                particle.vy += (dy / distance) * force;
                conn.vx -= (dx / distance) * force;
                conn.vy -= (dy / distance) * force;
            });
        });
    }
    
    if (saturationFilter.checked) {
        // Increase color intensity
        particles.forEach(particle => {
            particle.color = `hsl(${180 + Math.random() * 60}, 80%, ${35 + Math.random() * 45}%)`;
        });
    }
    
    processingTime = performance.now() - startTime;
}

// Start the test
function startTest() {
    console.log('[debug] starting liquid tank swirling performance test');
    pbApi.updateTestRun({
        status: 'started'
    });

    // Hide result panel and overlay if visible from previous run
    const resultPanel = document.getElementById('result');
    const overlay = document.getElementById('result-overlay');
    if (resultPanel) resultPanel.style.display = 'none';
    if (overlay) overlay.style.display = 'none';

    // Initialize values
    startTime = performance.now();
    lastFrameTime = startTime;
    totalFrames = 0;
    droppedFrames = 0;
    isTestRunning = true;
    processingTime = 0;
    swirlAngle = 0;
    
    // Initialize canvas
    initCanvas();
    
    // Start FPS recording
    fpsRecorder.start();

    // Start animation
    requestAnimationFrame(animationLoop);
    
    // End test after duration
    setTimeout(endTest, TEST_DURATION_MS);
}

// Animation loop
function animationLoop(timestamp) {
    if (!isTestRunning) return;
    
    // Calculate time since last frame
    const now = performance.now();
    const deltaTime = now - lastFrameTime;
    lastFrameTime = now;
    
    // Detect dropped frames
    if (deltaTime > TARGET_FRAME_TIME * 2) {
        const missedFrames = Math.floor(deltaTime / TARGET_FRAME_TIME) - 1;
        droppedFrames += missedFrames;
        console.log(`[debug] Dropped ${missedFrames} frames at ${((now - startTime) / 1000).toFixed(2)}s`);
    }
    
    // Liquid processing operations
    const frameNumber = totalFrames;
    
    // Process liquid with properties
    processLiquid();
    
    // Update and draw particles
    ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    
    // Draw tank background
    ctx.save();
    ctx.beginPath();
    ctx.arc(TANK_CENTER_X, TANK_CENTER_Y, TANK_RADIUS, 0, Math.PI * 2);
    const tankGradient = ctx.createRadialGradient(
        TANK_CENTER_X, TANK_CENTER_Y, 0,
        TANK_CENTER_X, TANK_CENTER_Y, TANK_RADIUS
    );
    tankGradient.addColorStop(0, 'rgba(0, 50, 100, 0.1)');
    tankGradient.addColorStop(1, 'rgba(0, 20, 50, 0.3)');
    ctx.fillStyle = tankGradient;
    ctx.fill();
    
    // Draw tank border
    ctx.strokeStyle = 'rgba(100, 200, 255, 0.6)';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // Add tank highlights
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(TANK_CENTER_X, TANK_CENTER_Y, TANK_RADIUS - 10, 0, Math.PI * 2);
    ctx.stroke();
    
    ctx.restore();
    
    // Update swirl angle
    swirlAngle += 0.02;
    
    // Update and draw particles
    particles.forEach(particle => {
        particle.update(deltaTime);
        particle.draw(ctx);
    });
    
    // Draw connections between nearby particles
    ctx.strokeStyle = 'rgba(100, 200, 255, 0.2)';
    ctx.lineWidth = 1;
    
    particles.forEach(particle => {
        particles.forEach(other => {
            if (particle !== other) {
                const dx = other.x - particle.x;
                const dy = other.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 25) {
                    const alpha = 1 - (distance / 25);
                    ctx.strokeStyle = `rgba(100, 200, 255, ${alpha * 0.3})`;
                    ctx.beginPath();
                    ctx.moveTo(particle.x, particle.y);
                    ctx.lineTo(other.x, other.y);
                    ctx.stroke();
                }
            }
        });
    });
    
    // Add some interactive elements
    if (frameNumber % 120 === 0) {
        // Add new particles occasionally
        if (particles.length < PARTICLE_COUNT * 1.2) {
            const angle = Math.random() * Math.PI * 2;
            const radius = TANK_RADIUS * 0.9;
            const x = TANK_CENTER_X + Math.cos(angle) * radius;
            const y = TANK_CENTER_Y + Math.sin(angle) * radius;
            particles.push(new LiquidParticle(x, y));
        }
    }
    
    // Update stats
    totalFrames++;
    updateStats();
    
    // Continue loop
    requestAnimationFrame(animationLoop);
}

// Update statistics display
function updateStats() {
    const dropPercentage = (droppedFrames / (totalFrames + droppedFrames)) * 100;
    const currentFPS = fpsRecorder.getAverageFPS();
    
    // Count active liquid properties
    const activeProperties = [blurFilter, brightnessFilter, contrastFilter, saturationFilter]
        .filter(filter => filter.checked).length;
    
    frameCountElement.textContent = totalFrames;
    dropCountElement.textContent = droppedFrames;
    dropPercentageElement.textContent = `${dropPercentage.toFixed(2)}%`;
    currentFPSElement.textContent = currentFPS.toFixed(1);
    processingTimeElement.textContent = `${processingTime.toFixed(1)}ms`;
    activeFiltersElement.textContent = activeProperties;
}

// End the test
async function endTest() {
    isTestRunning = false;
    fpsRecorder.stop();
    
    // Calculate final metrics
    const testDuration = performance.now() - startTime;
    const expectedTotalFrames = Math.floor(testDuration / TARGET_FRAME_TIME);
    const actualFrames = totalFrames;
    const dropPercentage = (droppedFrames / (totalFrames + droppedFrames)) * 100;
    const isPassing = dropPercentage < DROP_THRESHOLD_PERCENT;
    const averageFPS = fpsRecorder.getAverageFPS();
    
    // Count final active liquid properties
    const finalActiveProperties = [blurFilter, brightnessFilter, contrastFilter, saturationFilter]
        .filter(filter => filter.checked).length;
    
    console.log('[debug] Test completed');
    console.log('[debug] Test duration:', testDuration.toFixed(2), 'ms');
    console.log('[debug] Expected frames:', expectedTotalFrames);
    console.log('[debug] Actual frames:', actualFrames);
    console.log('[debug] Dropped frames:', droppedFrames);
    console.log('[debug] Drop percentage:', dropPercentage.toFixed(2), '%');
    console.log('[debug] Average FPS:', averageFPS);
    console.log('[debug] Final processing time:', processingTime.toFixed(1), 'ms');
    console.log('[debug] Active liquid properties:', finalActiveProperties);
    
    // Show test results on screen
    displayTestResults({
        testDuration,
        expectedTotalFrames,
        actualFrames,
        droppedFrames,
        dropPercentage,
        isPassing,
        averageFPS,
        processingTime,
        finalActiveProperties
    });
    
    // Get test data 
    const data = await getTestRunData({
        testDuration,
        expectedTotalFrames,
        actualFrames,
        droppedFrames,
        dropPercentage,
        averageFPS,
        processingTime,
        finalActiveProperties
    });
    
    // Send test results
    const payload = {
        status: 'completed',
        pass: isPassing, 
        score: 100 - dropPercentage.toFixed(2),
        data: data
    };
    
    console.log('[debug] Sending payload:', payload);
    pbApi.updateTestRun(payload);
}

// Display test results on screen
function displayTestResults(results) {
    const resultPanel = document.getElementById('result');
    const overlay = document.getElementById('result-overlay');
    if (!resultPanel || !overlay) return;
    
    // Show overlay with fade effect
    overlay.style.display = 'block';
    overlay.style.opacity = 0;
    overlay.style.transition = 'opacity 0.5s ease-in-out';
    
    // Format the results for display
    const formattedDuration = (results.testDuration / 1000).toFixed(2);
    
    const resultHTML = `
        <h2 style="margin-top: 0; font-size: 28px; text-align: center; color: ${results.isPassing ? '#4CAF50' : '#F44336'}">
            Test ${results.isPassing ? 'PASSED' : 'FAILED'}
        </h2>
        <div style="margin-bottom: 20px; font-size: 26px; font-weight: bold; text-align: center;">
            Score: ${(100 - results.dropPercentage).toFixed(2)}%
        </div>
        <table style="border-collapse: collapse; width: 100%; font-size: 18px;">
            <tr>
                <td style="padding: 12px; border-bottom: 1px solid #ddd;">Duration:</td>
                <td style="padding: 12px; border-bottom: 1px solid #ddd; text-align: right;">${formattedDuration}s</td>
            </tr>
            <tr>
                <td style="padding: 12px; border-bottom: 1px solid #ddd;">Expected Frames:</td>
                <td style="padding: 12px; border-bottom: 1px solid #ddd; text-align: right;">${results.expectedTotalFrames}</td>
            </tr>
            <tr>
                <td style="padding: 12px; border-bottom: 1px solid #ddd;">Actual Frames:</td>
                <td style="padding: 12px; border-bottom: 1px solid #ddd; text-align: right;">${results.actualFrames}</td>
            </tr>
            <tr>
                <td style="padding: 12px; border-bottom: 1px solid #ddd;">Dropped Frames:</td>
                <td style="padding: 12px; border-bottom: 1px solid #ddd; text-align: right;">${results.droppedFrames}</td>
            </tr>
            <tr>
                <td style="padding: 12px; border-bottom: 1px solid #ddd;">Drop Percentage:</td>
                <td style="padding: 12px; border-bottom: 1px solid #ddd; text-align: right; color: ${results.isPassing ? '#4CAF50' : '#F44336'}; font-weight: bold;">
                    ${results.dropPercentage.toFixed(2)}%
                </td>
            </tr>
            <tr>
                <td style="padding: 12px; border-bottom: 1px solid #ddd;">Average FPS:</td>
                <td style="padding: 12px; border-bottom: 1px solid #ddd; text-align: right;">${results.averageFPS.toFixed(1)}</td>
            </tr>
            <tr>
                <td style="padding: 12px; border-bottom: 1px solid #ddd;">Processing Time:</td>
                <td style="padding: 12px; border-bottom: 1px solid #ddd; text-align: right;">${results.processingTime.toFixed(1)}ms</td>
            </tr>
            <tr>
                <td style="padding: 12px;">Active Liquid Properties:</td>
                <td style="padding: 12px; text-align: right;">${results.finalActiveProperties}</td>
            </tr>
        </table>
        <div style="margin-top: 20px; text-align: center; color: #999; font-size: 14px;">
            Liquid Tank Swirling Performance Test Completed
        </div>
    `;
    
    resultPanel.innerHTML = resultHTML;
    resultPanel.style.display = 'block';
    
    // Add animation to make result panel and overlay appear
    resultPanel.style.opacity = 0;
    resultPanel.style.transition = 'opacity 0.5s ease-in-out, transform 0.5s ease-out';
    resultPanel.style.transform = 'translate(-50%, -50%) scale(0.9)';
    
    setTimeout(() => {
        overlay.style.opacity = 1;
    }, 10);
    
    setTimeout(() => {
        resultPanel.style.opacity = 1;
        resultPanel.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 200);
}

// Start the test
startTest(); 