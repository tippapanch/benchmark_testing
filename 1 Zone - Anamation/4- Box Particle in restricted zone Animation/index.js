const { getFileUrl, FPSRecorder, pbApi, DropPercentageRecorder, getTestRunData, getTestScore } = window.pbCommon;

// TC-06 Memory Usage Performance Test

// Constants
const TEST_DURATION_MS = 90000; // 1.5 minutes
const EXPECTED_FPS = 60;
const TARGET_FRAME_TIME = 1000 / EXPECTED_FPS;
const DROP_THRESHOLD_PERCENT = 2;
const MEMORY_BLOCK_SIZE = 1024 * 1024; // 1MB blocks

// Elements
const memoryViz = document.getElementById('memoryViz');
const frameCountElement = document.getElementById('frameCount');
const dropCountElement = document.getElementById('dropCount');
const dropPercentageElement = document.getElementById('dropPercentage');
const currentFPSElement = document.getElementById('currentFPS');
const memoryUsedElement = document.getElementById('memoryUsed');
const memoryLimitElement = document.getElementById('memoryLimit');

// Test state
let startTime = 0;
let lastFrameTime = 0;
let totalFrames = 0;
let droppedFrames = 0;
let isTestRunning = false;
let fpsRecorder = new FPSRecorder();
let memoryBlocks = [];
let memoryBlocksToRemove = [];

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

// Create memory block
function createMemoryBlock() {
    const block = document.createElement('div');
    block.className = 'memory-block';
    
    // Random size and position
    const size = Math.random() * 50 + 20;
    block.style.width = size + 'px';
    block.style.height = size + 'px';
    block.style.left = Math.random() * (memoryViz.offsetWidth - size) + 'px';
    block.style.top = Math.random() * (memoryViz.offsetHeight - size) + 'px';
    
    // Random color
    const hue = Math.random() * 360;
    block.style.background = `hsl(${hue}, 70%, 60%)`;
    
    // Store the actual memory data
    const memoryData = new Uint8Array(MEMORY_BLOCK_SIZE);
    for (let i = 0; i < memoryData.length; i++) {
        memoryData[i] = Math.floor(Math.random() * 256);
    }
    
    return { element: block, data: memoryData };
}

// Get memory info
function getMemoryInfo() {
    if (performance.memory) {
        return {
            used: performance.memory.usedJSHeapSize,
            total: performance.memory.totalJSHeapSize,
            limit: performance.memory.jsHeapSizeLimit
        };
    }
    return { used: 0, total: 0, limit: 0 };
}

// Start the test
function startTest() {
    console.log('[debug] starting memory usage performance test');
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
    
    // Clear existing memory blocks
    memoryViz.innerHTML = '';
    memoryBlocks = [];
    memoryBlocksToRemove = [];
    
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
    
    // Memory manipulation operations
    const frameNumber = totalFrames;
    
    // Add new memory blocks periodically
    if (frameNumber % 60 === 0) {
        const newBlock = createMemoryBlock();
        memoryViz.appendChild(newBlock.element);
        memoryBlocks.push(newBlock);
    }
    
    // Remove old memory blocks periodically
    if (frameNumber % 90 === 0 && memoryBlocks.length > 10) {
        const blockToRemove = memoryBlocks.shift();
        if (blockToRemove && blockToRemove.element.parentNode) {
            blockToRemove.element.parentNode.removeChild(blockToRemove.element);
            // Clear the memory data
            blockToRemove.data = null;
        }
    }
    
    // Update existing memory blocks
    memoryBlocks.forEach((block, index) => {
        if (block && block.element.parentNode) {
            // Animate the block
            const currentLeft = parseFloat(block.element.style.left) || 0;
            const currentTop = parseFloat(block.element.style.top) || 0;
            
            block.element.style.left = (currentLeft + Math.sin(frameNumber * 0.01 + index) * 1) + 'px';
            block.element.style.top = (currentTop + Math.cos(frameNumber * 0.01 + index) * 1) + 'px';
            
            // Update opacity based on age
            const age = frameNumber - (index * 60);
            const opacity = Math.max(0.3, 1 - (age / 1000));
            block.element.style.opacity = opacity;
            
            // Modify memory data to simulate usage
            if (block.data && frameNumber % 10 === 0) {
                for (let i = 0; i < 1000; i++) {
                    const index = Math.floor(Math.random() * block.data.length);
                    block.data[index] = Math.floor(Math.random() * 256);
                }
            }
        }
    });
    
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
    const memoryInfo = getMemoryInfo();
    
    frameCountElement.textContent = totalFrames;
    dropCountElement.textContent = droppedFrames;
    dropPercentageElement.textContent = `${dropPercentage.toFixed(2)}%`;
    currentFPSElement.textContent = currentFPS.toFixed(1);
    memoryUsedElement.textContent = `${(memoryInfo.used / (1024 * 1024)).toFixed(1)} MB`;
    memoryLimitElement.textContent = `${(memoryInfo.limit / (1024 * 1024)).toFixed(1)} MB`;
}

// End the test
async function endTest() {
    isTestRunning = false;
    fpsRecorder.stop();
    
    // Clean up memory blocks
    memoryBlocks.forEach(block => {
        if (block.data) {
            block.data = null;
        }
    });
    memoryBlocks = [];
    
    // Calculate final metrics
    const testDuration = performance.now() - startTime;
    const expectedTotalFrames = Math.floor(testDuration / TARGET_FRAME_TIME);
    const actualFrames = totalFrames;
    const dropPercentage = (droppedFrames / (totalFrames + droppedFrames)) * 100;
    const isPassing = dropPercentage < DROP_THRESHOLD_PERCENT;
    const averageFPS = fpsRecorder.getAverageFPS();
    const finalMemoryInfo = getMemoryInfo();
    
    console.log('[debug] Test completed');
    console.log('[debug] Test duration:', testDuration.toFixed(2), 'ms');
    console.log('[debug] Expected frames:', expectedTotalFrames);
    console.log('[debug] Actual frames:', actualFrames);
    console.log('[debug] Dropped frames:', droppedFrames);
    console.log('[debug] Drop percentage:', dropPercentage.toFixed(2), '%');
    console.log('[debug] Average FPS:', averageFPS);
    console.log('[debug] Final memory usage:', finalMemoryInfo.used / (1024 * 1024), 'MB');
    
    // Show test results on screen
    displayTestResults({
        testDuration,
        expectedTotalFrames,
        actualFrames,
        droppedFrames,
        dropPercentage,
        isPassing,
        averageFPS,
        finalMemoryInfo
    });
    
    // Get test data 
    const data = await getTestRunData({
        testDuration,
        expectedTotalFrames,
        actualFrames,
        droppedFrames,
        dropPercentage,
        averageFPS,
        finalMemoryInfo
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
    const memoryUsedMB = (results.finalMemoryInfo.used / (1024 * 1024)).toFixed(1);
    const memoryLimitMB = (results.finalMemoryInfo.limit / (1024 * 1024)).toFixed(1);
    
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
                <td style="padding: 12px; border-bottom: 1px solid #ddd;">Final Memory Used:</td>
                <td style="padding: 12px; border-bottom: 1px solid #ddd; text-align: right;">${memoryUsedMB} MB</td>
            </tr>
            <tr>
                <td style="padding: 12px;">Memory Limit:</td>
                <td style="padding: 12px; text-align: right;">${memoryLimitMB} MB</td>
            </tr>
        </table>
        <div style="margin-top: 20px; text-align: center; color: #999; font-size: 14px;">
            Memory Usage Performance Test Completed
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