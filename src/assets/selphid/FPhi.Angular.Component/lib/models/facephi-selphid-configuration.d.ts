/**
 * Modelo con la información de configuración del widget Selphi.
 */
export declare class FPhiSelphIdConfiguration {
    /**
     * Referencia al elemento del DOM que actúa como contenedor del widget web.
     */
    widgetContainer: any;
    /**
     * Idioma en que se mostrará la información del widget.
     */
    language: string;
    /**
     * Lista de densidades de píxeles en pantalla soportadas por el widget, de cara a mostrar las imágenes de recurso adecuadas a la pantalla actual.
     */
    dpiList: Array<number>;
    /**
     * Modo de captura de documento. Controla el flujo de ejecución del widget.
     */
    captureMode: number;
    /**
     * En caso de estar habilitado, el widget mostrará el documento capturado y solicitará confirmación al usuario.
     */
    previewCapture: boolean;
    /**
     * Dimensiones físicas (en mm) del documento a capturar.
     */
    documentDimensions: FPhiSelphIdDocumentDimensions;
    /**
     * Umbral de tolerancia para dar por válida una captura de documento.
     */
    qualityThreshold: number;
    /**
     * Factor de escalado sobre el área de recorte de la imagen del documento. La imagen devuelta se escala de acuerdo con este valor.
     * Solamente se permiten valores mayores o iguales a 1.0.
     */
    cropFactor: number;
    /**
     * En caso de estar habilitado, el widget se mostrará siempre en disposición horizontal, rotándose 90 grados en disposiciones verticales.
     */
    forceLandscape: boolean;
    /**
     * Activa el modo de visualización del drawer en pantallas de alta densidad.
     */
    canvasHD: boolean;
    /**
     * Muestra un mensaje de advertencia de uso inicial tras la carga del widget.
     */
    initialTip: boolean;
    /**
     * Resolución horizontal preferida de la cámara (el widget intentará seleccionar la resolución más cercana).
     */
    cameraWidth: number;
    /**
     * Resolución vertical preferida de la cámara (el widget intentará seleccionar la resolución más cercana).
     */
    cameraHeight: number;
    /**
     * Identificador de la cámara a utilizar para la realización de la captura (si no se especifica, el widget seleccionará la cámara trasera expuesta por defecto por el dispositivo).
     */
    cameraId: string;
    /**
     * Tiempo disponible para la captura de una imagen de documento antes de emitirse un timeout (por defecto 10s).
     * Valores <= 0.0 anulan la limitación de tiempo de captura.
     */
    captureTimeout: number;
    /**
     * Número máximo de reintentos para obtener una captura válida de imagen de documento.
     * Valores <= 0 establecen un número infinito de reintentos.
     */
    captureRetries: number;
    /**
     * Sensibilidad de captura durante la detección de bordes del widget.
     */
    captureSensibility: number;
    /**
     * Formato de las imágenes capturadas por el widget (MIME type).
     */
    imageFormat: string;
    /**
     * Factor de calidad de las imágenes devueltas (rango 0.0 a 1.0). Únicamente aplicable cuando el formato de imagen se ha especificado como "image/jpeg".
     */
    imageQuality: number;
    /**
     * Activa el modo de depuración del widget, en el que se mostrarán mensajes informativos en la consola del navegador.
     */
    debugMode: boolean;
    /**
     * Evento lanzado por el widget cuando se ha finalizado el proceso de carga e inicialización, tando del widget, como de los recursos asociados al mismo.
     */
    onModuleLoaded: any;
    /**
     * Evento lanzado cuando el proceso de extracción ha finalizado correctamente. Devuelve el resultado de la captura.
     */
    onExtractionFinished: any;
    /**
     * Evento lanzado cuando el usuario cancela el proceso de extracción.
     */
    onUserCancelled: any;
    /**
     * Evento lanzado en caso de que se produzca un error interno del widget.
     */
    onExceptionCaptured: any;
    /**
     * Evento lanzado si el proceso de captura excede el tiempo máximo disponible.
     */
    onExtractionTimeout: any;
    /**
     * Evento lanzado tras cualquier acción realizada por el usuario sobre la interfaz gráfica del widget o ante cualquier cambio de estado
     * durante el proceso de captura.
     */
    onTrackStatus: any;
    /**
     * Genera una instancia de "FPhi.SelphID.ConfigurationManager" con los datos de configuración de la instancia actual para inicializar el widget.
     */
    getNativeConfiguration(): any;
    private setNativeConfiguration;
}
/**
 * Datos de dimensiones del documento capturado por el widget.
 */
export declare class FPhiSelphIdDocumentDimensions {
    x: number;
    y: number;
    width: number;
    height: number;
}
