export interface TestRun {
    id?: string;
    player_id: string;
    test_id: string;
    test_group_run_id: string;
    name?: string;
    status: 'pending' | 'initiated' | 'started' | 'completed' | 'failed' | 'cancelled';
    score?: number;
    data?: any;
    pass?: boolean;
    created_at?: string;
    updated_at?: string;
}
export type TestRunUpdate = Pick<TestRun, 'status' | 'id' | 'score' | 'pass' | 'data'>;
