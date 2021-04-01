/**
 * Modelo con la información de configuración del widget Selphi.
 */
export declare class FPhiSelphiConfiguration {
    /**
     * Referencia al elemento del DOM que actúa como contenedor del widget web.
     */
    widgetContainer: any;
    /**
     * Ruta donde está ubicado el fichero widget.xml y el resto de recursos personalizables del widget.
     */
    resourcesPath: any;
    /**
     * Ruta donde está ubicado el fichero graph.xml.
     */
    graphPath: any;
    /**
     * Idioma en que se mostrará la información del widget.
     */
    language: string;
    /**
     * Lista de densidades de píxeles en pantalla soportadas por el widget, de cara a mostrar las imágenes de recurso adecuadas a la pantalla actual.
     */
    dpiList: Array<number>;
    /**
     * Resolución horizontal preferida de la cámara (el widget intentará seleccionar la resolución más cercana).
     */
    cameraWidth: number;
    /**
     * Resolución vertical preferida de la cámara (el widget intentará seleccionar la resolución más cercana).
     */
    cameraHeight: number;
    /**
     * Rotación de la cámara.
     */
    cameraRotation: any;
    /**
     * Selector de tipo de cámara a utilizar para realizar la captura (frontal o trasera).
     */
    cameraType: any;
    /**
     * Indica si el tutorial está disponible en el widget.
     */
    tutorial: boolean;
    /**
     * Modo de extracción o flujo de ejecución utilizado por el widget.
     */
    extractionMode: any;
    /**
     * Modos de verificación de prueba de vida utilizado por el widget.
     */
    livenessMode: any;
    /**
     *
     */
    livenessPrecision: number;
    /**
     *
     */
    livenessMoveInitialError: number;
    /**
     *
     */
    livenessMoveInfoTime: number;
    /**
     * Indica si el widget permite la interacción con el usuario.
     */
    interactible: boolean;
    /**
     * Tiempo de registro en segundos.
     */
    registerTime: number;
    /**
     * Tiempo de autenticación en segundos.
     */
    authenticateTime: number;
    /**
     * Formato de las imágenes capturadas por el widget (MIME type).
     */
    imageFormat: string;
    /**
     * Factor de calidad de las imágenes devueltas (rango 0.0 a 1.0). Únicamente aplicable cuando el formato de imagen se ha especificado como "image/jpeg".
     */
    imageQuality: number;
    /**
     *
     */
    logImages: boolean;
    /**
     * Factor de recorte de las imágenes devueltas por el widget.
     */
    cropFactor: number;
    /**
     * Indica si el widget debe recortar las imágenes capturadas, o no.
     */
    cropImage: boolean;
    /**
     * Formato de salida de la información de template generada por el widget.
     */
    templateFormat: number;
    /**
     * Activa la fase de estabilización previa a la captura. Por defecto, la estabilización estará desactivada.
     * En caso de haber seleccionado LivenessMode==Move, este parámetro no se tendrá en cuenta y siempre se realizará fase de estabilizado.
     */
    stabilizationStage: boolean;
    /**
     * Indica si el widget debe grabar la sesión del usuario en video.
     */
    videoRecord: boolean;
    /**
     * Frecuencia de grabación (en frames por segundo).
     */
    videoRecordRate: number;
    /**
     * Factor de escalado aplicado sobre las capturas realizadas para la generación del video.
     * Toma valores porcentuales de 0.0 a 1.0 (que equivaldría a una escala del 100% de resolución de cámara seleccionada).
     */
    videoRecordScale: number;
    /**
     * Tipo de salida del video generado. Los posibles valores se tomarán del enumerado "FPhi.Selphi.RecordType".
     */
    videoRecordType: any;
    /**
     * Activa el modo de depuración del widget, en el que se mostrarán mensajes informativos en la consola del navegador.
     */
    debugMode: boolean;
    /**
     * Evento lanzado por el widget cuando se ha finalizado el proceso de carga e inicialización, tando del widget, como de los recursos asociados al mismo.
     */
    onModuleLoaded: any;
    /**
     * Evento lanzado durante los ciclos de estabilización de la imagen para la correcta realización de la captura.
     * @callback evt {{ detail: FPhiSelphiConstants.SampleDiagnostic }}
     */
    onStabilizing: any;
    /**
     * Evento lanzado cuando el proceso de extracción ha finalizado correctamente. Devuelve el resultado de la captura.
     * @callback evt {{ template, images, timeStamp, templateRaw, livenessMoveFails, sunGlassesScore, livenessMoveHistory, livenessMoveStabilizedHistory, livenessMoveStabilizedStatus }}
     */
    onExtractionFinish: any;
    /**
     * Evento lanzado cuando el usuario cancela el proceso de extracción.
     */
    onUserCancel: any;
    /**
     * Evento lanzado en caso de que se produzca un error interno del widget.
     * @callback evt {{ detail: { message: string, exceptionType: FPhiSelphiConstants.ExceptionType } }}
     */
    onExceptionCaptured: any;
    /**
     * Evento lanzado cuando el proceso de verificación de autenticidad por prueba de vida falla.
     * @callback evt {{ detail: { template, images, timeStamp, templateRaw, livenessMoveFails, sunGlassesScore, livenessMoveHistory, livenessMoveStabilizedHistory, livenessMoveStabilizedStatus } }}
     */
    onLivenessError: any;
    /**
     * Evento lanzado cuando el proceso de verificación de autenticidad por prueba de vida falla y el usuario pulsa el botón de la pantalla de error mostrada.
     */
    onLivenessErrorButtonClick: any;
    /**
     * Evento lanzado si el proceso de captura excede el tiempo máximo disponible.
     * @callback evt {{ detail: { template, images, timeStamp, templateRaw, livenessMoveFails, sunGlassesScore, livenessMoveHistory, livenessMoveStabilizedHistory, livenessMoveStabilizedStatus } }}
     */
    onExtractionTimeout: any;
    /**
     * Evento lanzado cuando el proceso de captura excede el tiempo máximo disponible y el usuario pulsa el botón de la pantalla de error mostrada.
     */
    onTimeoutErrorButtonClick: any;
    /**
     * Evento lanzado tras cualquier acción realizada por el usuario sobre la interfaz gráfica del widget o ante cualquier cambio de estado
     * durante el proceso de captura.
     */
    onTrackStatus: any;
    /**
     * Genera una instancia de "FPhi.Selphi.ConfigurationManager" con los datos de configuración de la instancia actual para inicializar el widget.
     */
    getNativeConfiguration(): any;
    private setNativeConfiguration;
    private tryParseInt;
    private tryParseFloat;
}
