const { getFileUrl, FPSRecorder, pbApi, DropPercentageRecorder, getTestRunData, getTestScore } = window.pbCommon;

// TC-10 Multi-threaded Worker Performance Test

// Constants
const TEST_DURATION_MS = 90000; // 1.5 minutes
const EXPECTED_FPS = 60;
const TARGET_FRAME_TIME = 1000 / EXPECTED_FPS;
const DROP_THRESHOLD_PERCENT = 2;
const WORKER_COUNT = 12;

// Elements
const workerGrid = document.getElementById('workerGrid');
const frameCountElement = document.getElementById('frameCount');
const dropCountElement = document.getElementById('dropCount');
const dropPercentageElement = document.getElementById('dropPercentage');
const currentFPSElement = document.getElementById('currentFPS');
const activeWorkersElement = document.getElementById('activeWorkers');
const tasksCompletedElement = document.getElementById('tasksCompleted');

// Test state
let startTime = 0;
let lastFrameTime = 0;
let totalFrames = 0;
let droppedFrames = 0;
let isTestRunning = false;
let fpsRecorder = new FPSRecorder();
let workers = [];
let workerCells = [];
let activeWorkers = 0;
let tasksCompleted = 0;

// Worker script
const workerScript = `
self.onmessage = function(e) {
    const { taskId, complexity } = e.data;
    
    // Simulate CPU-intensive work
    let result = 0;
    for (let i = 0; i < complexity; i++) {
        result += Math.sqrt(i) * Math.sin(i) * Math.cos(i);
    }
    
    // Send result back
    self.postMessage({
        taskId: taskId,
        result: result,
        workerId: e.data.workerId
    });
};
`;

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

// Create worker
function createWorker(workerId) {
    try {
        const blob = new Blob([workerScript], { type: 'application/javascript' });
        const worker = new Worker(URL.createObjectURL(blob));
        
        worker.onmessage = function(e) {
            const { taskId, result, workerId: returnedWorkerId } = e.data;
            tasksCompleted++;
            
            // Update worker cell
            const workerCell = workerCells[returnedWorkerId];
            if (workerCell) {
                workerCell.classList.remove('active');
                workerCell.textContent = `Worker ${returnedWorkerId + 1}`;
            }
            
            activeWorkers--;
        };
        
        worker.onerror = function(error) {
            console.error('Worker error:', error);
            activeWorkers--;
        };
        
        return worker;
    } catch (error) {
        console.error('Failed to create worker:', error);
        return null;
    }
}

// Initialize workers
function initWorkers() {
    workers = [];
    workerCells = [];
    
    // Get worker cells from DOM
    const cells = workerGrid.querySelectorAll('.worker-cell');
    cells.forEach((cell, index) => {
        workerCells[index] = cell;
    });
    
    // Create workers
    for (let i = 0; i < WORKER_COUNT; i++) {
        const worker = createWorker(i);
        if (worker) {
            workers.push(worker);
        }
    }
}

// Assign task to worker
function assignTask(workerId, complexity = 100000) {
    const worker = workers[workerId];
    if (worker && !worker.busy) {
        const taskId = Date.now() + Math.random();
        worker.busy = true;
        activeWorkers++;
        
        // Update worker cell
        const workerCell = workerCells[workerId];
        if (workerCell) {
            workerCell.classList.add('active');
            workerCell.textContent = `Task ${taskId.toString().slice(-4)}`;
        }
        
        // Send task to worker
        worker.postMessage({
            taskId: taskId,
            complexity: complexity,
            workerId: workerId
        });
        
        // Mark worker as available after task completion
        setTimeout(() => {
            worker.busy = false;
        }, 100);
    }
}

// Start the test
function startTest() {
    console.log('[debug] starting multi-threaded worker performance test');
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
    activeWorkers = 0;
    tasksCompleted = 0;
    
    // Initialize workers
    initWorkers();
    
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
    
    // Worker management operations
    const frameNumber = totalFrames;
    
    // Assign tasks to workers periodically
    if (frameNumber % 30 === 0) {
        // Find available workers
        const availableWorkers = workers.filter((worker, index) => !worker.busy);
        
        // Assign tasks to available workers
        availableWorkers.forEach((worker, index) => {
            const workerId = workers.indexOf(worker);
            const complexity = Math.floor(Math.random() * 50000) + 50000; // 50k-100k operations
            assignTask(workerId, complexity);
        });
    }
    
    // Update worker cell animations
    workerCells.forEach((cell, index) => {
        if (cell && cell.parentNode) {
            // Add subtle animation to active workers
            if (cell.classList.contains('active')) {
                const pulse = Math.sin(frameNumber * 0.1 + index) * 0.1;
                cell.style.transform = `scale(${1 + pulse})`;
            } else {
                cell.style.transform = 'scale(1)';
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
    
    frameCountElement.textContent = totalFrames;
    dropCountElement.textContent = droppedFrames;
    dropPercentageElement.textContent = `${dropPercentage.toFixed(2)}%`;
    currentFPSElement.textContent = currentFPS.toFixed(1);
    activeWorkersElement.textContent = activeWorkers;
    tasksCompletedElement.textContent = tasksCompleted;
}

// End the test
async function endTest() {
    isTestRunning = false;
    fpsRecorder.stop();
    
    // Terminate all workers
    workers.forEach(worker => {
        if (worker) {
            worker.terminate();
        }
    });
    workers = [];
    
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
    console.log('[debug] Final active workers:', activeWorkers);
    console.log('[debug] Total tasks completed:', tasksCompleted);
    
    // Show test results on screen
    displayTestResults({
        testDuration,
        expectedTotalFrames,
        actualFrames,
        droppedFrames,
        dropPercentage,
        isPassing,
        averageFPS,
        activeWorkers,
        tasksCompleted
    });
    
    // Get test data 
    const data = await getTestRunData({
        testDuration,
        expectedTotalFrames,
        actualFrames,
        droppedFrames,
        dropPercentage,
        averageFPS,
        activeWorkers,
        tasksCompleted
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
                <td style="padding: 12px; border-bottom: 1px solid #ddd;">Active Workers:</td>
                <td style="padding: 12px; border-bottom: 1px solid #ddd; text-align: right;">${results.activeWorkers}</td>
            </tr>
            <tr>
                <td style="padding: 12px;">Tasks Completed:</td>
                <td style="padding: 12px; text-align: right;">${results.tasksCompleted}</td>
            </tr>
        </table>
        <div style="margin-top: 20px; text-align: center; color: #999; font-size: 14px;">
            Multi-threaded Worker Performance Test Completed
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