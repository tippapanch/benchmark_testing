import { TestRunUpdate } from './types';
declare let config: {
    baseURL: string;
    testId: string;
    testRunId: string;
    playerId: string;
    ollamaBaseURL: string;
    timestampNoCache: string;
};
export declare const setConfig: (newConfig: Partial<typeof config>) => void;
export declare const getFileUrl: (filename: string) => string;
export declare const pbApi: {
    setConfig: (newConfig: Partial<typeof config>) => void;
    updateTestRun: (update: TestRunUpdate) => Promise<void>;
};
export {};
