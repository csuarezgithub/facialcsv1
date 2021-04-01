/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Modelo con la información de configuración del widget Selphi.
 */
var /**
 * Modelo con la información de configuración del widget Selphi.
 */
FPhiSelphiConfiguration = /** @class */ (function () {
    function FPhiSelphiConfiguration() {
    }
    // #endregion
    // #region "Métodos públicos"
    /**
     * Genera una instancia de "FPhi.Selphi.ConfigurationManager" con los datos de configuración de la instancia actual para inicializar el widget.
     */
    // #endregion
    // #region "Métodos públicos"
    /**
     * Genera una instancia de "FPhi.Selphi.ConfigurationManager" con los datos de configuración de la instancia actual para inicializar el widget.
     * @return {?}
     */
    FPhiSelphiConfiguration.prototype.getNativeConfiguration = 
    // #endregion
    // #region "Métodos públicos"
    /**
     * Genera una instancia de "FPhi.Selphi.ConfigurationManager" con los datos de configuración de la instancia actual para inicializar el widget.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var configurationManager = new window["FPhi"].Selphi.ConfigurationManager();
        // Propiedades de configuración
        this.setNativeConfiguration(this.widgetContainer, configurationManager.setContainer, configurationManager);
        this.setNativeConfiguration(this.resourcesPath, configurationManager.setResourcesPath, configurationManager);
        this.setNativeConfiguration(this.graphPath, configurationManager.setGraphPath, configurationManager);
        this.setNativeConfiguration(this.language, configurationManager.setLanguage, configurationManager);
        this.setNativeConfiguration(this.dpiList, configurationManager.setDpiList, configurationManager);
        this.setNativeConfiguration(this.tryParseInt(this.cameraWidth), configurationManager.setCameraWidth, configurationManager);
        this.setNativeConfiguration(this.tryParseInt(this.cameraHeight), configurationManager.setCameraHeight, configurationManager);
        this.setNativeConfiguration(this.tryParseInt(this.cameraRotation), configurationManager.setCameraRotation, configurationManager);
        this.setNativeConfiguration(this.tryParseInt(this.cameraType), configurationManager.setCameraType, configurationManager);
        this.setNativeConfiguration(this.tutorial, configurationManager.setTutorial, configurationManager);
        this.setNativeConfiguration(this.tryParseInt(this.extractionMode), configurationManager.setMode, configurationManager);
        this.setNativeConfiguration(this.tryParseInt(this.livenessMode), configurationManager.setLivenessMode, configurationManager);
        this.setNativeConfiguration(this.tryParseInt(this.livenessPrecision), configurationManager.setLivenessPrecision, configurationManager);
        this.setNativeConfiguration(this.tryParseInt(this.livenessMoveInitialError), configurationManager.setLivenessMoveInitialError, configurationManager);
        this.setNativeConfiguration(this.tryParseFloat(this.livenessMoveInfoTime), configurationManager.setLivenessMoveInfoTime, configurationManager);
        this.setNativeConfiguration(this.interactible, configurationManager.setInteractible, configurationManager);
        this.setNativeConfiguration(this.tryParseFloat(this.registerTime), configurationManager.setRegisterTime, configurationManager);
        this.setNativeConfiguration(this.tryParseFloat(this.authenticateTime), configurationManager.setAuthenticateTime, configurationManager);
        this.setNativeConfiguration(this.imageFormat, configurationManager.setImageFormat, configurationManager);
        this.setNativeConfiguration(this.tryParseFloat(this.imageQuality), configurationManager.setImageQuality, configurationManager);
        this.setNativeConfiguration(this.logImages, configurationManager.setLogImages, configurationManager);
        this.setNativeConfiguration(this.tryParseFloat(this.cropFactor), configurationManager.setCropFactor, configurationManager);
        this.setNativeConfiguration(this.cropImage, configurationManager.setCropImage, configurationManager);
        this.setNativeConfiguration(this.tryParseInt(this.templateFormat), configurationManager.setTemplateFormat, configurationManager);
        this.setNativeConfiguration(this.stabilizationStage, configurationManager.setStabilizationStage, configurationManager);
        this.setNativeConfiguration(this.videoRecord, configurationManager.setVideoRecord, configurationManager);
        this.setNativeConfiguration(this.tryParseInt(this.videoRecordRate), configurationManager.setVideoRecordRate, configurationManager);
        this.setNativeConfiguration(this.tryParseFloat(this.videoRecordScale), configurationManager.setVideoRecordScale, configurationManager);
        this.setNativeConfiguration(this.tryParseInt(this.videoRecordType), configurationManager.setVideoRecordType, configurationManager);
        // Eventos
        this.setNativeConfiguration(this.onModuleLoaded, configurationManager.setOnModuleLoaded, configurationManager);
        this.setNativeConfiguration(this.onStabilizing, configurationManager.setOnStabilizing, configurationManager);
        this.setNativeConfiguration(this.onExtractionFinish, configurationManager.setOnExtractionFinish, configurationManager);
        this.setNativeConfiguration(this.onUserCancel, configurationManager.setOnUserCancel, configurationManager);
        this.setNativeConfiguration(this.onExceptionCaptured, configurationManager.setOnExceptionCaptured, configurationManager);
        this.setNativeConfiguration(this.onLivenessError, configurationManager.setOnLivenessError, configurationManager);
        this.setNativeConfiguration(this.onLivenessErrorButtonClick, configurationManager.setOnLivenessErrorButtonClick, configurationManager);
        this.setNativeConfiguration(this.onExtractionTimeout, configurationManager.setOnExtractionTimeout, configurationManager);
        this.setNativeConfiguration(this.onTimeoutErrorButtonClick, configurationManager.setOnTimeoutErrorButtonClick, configurationManager);
        this.setNativeConfiguration(this.onTrackStatus, configurationManager.setOnTrackStatus, configurationManager);
        return configurationManager;
    };
    // #endregion
    // #region "Métodos privados"
    // #endregion
    // #region "Métodos privados"
    /**
     * @private
     * @param {?} property
     * @param {?} configurationSetterFunc
     * @param {?=} context
     * @return {?}
     */
    FPhiSelphiConfiguration.prototype.setNativeConfiguration = 
    // #endregion
    // #region "Métodos privados"
    /**
     * @private
     * @param {?} property
     * @param {?} configurationSetterFunc
     * @param {?=} context
     * @return {?}
     */
    function (property, configurationSetterFunc, context) {
        if (context === void 0) { context = null; }
        if (property === null || property === undefined)
            return;
        /** @type {?} */
        var setterFunc = context ? configurationSetterFunc.bind(context) : configurationSetterFunc;
        setterFunc(property);
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    FPhiSelphiConfiguration.prototype.tryParseInt = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var intValue = parseInt(value);
        return !isNaN(intValue) ? intValue : value;
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    FPhiSelphiConfiguration.prototype.tryParseFloat = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var floatValue = parseFloat(value);
        return !isNaN(floatValue) ? floatValue : value;
    };
    return FPhiSelphiConfiguration;
}());
/**
 * Modelo con la información de configuración del widget Selphi.
 */
export { FPhiSelphiConfiguration };
if (false) {
    /**
     * Referencia al elemento del DOM que actúa como contenedor del widget web.
     * @type {?}
     */
    FPhiSelphiConfiguration.prototype.widgetContainer;
    /**
     * Ruta donde está ubicado el fichero widget.xml y el resto de recursos personalizables del widget.
     * @type {?}
     */
    FPhiSelphiConfiguration.prototype.resourcesPath;
    /**
     * Ruta donde está ubicado el fichero graph.xml.
     * @type {?}
     */
    FPhiSelphiConfiguration.prototype.graphPath;
    /**
     * Idioma en que se mostrará la información del widget.
     * @type {?}
     */
    FPhiSelphiConfiguration.prototype.language;
    /**
     * Lista de densidades de píxeles en pantalla soportadas por el widget, de cara a mostrar las imágenes de recurso adecuadas a la pantalla actual.
     * @type {?}
     */
    FPhiSelphiConfiguration.prototype.dpiList;
    /**
     * Resolución horizontal preferida de la cámara (el widget intentará seleccionar la resolución más cercana).
     * @type {?}
     */
    FPhiSelphiConfiguration.prototype.cameraWidth;
    /**
     * Resolución vertical preferida de la cámara (el widget intentará seleccionar la resolución más cercana).
     * @type {?}
     */
    FPhiSelphiConfiguration.prototype.cameraHeight;
    /**
     * Rotación de la cámara.
     * @type {?}
     */
    FPhiSelphiConfiguration.prototype.cameraRotation;
    /**
     * Selector de tipo de cámara a utilizar para realizar la captura (frontal o trasera).
     * @type {?}
     */
    FPhiSelphiConfiguration.prototype.cameraType;
    /**
     * Indica si el tutorial está disponible en el widget.
     * @type {?}
     */
    FPhiSelphiConfiguration.prototype.tutorial;
    /**
     * Modo de extracción o flujo de ejecución utilizado por el widget.
     * @type {?}
     */
    FPhiSelphiConfiguration.prototype.extractionMode;
    /**
     * Modos de verificación de prueba de vida utilizado por el widget.
     * @type {?}
     */
    FPhiSelphiConfiguration.prototype.livenessMode;
    /**
     *
     * @type {?}
     */
    FPhiSelphiConfiguration.prototype.livenessPrecision;
    /**
     *
     * @type {?}
     */
    FPhiSelphiConfiguration.prototype.livenessMoveInitialError;
    /**
     *
     * @type {?}
     */
    FPhiSelphiConfiguration.prototype.livenessMoveInfoTime;
    /**
     * Indica si el widget permite la interacción con el usuario.
     * @type {?}
     */
    FPhiSelphiConfiguration.prototype.interactible;
    /**
     * Tiempo de registro en segundos.
     * @type {?}
     */
    FPhiSelphiConfiguration.prototype.registerTime;
    /**
     * Tiempo de autenticación en segundos.
     * @type {?}
     */
    FPhiSelphiConfiguration.prototype.authenticateTime;
    /**
     * Formato de las imágenes capturadas por el widget (MIME type).
     * @type {?}
     */
    FPhiSelphiConfiguration.prototype.imageFormat;
    /**
     * Factor de calidad de las imágenes devueltas (rango 0.0 a 1.0). Únicamente aplicable cuando el formato de imagen se ha especificado como "image/jpeg".
     * @type {?}
     */
    FPhiSelphiConfiguration.prototype.imageQuality;
    /**
     *
     * @type {?}
     */
    FPhiSelphiConfiguration.prototype.logImages;
    /**
     * Factor de recorte de las imágenes devueltas por el widget.
     * @type {?}
     */
    FPhiSelphiConfiguration.prototype.cropFactor;
    /**
     * Indica si el widget debe recortar las imágenes capturadas, o no.
     * @type {?}
     */
    FPhiSelphiConfiguration.prototype.cropImage;
    /**
     * Formato de salida de la información de template generada por el widget.
     * @type {?}
     */
    FPhiSelphiConfiguration.prototype.templateFormat;
    /**
     * Activa la fase de estabilización previa a la captura. Por defecto, la estabilización estará desactivada.
     * En caso de haber seleccionado LivenessMode==Move, este parámetro no se tendrá en cuenta y siempre se realizará fase de estabilizado.
     * @type {?}
     */
    FPhiSelphiConfiguration.prototype.stabilizationStage;
    /**
     * Indica si el widget debe grabar la sesión del usuario en video.
     * @type {?}
     */
    FPhiSelphiConfiguration.prototype.videoRecord;
    /**
     * Frecuencia de grabación (en frames por segundo).
     * @type {?}
     */
    FPhiSelphiConfiguration.prototype.videoRecordRate;
    /**
     * Factor de escalado aplicado sobre las capturas realizadas para la generación del video.
     * Toma valores porcentuales de 0.0 a 1.0 (que equivaldría a una escala del 100% de resolución de cámara seleccionada).
     * @type {?}
     */
    FPhiSelphiConfiguration.prototype.videoRecordScale;
    /**
     * Tipo de salida del video generado. Los posibles valores se tomarán del enumerado "FPhi.Selphi.RecordType".
     * @type {?}
     */
    FPhiSelphiConfiguration.prototype.videoRecordType;
    /**
     * Activa el modo de depuración del widget, en el que se mostrarán mensajes informativos en la consola del navegador.
     * @type {?}
     */
    FPhiSelphiConfiguration.prototype.debugMode;
    /**
     * Evento lanzado por el widget cuando se ha finalizado el proceso de carga e inicialización, tando del widget, como de los recursos asociados al mismo.
     * @type {?}
     */
    FPhiSelphiConfiguration.prototype.onModuleLoaded;
    /**
     * Evento lanzado durante los ciclos de estabilización de la imagen para la correcta realización de la captura.
     * \@callback evt {{ detail: FPhiSelphiConstants.SampleDiagnostic }}
     * @type {?}
     */
    FPhiSelphiConfiguration.prototype.onStabilizing;
    /**
     * Evento lanzado cuando el proceso de extracción ha finalizado correctamente. Devuelve el resultado de la captura.
     * \@callback evt {{ template, images, timeStamp, templateRaw, livenessMoveFails, sunGlassesScore, livenessMoveHistory, livenessMoveStabilizedHistory, livenessMoveStabilizedStatus }}
     * @type {?}
     */
    FPhiSelphiConfiguration.prototype.onExtractionFinish;
    /**
     * Evento lanzado cuando el usuario cancela el proceso de extracción.
     * @type {?}
     */
    FPhiSelphiConfiguration.prototype.onUserCancel;
    /**
     * Evento lanzado en caso de que se produzca un error interno del widget.
     * \@callback evt {{ detail: { message: string, exceptionType: FPhiSelphiConstants.ExceptionType } }}
     * @type {?}
     */
    FPhiSelphiConfiguration.prototype.onExceptionCaptured;
    /**
     * Evento lanzado cuando el proceso de verificación de autenticidad por prueba de vida falla.
     * \@callback evt {{ detail: { template, images, timeStamp, templateRaw, livenessMoveFails, sunGlassesScore, livenessMoveHistory, livenessMoveStabilizedHistory, livenessMoveStabilizedStatus } }}
     * @type {?}
     */
    FPhiSelphiConfiguration.prototype.onLivenessError;
    /**
     * Evento lanzado cuando el proceso de verificación de autenticidad por prueba de vida falla y el usuario pulsa el botón de la pantalla de error mostrada.
     * @type {?}
     */
    FPhiSelphiConfiguration.prototype.onLivenessErrorButtonClick;
    /**
     * Evento lanzado si el proceso de captura excede el tiempo máximo disponible.
     * \@callback evt {{ detail: { template, images, timeStamp, templateRaw, livenessMoveFails, sunGlassesScore, livenessMoveHistory, livenessMoveStabilizedHistory, livenessMoveStabilizedStatus } }}
     * @type {?}
     */
    FPhiSelphiConfiguration.prototype.onExtractionTimeout;
    /**
     * Evento lanzado cuando el proceso de captura excede el tiempo máximo disponible y el usuario pulsa el botón de la pantalla de error mostrada.
     * @type {?}
     */
    FPhiSelphiConfiguration.prototype.onTimeoutErrorButtonClick;
    /**
     * Evento lanzado tras cualquier acción realizada por el usuario sobre la interfaz gráfica del widget o ante cualquier cambio de estado
     * durante el proceso de captura.
     * @type {?}
     */
    FPhiSelphiConfiguration.prototype.onTrackStatus;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXBoaS1zZWxwaGktY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZhY2VwaGktc2VscGhpLyIsInNvdXJjZXMiOlsibGliL21vZGVscy9mYWNlcGhpLXNlbHBoaS1jb25maWd1cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQTs7OztJQUFBO0lBK1NBLENBQUM7SUF2RkcsYUFBYTtJQUViLDZCQUE2QjtJQUU3Qjs7T0FFRzs7Ozs7OztJQUNJLHdEQUFzQjs7Ozs7OztJQUE3Qjs7WUFDVSxvQkFBb0IsR0FBRyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsb0JBQW9CLEVBQUU7UUFFN0UsK0JBQStCO1FBQy9CLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLG9CQUFvQixDQUFDLFlBQVksRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQzNHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLG9CQUFvQixDQUFDLGdCQUFnQixFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFDN0csSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsb0JBQW9CLENBQUMsWUFBWSxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFDckcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsb0JBQW9CLENBQUMsV0FBVyxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFDbkcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsb0JBQW9CLENBQUMsVUFBVSxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFFakcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLG9CQUFvQixDQUFDLGNBQWMsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQzNILElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxvQkFBb0IsQ0FBQyxlQUFlLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUM3SCxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsb0JBQW9CLENBQUMsaUJBQWlCLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUNqSSxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsb0JBQW9CLENBQUMsYUFBYSxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFFekgsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsb0JBQW9CLENBQUMsV0FBVyxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFDbkcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBRXZILElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxvQkFBb0IsQ0FBQyxlQUFlLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUM3SCxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsRUFBRSxvQkFBb0IsQ0FBQyxvQkFBb0IsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3ZJLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFLG9CQUFvQixDQUFDLDJCQUEyQixFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFDckosSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEVBQUUsb0JBQW9CLENBQUMsdUJBQXVCLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUUvSSxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxvQkFBb0IsQ0FBQyxlQUFlLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUMzRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsb0JBQW9CLENBQUMsZUFBZSxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFDL0gsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsb0JBQW9CLENBQUMsbUJBQW1CLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUV2SSxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxvQkFBb0IsQ0FBQyxjQUFjLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUN6RyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsb0JBQW9CLENBQUMsZUFBZSxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFDL0gsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsb0JBQW9CLENBQUMsWUFBWSxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFFckcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLG9CQUFvQixDQUFDLGFBQWEsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQzNILElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLG9CQUFvQixDQUFDLFlBQVksRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBRXJHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxvQkFBb0IsQ0FBQyxpQkFBaUIsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2pJLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsb0JBQW9CLENBQUMscUJBQXFCLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUV2SCxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxvQkFBb0IsQ0FBQyxjQUFjLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUN6RyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsb0JBQW9CLENBQUMsa0JBQWtCLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUNuSSxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxvQkFBb0IsQ0FBQyxtQkFBbUIsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3ZJLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxvQkFBb0IsQ0FBQyxrQkFBa0IsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBRW5JLFVBQVU7UUFDVixJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxvQkFBb0IsQ0FBQyxpQkFBaUIsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQy9HLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLG9CQUFvQixDQUFDLGdCQUFnQixFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFDN0csSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxvQkFBb0IsQ0FBQyxxQkFBcUIsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3ZILElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLG9CQUFvQixDQUFDLGVBQWUsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQzNHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsb0JBQW9CLENBQUMsc0JBQXNCLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUN6SCxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxvQkFBb0IsQ0FBQyxrQkFBa0IsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2pILElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLEVBQUUsb0JBQW9CLENBQUMsNkJBQTZCLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUN2SSxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLG9CQUFvQixDQUFDLHNCQUFzQixFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFDekgsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxvQkFBb0IsQ0FBQyw0QkFBNEIsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3JJLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLG9CQUFvQixDQUFDLGdCQUFnQixFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFFN0csT0FBTyxvQkFBb0IsQ0FBQztJQUNoQyxDQUFDO0lBRUQsYUFBYTtJQUViLDZCQUE2Qjs7Ozs7Ozs7OztJQUVyQix3REFBc0I7Ozs7Ozs7Ozs7SUFBOUIsVUFBK0IsUUFBUSxFQUFFLHVCQUF1QixFQUFFLE9BQW1CO1FBQW5CLHdCQUFBLEVBQUEsY0FBbUI7UUFDakYsSUFBSSxRQUFRLEtBQUssSUFBSSxJQUFJLFFBQVEsS0FBSyxTQUFTO1lBQzNDLE9BQU87O1lBRUwsVUFBVSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyx1QkFBdUI7UUFDNUYsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7Ozs7OztJQUVPLDZDQUFXOzs7OztJQUFuQixVQUFvQixLQUFVOztZQUN0QixRQUFRLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUM5QixPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUMvQyxDQUFDOzs7Ozs7SUFFTywrQ0FBYTs7Ozs7SUFBckIsVUFBc0IsS0FBVTs7WUFDeEIsVUFBVSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFDbEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDbkQsQ0FBQztJQUdMLDhCQUFDO0FBQUQsQ0FBQyxBQS9TRCxJQStTQzs7Ozs7Ozs7OztJQXhTRyxrREFBNEI7Ozs7O0lBSzVCLGdEQUEwQjs7Ozs7SUFLMUIsNENBQXNCOzs7OztJQUt0QiwyQ0FBd0I7Ozs7O0lBS3hCLDBDQUE4Qjs7Ozs7SUFLOUIsOENBQTJCOzs7OztJQUszQiwrQ0FBNEI7Ozs7O0lBSzVCLGlEQUEyQjs7Ozs7SUFLM0IsNkNBQXVCOzs7OztJQUt2QiwyQ0FBeUI7Ozs7O0lBS3pCLGlEQUEyQjs7Ozs7SUFLM0IsK0NBQXlCOzs7OztJQUt6QixvREFBaUM7Ozs7O0lBS2pDLDJEQUF3Qzs7Ozs7SUFLeEMsdURBQW9DOzs7OztJQUtwQywrQ0FBNkI7Ozs7O0lBSzdCLCtDQUE0Qjs7Ozs7SUFLNUIsbURBQWdDOzs7OztJQUtoQyw4Q0FBMkI7Ozs7O0lBSzNCLCtDQUE0Qjs7Ozs7SUFLNUIsNENBQTBCOzs7OztJQUsxQiw2Q0FBMEI7Ozs7O0lBSzFCLDRDQUEwQjs7Ozs7SUFLMUIsaURBQThCOzs7Ozs7SUFNOUIscURBQW1DOzs7OztJQUtuQyw4Q0FBNEI7Ozs7O0lBSzVCLGtEQUErQjs7Ozs7O0lBTS9CLG1EQUFnQzs7Ozs7SUFLaEMsa0RBQTRCOzs7OztJQUs1Qiw0Q0FBMEI7Ozs7O0lBUzFCLGlEQUEyQjs7Ozs7O0lBTTNCLGdEQUEwQjs7Ozs7O0lBTTFCLHFEQUErQjs7Ozs7SUFLL0IsK0NBQXlCOzs7Ozs7SUFNekIsc0RBQWdDOzs7Ozs7SUFNaEMsa0RBQTRCOzs7OztJQUs1Qiw2REFBdUM7Ozs7OztJQU12QyxzREFBZ0M7Ozs7O0lBS2hDLDREQUFzQzs7Ozs7O0lBTXRDLGdEQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZQaGlTZWxwaGlDb25zdGFudHMgfSBmcm9tIFwiLi9mYWNlcGhpLXNlbHBoaS1jb25zdGFudHNcIjtcblxuLyoqXG4gKiBNb2RlbG8gY29uIGxhIGluZm9ybWFjacOzbiBkZSBjb25maWd1cmFjacOzbiBkZWwgd2lkZ2V0IFNlbHBoaS5cbiAqL1xuZXhwb3J0IGNsYXNzIEZQaGlTZWxwaGlDb25maWd1cmF0aW9uIHtcblxuICAgIC8vICNyZWdpb24gXCJQcm9waWVkYWRlc1wiXG5cbiAgICAvKipcbiAgICAgKiBSZWZlcmVuY2lhIGFsIGVsZW1lbnRvIGRlbCBET00gcXVlIGFjdMO6YSBjb21vIGNvbnRlbmVkb3IgZGVsIHdpZGdldCB3ZWIuXG4gICAgICovXG4gICAgcHVibGljIHdpZGdldENvbnRhaW5lcjogYW55O1xuXG4gICAgLyoqXG4gICAgICogUnV0YSBkb25kZSBlc3TDoSB1YmljYWRvIGVsIGZpY2hlcm8gd2lkZ2V0LnhtbCB5IGVsIHJlc3RvIGRlIHJlY3Vyc29zIHBlcnNvbmFsaXphYmxlcyBkZWwgd2lkZ2V0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZXNvdXJjZXNQYXRoOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBSdXRhIGRvbmRlIGVzdMOhIHViaWNhZG8gZWwgZmljaGVybyBncmFwaC54bWwuXG4gICAgICovXG4gICAgcHVibGljIGdyYXBoUGF0aDogYW55O1xuXG4gICAgLyoqXG4gICAgICogSWRpb21hIGVuIHF1ZSBzZSBtb3N0cmFyw6EgbGEgaW5mb3JtYWNpw7NuIGRlbCB3aWRnZXQuXG4gICAgICovXG4gICAgcHVibGljIGxhbmd1YWdlOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBMaXN0YSBkZSBkZW5zaWRhZGVzIGRlIHDDrXhlbGVzIGVuIHBhbnRhbGxhIHNvcG9ydGFkYXMgcG9yIGVsIHdpZGdldCwgZGUgY2FyYSBhIG1vc3RyYXIgbGFzIGltw6FnZW5lcyBkZSByZWN1cnNvIGFkZWN1YWRhcyBhIGxhIHBhbnRhbGxhIGFjdHVhbC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZHBpTGlzdDogQXJyYXk8bnVtYmVyPjtcblxuICAgIC8qKlxuICAgICAqIFJlc29sdWNpw7NuIGhvcml6b250YWwgcHJlZmVyaWRhIGRlIGxhIGPDoW1hcmEgKGVsIHdpZGdldCBpbnRlbnRhcsOhIHNlbGVjY2lvbmFyIGxhIHJlc29sdWNpw7NuIG3DoXMgY2VyY2FuYSkuXG4gICAgICovXG4gICAgcHVibGljIGNhbWVyYVdpZHRoOiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBSZXNvbHVjacOzbiB2ZXJ0aWNhbCBwcmVmZXJpZGEgZGUgbGEgY8OhbWFyYSAoZWwgd2lkZ2V0IGludGVudGFyw6Egc2VsZWNjaW9uYXIgbGEgcmVzb2x1Y2nDs24gbcOhcyBjZXJjYW5hKS5cbiAgICAgKi9cbiAgICBwdWJsaWMgY2FtZXJhSGVpZ2h0OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBSb3RhY2nDs24gZGUgbGEgY8OhbWFyYS5cbiAgICAgKi9cbiAgICBwdWJsaWMgY2FtZXJhUm90YXRpb246IGFueTtcblxuICAgIC8qKlxuICAgICAqIFNlbGVjdG9yIGRlIHRpcG8gZGUgY8OhbWFyYSBhIHV0aWxpemFyIHBhcmEgcmVhbGl6YXIgbGEgY2FwdHVyYSAoZnJvbnRhbCBvIHRyYXNlcmEpLlxuICAgICAqL1xuICAgIHB1YmxpYyBjYW1lcmFUeXBlOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBJbmRpY2Egc2kgZWwgdHV0b3JpYWwgZXN0w6EgZGlzcG9uaWJsZSBlbiBlbCB3aWRnZXQuXG4gICAgICovXG4gICAgcHVibGljIHR1dG9yaWFsOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogTW9kbyBkZSBleHRyYWNjacOzbiBvIGZsdWpvIGRlIGVqZWN1Y2nDs24gdXRpbGl6YWRvIHBvciBlbCB3aWRnZXQuXG4gICAgICovXG4gICAgcHVibGljIGV4dHJhY3Rpb25Nb2RlOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBNb2RvcyBkZSB2ZXJpZmljYWNpw7NuIGRlIHBydWViYSBkZSB2aWRhIHV0aWxpemFkbyBwb3IgZWwgd2lkZ2V0LlxuICAgICAqL1xuICAgIHB1YmxpYyBsaXZlbmVzc01vZGU6IGFueTtcblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqL1xuICAgIHB1YmxpYyBsaXZlbmVzc1ByZWNpc2lvbjogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogXG4gICAgICovXG4gICAgcHVibGljIGxpdmVuZXNzTW92ZUluaXRpYWxFcnJvcjogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogXG4gICAgICovXG4gICAgcHVibGljIGxpdmVuZXNzTW92ZUluZm9UaW1lOiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBJbmRpY2Egc2kgZWwgd2lkZ2V0IHBlcm1pdGUgbGEgaW50ZXJhY2Npw7NuIGNvbiBlbCB1c3VhcmlvLlxuICAgICAqL1xuICAgIHB1YmxpYyBpbnRlcmFjdGlibGU6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBUaWVtcG8gZGUgcmVnaXN0cm8gZW4gc2VndW5kb3MuXG4gICAgICovXG4gICAgcHVibGljIHJlZ2lzdGVyVGltZTogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogVGllbXBvIGRlIGF1dGVudGljYWNpw7NuIGVuIHNlZ3VuZG9zLlxuICAgICAqL1xuICAgIHB1YmxpYyBhdXRoZW50aWNhdGVUaW1lOiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBGb3JtYXRvIGRlIGxhcyBpbcOhZ2VuZXMgY2FwdHVyYWRhcyBwb3IgZWwgd2lkZ2V0IChNSU1FIHR5cGUpLlxuICAgICAqL1xuICAgIHB1YmxpYyBpbWFnZUZvcm1hdDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogRmFjdG9yIGRlIGNhbGlkYWQgZGUgbGFzIGltw6FnZW5lcyBkZXZ1ZWx0YXMgKHJhbmdvIDAuMCBhIDEuMCkuIMOabmljYW1lbnRlIGFwbGljYWJsZSBjdWFuZG8gZWwgZm9ybWF0byBkZSBpbWFnZW4gc2UgaGEgZXNwZWNpZmljYWRvIGNvbW8gXCJpbWFnZS9qcGVnXCIuXG4gICAgICovXG4gICAgcHVibGljIGltYWdlUXVhbGl0eTogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogXG4gICAgICovXG4gICAgcHVibGljIGxvZ0ltYWdlczogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEZhY3RvciBkZSByZWNvcnRlIGRlIGxhcyBpbcOhZ2VuZXMgZGV2dWVsdGFzIHBvciBlbCB3aWRnZXQuXG4gICAgICovXG4gICAgcHVibGljIGNyb3BGYWN0b3I6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEluZGljYSBzaSBlbCB3aWRnZXQgZGViZSByZWNvcnRhciBsYXMgaW3DoWdlbmVzIGNhcHR1cmFkYXMsIG8gbm8uXG4gICAgICovXG4gICAgcHVibGljIGNyb3BJbWFnZTogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEZvcm1hdG8gZGUgc2FsaWRhIGRlIGxhIGluZm9ybWFjacOzbiBkZSB0ZW1wbGF0ZSBnZW5lcmFkYSBwb3IgZWwgd2lkZ2V0LlxuICAgICAqL1xuICAgIHB1YmxpYyB0ZW1wbGF0ZUZvcm1hdDogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQWN0aXZhIGxhIGZhc2UgZGUgZXN0YWJpbGl6YWNpw7NuIHByZXZpYSBhIGxhIGNhcHR1cmEuIFBvciBkZWZlY3RvLCBsYSBlc3RhYmlsaXphY2nDs24gZXN0YXLDoSBkZXNhY3RpdmFkYS5cbiAgICAgKiBFbiBjYXNvIGRlIGhhYmVyIHNlbGVjY2lvbmFkbyBMaXZlbmVzc01vZGU9PU1vdmUsIGVzdGUgcGFyw6FtZXRybyBubyBzZSB0ZW5kcsOhIGVuIGN1ZW50YSB5IHNpZW1wcmUgc2UgcmVhbGl6YXLDoSBmYXNlIGRlIGVzdGFiaWxpemFkby5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhYmlsaXphdGlvblN0YWdlOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogSW5kaWNhIHNpIGVsIHdpZGdldCBkZWJlIGdyYWJhciBsYSBzZXNpw7NuIGRlbCB1c3VhcmlvIGVuIHZpZGVvLlxuICAgICAqL1xuICAgIHB1YmxpYyB2aWRlb1JlY29yZDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEZyZWN1ZW5jaWEgZGUgZ3JhYmFjacOzbiAoZW4gZnJhbWVzIHBvciBzZWd1bmRvKS5cbiAgICAgKi9cbiAgICBwdWJsaWMgdmlkZW9SZWNvcmRSYXRlOiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBGYWN0b3IgZGUgZXNjYWxhZG8gYXBsaWNhZG8gc29icmUgbGFzIGNhcHR1cmFzIHJlYWxpemFkYXMgcGFyYSBsYSBnZW5lcmFjacOzbiBkZWwgdmlkZW8uXG4gICAgICogVG9tYSB2YWxvcmVzIHBvcmNlbnR1YWxlcyBkZSAwLjAgYSAxLjAgKHF1ZSBlcXVpdmFsZHLDrWEgYSB1bmEgZXNjYWxhIGRlbCAxMDAlIGRlIHJlc29sdWNpw7NuIGRlIGPDoW1hcmEgc2VsZWNjaW9uYWRhKS5cbiAgICAgKi9cbiAgICBwdWJsaWMgdmlkZW9SZWNvcmRTY2FsZTogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogVGlwbyBkZSBzYWxpZGEgZGVsIHZpZGVvIGdlbmVyYWRvLiBMb3MgcG9zaWJsZXMgdmFsb3JlcyBzZSB0b21hcsOhbiBkZWwgZW51bWVyYWRvIFwiRlBoaS5TZWxwaGkuUmVjb3JkVHlwZVwiLlxuICAgICAqL1xuICAgIHB1YmxpYyB2aWRlb1JlY29yZFR5cGU6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEFjdGl2YSBlbCBtb2RvIGRlIGRlcHVyYWNpw7NuIGRlbCB3aWRnZXQsIGVuIGVsIHF1ZSBzZSBtb3N0cmFyw6FuIG1lbnNhamVzIGluZm9ybWF0aXZvcyBlbiBsYSBjb25zb2xhIGRlbCBuYXZlZ2Fkb3IuXG4gICAgICovXG4gICAgcHVibGljIGRlYnVnTW9kZTogYm9vbGVhbjtcblxuICAgIC8vICNlbmRyZWdpb25cblxuICAgIC8vICNyZWdpb24gXCJFdmVudG9zXCJcblxuICAgIC8qKlxuICAgICAqIEV2ZW50byBsYW56YWRvIHBvciBlbCB3aWRnZXQgY3VhbmRvIHNlIGhhIGZpbmFsaXphZG8gZWwgcHJvY2VzbyBkZSBjYXJnYSBlIGluaWNpYWxpemFjacOzbiwgdGFuZG8gZGVsIHdpZGdldCwgY29tbyBkZSBsb3MgcmVjdXJzb3MgYXNvY2lhZG9zIGFsIG1pc21vLlxuICAgICAqL1xuICAgIHB1YmxpYyBvbk1vZHVsZUxvYWRlZDogYW55O1xuXG4gICAgLyoqXG4gICAgICogRXZlbnRvIGxhbnphZG8gZHVyYW50ZSBsb3MgY2ljbG9zIGRlIGVzdGFiaWxpemFjacOzbiBkZSBsYSBpbWFnZW4gcGFyYSBsYSBjb3JyZWN0YSByZWFsaXphY2nDs24gZGUgbGEgY2FwdHVyYS5cbiAgICAgKiBAY2FsbGJhY2sgZXZ0IHt7IGRldGFpbDogRlBoaVNlbHBoaUNvbnN0YW50cy5TYW1wbGVEaWFnbm9zdGljIH19XG4gICAgICovXG4gICAgcHVibGljIG9uU3RhYmlsaXppbmc6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEV2ZW50byBsYW56YWRvIGN1YW5kbyBlbCBwcm9jZXNvIGRlIGV4dHJhY2Npw7NuIGhhIGZpbmFsaXphZG8gY29ycmVjdGFtZW50ZS4gRGV2dWVsdmUgZWwgcmVzdWx0YWRvIGRlIGxhIGNhcHR1cmEuXG4gICAgICogQGNhbGxiYWNrIGV2dCB7eyB0ZW1wbGF0ZSwgaW1hZ2VzLCB0aW1lU3RhbXAsIHRlbXBsYXRlUmF3LCBsaXZlbmVzc01vdmVGYWlscywgc3VuR2xhc3Nlc1Njb3JlLCBsaXZlbmVzc01vdmVIaXN0b3J5LCBsaXZlbmVzc01vdmVTdGFiaWxpemVkSGlzdG9yeSwgbGl2ZW5lc3NNb3ZlU3RhYmlsaXplZFN0YXR1cyB9fVxuICAgICAqL1xuICAgIHB1YmxpYyBvbkV4dHJhY3Rpb25GaW5pc2g6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEV2ZW50byBsYW56YWRvIGN1YW5kbyBlbCB1c3VhcmlvIGNhbmNlbGEgZWwgcHJvY2VzbyBkZSBleHRyYWNjacOzbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgb25Vc2VyQ2FuY2VsOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBFdmVudG8gbGFuemFkbyBlbiBjYXNvIGRlIHF1ZSBzZSBwcm9kdXpjYSB1biBlcnJvciBpbnRlcm5vIGRlbCB3aWRnZXQuXG4gICAgICogQGNhbGxiYWNrIGV2dCB7eyBkZXRhaWw6IHsgbWVzc2FnZTogc3RyaW5nLCBleGNlcHRpb25UeXBlOiBGUGhpU2VscGhpQ29uc3RhbnRzLkV4Y2VwdGlvblR5cGUgfSB9fVxuICAgICAqL1xuICAgIHB1YmxpYyBvbkV4Y2VwdGlvbkNhcHR1cmVkOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBFdmVudG8gbGFuemFkbyBjdWFuZG8gZWwgcHJvY2VzbyBkZSB2ZXJpZmljYWNpw7NuIGRlIGF1dGVudGljaWRhZCBwb3IgcHJ1ZWJhIGRlIHZpZGEgZmFsbGEuXG4gICAgICogQGNhbGxiYWNrIGV2dCB7eyBkZXRhaWw6IHsgdGVtcGxhdGUsIGltYWdlcywgdGltZVN0YW1wLCB0ZW1wbGF0ZVJhdywgbGl2ZW5lc3NNb3ZlRmFpbHMsIHN1bkdsYXNzZXNTY29yZSwgbGl2ZW5lc3NNb3ZlSGlzdG9yeSwgbGl2ZW5lc3NNb3ZlU3RhYmlsaXplZEhpc3RvcnksIGxpdmVuZXNzTW92ZVN0YWJpbGl6ZWRTdGF0dXMgfSB9fVxuICAgICAqL1xuICAgIHB1YmxpYyBvbkxpdmVuZXNzRXJyb3I6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEV2ZW50byBsYW56YWRvIGN1YW5kbyBlbCBwcm9jZXNvIGRlIHZlcmlmaWNhY2nDs24gZGUgYXV0ZW50aWNpZGFkIHBvciBwcnVlYmEgZGUgdmlkYSBmYWxsYSB5IGVsIHVzdWFyaW8gcHVsc2EgZWwgYm90w7NuIGRlIGxhIHBhbnRhbGxhIGRlIGVycm9yIG1vc3RyYWRhLlxuICAgICAqL1xuICAgIHB1YmxpYyBvbkxpdmVuZXNzRXJyb3JCdXR0b25DbGljazogYW55O1xuXG4gICAgLyoqXG4gICAgICogRXZlbnRvIGxhbnphZG8gc2kgZWwgcHJvY2VzbyBkZSBjYXB0dXJhIGV4Y2VkZSBlbCB0aWVtcG8gbcOheGltbyBkaXNwb25pYmxlLlxuICAgICAqIEBjYWxsYmFjayBldnQge3sgZGV0YWlsOiB7IHRlbXBsYXRlLCBpbWFnZXMsIHRpbWVTdGFtcCwgdGVtcGxhdGVSYXcsIGxpdmVuZXNzTW92ZUZhaWxzLCBzdW5HbGFzc2VzU2NvcmUsIGxpdmVuZXNzTW92ZUhpc3RvcnksIGxpdmVuZXNzTW92ZVN0YWJpbGl6ZWRIaXN0b3J5LCBsaXZlbmVzc01vdmVTdGFiaWxpemVkU3RhdHVzIH0gfX1cbiAgICAgKi9cbiAgICBwdWJsaWMgb25FeHRyYWN0aW9uVGltZW91dDogYW55O1xuXG4gICAgLyoqXG4gICAgICogRXZlbnRvIGxhbnphZG8gY3VhbmRvIGVsIHByb2Nlc28gZGUgY2FwdHVyYSBleGNlZGUgZWwgdGllbXBvIG3DoXhpbW8gZGlzcG9uaWJsZSB5IGVsIHVzdWFyaW8gcHVsc2EgZWwgYm90w7NuIGRlIGxhIHBhbnRhbGxhIGRlIGVycm9yIG1vc3RyYWRhLlxuICAgICAqL1xuICAgIHB1YmxpYyBvblRpbWVvdXRFcnJvckJ1dHRvbkNsaWNrOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBFdmVudG8gbGFuemFkbyB0cmFzIGN1YWxxdWllciBhY2Npw7NuIHJlYWxpemFkYSBwb3IgZWwgdXN1YXJpbyBzb2JyZSBsYSBpbnRlcmZheiBncsOhZmljYSBkZWwgd2lkZ2V0IG8gYW50ZSBjdWFscXVpZXIgY2FtYmlvIGRlIGVzdGFkb1xuICAgICAqIGR1cmFudGUgZWwgcHJvY2VzbyBkZSBjYXB0dXJhLlxuICAgICAqL1xuICAgIHB1YmxpYyBvblRyYWNrU3RhdHVzOiBhbnk7XG5cbiAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAvLyAjcmVnaW9uIFwiTcOpdG9kb3MgcMO6YmxpY29zXCJcblxuICAgIC8qKlxuICAgICAqIEdlbmVyYSB1bmEgaW5zdGFuY2lhIGRlIFwiRlBoaS5TZWxwaGkuQ29uZmlndXJhdGlvbk1hbmFnZXJcIiBjb24gbG9zIGRhdG9zIGRlIGNvbmZpZ3VyYWNpw7NuIGRlIGxhIGluc3RhbmNpYSBhY3R1YWwgcGFyYSBpbmljaWFsaXphciBlbCB3aWRnZXQuXG4gICAgICovXG4gICAgcHVibGljIGdldE5hdGl2ZUNvbmZpZ3VyYXRpb24oKSB7XG4gICAgICAgIGNvbnN0IGNvbmZpZ3VyYXRpb25NYW5hZ2VyID0gbmV3IHdpbmRvd1tcIkZQaGlcIl0uU2VscGhpLkNvbmZpZ3VyYXRpb25NYW5hZ2VyKCk7XG5cbiAgICAgICAgLy8gUHJvcGllZGFkZXMgZGUgY29uZmlndXJhY2nDs25cbiAgICAgICAgdGhpcy5zZXROYXRpdmVDb25maWd1cmF0aW9uKHRoaXMud2lkZ2V0Q29udGFpbmVyLCBjb25maWd1cmF0aW9uTWFuYWdlci5zZXRDb250YWluZXIsIGNvbmZpZ3VyYXRpb25NYW5hZ2VyKTtcbiAgICAgICAgdGhpcy5zZXROYXRpdmVDb25maWd1cmF0aW9uKHRoaXMucmVzb3VyY2VzUGF0aCwgY29uZmlndXJhdGlvbk1hbmFnZXIuc2V0UmVzb3VyY2VzUGF0aCwgY29uZmlndXJhdGlvbk1hbmFnZXIpO1xuICAgICAgICB0aGlzLnNldE5hdGl2ZUNvbmZpZ3VyYXRpb24odGhpcy5ncmFwaFBhdGgsIGNvbmZpZ3VyYXRpb25NYW5hZ2VyLnNldEdyYXBoUGF0aCwgY29uZmlndXJhdGlvbk1hbmFnZXIpO1xuICAgICAgICB0aGlzLnNldE5hdGl2ZUNvbmZpZ3VyYXRpb24odGhpcy5sYW5ndWFnZSwgY29uZmlndXJhdGlvbk1hbmFnZXIuc2V0TGFuZ3VhZ2UsIGNvbmZpZ3VyYXRpb25NYW5hZ2VyKTtcbiAgICAgICAgdGhpcy5zZXROYXRpdmVDb25maWd1cmF0aW9uKHRoaXMuZHBpTGlzdCwgY29uZmlndXJhdGlvbk1hbmFnZXIuc2V0RHBpTGlzdCwgY29uZmlndXJhdGlvbk1hbmFnZXIpO1xuXG4gICAgICAgIHRoaXMuc2V0TmF0aXZlQ29uZmlndXJhdGlvbih0aGlzLnRyeVBhcnNlSW50KHRoaXMuY2FtZXJhV2lkdGgpLCBjb25maWd1cmF0aW9uTWFuYWdlci5zZXRDYW1lcmFXaWR0aCwgY29uZmlndXJhdGlvbk1hbmFnZXIpO1xuICAgICAgICB0aGlzLnNldE5hdGl2ZUNvbmZpZ3VyYXRpb24odGhpcy50cnlQYXJzZUludCh0aGlzLmNhbWVyYUhlaWdodCksIGNvbmZpZ3VyYXRpb25NYW5hZ2VyLnNldENhbWVyYUhlaWdodCwgY29uZmlndXJhdGlvbk1hbmFnZXIpO1xuICAgICAgICB0aGlzLnNldE5hdGl2ZUNvbmZpZ3VyYXRpb24odGhpcy50cnlQYXJzZUludCh0aGlzLmNhbWVyYVJvdGF0aW9uKSwgY29uZmlndXJhdGlvbk1hbmFnZXIuc2V0Q2FtZXJhUm90YXRpb24sIGNvbmZpZ3VyYXRpb25NYW5hZ2VyKTtcbiAgICAgICAgdGhpcy5zZXROYXRpdmVDb25maWd1cmF0aW9uKHRoaXMudHJ5UGFyc2VJbnQodGhpcy5jYW1lcmFUeXBlKSwgY29uZmlndXJhdGlvbk1hbmFnZXIuc2V0Q2FtZXJhVHlwZSwgY29uZmlndXJhdGlvbk1hbmFnZXIpO1xuXG4gICAgICAgIHRoaXMuc2V0TmF0aXZlQ29uZmlndXJhdGlvbih0aGlzLnR1dG9yaWFsLCBjb25maWd1cmF0aW9uTWFuYWdlci5zZXRUdXRvcmlhbCwgY29uZmlndXJhdGlvbk1hbmFnZXIpO1xuICAgICAgICB0aGlzLnNldE5hdGl2ZUNvbmZpZ3VyYXRpb24odGhpcy50cnlQYXJzZUludCh0aGlzLmV4dHJhY3Rpb25Nb2RlKSwgY29uZmlndXJhdGlvbk1hbmFnZXIuc2V0TW9kZSwgY29uZmlndXJhdGlvbk1hbmFnZXIpO1xuXG4gICAgICAgIHRoaXMuc2V0TmF0aXZlQ29uZmlndXJhdGlvbih0aGlzLnRyeVBhcnNlSW50KHRoaXMubGl2ZW5lc3NNb2RlKSwgY29uZmlndXJhdGlvbk1hbmFnZXIuc2V0TGl2ZW5lc3NNb2RlLCBjb25maWd1cmF0aW9uTWFuYWdlcik7XG4gICAgICAgIHRoaXMuc2V0TmF0aXZlQ29uZmlndXJhdGlvbih0aGlzLnRyeVBhcnNlSW50KHRoaXMubGl2ZW5lc3NQcmVjaXNpb24pLCBjb25maWd1cmF0aW9uTWFuYWdlci5zZXRMaXZlbmVzc1ByZWNpc2lvbiwgY29uZmlndXJhdGlvbk1hbmFnZXIpO1xuICAgICAgICB0aGlzLnNldE5hdGl2ZUNvbmZpZ3VyYXRpb24odGhpcy50cnlQYXJzZUludCh0aGlzLmxpdmVuZXNzTW92ZUluaXRpYWxFcnJvciksIGNvbmZpZ3VyYXRpb25NYW5hZ2VyLnNldExpdmVuZXNzTW92ZUluaXRpYWxFcnJvciwgY29uZmlndXJhdGlvbk1hbmFnZXIpO1xuICAgICAgICB0aGlzLnNldE5hdGl2ZUNvbmZpZ3VyYXRpb24odGhpcy50cnlQYXJzZUZsb2F0KHRoaXMubGl2ZW5lc3NNb3ZlSW5mb1RpbWUpLCBjb25maWd1cmF0aW9uTWFuYWdlci5zZXRMaXZlbmVzc01vdmVJbmZvVGltZSwgY29uZmlndXJhdGlvbk1hbmFnZXIpO1xuXG4gICAgICAgIHRoaXMuc2V0TmF0aXZlQ29uZmlndXJhdGlvbih0aGlzLmludGVyYWN0aWJsZSwgY29uZmlndXJhdGlvbk1hbmFnZXIuc2V0SW50ZXJhY3RpYmxlLCBjb25maWd1cmF0aW9uTWFuYWdlcik7XG4gICAgICAgIHRoaXMuc2V0TmF0aXZlQ29uZmlndXJhdGlvbih0aGlzLnRyeVBhcnNlRmxvYXQodGhpcy5yZWdpc3RlclRpbWUpLCBjb25maWd1cmF0aW9uTWFuYWdlci5zZXRSZWdpc3RlclRpbWUsIGNvbmZpZ3VyYXRpb25NYW5hZ2VyKTtcbiAgICAgICAgdGhpcy5zZXROYXRpdmVDb25maWd1cmF0aW9uKHRoaXMudHJ5UGFyc2VGbG9hdCh0aGlzLmF1dGhlbnRpY2F0ZVRpbWUpLCBjb25maWd1cmF0aW9uTWFuYWdlci5zZXRBdXRoZW50aWNhdGVUaW1lLCBjb25maWd1cmF0aW9uTWFuYWdlcik7XG5cbiAgICAgICAgdGhpcy5zZXROYXRpdmVDb25maWd1cmF0aW9uKHRoaXMuaW1hZ2VGb3JtYXQsIGNvbmZpZ3VyYXRpb25NYW5hZ2VyLnNldEltYWdlRm9ybWF0LCBjb25maWd1cmF0aW9uTWFuYWdlcik7XG4gICAgICAgIHRoaXMuc2V0TmF0aXZlQ29uZmlndXJhdGlvbih0aGlzLnRyeVBhcnNlRmxvYXQodGhpcy5pbWFnZVF1YWxpdHkpLCBjb25maWd1cmF0aW9uTWFuYWdlci5zZXRJbWFnZVF1YWxpdHksIGNvbmZpZ3VyYXRpb25NYW5hZ2VyKTtcbiAgICAgICAgdGhpcy5zZXROYXRpdmVDb25maWd1cmF0aW9uKHRoaXMubG9nSW1hZ2VzLCBjb25maWd1cmF0aW9uTWFuYWdlci5zZXRMb2dJbWFnZXMsIGNvbmZpZ3VyYXRpb25NYW5hZ2VyKTtcblxuICAgICAgICB0aGlzLnNldE5hdGl2ZUNvbmZpZ3VyYXRpb24odGhpcy50cnlQYXJzZUZsb2F0KHRoaXMuY3JvcEZhY3RvciksIGNvbmZpZ3VyYXRpb25NYW5hZ2VyLnNldENyb3BGYWN0b3IsIGNvbmZpZ3VyYXRpb25NYW5hZ2VyKTtcbiAgICAgICAgdGhpcy5zZXROYXRpdmVDb25maWd1cmF0aW9uKHRoaXMuY3JvcEltYWdlLCBjb25maWd1cmF0aW9uTWFuYWdlci5zZXRDcm9wSW1hZ2UsIGNvbmZpZ3VyYXRpb25NYW5hZ2VyKTtcblxuICAgICAgICB0aGlzLnNldE5hdGl2ZUNvbmZpZ3VyYXRpb24odGhpcy50cnlQYXJzZUludCh0aGlzLnRlbXBsYXRlRm9ybWF0KSwgY29uZmlndXJhdGlvbk1hbmFnZXIuc2V0VGVtcGxhdGVGb3JtYXQsIGNvbmZpZ3VyYXRpb25NYW5hZ2VyKTtcbiAgICAgICAgdGhpcy5zZXROYXRpdmVDb25maWd1cmF0aW9uKHRoaXMuc3RhYmlsaXphdGlvblN0YWdlLCBjb25maWd1cmF0aW9uTWFuYWdlci5zZXRTdGFiaWxpemF0aW9uU3RhZ2UsIGNvbmZpZ3VyYXRpb25NYW5hZ2VyKTtcblxuICAgICAgICB0aGlzLnNldE5hdGl2ZUNvbmZpZ3VyYXRpb24odGhpcy52aWRlb1JlY29yZCwgY29uZmlndXJhdGlvbk1hbmFnZXIuc2V0VmlkZW9SZWNvcmQsIGNvbmZpZ3VyYXRpb25NYW5hZ2VyKTtcbiAgICAgICAgdGhpcy5zZXROYXRpdmVDb25maWd1cmF0aW9uKHRoaXMudHJ5UGFyc2VJbnQodGhpcy52aWRlb1JlY29yZFJhdGUpLCBjb25maWd1cmF0aW9uTWFuYWdlci5zZXRWaWRlb1JlY29yZFJhdGUsIGNvbmZpZ3VyYXRpb25NYW5hZ2VyKTtcbiAgICAgICAgdGhpcy5zZXROYXRpdmVDb25maWd1cmF0aW9uKHRoaXMudHJ5UGFyc2VGbG9hdCh0aGlzLnZpZGVvUmVjb3JkU2NhbGUpLCBjb25maWd1cmF0aW9uTWFuYWdlci5zZXRWaWRlb1JlY29yZFNjYWxlLCBjb25maWd1cmF0aW9uTWFuYWdlcik7XG4gICAgICAgIHRoaXMuc2V0TmF0aXZlQ29uZmlndXJhdGlvbih0aGlzLnRyeVBhcnNlSW50KHRoaXMudmlkZW9SZWNvcmRUeXBlKSwgY29uZmlndXJhdGlvbk1hbmFnZXIuc2V0VmlkZW9SZWNvcmRUeXBlLCBjb25maWd1cmF0aW9uTWFuYWdlcik7XG5cbiAgICAgICAgLy8gRXZlbnRvc1xuICAgICAgICB0aGlzLnNldE5hdGl2ZUNvbmZpZ3VyYXRpb24odGhpcy5vbk1vZHVsZUxvYWRlZCwgY29uZmlndXJhdGlvbk1hbmFnZXIuc2V0T25Nb2R1bGVMb2FkZWQsIGNvbmZpZ3VyYXRpb25NYW5hZ2VyKTtcbiAgICAgICAgdGhpcy5zZXROYXRpdmVDb25maWd1cmF0aW9uKHRoaXMub25TdGFiaWxpemluZywgY29uZmlndXJhdGlvbk1hbmFnZXIuc2V0T25TdGFiaWxpemluZywgY29uZmlndXJhdGlvbk1hbmFnZXIpO1xuICAgICAgICB0aGlzLnNldE5hdGl2ZUNvbmZpZ3VyYXRpb24odGhpcy5vbkV4dHJhY3Rpb25GaW5pc2gsIGNvbmZpZ3VyYXRpb25NYW5hZ2VyLnNldE9uRXh0cmFjdGlvbkZpbmlzaCwgY29uZmlndXJhdGlvbk1hbmFnZXIpO1xuICAgICAgICB0aGlzLnNldE5hdGl2ZUNvbmZpZ3VyYXRpb24odGhpcy5vblVzZXJDYW5jZWwsIGNvbmZpZ3VyYXRpb25NYW5hZ2VyLnNldE9uVXNlckNhbmNlbCwgY29uZmlndXJhdGlvbk1hbmFnZXIpO1xuICAgICAgICB0aGlzLnNldE5hdGl2ZUNvbmZpZ3VyYXRpb24odGhpcy5vbkV4Y2VwdGlvbkNhcHR1cmVkLCBjb25maWd1cmF0aW9uTWFuYWdlci5zZXRPbkV4Y2VwdGlvbkNhcHR1cmVkLCBjb25maWd1cmF0aW9uTWFuYWdlcik7XG4gICAgICAgIHRoaXMuc2V0TmF0aXZlQ29uZmlndXJhdGlvbih0aGlzLm9uTGl2ZW5lc3NFcnJvciwgY29uZmlndXJhdGlvbk1hbmFnZXIuc2V0T25MaXZlbmVzc0Vycm9yLCBjb25maWd1cmF0aW9uTWFuYWdlcik7XG4gICAgICAgIHRoaXMuc2V0TmF0aXZlQ29uZmlndXJhdGlvbih0aGlzLm9uTGl2ZW5lc3NFcnJvckJ1dHRvbkNsaWNrLCBjb25maWd1cmF0aW9uTWFuYWdlci5zZXRPbkxpdmVuZXNzRXJyb3JCdXR0b25DbGljaywgY29uZmlndXJhdGlvbk1hbmFnZXIpO1xuICAgICAgICB0aGlzLnNldE5hdGl2ZUNvbmZpZ3VyYXRpb24odGhpcy5vbkV4dHJhY3Rpb25UaW1lb3V0LCBjb25maWd1cmF0aW9uTWFuYWdlci5zZXRPbkV4dHJhY3Rpb25UaW1lb3V0LCBjb25maWd1cmF0aW9uTWFuYWdlcik7XG4gICAgICAgIHRoaXMuc2V0TmF0aXZlQ29uZmlndXJhdGlvbih0aGlzLm9uVGltZW91dEVycm9yQnV0dG9uQ2xpY2ssIGNvbmZpZ3VyYXRpb25NYW5hZ2VyLnNldE9uVGltZW91dEVycm9yQnV0dG9uQ2xpY2ssIGNvbmZpZ3VyYXRpb25NYW5hZ2VyKTtcbiAgICAgICAgdGhpcy5zZXROYXRpdmVDb25maWd1cmF0aW9uKHRoaXMub25UcmFja1N0YXR1cywgY29uZmlndXJhdGlvbk1hbmFnZXIuc2V0T25UcmFja1N0YXR1cywgY29uZmlndXJhdGlvbk1hbmFnZXIpO1xuXG4gICAgICAgIHJldHVybiBjb25maWd1cmF0aW9uTWFuYWdlcjtcbiAgICB9XG5cbiAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAvLyAjcmVnaW9uIFwiTcOpdG9kb3MgcHJpdmFkb3NcIlxuXG4gICAgcHJpdmF0ZSBzZXROYXRpdmVDb25maWd1cmF0aW9uKHByb3BlcnR5LCBjb25maWd1cmF0aW9uU2V0dGVyRnVuYywgY29udGV4dDogYW55ID0gbnVsbCkge1xuICAgICAgICBpZiAocHJvcGVydHkgPT09IG51bGwgfHwgcHJvcGVydHkgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBjb25zdCBzZXR0ZXJGdW5jID0gY29udGV4dCA/IGNvbmZpZ3VyYXRpb25TZXR0ZXJGdW5jLmJpbmQoY29udGV4dCkgOiBjb25maWd1cmF0aW9uU2V0dGVyRnVuYztcbiAgICAgICAgc2V0dGVyRnVuYyhwcm9wZXJ0eSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0cnlQYXJzZUludCh2YWx1ZTogYW55KSB7XG4gICAgICAgIHZhciBpbnRWYWx1ZSA9IHBhcnNlSW50KHZhbHVlKTtcbiAgICAgICAgcmV0dXJuICFpc05hTihpbnRWYWx1ZSkgPyBpbnRWYWx1ZSA6IHZhbHVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgdHJ5UGFyc2VGbG9hdCh2YWx1ZTogYW55KSB7XG4gICAgICAgIHZhciBmbG9hdFZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgICAgIHJldHVybiAhaXNOYU4oZmxvYXRWYWx1ZSkgPyBmbG9hdFZhbHVlIDogdmFsdWU7XG4gICAgfVxuXG4gICAgLy8gI2VuZHJlZ2lvblxufVxuIl19