export declare class FPhiSelphiConstants {
    /**
     * Modos de rotación de la cámara para la realización de la captura.
     */
    static readonly CameraRotation: {
        None: number;
        Deg90: number;
        Deg180: number;
        Deg270: number;
    };
    /**
     * Modos de extracción o flujos de ejecución disponibles en el widget.
     */
    static readonly ExtractionMode: {
        /**
         * Registro de usuarios.
         */
        Register: number;
        /**
         * Autenticación de usuarios.
         */
        Authenticate: number;
    };
    /**
     * Modos de verificación de prueba de vida disponibles.
     */
    static readonly LivenessMode: {
        /**
         * Verificación de prueba de vida desactivada.
         */
        None: number;
        /**
         * Prueba de vida mediante parpadeo.
         */
        Blink: number;
        /**
         * Prueba de vida mediante movimiento.
         */
        Move: number;
        /**
         * Prueba de vida pasivo.
         */
        Passive: number;
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
    static readonly SampleDiagnostic: {
        Ok: number;
        FaceNotFound: number;
        RightEyeNotFound: number;
        LeftEyeNotFound: number;
        EyesNotFound: number;
        FaceTooFar: number;
        FaceTooClose: number;
        TooCloseToWindowSide: number;
        AngleExceeded: number;
        QualityCheckFailed: number;
        NotRated: number;
    };
    static readonly FinalDiagnostic: {
        InsufficientValidSamples: number;
        TemplateCreationInProgress: number;
        TemplateCreated: number;
    };
    static readonly LivenessDiagnostic: {
        NotRated: number;
        PhotoDetected: number;
        LivenessDetected: number;
        Unsuccess: number;
        UnsuccessLowPerformance: number;
        UnsuccessGlasses: number;
        UnsuccessLight: number;
        UnsuccessNoMovement: number;
        UnsuccessWrongDirection: number;
        UnsuccessTooFar: number;
    };
    /**
     * Formato de salida de la información de template generada por el widget.
     */
    static readonly TemplateFormat: {
        ByteArray: number;
        Base64: number;
    };
    /**
     * Formato de salida de la grabación del video de sesión del usuario. Tipo de proceso utilizado para la generación del video.
     */
    static readonly RecorderType: {
        Gif: number;
        Remote: number;
    };
    /**
     * Tipo de cámara a utilizar para la captura del selfie.
     */
    static readonly CameraType: {
        Front: number;
        Back: number;
    };
    /**
     * Tipo de acción que se produce en la interacción del usuario con el widget.
     */
    static readonly TrackStatus: {
        ChangeState: number;
        Tap: number;
    };
}
