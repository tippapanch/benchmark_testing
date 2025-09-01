declare class Datadog {
    init(): Promise<void>;
    setContextProperty(key: string, value: any): void;
}
declare const datadog: Datadog;
export default datadog;
