const { getFileUrl, FPSRecorder, pbApi, DropPercentageRecorder, getTestRunData, getTestScore } = window.pbCommon;

// TC-05 DOM Manipulation Performance Test

// Constants
const TEST_DURATION_MS = 90000; // 1.5 minutes
const EXPECTED_FPS = 60;
const TARGET_FRAME_TIME = 1000 / EXPECTED_FPS;
const DROP_THRESHOLD_PERCENT = 2;
const MAX_ELEMENTS = 100;

// Elements
const domContainer = document.getElementById('domContainer');
const frameCountElement = document.getElementById('frameCount');
const dropCountElement = document.getElementById('dropCount');
const dropPercentageElement = document.getElementById('dropPercentage');
const currentFPSElement = document.getElementById('currentFPS');
const elementCountElement = document.getElementById('elementCount');

// Test state
let startTime = 0;
let lastFrameTime = 0;
let totalFrames = 0;
let droppedFrames = 0;
let isTestRunning = false;
let fpsRecorder = new FPSRecorder();
let domElements = [];

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

// Create DOM element
function createDOMElement() {
    const element = document.createElement('div');
    element.className = 'dom-element';
    element.textContent = Math.floor(Math.random() * 1000);
    
    // Random position
    element.style.left = Math.random() * (window.innerWidth - 60) + 'px';
    element.style.top = Math.random() * (window.innerHeight - 60) + 'px';
    
    // Random animation properties
    element.style.animationDuration = (Math.random() * 2 + 1) + 's';
    element.style.animationDelay = Math.random() * 2 + 's';
    
    return element;
}

// Start the test
function startTest() {
    console.log('[debug] starting DOM manipulation performance test');
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
    
    // Clear existing elements
    domContainer.innerHTML = '';
    domElements = [];
    
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
    
    // DOM manipulation operations
    const frameNumber = totalFrames;
    
    // Add new elements periodically
    if (frameNumber % 30 === 0 && domElements.length < MAX_ELEMENTS) {
        const newElement = createDOMElement();
        domContainer.appendChild(newElement);
        domElements.push(newElement);
    }
    
    // Remove old elements periodically
    if (frameNumber % 45 === 0 && domElements.length > 20) {
        const elementToRemove = domElements.shift();
        if (elementToRemove && elementToRemove.parentNode) {
            elementToRemove.parentNode.removeChild(elementToRemove);
        }
    }
    
    // Update existing elements
    domElements.forEach((element, index) => {
        if (element && element.parentNode) {
            // Update position
            const currentLeft = parseFloat(element.style.left) || 0;
            const currentTop = parseFloat(element.style.top) || 0;
            
            element.style.left = (currentLeft + Math.sin(frameNumber * 0.01 + index) * 2) + 'px';
            element.style.top = (currentTop + Math.cos(frameNumber * 0.01 + index) * 2) + 'px';
            
            // Update content
            element.textContent = Math.floor(Math.random() * 1000);
            
            // Update styles
            element.style.transform = `rotate(${frameNumber + index}deg) scale(${0.8 + Math.sin(frameNumber * 0.02) * 0.2})`;
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
    
    frameCountElement.textContent = totalFrames;
    dropCountElement.textContent = droppedFrames;
    dropPercentageElement.textContent = `${dropPercentage.toFixed(2)}%`;
    currentFPSElement.textContent = currentFPS.toFixed(1);
    elementCountElement.textContent = domElements.length;
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
    
    console.log('[debug] Test completed');
    console.log('[debug] Test duration:', testDuration.toFixed(2), 'ms');
    console.log('[debug] Expected frames:', expectedTotalFrames);
    console.log('[debug] Actual frames:', actualFrames);
    console.log('[debug] Dropped frames:', droppedFrames);
    console.log('[debug] Drop percentage:', dropPercentage.toFixed(2), '%');
    console.log('[debug] Average FPS:', averageFPS);
    console.log('[debug] Final element count:', domElements.length);
    
    // Show test results on screen
    displayTestResults({
        testDuration,
        expectedTotalFrames,
        actualFrames,
        droppedFrames,
        dropPercentage,
        isPassing,
        averageFPS
    });
    
    // Get test data 
    const data = await getTestRunData({
        testDuration,
        expectedTotalFrames,
        actualFrames,
        droppedFrames,
        dropPercentage,
        averageFPS
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
                <td style="padding: 12px;">Threshold:</td>
                <td style="padding: 12px; text-align: right;">${DROP_THRESHOLD_PERCENT}%</td>
            </tr>
        </table>
        <div style="margin-top: 20px; text-align: center; color: #999; font-size: 14px;">
            DOM Manipulation Performance Test Completed
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