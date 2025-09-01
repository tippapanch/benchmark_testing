declare global {
    interface Performance {
        memory?: {
            totalJSHeapSize: number;
            usedJSHeapSize: number;
            jsHeapSizeLimit: number;
        };
    }
}
export declare function getFPS(): Promise<{
    fps: number;
    frames: number;
}>;
export declare function getVideoPlaybackQualityAsString(quality: VideoPlaybackQuality): string;
export declare class FPSRecorder {
    private interval;
    private totalFrames;
    private droppedFrames;
    private lastFPS;
    private fpsValues;
    private fpsInterval;
    constructor(interval?: number);
    start(): void;
    recordFPS(): Promise<void>;
    stop(): void;
    getAverageFPS(): number;
    getTotalFrames(): number;
    getDroppedFrames(): number;
}
export interface VideoPlaybackQualityData extends Omit<VideoPlaybackQuality, 'creationTime' | 'corruptedVideoFrames'> {
    droppedPercentage: number;
    count: number;
    fallbackToFPSRecorder: boolean;
    unsupportedTotalQuality?: {
        droppedVideoFrames: number;
        totalVideoFrames: number;
    };
}
export declare class DropPercentageRecorder {
    private videoElement;
    readonly videoPlaybackQualities: VideoPlaybackQuality[];
    private isRecording;
    private fpsRecorder;
    constructor(videoElement: HTMLVideoElement);
    start(): void;
    recordDropPercentage(): Promise<void>;
    stop(): void;
    getAverageVideoPlaybackQualityData(): VideoPlaybackQualityData | undefined;
}
export declare const withErrorHandling: (fn: () => void) => void;
export interface TestRunData {
    media: {
        type: string;
        url?: string;
        codec?: string;
        resolution: {
            width: number;
            height: number;
        };
    };
    viewport: {
        width: number;
        height: number;
    };
    pixelRatio: number;
    videoPlaybackQuality?: VideoPlaybackQualityData | null;
    memory: {
        totalJSHeapSize: number;
        usedJSHeapSize: number;
        jsHeapSizeLimit: number;
    };
    fps: number;
    deviceInfo: any;
    screenshot: string;
    loadedTimeMs: number;
    startedToEndedTimeMs: number;
}
export interface GetTestReportResultPayload {
    data?: Partial<TestRunData>;
}
export interface GetTestScorePayload {
    fps: number;
    frameDroppedPercentage: number;
}
export declare function getTestRunData({ data }: GetTestReportResultPayload): Promise<Partial<TestRunData>>;
export declare const getTestScore: ({ fps, frameDroppedPercentage }: GetTestScorePayload) => number;
