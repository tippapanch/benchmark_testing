const { getFileUrl, FPSRecorder, pbApi, DropPercentageRecorder, getTestRunData, getTestScore } = window.pbCommon;

// TC-07 Network Request Performance Test

// Constants
const TEST_DURATION_MS = 90000; // 1.5 minutes
const EXPECTED_FPS = 60;
const TARGET_FRAME_TIME = 1000 / EXPECTED_FPS;
const DROP_THRESHOLD_PERCENT = 2;
const MAX_NODES = 20;

// Elements
const networkViz = document.getElementById('networkViz');
const frameCountElement = document.getElementById('frameCount');
const dropCountElement = document.getElementById('dropCount');
const dropPercentageElement = document.getElementById('dropPercentage');
const currentFPSElement = document.getElementById('currentFPS');
const requestCountElement = document.getElementById('requestCount');
const avgResponseElement = document.getElementById('avgResponse');

// Test state
let startTime = 0;
let lastFrameTime = 0;
let totalFrames = 0;
let droppedFrames = 0;
let isTestRunning = false;
let fpsRecorder = new FPSRecorder();
let networkNodes = [];
let connections = [];
let requestCount = 0;
let totalResponseTime = 0;

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

// Create network node
function createNetworkNode() {
    const node = document.createElement('div');
    node.className = 'network-node';
    
    // Random position
    const x = Math.random() * (networkViz.offsetWidth - 20);
    const y = Math.random() * (networkViz.offsetHeight - 20);
    node.style.left = x + 'px';
    node.style.top = y + 'px';
    
    return { element: node, x: x, y: y, active: false };
}

// Create network connection
function createConnection(fromNode, toNode) {
    const connection = document.createElement('div');
    connection.className = 'network-connection';
    
    const dx = toNode.x - fromNode.x;
    const dy = toNode.y - fromNode.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx) * 180 / Math.PI;
    
    connection.style.width = distance + 'px';
    connection.style.left = fromNode.x + 10 + 'px';
    connection.style.top = fromNode.y + 10 + 'px';
    connection.style.transform = `rotate(${angle}deg)`;
    
    return { element: connection, from: fromNode, to: toNode, active: false };
}

// Simulate network request
async function simulateNetworkRequest() {
    const startTime = performance.now();
    requestCount++;
    
    try {
        // Simulate network delay
        const delay = Math.random() * 100 + 50; // 50-150ms
        await new Promise(resolve => setTimeout(resolve, delay));
        
        const responseTime = performance.now() - startTime;
        totalResponseTime += responseTime;
        
        return responseTime;
    } catch (error) {
        console.error('Network request failed:', error);
        return 0;
    }
}

// Start the test
function startTest() {
    console.log('[debug] starting network request performance test');
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
    requestCount = 0;
    totalResponseTime = 0;
    
    // Clear existing network visualization
    networkViz.innerHTML = '';
    networkNodes = [];
    connections = [];
    
    // Create initial network nodes
    for (let i = 0; i < MAX_NODES; i++) {
        const node = createNetworkNode();
        networkViz.appendChild(node.element);
        networkNodes.push(node);
    }
    
    // Create connections between nodes
    for (let i = 0; i < networkNodes.length; i++) {
        for (let j = i + 1; j < networkNodes.length; j++) {
            if (Math.random() < 0.3) { // 30% chance of connection
                const connection = createConnection(networkNodes[i], networkNodes[j]);
                networkViz.appendChild(connection.element);
                connections.push(connection);
            }
        }
    }
    
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
    
    // Network simulation operations
    const frameNumber = totalFrames;
    
    // Simulate network requests periodically
    if (frameNumber % 30 === 0) {
        simulateNetworkRequest().then(responseTime => {
            // Activate random nodes and connections
            const randomNode1 = networkNodes[Math.floor(Math.random() * networkNodes.length)];
            const randomNode2 = networkNodes[Math.floor(Math.random() * networkNodes.length)];
            
            if (randomNode1 && randomNode2) {
                randomNode1.active = true;
                randomNode2.active = true;
                
                // Find connection between these nodes
                const connection = connections.find(conn => 
                    (conn.from === randomNode1 && conn.to === randomNode2) ||
                    (conn.from === randomNode2 && conn.to === randomNode1)
                );
                
                if (connection) {
                    connection.active = true;
                    connection.element.style.background = 'linear-gradient(90deg, #ff6b6b, #4ecdc4)';
                }
                
                // Deactivate after a short time
                setTimeout(() => {
                    randomNode1.active = false;
                    randomNode2.active = false;
                    if (connection) {
                        connection.active = false;
                        connection.element.style.background = 'linear-gradient(90deg, #00d2d3, #54a0ff)';
                    }
                }, 500);
            }
        });
    }
    
    // Update node animations
    networkNodes.forEach((node, index) => {
        if (node.element.parentNode) {
            // Subtle movement
            const currentLeft = parseFloat(node.element.style.left) || 0;
            const currentTop = parseFloat(node.element.style.top) || 0;
            
            node.element.style.left = (currentLeft + Math.sin(frameNumber * 0.005 + index) * 0.5) + 'px';
            node.element.style.top = (currentTop + Math.cos(frameNumber * 0.005 + index) * 0.5) + 'px';
            
            // Update node position for connections
            node.x = parseFloat(node.element.style.left) || 0;
            node.y = parseFloat(node.element.style.top) || 0;
        }
    });
    
    // Update connection positions
    connections.forEach(connection => {
        if (connection.element.parentNode && connection.from && connection.to) {
            const dx = connection.to.x - connection.from.x;
            const dy = connection.to.y - connection.from.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const angle = Math.atan2(dy, dx) * 180 / Math.PI;
            
            connection.element.style.width = distance + 'px';
            connection.element.style.left = connection.from.x + 10 + 'px';
            connection.element.style.top = connection.from.y + 10 + 'px';
            connection.element.style.transform = `rotate(${angle}deg)`;
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
    const avgResponse = requestCount > 0 ? totalResponseTime / requestCount : 0;
    
    frameCountElement.textContent = totalFrames;
    dropCountElement.textContent = droppedFrames;
    dropPercentageElement.textContent = `${dropPercentage.toFixed(2)}%`;
    currentFPSElement.textContent = currentFPS.toFixed(1);
    requestCountElement.textContent = requestCount;
    avgResponseElement.textContent = `${avgResponse.toFixed(1)}ms`;
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
    const avgResponse = requestCount > 0 ? totalResponseTime / requestCount : 0;
    
    console.log('[debug] Test completed');
    console.log('[debug] Test duration:', testDuration.toFixed(2), 'ms');
    console.log('[debug] Expected frames:', expectedTotalFrames);
    console.log('[debug] Actual frames:', actualFrames);
    console.log('[debug] Dropped frames:', droppedFrames);
    console.log('[debug] Drop percentage:', dropPercentage.toFixed(2), '%');
    console.log('[debug] Average FPS:', averageFPS);
    console.log('[debug] Total requests:', requestCount);
    console.log('[debug] Average response time:', avgResponse.toFixed(1), 'ms');
    
    // Show test results on screen
    displayTestResults({
        testDuration,
        expectedTotalFrames,
        actualFrames,
        droppedFrames,
        dropPercentage,
        isPassing,
        averageFPS,
        requestCount,
        avgResponse
    });
    
    // Get test data 
    const data = await getTestRunData({
        testDuration,
        expectedTotalFrames,
        actualFrames,
        droppedFrames,
        dropPercentage,
        averageFPS,
        requestCount,
        avgResponse
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
                <td style="padding: 12px; border-bottom: 1px solid #ddd;">Total Requests:</td>
                <td style="padding: 12px; border-bottom: 1px solid #ddd; text-align: right;">${results.requestCount}</td>
            </tr>
            <tr>
                <td style="padding: 12px;">Avg Response Time:</td>
                <td style="padding: 12px; text-align: right;">${results.avgResponse.toFixed(1)}ms</td>
            </tr>
        </table>
        <div style="margin-top: 20px; text-align: center; color: #999; font-size: 14px;">
            Network Request Performance Test Completed
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