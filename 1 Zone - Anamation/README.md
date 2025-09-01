# Digital Signage Benchmark Test Suite

This repository contains 10 comprehensive benchmark test cases designed for digital signage performance evaluation. Each test focuses on different aspects of web performance and follows the same structure, UI, and reporting format.

## Test Cases Overview

### 1. **TC-01: CSS Transform Performance Test** (`test1/`)
- **Purpose**: Tests CSS transform animations with multiple animated elements
- **Features**: 6 animated circles with complex transform animations
- **Metrics**: Frame drops, FPS, animation smoothness
- **Visual**: Gradient background with bouncing animated elements

### 2. **TC-02: Canvas 2D Rendering Performance Test** (`test2/`)
- **Purpose**: Tests 2D canvas rendering performance with particle systems
- **Features**: 150 animated particles with physics simulation
- **Metrics**: Frame drops, FPS, particle count
- **Visual**: Dark theme with colorful particle effects

### 3. **TC-03: WebGL 3D Rendering Performance Test** (`test3/`)
- **Purpose**: Tests WebGL 3D rendering capabilities
- **Features**: 50 rotating 3D cubes with custom shaders
- **Metrics**: Frame drops, FPS, 3D rendering performance
- **Visual**: 3D scene with colorful rotating cubes

### 4. **TC-04: Video Playback Performance Test** (`test4/`)
- **Purpose**: Tests video playback performance and quality
- **Features**: Video element with quality monitoring
- **Metrics**: Frame drops, FPS, video quality metrics
- **Visual**: Video player with quality indicators

### 5. **TC-05: DOM Manipulation Performance Test** (`test5/`)
- **Purpose**: Tests DOM manipulation and element creation/destruction
- **Features**: Dynamic DOM element creation and animation
- **Metrics**: Frame drops, FPS, DOM element count
- **Visual**: Animated DOM elements with hover effects

### 6. **TC-06: Memory Usage Performance Test** (`test6/`)
- **Purpose**: Tests memory allocation and garbage collection
- **Features**: Memory visualization and monitoring
- **Metrics**: Frame drops, FPS, memory usage, memory limits
- **Visual**: Memory block visualization

### 7. **TC-07: Network Request Performance Test** (`test7/`)
- **Purpose**: Tests network request handling and response times
- **Features**: Simulated network requests with visualization
- **Metrics**: Frame drops, FPS, request count, average response time
- **Visual**: Network node visualization with connections

### 8. **TC-08: Audio Processing Performance Test** (`test8/`)
- **Purpose**: Tests audio processing and visualization
- **Features**: Audio frequency analysis and visualization
- **Metrics**: Frame drops, FPS, audio level, frequency analysis
- **Visual**: Audio waveform visualization

### 9. **TC-09: Image Processing Performance Test** (`test9/`)
- **Purpose**: Tests image processing and filter application
- **Features**: Real-time image filters (blur, brightness, contrast, saturation)
- **Metrics**: Frame drops, FPS, processing time, active filters
- **Visual**: Image canvas with filter controls

### 10. **TC-10: Multi-threaded Worker Performance Test** (`test10/`)
- **Purpose**: Tests Web Worker performance and multi-threading
- **Features**: 12 Web Workers with task distribution
- **Metrics**: Frame drops, FPS, active workers, tasks completed
- **Visual**: Worker grid with activity indicators

## Common Features Across All Tests

### **UI Components**
- **Stats Panel**: Real-time performance metrics display
- **Results Panel**: Comprehensive test results with pass/fail status
- **Consistent Styling**: Dark theme with gradient backgrounds
- **Responsive Design**: Adapts to different screen sizes

### **Performance Metrics**
- **Frame Count**: Total frames rendered
- **Dropped Frames**: Frames that took longer than expected
- **Drop Percentage**: Percentage of dropped frames
- **FPS**: Frames per second
- **Test Duration**: 90 seconds (1.5 minutes)
- **Pass Threshold**: 2% frame drop threshold

### **Technical Features**
- **pb-common Library**: Shared utilities and API client
- **FPS Recording**: Real-time FPS monitoring
- **Error Handling**: Comprehensive error handling and logging
- **Data Collection**: Device information, memory usage, screenshots
- **API Integration**: Test run management and reporting

### **Results Display**
- **Pass/Fail Status**: Color-coded results (green/red)
- **Performance Score**: Calculated based on frame drop percentage
- **Detailed Metrics**: Comprehensive performance breakdown
- **Animated Transitions**: Smooth result panel animations

## File Structure

```
DemoCursor/
├── annie/                    # Original frame drop test
│   ├── index.html
│   ├── index.js
│   └── pb-common/
├── test1/                    # CSS Transform Test
│   ├── index.html
│   ├── index.js
│   └── pb-common/
├── test2/                    # Canvas 2D Test
│   ├── index.html
│   ├── index.js
│   └── pb-common/
├── test3/                    # WebGL 3D Test
│   ├── index.html
│   ├── index.js
│   └── pb-common/
├── test4/                    # Video Playback Test
│   ├── index.html
│   ├── index.js
│   └── pb-common/
├── test5/                    # DOM Manipulation Test
│   ├── index.html
│   ├── index.js
│   └── pb-common/
├── test6/                    # Memory Usage Test
│   ├── index.html
│   ├── index.js
│   └── pb-common/
├── test7/                    # Network Request Test
│   ├── index.html
│   ├── index.js
│   └── pb-common/
├── test8/                    # Audio Processing Test
│   ├── index.html
│   ├── index.js
│   └── pb-common/
├── test9/                    # Image Processing Test
│   ├── index.html
│   ├── index.js
│   └── pb-common/
└── test10/                   # Multi-threaded Worker Test
    ├── index.html
    ├── index.js
    └── pb-common/
```

## Usage

1. **Open any test case**: Navigate to the desired test folder and open `index.html`
2. **Run the test**: Each test automatically starts and runs for 90 seconds
3. **Monitor performance**: Real-time stats are displayed in the top-left corner
4. **View results**: Comprehensive results are shown after test completion

## Technical Requirements

- **Modern Browser**: Chrome, Firefox, Safari, Edge with WebGL support
- **JavaScript**: ES6+ support required
- **WebGL**: Required for 3D rendering test (test3)
- **Audio Context**: Required for audio processing test (test8)
- **Web Workers**: Required for multi-threading test (test10)

## Performance Expectations

- **Target FPS**: 60 FPS
- **Frame Drop Threshold**: 2% (test passes if drop percentage < 2%)
- **Test Duration**: 90 seconds per test
- **Memory Usage**: Varies by test, typically 50-200MB
- **CPU Usage**: Moderate to high depending on test complexity

## Customization

Each test can be customized by modifying:
- **Test duration**: Change `TEST_DURATION_MS` constant
- **Performance thresholds**: Modify `DROP_THRESHOLD_PERCENT`
- **Visual elements**: Adjust CSS styles and animations
- **Test parameters**: Modify test-specific constants

## Reporting

All tests integrate with the `pb-common` library for:
- **Test run management**: Status updates and completion reporting
- **Data collection**: Performance metrics and device information
- **API integration**: Results submission to external systems
- **Screenshot capture**: Visual documentation of test results

This comprehensive test suite provides thorough performance evaluation for digital signage applications, covering all major aspects of web performance and rendering capabilities. 