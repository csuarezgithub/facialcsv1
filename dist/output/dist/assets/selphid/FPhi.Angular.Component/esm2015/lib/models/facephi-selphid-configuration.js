/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Modelo con la información de configuración del widget Selphi.
 */
export class FPhiSelphIdConfiguration {
    constructor() {
        // #region "Propiedades"
        /**
         * Activa el modo de depuración del widget, en el que se mostrarán mensajes informativos en la consola del navegador.
         */
        this.debugMode = false;
        // #endregion
    }
    // #endregion
    // #region "Métodos públicos"
    /**
     * Genera una instancia de "FPhi.SelphID.ConfigurationManager" con los datos de configuración de la instancia actual para inicializar el widget.
     * @return {?}
     */
    getNativeConfiguration() {
        /** @type {?} */
        const configurationManager = new window["FPhi"].SelphID.ConfigurationManager();
        // Propiedades de configuración
        this.setNativeConfiguration(this.widgetContainer, configurationManager.setContainer, configurationManager);
        this.setNativeConfiguration(this.language, configurationManager.setLanguage, configurationManager);
        this.setNativeConfiguration(this.dpiList, configurationManager.setDpiList, configurationManager);
        this.setNativeConfiguration(this.captureMode, configurationManager.setMode, configurationManager);
        this.setNativeConfiguration(this.previewCapture, configurationManager.setPreview, configurationManager);
        this.setNativeConfiguration(this.documentDimensions, configurationManager.setDocumentDimensions, configurationManager);
        this.setNativeConfiguration(this.qualityThreshold, configurationManager.setQualityThreshold, configurationManager);
        this.setNativeConfiguration(this.cropFactor, configurationManager.setCropFactor, configurationManager);
        this.setNativeConfiguration(this.forceLandscape, configurationManager.setForceLandscape, configurationManager);
        this.setNativeConfiguration(this.canvasHD, configurationManager.setCanvasHD, configurationManager);
        this.setNativeConfiguration(this.initialTip, configurationManager.setInitialTip, configurationManager);
        this.setNativeConfiguration(this.cameraWidth, configurationManager.setCameraWidth, configurationManager);
        this.setNativeConfiguration(this.cameraHeight, configurationManager.setCameraHeight, configurationManager);
        this.setNativeConfiguration(this.cameraId, configurationManager.setCameraId, configurationManager);
        this.setNativeConfiguration(this.captureTimeout, configurationManager.setCaptureTimeout, configurationManager);
        this.setNativeConfiguration(this.captureRetries, configurationManager.setCaptureRetries, configurationManager);
        this.setNativeConfiguration(this.captureSensibility, configurationManager.setCaptureSensibility, configurationManager);
        this.setNativeConfiguration(this.imageFormat, configurationManager.setImageFormat, configurationManager);
        this.setNativeConfiguration(this.imageQuality, configurationManager.setImageQuality, configurationManager);
        // Eventos
        this.setNativeConfiguration(this.onModuleLoaded, configurationManager.setOnModuleLoaded, configurationManager);
        this.setNativeConfiguration(this.onExtractionFinished, configurationManager.setOnExtractionFinish, configurationManager);
        this.setNativeConfiguration(this.onUserCancelled, configurationManager.setOnUserCancel, configurationManager);
        this.setNativeConfiguration(this.onExceptionCaptured, configurationManager.setOnExceptionCaptured, configurationManager);
        this.setNativeConfiguration(this.onExtractionTimeout, configurationManager.setOnExtractionTimeout, configurationManager);
        this.setNativeConfiguration(this.onTrackStatus, configurationManager.setOnTrackStatus, configurationManager);
        return configurationManager;
    }
    // #endregion
    // #region "Métodos privados"
    /**
     * @private
     * @param {?} property
     * @param {?} configurationSetterFunc
     * @param {?=} context
     * @return {?}
     */
    setNativeConfiguration(property, configurationSetterFunc, context = null) {
        if (property === null || property === undefined)
            return;
        /** @type {?} */
        const setterFunc = context ? configurationSetterFunc.bind(context) : configurationSetterFunc;
        setterFunc(property);
    }
}
if (false) {
    /**
     * Referencia al elemento del DOM que actúa como contenedor del widget web.
     * @type {?}
     */
    FPhiSelphIdConfiguration.prototype.widgetContainer;
    /**
     * Idioma en que se mostrará la información del widget.
     * @type {?}
     */
    FPhiSelphIdConfiguration.prototype.language;
    /**
     * Lista de densidades de píxeles en pantalla soportadas por el widget, de cara a mostrar las imágenes de recurso adecuadas a la pantalla actual.
     * @type {?}
     */
    FPhiSelphIdConfiguration.prototype.dpiList;
    /**
     * Modo de captura de documento. Controla el flujo de ejecución del widget.
     * @type {?}
     */
    FPhiSelphIdConfiguration.prototype.captureMode;
    /**
     * En caso de estar habilitado, el widget mostrará el documento capturado y solicitará confirmación al usuario.
     * @type {?}
     */
    FPhiSelphIdConfiguration.prototype.previewCapture;
    /**
     * Dimensiones físicas (en mm) del documento a capturar.
     * @type {?}
     */
    FPhiSelphIdConfiguration.prototype.documentDimensions;
    /**
     * Umbral de tolerancia para dar por válida una captura de documento.
     * @type {?}
     */
    FPhiSelphIdConfiguration.prototype.qualityThreshold;
    /**
     * Factor de escalado sobre el área de recorte de la imagen del documento. La imagen devuelta se escala de acuerdo con este valor.
     * Solamente se permiten valores mayores o iguales a 1.0.
     * @type {?}
     */
    FPhiSelphIdConfiguration.prototype.cropFactor;
    /**
     * En caso de estar habilitado, el widget se mostrará siempre en disposición horizontal, rotándose 90 grados en disposiciones verticales.
     * @type {?}
     */
    FPhiSelphIdConfiguration.prototype.forceLandscape;
    /**
     * Activa el modo de visualización del drawer en pantallas de alta densidad.
     * @type {?}
     */
    FPhiSelphIdConfiguration.prototype.canvasHD;
    /**
     * Muestra un mensaje de advertencia de uso inicial tras la carga del widget.
     * @type {?}
     */
    FPhiSelphIdConfiguration.prototype.initialTip;
    /**
     * Resolución horizontal preferida de la cámara (el widget intentará seleccionar la resolución más cercana).
     * @type {?}
     */
    FPhiSelphIdConfiguration.prototype.cameraWidth;
    /**
     * Resolución vertical preferida de la cámara (el widget intentará seleccionar la resolución más cercana).
     * @type {?}
     */
    FPhiSelphIdConfiguration.prototype.cameraHeight;
    /**
     * Identificador de la cámara a utilizar para la realización de la captura (si no se especifica, el widget seleccionará la cámara trasera expuesta por defecto por el dispositivo).
     * @type {?}
     */
    FPhiSelphIdConfiguration.prototype.cameraId;
    /**
     * Tiempo disponible para la captura de una imagen de documento antes de emitirse un timeout (por defecto 10s).
     * Valores <= 0.0 anulan la limitación de tiempo de captura.
     * @type {?}
     */
    FPhiSelphIdConfiguration.prototype.captureTimeout;
    /**
     * Número máximo de reintentos para obtener una captura válida de imagen de documento.
     * Valores <= 0 establecen un número infinito de reintentos.
     * @type {?}
     */
    FPhiSelphIdConfiguration.prototype.captureRetries;
    /**
     * Sensibilidad de captura durante la detección de bordes del widget.
     * @type {?}
     */
    FPhiSelphIdConfiguration.prototype.captureSensibility;
    /**
     * Formato de las imágenes capturadas por el widget (MIME type).
     * @type {?}
     */
    FPhiSelphIdConfiguration.prototype.imageFormat;
    /**
     * Factor de calidad de las imágenes devueltas (rango 0.0 a 1.0). Únicamente aplicable cuando el formato de imagen se ha especificado como "image/jpeg".
     * @type {?}
     */
    FPhiSelphIdConfiguration.prototype.imageQuality;
    /**
     * Activa el modo de depuración del widget, en el que se mostrarán mensajes informativos en la consola del navegador.
     * @type {?}
     */
    FPhiSelphIdConfiguration.prototype.debugMode;
    /**
     * Evento lanzado por el widget cuando se ha finalizado el proceso de carga e inicialización, tando del widget, como de los recursos asociados al mismo.
     * @type {?}
     */
    FPhiSelphIdConfiguration.prototype.onModuleLoaded;
    /**
     * Evento lanzado cuando el proceso de extracción ha finalizado correctamente. Devuelve el resultado de la captura.
     * @type {?}
     */
    FPhiSelphIdConfiguration.prototype.onExtractionFinished;
    /**
     * Evento lanzado cuando el usuario cancela el proceso de extracción.
     * @type {?}
     */
    FPhiSelphIdConfiguration.prototype.onUserCancelled;
    /**
     * Evento lanzado en caso de que se produzca un error interno del widget.
     * @type {?}
     */
    FPhiSelphIdConfiguration.prototype.onExceptionCaptured;
    /**
     * Evento lanzado si el proceso de captura excede el tiempo máximo disponible.
     * @type {?}
     */
    FPhiSelphIdConfiguration.prototype.onExtractionTimeout;
    /**
     * Evento lanzado tras cualquier acción realizada por el usuario sobre la interfaz gráfica del widget o ante cualquier cambio de estado
     * durante el proceso de captura.
     * @type {?}
     */
    FPhiSelphIdConfiguration.prototype.onTrackStatus;
}
/**
 * Datos de dimensiones del documento capturado por el widget.
 */
export class FPhiSelphIdDocumentDimensions {
}
if (false) {
    /** @type {?} */
    FPhiSelphIdDocumentDimensions.prototype.x;
    /** @type {?} */
    FPhiSelphIdDocumentDimensions.prototype.y;
    /** @type {?} */
    FPhiSelphIdDocumentDimensions.prototype.width;
    /** @type {?} */
    FPhiSelphIdDocumentDimensions.prototype.height;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXBoaS1zZWxwaGlkLWNvbmZpZ3VyYXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mYWNlcGhpLXNlbHBoaWQvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL2ZhY2VwaGktc2VscGhpZC1jb25maWd1cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQSxNQUFNLE9BQU8sd0JBQXdCO0lBQXJDO1FBRUksd0JBQXdCOzs7O1FBdUdqQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBZ0dsQyxhQUFhO0lBQ2pCLENBQUM7Ozs7Ozs7SUFyRFUsc0JBQXNCOztjQUNuQixvQkFBb0IsR0FBRyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsb0JBQW9CLEVBQUU7UUFFOUUsK0JBQStCO1FBQy9CLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLG9CQUFvQixDQUFDLFlBQVksRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQzNHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLG9CQUFvQixDQUFDLFdBQVcsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQ25HLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLG9CQUFvQixDQUFDLFVBQVUsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBRWpHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2xHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLG9CQUFvQixDQUFDLFVBQVUsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3hHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsb0JBQW9CLENBQUMscUJBQXFCLEVBQUUsb0JBQW9CLENBQUMsQ0FB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QVEsS0FBSyxJQUFJLElBQUksUUFBUSxLQUFLLFNBQVM7WUFDM0MsT0FBTzs7Y0FFTCxVQUFVLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLHVCQUF1QjtRQUM1RixVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDekIsQ0FBQztDQUdKOzs7Ozs7SUFuTUcsbURBQTRCOzs7OztJQUs1Qiw0Q0FBd0I7Ozs7O0lBS3hCLDJDQUE4Qjs7Ozs7SUFLOUIsK0NBQTJCOzs7OztJQUszQixrREFBK0I7Ozs7O0lBSy9CLHNEQUF5RDs7Ozs7SUFLekQsb0RBQWdDOzs7Ozs7SUFNaEMsOENBQTBCOzs7OztJQUsxQixrREFBK0I7Ozs7O0lBSy9CLDRDQUF5Qjs7Ozs7SUFLekIsOENBQTJCOzs7OztJQUszQiwrQ0FBMkI7Ozs7O0lBSzNCLGdEQUE0Qjs7Ozs7SUFLNUIsNENBQXdCOzs7Ozs7SUFNeEIsa0RBQThCOzs7Ozs7SUFNOUIsa0RBQThCOzs7OztJQUs5QixzREFBa0M7Ozs7O0lBS2xDLCtDQUEyQjs7Ozs7SUFLM0IsZ0RBQTRCOzs7OztJQUs1Qiw2Q0FBa0M7Ozs7O0lBU2xDLGtEQUEyQjs7Ozs7SUFLM0Isd0RBQWlDOzs7OztJQUtqQyxtREFBNEI7Ozs7O0lBSzVCLHVEQUFnQzs7Ozs7SUFLaEMsdURBQWdDOzs7Ozs7SUFNaEMsaURBQTBCOzs7OztBQW1FOUIsTUFBTSxPQUFPLDZCQUE2QjtDQUt6Qzs7O0lBSkcsMENBQWlCOztJQUNqQiwwQ0FBaUI7O0lBQ2pCLDhDQUFxQjs7SUFDckIsK0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRlBoaVNlbHBoSWRDb25zdGFudHMgfSBmcm9tIFwiLi9mYWNlcGhpLXNlbHBoaWQtY29uc3RhbnRzXCI7XG5cbi8qKlxuICogTW9kZWxvIGNvbiBsYSBpbmZvcm1hY2nDs24gZGUgY29uZmlndXJhY2nDs24gZGVsIHdpZGdldCBTZWxwaGkuXG4gKi9cbmV4cG9ydCBjbGFzcyBGUGhpU2VscGhJZENvbmZpZ3VyYXRpb24ge1xuXG4gICAgLy8gI3JlZ2lvbiBcIlByb3BpZWRhZGVzXCJcblxuICAgIC8qKlxuICAgICAqIFJlZmVyZW5jaWEgYWwgZWxlbWVudG8gZGVsIERPTSBxdWUgYWN0w7phIGNvbW8gY29udGVuZWRvciBkZWwgd2lkZ2V0IHdlYi5cbiAgICAgKi9cbiAgICBwdWJsaWMgd2lkZ2V0Q29udGFpbmVyOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBJZGlvbWEgZW4gcXVlIHNlIG1vc3RyYXLDoSBsYSBpbmZvcm1hY2nDs24gZGVsIHdpZGdldC5cbiAgICAgKi9cbiAgICBwdWJsaWMgbGFuZ3VhZ2U6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIExpc3RhIGRlIGRlbnNpZGFkZXMgZGUgcMOteGVsZXMgZW4gcGFudGFsbGEgc29wb3J0YWRhcyBwb3IgZWwgd2lkZ2V0LCBkZSBjYXJhIGEgbW9zdHJhciBsYXMgaW3DoWdlbmVzIGRlIHJlY3Vyc28gYWRlY3VhZGFzIGEgbGEgcGFudGFsbGEgYWN0dWFsLlxuICAgICAqL1xuICAgIHB1YmxpYyBkcGlMaXN0OiBBcnJheTxudW1iZXI+O1xuXG4gICAgLyoqXG4gICAgICogTW9kbyBkZSBjYXB0dXJhIGRlIGRvY3VtZW50by4gQ29udHJvbGEgZWwgZmx1am8gZGUgZWplY3VjacOzbiBkZWwgd2lkZ2V0LlxuICAgICAqL1xuICAgIHB1YmxpYyBjYXB0dXJlTW9kZTogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogRW4gY2FzbyBkZSBlc3RhciBoYWJpbGl0YWRvLCBlbCB3aWRnZXQgbW9zdHJhcsOhIGVsIGRvY3VtZW50byBjYXB0dXJhZG8geSBzb2xpY2l0YXLDoSBjb25maXJtYWNpw7NuIGFsIHVzdWFyaW8uXG4gICAgICovXG4gICAgcHVibGljIHByZXZpZXdDYXB0dXJlOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogRGltZW5zaW9uZXMgZsOtc2ljYXMgKGVuIG1tKSBkZWwgZG9jdW1lbnRvIGEgY2FwdHVyYXIuXG4gICAgICovXG4gICAgcHVibGljIGRvY3VtZW50RGltZW5zaW9uczogRlBoaVNlbHBoSWREb2N1bWVudERpbWVuc2lvbnM7XG5cbiAgICAvKipcbiAgICAgKiBVbWJyYWwgZGUgdG9sZXJhbmNpYSBwYXJhIGRhciBwb3IgdsOhbGlkYSB1bmEgY2FwdHVyYSBkZSBkb2N1bWVudG8uXG4gICAgICovXG4gICAgcHVibGljIHF1YWxpdHlUaHJlc2hvbGQ6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEZhY3RvciBkZSBlc2NhbGFkbyBzb2JyZSBlbCDDoXJlYSBkZSByZWNvcnRlIGRlIGxhIGltYWdlbiBkZWwgZG9jdW1lbnRvLiBMYSBpbWFnZW4gZGV2dWVsdGEgc2UgZXNjYWxhIGRlIGFjdWVyZG8gY29uIGVzdGUgdmFsb3IuXG4gICAgICogU29sYW1lbnRlIHNlIHBlcm1pdGVuIHZhbG9yZXMgbWF5b3JlcyBvIGlndWFsZXMgYSAxLjAuXG4gICAgICovXG4gICAgcHVibGljIGNyb3BGYWN0b3I6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEVuIGNhc28gZGUgZXN0YXIgaGFiaWxpdGFkbywgZWwgd2lkZ2V0IHNlIG1vc3RyYXLDoSBzaWVtcHJlIGVuIGRpc3Bvc2ljacOzbiBob3Jpem9udGFsLCByb3TDoW5kb3NlIDkwIGdyYWRvcyBlbiBkaXNwb3NpY2lvbmVzIHZlcnRpY2FsZXMuXG4gICAgICovXG4gICAgcHVibGljIGZvcmNlTGFuZHNjYXBlOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQWN0aXZhIGVsIG1vZG8gZGUgdmlzdWFsaXphY2nDs24gZGVsIGRyYXdlciBlbiBwYW50YWxsYXMgZGUgYWx0YSBkZW5zaWRhZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgY2FudmFzSEQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBNdWVzdHJhIHVuIG1lbnNhamUgZGUgYWR2ZXJ0ZW5jaWEgZGUgdXNvIGluaWNpYWwgdHJhcyBsYSBjYXJnYSBkZWwgd2lkZ2V0LlxuICAgICAqL1xuICAgIHB1YmxpYyBpbml0aWFsVGlwOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogUmVzb2x1Y2nDs24gaG9yaXpvbnRhbCBwcmVmZXJpZGEgZGUgbGEgY8OhbWFyYSAoZWwgd2lkZ2V0IGludGVudGFyw6Egc2VsZWNjaW9uYXIgbGEgcmVzb2x1Y2nDs24gbcOhcyBjZXJjYW5hKS5cbiAgICAgKi9cbiAgICBwdWJsaWMgY2FtZXJhV2lkdGg6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIFJlc29sdWNpw7NuIHZlcnRpY2FsIHByZWZlcmlkYSBkZSBsYSBjw6FtYXJhIChlbCB3aWRnZXQgaW50ZW50YXLDoSBzZWxlY2Npb25hciBsYSByZXNvbHVjacOzbiBtw6FzIGNlcmNhbmEpLlxuICAgICAqL1xuICAgIHB1YmxpYyBjYW1lcmFIZWlnaHQ6IG51bWJlcjtcbiAgICBcbiAgICAvKipcbiAgICAgKiBJZGVudGlmaWNhZG9yIGRlIGxhIGPDoW1hcmEgYSB1dGlsaXphciBwYXJhIGxhIHJlYWxpemFjacOzbiBkZSBsYSBjYXB0dXJhIChzaSBubyBzZSBlc3BlY2lmaWNhLCBlbCB3aWRnZXQgc2VsZWNjaW9uYXLDoSBsYSBjw6FtYXJhIHRyYXNlcmEgZXhwdWVzdGEgcG9yIGRlZmVjdG8gcG9yIGVsIGRpc3Bvc2l0aXZvKS5cbiAgICAgKi9cbiAgICBwdWJsaWMgY2FtZXJhSWQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFRpZW1wbyBkaXNwb25pYmxlIHBhcmEgbGEgY2FwdHVyYSBkZSB1bmEgaW1hZ2VuIGRlIGRvY3VtZW50byBhbnRlcyBkZSBlbWl0aXJzZSB1biB0aW1lb3V0IChwb3IgZGVmZWN0byAxMHMpLiBcbiAgICAgKiBWYWxvcmVzIDw9IDAuMCBhbnVsYW4gbGEgbGltaXRhY2nDs24gZGUgdGllbXBvIGRlIGNhcHR1cmEuXG4gICAgICovXG4gICAgcHVibGljIGNhcHR1cmVUaW1lb3V0OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBOw7ptZXJvIG3DoXhpbW8gZGUgcmVpbnRlbnRvcyBwYXJhIG9idGVuZXIgdW5hIGNhcHR1cmEgdsOhbGlkYSBkZSBpbWFnZW4gZGUgZG9jdW1lbnRvLlxuICAgICAqIFZhbG9yZXMgPD0gMCBlc3RhYmxlY2VuIHVuIG7Dum1lcm8gaW5maW5pdG8gZGUgcmVpbnRlbnRvcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgY2FwdHVyZVJldHJpZXM6IG51bWJlcjtcbiAgICBcbiAgICAvKipcbiAgICAgKiBTZW5zaWJpbGlkYWQgZGUgY2FwdHVyYSBkdXJhbnRlIGxhIGRldGVjY2nDs24gZGUgYm9yZGVzIGRlbCB3aWRnZXQuXG4gICAgICovXG4gICAgcHVibGljIGNhcHR1cmVTZW5zaWJpbGl0eTogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogRm9ybWF0byBkZSBsYXMgaW3DoWdlbmVzIGNhcHR1cmFkYXMgcG9yIGVsIHdpZGdldCAoTUlNRSB0eXBlKS5cbiAgICAgKi9cbiAgICBwdWJsaWMgaW1hZ2VGb3JtYXQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEZhY3RvciBkZSBjYWxpZGFkIGRlIGxhcyBpbcOhZ2VuZXMgZGV2dWVsdGFzIChyYW5nbyAwLjAgYSAxLjApLiDDmm5pY2FtZW50ZSBhcGxpY2FibGUgY3VhbmRvIGVsIGZvcm1hdG8gZGUgaW1hZ2VuIHNlIGhhIGVzcGVjaWZpY2FkbyBjb21vIFwiaW1hZ2UvanBlZ1wiLlxuICAgICAqL1xuICAgIHB1YmxpYyBpbWFnZVF1YWxpdHk6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEFjdGl2YSBlbCBtb2RvIGRlIGRlcHVyYWNpw7NuIGRlbCB3aWRnZXQsIGVuIGVsIHF1ZSBzZSBtb3N0cmFyw6FuIG1lbnNhamVzIGluZm9ybWF0aXZvcyBlbiBsYSBjb25zb2xhIGRlbCBuYXZlZ2Fkb3IuXG4gICAgICovXG4gICAgcHVibGljIGRlYnVnTW9kZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgLy8gI2VuZHJlZ2lvblxuXG4gICAgLy8gI3JlZ2lvbiBcIkV2ZW50b3NcIlxuXG4gICAgLyoqXG4gICAgICogRXZlbnRvIGxhbnphZG8gcG9yIGVsIHdpZGdldCBjdWFuZG8gc2UgaGEgZmluYWxpemFkbyBlbCBwcm9jZXNvIGRlIGNhcmdhIGUgaW5pY2lhbGl6YWNpw7NuLCB0YW5kbyBkZWwgd2lkZ2V0LCBjb21vIGRlIGxvcyByZWN1cnNvcyBhc29jaWFkb3MgYWwgbWlzbW8uXG4gICAgICovXG4gICAgcHVibGljIG9uTW9kdWxlTG9hZGVkOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBFdmVudG8gbGFuemFkbyBjdWFuZG8gZWwgcHJvY2VzbyBkZSBleHRyYWNjacOzbiBoYSBmaW5hbGl6YWRvIGNvcnJlY3RhbWVudGUuIERldnVlbHZlIGVsIHJlc3VsdGFkbyBkZSBsYSBjYXB0dXJhLlxuICAgICAqL1xuICAgIHB1YmxpYyBvbkV4dHJhY3Rpb25GaW5pc2hlZDogYW55O1xuXG4gICAgLyoqXG4gICAgICogRXZlbnRvIGxhbnphZG8gY3VhbmRvIGVsIHVzdWFyaW8gY2FuY2VsYSBlbCBwcm9jZXNvIGRlIGV4dHJhY2Npw7NuLlxuICAgICAqL1xuICAgIHB1YmxpYyBvblVzZXJDYW5jZWxsZWQ6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEV2ZW50byBsYW56YWRvIGVuIGNhc28gZGUgcXVlIHNlIHByb2R1emNhIHVuIGVycm9yIGludGVybm8gZGVsIHdpZGdldC5cbiAgICAgKi9cbiAgICBwdWJsaWMgb25FeGNlcHRpb25DYXB0dXJlZDogYW55O1xuXG4gICAgLyoqXG4gICAgICogRXZlbnRvIGxhbnphZG8gc2kgZWwgcHJvY2VzbyBkZSBjYXB0dXJhIGV4Y2VkZSBlbCB0aWVtcG8gbcOheGltbyBkaXNwb25pYmxlLlxuICAgICAqL1xuICAgIHB1YmxpYyBvbkV4dHJhY3Rpb25UaW1lb3V0OiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBFdmVudG8gbGFuemFkbyB0cmFzIGN1YWxxdWllciBhY2Npw7NuIHJlYWxpemFkYSBwb3IgZWwgdXN1YXJpbyBzb2JyZSBsYSBpbnRlcmZheiBncsOhZmljYSBkZWwgd2lkZ2V0IG8gYW50ZSBjdWFscXVpZXIgY2FtYmlvIGRlIGVzdGFkb1xuICAgICAqIGR1cmFudGUgZWwgcHJvY2VzbyBkZSBjYXB0dXJhLlxuICAgICAqL1xuICAgIHB1YmxpYyBvblRyYWNrU3RhdHVzOiBhbnk7XG5cbiAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAvLyAjcmVnaW9uIFwiTcOpdG9kb3MgcMO6YmxpY29zXCJcblxuICAgIC8qKlxuICAgICAqIEdlbmVyYSB1bmEgaW5zdGFuY2lhIGRlIFwiRlBoaS5TZWxwaElELkNvbmZpZ3VyYXRpb25NYW5hZ2VyXCIgY29uIGxvcyBkYXRvcyBkZSBjb25maWd1cmFjacOzbiBkZSBsYSBpbnN0YW5jaWEgYWN0dWFsIHBhcmEgaW5pY2lhbGl6YXIgZWwgd2lkZ2V0LlxuICAgICAqL1xuICAgIHB1YmxpYyBnZXROYXRpdmVDb25maWd1cmF0aW9uKCkge1xuICAgICAgICBjb25zdCBjb25maWd1cmF0aW9uTWFuYWdlciA9IG5ldyB3aW5kb3dbXCJGUGhpXCJdLlNlbHBoSUQuQ29uZmlndXJhdGlvbk1hbmFnZXIoKTtcblxuICAgICAgICAvLyBQcm9waWVkYWRlcyBkZSBjb25maWd1cmFjacOzblxuICAgICAgICB0aGlzLnNldE5hdGl2ZUNvbmZpZ3VyYXRpb24odGhpcy53aWRnZXRDb250YWluZXIsIGNvbmZpZ3VyYXRpb25NYW5hZ2VyLnNldENvbnRhaW5lciwgY29uZmlndXJhdGlvbk1hbmFnZXIpO1xuICAgICAgICB0aGlzLnNldE5hdGl2ZUNvbmZpZ3VyYXRpb24odGhpcy5sYW5ndWFnZSwgY29uZmlndXJhdGlvbk1hbmFnZXIuc2V0TGFuZ3VhZ2UsIGNvbmZpZ3VyYXRpb25NYW5hZ2VyKTtcbiAgICAgICAgdGhpcy5zZXROYXRpdmVDb25maWd1cmF0aW9uKHRoaXMuZHBpTGlzdCwgY29uZmlndXJhdGlvbk1hbmFnZXIuc2V0RHBpTGlzdCwgY29uZmlndXJhdGlvbk1hbmFnZXIpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zZXROYXRpdmVDb25maWd1cmF0aW9uKHRoaXMuY2FwdHVyZU1vZGUsIGNvbmZpZ3VyYXRpb25NYW5hZ2VyLnNldE1vZGUsIGNvbmZpZ3VyYXRpb25NYW5hZ2VyKTtcbiAgICAgICAgdGhpcy5zZXROYXRpdmVDb25maWd1cmF0aW9uKHRoaXMucHJldmlld0NhcHR1cmUsIGNvbmZpZ3VyYXRpb25NYW5hZ2VyLnNldFByZXZpZXcsIGNvbmZpZ3VyYXRpb25NYW5hZ2VyKTtcbiAgICAgICAgdGhpcy5zZXROYXRpdmVDb25maWd1cmF0aW9uKHRoaXMuZG9jdW1lbnREaW1lbnNpb25zLCBjb25maWd1cmF0aW9uTWFuYWdlci5zZXREb2N1bWVudERpbWVuc2lvbnMsIGNvbmZpZ3VyYXRpb25NYW5hZ2VyKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc2V0TmF0aXZlQ29uZmlndXJhdGlvbih0aGlzLnF1YWxpdHlUaHJlc2hvbGQsIGNvbmZpZ3VyYXRpb25NYW5hZ2VyLnNldFF1YWxpdHlUaHJlc2hvbGQsIGNvbmZpZ3VyYXRpb25NYW5hZ2VyKTtcbiAgICAgICAgdGhpcy5zZXROYXRpdmVDb25maWd1cmF0aW9uKHRoaXMuY3JvcEZhY3RvciwgY29uZmlndXJhdGlvbk1hbmFnZXIuc2V0Q3JvcEZhY3RvciwgY29uZmlndXJhdGlvbk1hbmFnZXIpO1xuICAgICAgICB0aGlzLnNldE5hdGl2ZUNvbmZpZ3VyYXRpb24odGhpcy5mb3JjZUxhbmRzY2FwZSwgY29uZmlndXJhdGlvbk1hbmFnZXIuc2V0Rm9yY2VMYW5kc2NhcGUsIGNvbmZpZ3VyYXRpb25NYW5hZ2VyKTtcbiAgICAgICAgdGhpcy5zZXROYXRpdmVDb25maWd1cmF0aW9uKHRoaXMuY2FudmFzSEQsIGNvbmZpZ3VyYXRpb25NYW5hZ2VyLnNldENhbnZhc0hELCBjb25maWd1cmF0aW9uTWFuYWdlcik7XG4gICAgICAgIHRoaXMuc2V0TmF0aXZlQ29uZmlndXJhdGlvbih0aGlzLmluaXRpYWxUaXAsIGNvbmZpZ3VyYXRpb25NYW5hZ2VyLnNldEluaXRpYWxUaXAsIGNvbmZpZ3VyYXRpb25NYW5hZ2VyKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc2V0TmF0aXZlQ29uZmlndXJhdGlvbih0aGlzLmNhbWVyYVdpZHRoLCBjb25maWd1cmF0aW9uTWFuYWdlci5zZXRDYW1lcmFXaWR0aCwgY29uZmlndXJhdGlvbk1hbmFnZXIpO1xuICAgICAgICB0aGlzLnNldE5hdGl2ZUNvbmZpZ3VyYXRpb24odGhpcy5jYW1lcmFIZWlnaHQsIGNvbmZpZ3VyYXRpb25NYW5hZ2VyLnNldENhbWVyYUhlaWdodCwgY29uZmlndXJhdGlvbk1hbmFnZXIpO1xuICAgICAgICB0aGlzLnNldE5hdGl2ZUNvbmZpZ3VyYXRpb24odGhpcy5jYW1lcmFJZCwgY29uZmlndXJhdGlvbk1hbmFnZXIuc2V0Q2FtZXJhSWQsIGNvbmZpZ3VyYXRpb25NYW5hZ2VyKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc2V0TmF0aXZlQ29uZmlndXJhdGlvbih0aGlzLmNhcHR1cmVUaW1lb3V0LCBjb25maWd1cmF0aW9uTWFuYWdlci5zZXRDYXB0dXJlVGltZW91dCwgY29uZmlndXJhdGlvbk1hbmFnZXIpO1xuICAgICAgICB0aGlzLnNldE5hdGl2ZUNvbmZpZ3VyYXRpb24odGhpcy5jYXB0dXJlUmV0cmllcywgY29uZmlndXJhdGlvbk1hbmFnZXIuc2V0Q2FwdHVyZVJldHJpZXMsIGNvbmZpZ3VyYXRpb25NYW5hZ2VyKTtcbiAgICAgICAgdGhpcy5zZXROYXRpdmVDb25maWd1cmF0aW9uKHRoaXMuY2FwdHVyZVNlbnNpYmlsaXR5LCBjb25maWd1cmF0aW9uTWFuYWdlci5zZXRDYXB0dXJlU2Vuc2liaWxpdHksIGNvbmZpZ3VyYXRpb25NYW5hZ2VyKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc2V0TmF0aXZlQ29uZmlndXJhdGlvbih0aGlzLmltYWdlRm9ybWF0LCBjb25maWd1cmF0aW9uTWFuYWdlci5zZXRJbWFnZUZvcm1hdCwgY29uZmlndXJhdGlvbk1hbmFnZXIpO1xuICAgICAgICB0aGlzLnNldE5hdGl2ZUNvbmZpZ3VyYXRpb24odGhpcy5pbWFnZVF1YWxpdHksIGNvbmZpZ3VyYXRpb25NYW5hZ2VyLnNldEltYWdlUXVhbGl0eSwgY29uZmlndXJhdGlvbk1hbmFnZXIpO1xuXG4gICAgICAgIC8vIEV2ZW50b3NcbiAgICAgICAgdGhpcy5zZXROYXRpdmVDb25maWd1cmF0aW9uKHRoaXMub25Nb2R1bGVMb2FkZWQsIGNvbmZpZ3VyYXRpb25NYW5hZ2VyLnNldE9uTW9kdWxlTG9hZGVkLCBjb25maWd1cmF0aW9uTWFuYWdlcik7XG4gICAgICAgIHRoaXMuc2V0TmF0aXZlQ29uZmlndXJhdGlvbih0aGlzLm9uRXh0cmFjdGlvbkZpbmlzaGVkLCBjb25maWd1cmF0aW9uTWFuYWdlci5zZXRPbkV4dHJhY3Rpb25GaW5pc2gsIGNvbmZpZ3VyYXRpb25NYW5hZ2VyKTtcbiAgICAgICAgdGhpcy5zZXROYXRpdmVDb25maWd1cmF0aW9uKHRoaXMub25Vc2VyQ2FuY2VsbGVkLCBjb25maWd1cmF0aW9uTWFuYWdlci5zZXRPblVzZXJDYW5jZWwsIGNvbmZpZ3VyYXRpb25NYW5hZ2VyKTtcbiAgICAgICAgdGhpcy5zZXROYXRpdmVDb25maWd1cmF0aW9uKHRoaXMub25FeGNlcHRpb25DYXB0dXJlZCwgY29uZmlndXJhdGlvbk1hbmFnZXIuc2V0T25FeGNlcHRpb25DYXB0dXJlZCwgY29uZmlndXJhdGlvbk1hbmFnZXIpO1xuICAgICAgICB0aGlzLnNldE5hdGl2ZUNvbmZpZ3VyYXRpb24odGhpcy5vbkV4dHJhY3Rpb25UaW1lb3V0LCBjb25maWd1cmF0aW9uTWFuYWdlci5zZXRPbkV4dHJhY3Rpb25UaW1lb3V0LCBjb25maWd1cmF0aW9uTWFuYWdlcik7XG4gICAgICAgIHRoaXMuc2V0TmF0aXZlQ29uZmlndXJhdGlvbih0aGlzLm9uVHJhY2tTdGF0dXMsIGNvbmZpZ3VyYXRpb25NYW5hZ2VyLnNldE9uVHJhY2tTdGF0dXMsIGNvbmZpZ3VyYXRpb25NYW5hZ2VyKTtcblxuICAgICAgICByZXR1cm4gY29uZmlndXJhdGlvbk1hbmFnZXI7XG4gICAgfVxuXG4gICAgLy8gI2VuZHJlZ2lvblxuXG4gICAgLy8gI3JlZ2lvbiBcIk3DqXRvZG9zIHByaXZhZG9zXCJcblxuICAgIHByaXZhdGUgc2V0TmF0aXZlQ29uZmlndXJhdGlvbihwcm9wZXJ0eSwgY29uZmlndXJhdGlvblNldHRlckZ1bmMsIGNvbnRleHQ6IGFueSA9IG51bGwpIHtcbiAgICAgICAgaWYgKHByb3BlcnR5ID09PSBudWxsIHx8IHByb3BlcnR5ID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgY29uc3Qgc2V0dGVyRnVuYyA9IGNvbnRleHQgPyBjb25maWd1cmF0aW9uU2V0dGVyRnVuYy5iaW5kKGNvbnRleHQpIDogY29uZmlndXJhdGlvblNldHRlckZ1bmM7XG4gICAgICAgIHNldHRlckZ1bmMocHJvcGVydHkpO1xuICAgIH1cblxuICAgIC8vICNlbmRyZWdpb25cbn1cblxuLyoqXG4gKiBEYXRvcyBkZSBkaW1lbnNpb25lcyBkZWwgZG9jdW1lbnRvIGNhcHR1cmFkbyBwb3IgZWwgd2lkZ2V0LlxuICovXG5leHBvcnQgY2xhc3MgRlBoaVNlbHBoSWREb2N1bWVudERpbWVuc2lvbnMge1xuICAgIHB1YmxpYyB4OiBudW1iZXI7XG4gICAgcHVibGljIHk6IG51bWJlcjtcbiAgICBwdWJsaWMgd2lkdGg6IG51bWJlcjtcbiAgICBwdWJsaWMgaGVpZ2h0OiBudW1iZXI7XG59XG4iXX0=