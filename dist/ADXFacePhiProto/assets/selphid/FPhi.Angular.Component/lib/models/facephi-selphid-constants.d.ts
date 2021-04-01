export declare class FPhiSelphIdConstants {
    /**
     * Modo de funcionamiento del widget a la hora de realizar la captura del documento.
     */
    static readonly CaptureMode: {
        /**
         * Captura únicamente el frente del documento.
         */
        Front: number;
        /**
         * Captura únicamente el dorso del documento.
         */
        Back: number;
        /**
         * Realiza una captura de ambas partes del documento.
         */
        Full: number;
    };
    /**
     * Tipo de excepción producida durante la ejecución del widget.
     */
    static readonly ExceptionType: {
        CameraError: number;
        ExtractorError: number;
        ControlNotInitializedError: number;
        ImageCropResizeError: number;
        UnexpectedCaptureError: number;
    };
    /**
     * Niveles de sensibilidad de captura en las capacidades de detección de bordes del widget.
     */
    static readonly CaptureSensibility: {
        Low: number;
        Normal: number;
        High: number;
        Auto: number;
    };
    /**
     * Tipo de acción que se produce en la interacción del usuario con el widget.
     */
    static readonly TrackStatus: {
        ChangeState: number;
        Tap: number;
    };
}
