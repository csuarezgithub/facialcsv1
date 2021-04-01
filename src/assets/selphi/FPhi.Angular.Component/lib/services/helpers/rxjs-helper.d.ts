export declare class RxjsHelper {
    /**
     * Encapsula una rutina de chequeo de una condición hasta que ésta se cumpla.
     * @param pollTime Intervalo de chequeo (en ms).
     * @param evalFunc Función para evaluar la condición deseada.
     * @param successFunc Función a invocar cuando la condición se cumpla.
     * @param delayTime Tiempo de retardo para iniciar el proceso de chequeo. Por defecto 0ms.
     */
    static poll(pollTime: number, evalFunc: any, successFunc: any, delayTime?: number): void;
}
