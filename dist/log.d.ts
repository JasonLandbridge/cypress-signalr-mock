export default class Log {
    private static _prefix;
    static debug(message: string): void;
    static info(message: string, value?: any): void;
    static warn(message: string): void;
    static error(message: string, throwError?: boolean): void;
}
