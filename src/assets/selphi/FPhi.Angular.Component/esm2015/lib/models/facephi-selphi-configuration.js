/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Modelo con la información de configuración del widget Selphi.
 */
export class FPhiSelphiConfiguration {
    // #endregion
    // #region "Métodos públicos"
    /**
     * Genera una instancia de "FPhi.Selphi.ConfigurationManager" con los datos de configuración de la instancia actual para inicializar el widget.
     * @return {?}
     */
    getNativeConfiguration() {
        /** @type {?} */
        const configurationManager = new window["FPhi"].Selphi.ConfigurationManager();
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
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    tryParseInt(value) {
        /** @type {?} */
        var intValue = parseInt(value);
        return !isNaN(intValue) ? intValue : value;
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    tryParseFloat(value) {
        /** @type {?} */
        var floatValue = parseFloat(value);
        return !isNaN(floatValue) ? floatValue : value;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXBoaS1zZWxwaGktY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZhY2VwaGktc2VscGhpLyIsInNvdXJjZXMiOlsibGliL21vZGVscy9mYWNlcGhpLXNlbHBoaS1jb25maWd1cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQSxNQUFNLE9BQU8sdUJBQXVCOzs7Ozs7O0lBK056QixzQkFBc0I7O2NBQ25CLG9CQUFvQixHQUFHLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRTtRQUU3RSwrQkFBK0I7UUFDL0IsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsb0JBQW9CLENBQUMsWUFBWSxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFDM0csSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsb0JBQW9CLENBQUMsZ0JBQWdCLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUM3RyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxvQkFBb0IsQ0FBQyxZQUFZLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUNyRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxvQkFBb0IsQ0FBQyxXQUFXLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUNuRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxvQkFBb0IsQ0FBQyxVQUFVLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUVqRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsb0JBQW9CLENBQUMsY0FBYyxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFDM0gsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMs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REFBNEI7Ozs7O0lBSzVCLDZEQUF1Qzs7Ozs7O0lBTXZDLHNEQUFnQzs7Ozs7SUFLaEMsNERBQXNDOzs7Ozs7SUFNdEMsZ0RBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRlBoaVNlbHBoaUNvbnN0YW50cyB9IGZyb20gXCIuL2ZhY2VwaGktc2VscGhpLWNvbnN0YW50c1wiO1xuXG4vKipcbiAqIE1vZGVsbyBjb24gbGEgaW5mb3JtYWNpw7NuIGRlIGNvbmZpZ3VyYWNpw7NuIGRlbCB3aWRnZXQgU2VscGhpLlxuICovXG5leHBvcnQgY2xhc3MgRlBoaVNlbHBoaUNvbmZpZ3VyYXRpb24ge1xuXG4gICAgLy8gI3JlZ2lvbiBcIlByb3BpZWRhZGVzXCJcblxuICAgIC8qKlxuICAgICAqIFJlZmVyZW5jaWEgYWwgZWxlbWVudG8gZGVsIERPTSBxdWUgYWN0w7phIGNvbW8gY29udGVuZWRvciBkZWwgd2lkZ2V0IHdlYi5cbiAgICAgKi9cbiAgICBwdWJsaWMgd2lkZ2V0Q29udGFpbmVyOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBSdXRhIGRvbmRlIGVzdMOhIHViaWNhZG8gZWwgZmljaGVybyB3aWRnZXQueG1sIHkgZWwgcmVzdG8gZGUgcmVjdXJzb3MgcGVyc29uYWxpemFibGVzIGRlbCB3aWRnZXQuXG4gICAgICovXG4gICAgcHVibGljIHJlc291cmNlc1BhdGg6IGFueTtcblxuICAgIC8qKlxuICAgICAqIFJ1dGEgZG9uZGUgZXN0w6EgdWJpY2FkbyBlbCBmaWNoZXJvIGdyYXBoLnhtbC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ3JhcGhQYXRoOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBJZGlvbWEgZW4gcXVlIHNlIG1vc3RyYXLDoSBsYSBpbmZvcm1hY2nDs24gZGVsIHdpZGdldC5cbiAgICAgKi9cbiAgICBwdWJsaWMgbGFuZ3VhZ2U6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIExpc3RhIGRlIGRlbnNpZGFkZXMgZGUgcMOteGVsZXMgZW4gcGFudGFsbGEgc29wb3J0YWRhcyBwb3IgZWwgd2lkZ2V0LCBkZSBjYXJhIGEgbW9zdHJhciBsYXMgaW3DoWdlbmVzIGRlIHJlY3Vyc28gYWRlY3VhZGFzIGEgbGEgcGFudGFsbGEgYWN0dWFsLlxuICAgICAqL1xuICAgIHB1YmxpYyBkcGlMaXN0OiBBcnJheTxudW1iZXI+O1xuXG4gICAgLyoqXG4gICAgICogUmVzb2x1Y2nDs24gaG9yaXpvbnRhbCBwcmVmZXJpZGEgZGUgbGEgY8OhbWFyYSAoZWwgd2lkZ2V0IGludGVudGFyw6Egc2VsZWNjaW9uYXIgbGEgcmVzb2x1Y2nDs24gbcOhcyBjZXJjYW5hKS5cbiAgICAgKi9cbiAgICBwdWJsaWMgY2FtZXJhV2lkdGg6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIFJlc29sdWNpw7NuIHZlcnRpY2FsIHByZWZlcmlkYSBkZSBsYSBjw6FtYXJhIChlbCB3aWRnZXQgaW50ZW50YXLDoSBzZWxlY2Npb25hciBsYSByZXNvbHVjacOzbiBtw6FzIGNlcmNhbmEpLlxuICAgICAqL1xuICAgIHB1YmxpYyBjYW1lcmFIZWlnaHQ6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIFJvdGFjacOzbiBkZSBsYSBjw6FtYXJhLlxuICAgICAqL1xuICAgIHB1YmxpYyBjYW1lcmFSb3RhdGlvbjogYW55O1xuXG4gICAgLyoqXG4gICAgICogU2VsZWN0b3IgZGUgdGlwbyBkZSBjw6FtYXJhIGEgdXRpbGl6YXIgcGFyYSByZWFsaXphciBsYSBjYXB0dXJhIChmcm9udGFsIG8gdHJhc2VyYSkuXG4gICAgICovXG4gICAgcHVibGljIGNhbWVyYVR5cGU6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEluZGljYSBzaSBlbCB0dXRvcmlhbCBlc3TDoSBkaXNwb25pYmxlIGVuIGVsIHdpZGdldC5cbiAgICAgKi9cbiAgICBwdWJsaWMgdHV0b3JpYWw6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBNb2RvIGRlIGV4dHJhY2Npw7NuIG8gZmx1am8gZGUgZWplY3VjacOzbiB1dGlsaXphZG8gcG9yIGVsIHdpZGdldC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZXh0cmFjdGlvbk1vZGU6IGFueTtcblxuICAgIC8qKlxuICAgICAqIE1vZG9zIGRlIHZlcmlmaWNhY2nDs24gZGUgcHJ1ZWJhIGRlIHZpZGEgdXRpbGl6YWRvIHBvciBlbCB3aWRnZXQuXG4gICAgICovXG4gICAgcHVibGljIGxpdmVuZXNzTW9kZTogYW55O1xuXG4gICAgLyoqXG4gICAgICogXG4gICAgICovXG4gICAgcHVibGljIGxpdmVuZXNzUHJlY2lzaW9uOiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKi9cbiAgICBwdWJsaWMgbGl2ZW5lc3NNb3ZlSW5pdGlhbEVycm9yOiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKi9cbiAgICBwdWJsaWMgbGl2ZW5lc3NNb3ZlSW5mb1RpbWU6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEluZGljYSBzaSBlbCB3aWRnZXQgcGVybWl0ZSBsYSBpbnRlcmFjY2nDs24gY29uIGVsIHVzdWFyaW8uXG4gICAgICovXG4gICAgcHVibGljIGludGVyYWN0aWJsZTogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIFRpZW1wbyBkZSByZWdpc3RybyBlbiBzZWd1bmRvcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVnaXN0ZXJUaW1lOiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBUaWVtcG8gZGUgYXV0ZW50aWNhY2nDs24gZW4gc2VndW5kb3MuXG4gICAgICovXG4gICAgcHVibGljIGF1dGhlbnRpY2F0ZVRpbWU6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEZvcm1hdG8gZGUgbGFzIGltw6FnZW5lcyBjYXB0dXJhZGFzIHBvciBlbCB3aWRnZXQgKE1JTUUgdHlwZSkuXG4gICAgICovXG4gICAgcHVibGljIGltYWdlRm9ybWF0OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBGYWN0b3IgZGUgY2FsaWRhZCBkZSBsYXMgaW3DoWdlbmVzIGRldnVlbHRhcyAocmFuZ28gMC4wIGEgMS4wKS4gw5puaWNhbWVudGUgYXBsaWNhYmxlIGN1YW5kbyBlbCBmb3JtYXRvIGRlIGltYWdlbiBzZSBoYSBlc3BlY2lmaWNhZG8gY29tbyBcImltYWdlL2pwZWdcIi5cbiAgICAgKi9cbiAgICBwdWJsaWMgaW1hZ2VRdWFsaXR5OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKi9cbiAgICBwdWJsaWMgbG9nSW1hZ2VzOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogRmFjdG9yIGRlIHJlY29ydGUgZGUgbGFzIGltw6FnZW5lcyBkZXZ1ZWx0YXMgcG9yIGVsIHdpZGdldC5cbiAgICAgKi9cbiAgICBwdWJsaWMgY3JvcEZhY3RvcjogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogSW5kaWNhIHNpIGVsIHdpZGdldCBkZWJlIHJlY29ydGFyIGxhcyBpbcOhZ2VuZXMgY2FwdHVyYWRhcywgbyBuby5cbiAgICAgKi9cbiAgICBwdWJsaWMgY3JvcEltYWdlOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogRm9ybWF0byBkZSBzYWxpZGEgZGUgbGEgaW5mb3JtYWNpw7NuIGRlIHRlbXBsYXRlIGdlbmVyYWRhIHBvciBlbCB3aWRnZXQuXG4gICAgICovXG4gICAgcHVibGljIHRlbXBsYXRlRm9ybWF0OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBBY3RpdmEgbGEgZmFzZSBkZSBlc3RhYmlsaXphY2nDs24gcHJldmlhIGEgbGEgY2FwdHVyYS4gUG9yIGRlZmVjdG8sIGxhIGVzdGFiaWxpemFjacOzbiBlc3RhcsOhIGRlc2FjdGl2YWRhLlxuICAgICAqIEVuIGNhc28gZGUgaGFiZXIgc2VsZWNjaW9uYWRvIExpdmVuZXNzTW9kZT09TW92ZSwgZXN0ZSBwYXLDoW1ldHJvIG5vIHNlIHRlbmRyw6EgZW4gY3VlbnRhIHkgc2llbXByZSBzZSByZWFsaXphcsOhIGZhc2UgZGUgZXN0YWJpbGl6YWRvLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGFiaWxpemF0aW9uU3RhZ2U6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBJbmRpY2Egc2kgZWwgd2lkZ2V0IGRlYmUgZ3JhYmFyIGxhIHNlc2nDs24gZGVsIHVzdWFyaW8gZW4gdmlkZW8uXG4gICAgICovXG4gICAgcHVibGljIHZpZGVvUmVjb3JkOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogRnJlY3VlbmNpYSBkZSBncmFiYWNpw7NuIChlbiBmcmFtZXMgcG9yIHNlZ3VuZG8pLlxuICAgICAqL1xuICAgIHB1YmxpYyB2aWRlb1JlY29yZFJhdGU6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEZhY3RvciBkZSBlc2NhbGFkbyBhcGxpY2FkbyBzb2JyZSBsYXMgY2FwdHVyYXMgcmVhbGl6YWRhcyBwYXJhIGxhIGdlbmVyYWNpw7NuIGRlbCB2aWRlby5cbiAgICAgKiBUb21hIHZhbG9yZXMgcG9yY2VudHVhbGVzIGRlIDAuMCBhIDEuMCAocXVlIGVxdWl2YWxkcsOtYSBhIHVuYSBlc2NhbGEgZGVsIDEwMCUgZGUgcmVzb2x1Y2nDs24gZGUgY8OhbWFyYSBzZWxlY2Npb25hZGEpLlxuICAgICAqL1xuICAgIHB1YmxpYyB2aWRlb1JlY29yZFNjYWxlOiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBUaXBvIGRlIHNhbGlkYSBkZWwgdmlkZW8gZ2VuZXJhZG8uIExvcyBwb3NpYmxlcyB2YWxvcmVzIHNlIHRvbWFyw6FuIGRlbCBlbnVtZXJhZG8gXCJGUGhpLlNlbHBoaS5SZWNvcmRUeXBlXCIuXG4gICAgICovXG4gICAgcHVibGljIHZpZGVvUmVjb3JkVHlwZTogYW55O1xuXG4gICAgLyoqXG4gICAgICogQWN0aXZhIGVsIG1vZG8gZGUgZGVwdXJhY2nDs24gZGVsIHdpZGdldCwgZW4gZWwgcXVlIHNlIG1vc3RyYXLDoW4gbWVuc2FqZXMgaW5mb3JtYXRpdm9zIGVuIGxhIGNvbnNvbGEgZGVsIG5hdmVnYWRvci5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGVidWdNb2RlOiBib29sZWFuO1xuXG4gICAgLy8gI2VuZHJlZ2lvblxuXG4gICAgLy8gI3JlZ2lvbiBcIkV2ZW50b3NcIlxuXG4gICAgLyoqXG4gICAgICogRXZlbnRvIGxhbnphZG8gcG9yIGVsIHdpZGdldCBjdWFuZG8gc2UgaGEgZmluYWxpemFkbyBlbCBwcm9jZXNvIGRlIGNhcmdhIGUgaW5pY2lhbGl6YWNpw7NuLCB0YW5kbyBkZWwgd2lkZ2V0LCBjb21vIGRlIGxvcyByZWN1cnNvcyBhc29jaWFkb3MgYWwgbWlzbW8uXG4gICAgICovXG4gICAgcHVibGljIG9uTW9kdWxlTG9hZGVkOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBFdmVudG8gbGFuemFkbyBkdXJhbnRlIGxvcyBjaWNsb3MgZGUgZXN0YWJpbGl6YWNpw7NuIGRlIGxhIGltYWdlbiBwYXJhIGxhIGNvcnJlY3RhIHJlYWxpemFjacOzbiBkZSBsYSBjYXB0dXJhLlxuICAgICAqIEBjYWxsYmFjayBldnQge3sgZGV0YWlsOiBGUGhpU2VscGhpQ29uc3RhbnRzLlNhbXBsZURpYWdub3N0aWMgfX1cbiAgICAgKi9cbiAgICBwdWJsaWMgb25TdGFiaWxpemluZzogYW55O1xuXG4gICAgLyoqXG4gICAgICogRXZlbnRvIGxhbnphZG8gY3VhbmRvIGVsIHByb2Nlc28gZGUgZXh0cmFjY2nDs24gaGEgZmluYWxpemFkbyBjb3JyZWN0YW1lbnRlLiBEZXZ1ZWx2ZSBlbCByZXN1bHRhZG8gZGUgbGEgY2FwdHVyYS5cbiAgICAgKiBAY2FsbGJhY2sgZXZ0IHt7IHRlbXBsYXRlLCBpbWFnZXMsIHRpbWVTdGFtcCwgdGVtcGxhdGVSYXcsIGxpdmVuZXNzTW92ZUZhaWxzLCBzdW5HbGFzc2VzU2NvcmUsIGxpdmVuZXNzTW92ZUhpc3RvcnksIGxpdmVuZXNzTW92ZVN0YWJpbGl6ZWRIaXN0b3J5LCBsaXZlbmVzc01vdmVTdGFiaWxpemVkU3RhdHVzIH19XG4gICAgICovXG4gICAgcHVibGljIG9uRXh0cmFjdGlvbkZpbmlzaDogYW55O1xuXG4gICAgLyoqXG4gICAgICogRXZlbnRvIGxhbnphZG8gY3VhbmRvIGVsIHVzdWFyaW8gY2FuY2VsYSBlbCBwcm9jZXNvIGRlIGV4dHJhY2Npw7NuLlxuICAgICAqL1xuICAgIHB1YmxpYyBvblVzZXJDYW5jZWw6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEV2ZW50byBsYW56YWRvIGVuIGNhc28gZGUgcXVlIHNlIHByb2R1emNhIHVuIGVycm9yIGludGVybm8gZGVsIHdpZGdldC5cbiAgICAgKiBAY2FsbGJhY2sgZXZ0IHt7IGRldGFpbDogeyBtZXNzYWdlOiBzdHJpbmcsIGV4Y2VwdGlvblR5cGU6IEZQaGlTZWxwaGlDb25zdGFudHMuRXhjZXB0aW9uVHlwZSB9IH19XG4gICAgICovXG4gICAgcHVibGljIG9uRXhjZXB0aW9uQ2FwdHVyZWQ6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEV2ZW50byBsYW56YWRvIGN1YW5kbyBlbCBwcm9jZXNvIGRlIHZlcmlmaWNhY2nDs24gZGUgYXV0ZW50aWNpZGFkIHBvciBwcnVlYmEgZGUgdmlkYSBmYWxsYS5cbiAgICAgKiBAY2FsbGJhY2sgZXZ0IHt7IGRldGFpbDogeyB0ZW1wbGF0ZSwgaW1hZ2VzLCB0aW1lU3RhbXAsIHRlbXBsYXRlUmF3LCBsaXZlbmVzc01vdmVGYWlscywgc3VuR2xhc3Nlc1Njb3JlLCBsaXZlbmVzc01vdmVIaXN0b3J5LCBsaXZlbmVzc01vdmVTdGFiaWxpemVkSGlzdG9yeSwgbGl2ZW5lc3NNb3ZlU3RhYmlsaXplZFN0YXR1cyB9IH19XG4gICAgICovXG4gICAgcHVibGljIG9uTGl2ZW5lc3NFcnJvcjogYW55O1xuXG4gICAgLyoqXG4gICAgICogRXZlbnRvIGxhbnphZG8gY3VhbmRvIGVsIHByb2Nlc28gZGUgdmVyaWZpY2FjacOzbiBkZSBhdXRlbnRpY2lkYWQgcG9yIHBydWViYSBkZSB2aWRhIGZhbGxhIHkgZWwgdXN1YXJpbyBwdWxzYSBlbCBib3TDs24gZGUgbGEgcGFudGFsbGEgZGUgZXJyb3IgbW9zdHJhZGEuXG4gICAgICovXG4gICAgcHVibGljIG9uTGl2ZW5lc3NFcnJvckJ1dHRvbkNsaWNrOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBFdmVudG8gbGFuemFkbyBzaSBlbCBwcm9jZXNvIGRlIGNhcHR1cmEgZXhjZWRlIGVsIHRpZW1wbyBtw6F4aW1vIGRpc3BvbmlibGUuXG4gICAgICogQGNhbGxiYWNrIGV2dCB7eyBkZXRhaWw6IHsgdGVtcGxhdGUsIGltYWdlcywgdGltZVN0YW1wLCB0ZW1wbGF0ZVJhdywgbGl2ZW5lc3NNb3ZlRmFpbHMsIHN1bkdsYXNzZXNTY29yZSwgbGl2ZW5lc3NNb3ZlSGlzdG9yeSwgbGl2ZW5lc3NNb3ZlU3RhYmlsaXplZEhpc3RvcnksIGxpdmVuZXNzTW92ZVN0YWJpbGl6ZWRTdGF0dXMgfSB9fVxuICAgICAqL1xuICAgIHB1YmxpYyBvbkV4dHJhY3Rpb25UaW1lb3V0OiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBFdmVudG8gbGFuemFkbyBjdWFuZG8gZWwgcHJvY2VzbyBkZSBjYXB0dXJhIGV4Y2VkZSBlbCB0aWVtcG8gbcOheGltbyBkaXNwb25pYmxlIHkgZWwgdXN1YXJpbyBwdWxzYSBlbCBib3TDs24gZGUgbGEgcGFudGFsbGEgZGUgZXJyb3IgbW9zdHJhZGEuXG4gICAgICovXG4gICAgcHVibGljIG9uVGltZW91dEVycm9yQnV0dG9uQ2xpY2s6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEV2ZW50byBsYW56YWRvIHRyYXMgY3VhbHF1aWVyIGFjY2nDs24gcmVhbGl6YWRhIHBvciBlbCB1c3VhcmlvIHNvYnJlIGxhIGludGVyZmF6IGdyw6FmaWNhIGRlbCB3aWRnZXQgbyBhbnRlIGN1YWxxdWllciBjYW1iaW8gZGUgZXN0YWRvXG4gICAgICogZHVyYW50ZSBlbCBwcm9jZXNvIGRlIGNhcHR1cmEuXG4gICAgICovXG4gICAgcHVibGljIG9uVHJhY2tTdGF0dXM6IGFueTtcblxuICAgIC8vICNlbmRyZWdpb25cblxuICAgIC8vICNyZWdpb24gXCJNw6l0b2RvcyBww7pibGljb3NcIlxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhIHVuYSBpbnN0YW5jaWEgZGUgXCJGUGhpLlNlbHBoaS5Db25maWd1cmF0aW9uTWFuYWdlclwiIGNvbiBsb3MgZGF0b3MgZGUgY29uZmlndXJhY2nDs24gZGUgbGEgaW5zdGFuY2lhIGFjdHVhbCBwYXJhIGluaWNpYWxpemFyIGVsIHdpZGdldC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0TmF0aXZlQ29uZmlndXJhdGlvbigpIHtcbiAgICAgICAgY29uc3QgY29uZmlndXJhdGlvbk1hbmFnZXIgPSBuZXcgd2luZG93W1wiRlBoaVwiXS5TZWxwaGkuQ29uZmlndXJhdGlvbk1hbmFnZXIoKTtcblxuICAgICAgICAvLyBQcm9waWVkYWRlcyBkZSBjb25maWd1cmFjacOzblxuICAgICAgICB0aGlzLnNldE5hdGl2ZUNvbmZpZ3VyYXRpb24odGhpcy53aWRnZXRDb250YWluZXIsIGNvbmZpZ3VyYXRpb25NYW5hZ2VyLnNldENvbnRhaW5lciwgY29uZmlndXJhdGlvbk1hbmFnZXIpO1xuICAgICAgICB0aGlzLnNldE5hdGl2ZUNvbmZpZ3VyYXRpb24odGhpcy5yZXNvdXJjZXNQYXRoLCBjb25maWd1cmF0aW9uTWFuYWdlci5zZXRSZXNvdXJjZXNQYXRoLCBjb25maWd1cmF0aW9uTWFuYWdlcik7XG4gICAgICAgIHRoaXMuc2V0TmF0aXZlQ29uZmlndXJhdGlvbih0aGlzLmdyYXBoUGF0aCwgY29uZmlndXJhdGlvbk1hbmFnZXIuc2V0R3JhcGhQYXRoLCBjb25maWd1cmF0aW9uTWFuYWdlcik7XG4gICAgICAgIHRoaXMuc2V0TmF0aXZlQ29uZmlndXJhdGlvbih0aGlzLmxhbmd1YWdlLCBjb25maWd1cmF0aW9uTWFuYWdlci5zZXRMYW5ndWFnZSwgY29uZmlndXJhdGlvbk1hbmFnZXIpO1xuICAgICAgICB0aGlzLnNldE5hdGl2ZUNvbmZpZ3VyYXRpb24odGhpcy5kcGlMaXN0LCBjb25maWd1cmF0aW9uTWFuYWdlci5zZXREcGlMaXN0LCBjb25maWd1cmF0aW9uTWFuYWdlcik7XG5cbiAgICAgICAgdGhpcy5zZXROYXRpdmVDb25maWd1cmF0aW9uKHRoaXMudHJ5UGFyc2VJbnQodGhpcy5jYW1lcmFXaWR0aCksIGNvbmZpZ3VyYXRpb25NYW5hZ2VyLnNldENhbWVyYVdpZHRoLCBjb25maWd1cmF0aW9uTWFuYWdlcik7XG4gICAgICAgIHRoaXMuc2V0TmF0aXZlQ29uZmlndXJhdGlvbih0aGlzLnRyeVBhcnNlSW50KHRoaXMuY2FtZXJhSGVpZ2h0KSwgY29uZmlndXJhdGlvbk1hbmFnZXIuc2V0Q2FtZXJhSGVpZ2h0LCBjb25maWd1cmF0aW9uTWFuYWdlcik7XG4gICAgICAgIHRoaXMuc2V0TmF0aXZlQ29uZmlndXJhdGlvbih0aGlzLnRyeVBhcnNlSW50KHRoaXMuY2FtZXJhUm90YXRpb24pLCBjb25maWd1cmF0aW9uTWFuYWdlci5zZXRDYW1lcmFSb3RhdGlvbiwgY29uZmlndXJhdGlvbk1hbmFnZXIpO1xuICAgICAgICB0aGlzLnNldE5hdGl2ZUNvbmZpZ3VyYXRpb24odGhpcy50cnlQYXJzZUludCh0aGlzLmNhbWVyYVR5cGUpLCBjb25maWd1cmF0aW9uTWFuYWdlci5zZXRDYW1lcmFUeXBlLCBjb25maWd1cmF0aW9uTWFuYWdlcik7XG5cbiAgICAgICAgdGhpcy5zZXROYXRpdmVDb25maWd1cmF0aW9uKHRoaXMudHV0b3JpYWwsIGNvbmZpZ3VyYXRpb25NYW5hZ2VyLnNldFR1dG9yaWFsLCBjb25maWd1cmF0aW9uTWFuYWdlcik7XG4gICAgICAgIHRoaXMuc2V0TmF0aXZlQ29uZmlndXJhdGlvbih0aGlzLnRyeVBhcnNlSW50KHRoaXMuZXh0cmFjdGlvbk1vZGUpLCBjb25maWd1cmF0aW9uTWFuYWdlci5zZXRNb2RlLCBjb25maWd1cmF0aW9uTWFuYWdlcik7XG5cbiAgICAgICAgdGhpcy5zZXROYXRpdmVDb25maWd1cmF0aW9uKHRoaXMudHJ5UGFyc2VJbnQodGhpcy5saXZlbmVzc01vZGUpLCBjb25maWd1cmF0aW9uTWFuYWdlci5zZXRMaXZlbmVzc01vZGUsIGNvbmZpZ3VyYXRpb25NYW5hZ2VyKTtcbiAgICAgICAgdGhpcy5zZXROYXRpdmVDb25maWd1cmF0aW9uKHRoaXMudHJ5UGFyc2VJbnQodGhpcy5saXZlbmVzc1ByZWNpc2lvbiksIGNvbmZpZ3VyYXRpb25NYW5hZ2VyLnNldExpdmVuZXNzUHJlY2lzaW9uLCBjb25maWd1cmF0aW9uTWFuYWdlcik7XG4gICAgICAgIHRoaXMuc2V0TmF0aXZlQ29uZmlndXJhdGlvbih0aGlzLnRyeVBhcnNlSW50KHRoaXMubGl2ZW5lc3NNb3ZlSW5pdGlhbEVycm9yKSwgY29uZmlndXJhdGlvbk1hbmFnZXIuc2V0TGl2ZW5lc3NNb3ZlSW5pdGlhbEVycm9yLCBjb25maWd1cmF0aW9uTWFuYWdlcik7XG4gICAgICAgIHRoaXMuc2V0TmF0aXZlQ29uZmlndXJhdGlvbih0aGlzLnRyeVBhcnNlRmxvYXQodGhpcy5saXZlbmVzc01vdmVJbmZvVGltZSksIGNvbmZpZ3VyYXRpb25NYW5hZ2VyLnNldExpdmVuZXNzTW92ZUluZm9UaW1lLCBjb25maWd1cmF0aW9uTWFuYWdlcik7XG5cbiAgICAgICAgdGhpcy5zZXROYXRpdmVDb25maWd1cmF0aW9uKHRoaXMuaW50ZXJhY3RpYmxlLCBjb25maWd1cmF0aW9uTWFuYWdlci5zZXRJbnRlcmFjdGlibGUsIGNvbmZpZ3VyYXRpb25NYW5hZ2VyKTtcbiAgICAgICAgdGhpcy5zZXROYXRpdmVDb25maWd1cmF0aW9uKHRoaXMudHJ5UGFyc2VGbG9hdCh0aGlzLnJlZ2lzdGVyVGltZSksIGNvbmZpZ3VyYXRpb25NYW5hZ2VyLnNldFJlZ2lzdGVyVGltZSwgY29uZmlndXJhdGlvbk1hbmFnZXIpO1xuICAgICAgICB0aGlzLnNldE5hdGl2ZUNvbmZpZ3VyYXRpb24odGhpcy50cnlQYXJzZUZsb2F0KHRoaXMuYXV0aGVudGljYXRlVGltZSksIGNvbmZpZ3VyYXRpb25NYW5hZ2VyLnNldEF1dGhlbnRpY2F0ZVRpbWUsIGNvbmZpZ3VyYXRpb25NYW5hZ2VyKTtcblxuICAgICAgICB0aGlzLnNldE5hdGl2ZUNvbmZpZ3VyYXRpb24odGhpcy5pbWFnZUZvcm1hdCwgY29uZmlndXJhdGlvbk1hbmFnZXIuc2V0SW1hZ2VGb3JtYXQsIGNvbmZpZ3VyYXRpb25NYW5hZ2VyKTtcbiAgICAgICAgdGhpcy5zZXROYXRpdmVDb25maWd1cmF0aW9uKHRoaXMudHJ5UGFyc2VGbG9hdCh0aGlzLmltYWdlUXVhbGl0eSksIGNvbmZpZ3VyYXRpb25NYW5hZ2VyLnNldEltYWdlUXVhbGl0eSwgY29uZmlndXJhdGlvbk1hbmFnZXIpO1xuICAgICAgICB0aGlzLnNldE5hdGl2ZUNvbmZpZ3VyYXRpb24odGhpcy5sb2dJbWFnZXMsIGNvbmZpZ3VyYXRpb25NYW5hZ2VyLnNldExvZ0ltYWdlcywgY29uZmlndXJhdGlvbk1hbmFnZXIpO1xuXG4gICAgICAgIHRoaXMuc2V0TmF0aXZlQ29uZmlndXJhdGlvbih0aGlzLnRyeVBhcnNlRmxvYXQodGhpcy5jcm9wRmFjdG9yKSwgY29uZmlndXJhdGlvbk1hbmFnZXIuc2V0Q3JvcEZhY3RvciwgY29uZmlndXJhdGlvbk1hbmFnZXIpO1xuICAgICAgICB0aGlzLnNldE5hdGl2ZUNvbmZpZ3VyYXRpb24odGhpcy5jcm9wSW1hZ2UsIGNvbmZpZ3VyYXRpb25NYW5hZ2VyLnNldENyb3BJbWFnZSwgY29uZmlndXJhdGlvbk1hbmFnZXIpO1xuXG4gICAgICAgIHRoaXMuc2V0TmF0aXZlQ29uZmlndXJhdGlvbih0aGlzLnRyeVBhcnNlSW50KHRoaXMudGVtcGxhdGVGb3JtYXQpLCBjb25maWd1cmF0aW9uTWFuYWdlci5zZXRUZW1wbGF0ZUZvcm1hdCwgY29uZmlndXJhdGlvbk1hbmFnZXIpO1xuICAgICAgICB0aGlzLnNldE5hdGl2ZUNvbmZpZ3VyYXRpb24odGhpcy5zdGFiaWxpemF0aW9uU3RhZ2UsIGNvbmZpZ3VyYXRpb25NYW5hZ2VyLnNldFN0YWJpbGl6YXRpb25TdGFnZSwgY29uZmlndXJhdGlvbk1hbmFnZXIpO1xuXG4gICAgICAgIHRoaXMuc2V0TmF0aXZlQ29uZmlndXJhdGlvbih0aGlzLnZpZGVvUmVjb3JkLCBjb25maWd1cmF0aW9uTWFuYWdlci5zZXRWaWRlb1JlY29yZCwgY29uZmlndXJhdGlvbk1hbmFnZXIpO1xuICAgICAgICB0aGlzLnNldE5hdGl2ZUNvbmZpZ3VyYXRpb24odGhpcy50cnlQYXJzZUludCh0aGlzLnZpZGVvUmVjb3JkUmF0ZSksIGNvbmZpZ3VyYXRpb25NYW5hZ2VyLnNldFZpZGVvUmVjb3JkUmF0ZSwgY29uZmlndXJhdGlvbk1hbmFnZXIpO1xuICAgICAgICB0aGlzLnNldE5hdGl2ZUNvbmZpZ3VyYXRpb24odGhpcy50cnlQYXJzZUZsb2F0KHRoaXMudmlkZW9SZWNvcmRTY2FsZSksIGNvbmZpZ3VyYXRpb25NYW5hZ2VyLnNldFZpZGVvUmVjb3JkU2NhbGUsIGNvbmZpZ3VyYXRpb25NYW5hZ2VyKTtcbiAgICAgICAgdGhpcy5zZXROYXRpdmVDb25maWd1cmF0aW9uKHRoaXMudHJ5UGFyc2VJbnQodGhpcy52aWRlb1JlY29yZFR5cGUpLCBjb25maWd1cmF0aW9uTWFuYWdlci5zZXRWaWRlb1JlY29yZFR5cGUsIGNvbmZpZ3VyYXRpb25NYW5hZ2VyKTtcblxuICAgICAgICAvLyBFdmVudG9zXG4gICAgICAgIHRoaXMuc2V0TmF0aXZlQ29uZmlndXJhdGlvbih0aGlzLm9uTW9kdWxlTG9hZGVkLCBjb25maWd1cmF0aW9uTWFuYWdlci5zZXRPbk1vZHVsZUxvYWRlZCwgY29uZmlndXJhdGlvbk1hbmFnZXIpO1xuICAgICAgICB0aGlzLnNldE5hdGl2ZUNvbmZpZ3VyYXRpb24odGhpcy5vblN0YWJpbGl6aW5nLCBjb25maWd1cmF0aW9uTWFuYWdlci5zZXRPblN0YWJpbGl6aW5nLCBjb25maWd1cmF0aW9uTWFuYWdlcik7XG4gICAgICAgIHRoaXMuc2V0TmF0aXZlQ29uZmlndXJhdGlvbih0aGlzLm9uRXh0cmFjdGlvbkZpbmlzaCwgY29uZmlndXJhdGlvbk1hbmFnZXIuc2V0T25FeHRyYWN0aW9uRmluaXNoLCBjb25maWd1cmF0aW9uTWFuYWdlcik7XG4gICAgICAgIHRoaXMuc2V0TmF0aXZlQ29uZmlndXJhdGlvbih0aGlzLm9uVXNlckNhbmNlbCwgY29uZmlndXJhdGlvbk1hbmFnZXIuc2V0T25Vc2VyQ2FuY2VsLCBjb25maWd1cmF0aW9uTWFuYWdlcik7XG4gICAgICAgIHRoaXMuc2V0TmF0aXZlQ29uZmlndXJhdGlvbih0aGlzLm9uRXhjZXB0aW9uQ2FwdHVyZWQsIGNvbmZpZ3VyYXRpb25NYW5hZ2VyLnNldE9uRXhjZXB0aW9uQ2FwdHVyZWQsIGNvbmZpZ3VyYXRpb25NYW5hZ2VyKTtcbiAgICAgICAgdGhpcy5zZXROYXRpdmVDb25maWd1cmF0aW9uKHRoaXMub25MaXZlbmVzc0Vycm9yLCBjb25maWd1cmF0aW9uTWFuYWdlci5zZXRPbkxpdmVuZXNzRXJyb3IsIGNvbmZpZ3VyYXRpb25NYW5hZ2VyKTtcbiAgICAgICAgdGhpcy5zZXROYXRpdmVDb25maWd1cmF0aW9uKHRoaXMub25MaXZlbmVzc0Vycm9yQnV0dG9uQ2xpY2ssIGNvbmZpZ3VyYXRpb25NYW5hZ2VyLnNldE9uTGl2ZW5lc3NFcnJvckJ1dHRvbkNsaWNrLCBjb25maWd1cmF0aW9uTWFuYWdlcik7XG4gICAgICAgIHRoaXMuc2V0TmF0aXZlQ29uZmlndXJhdGlvbih0aGlzLm9uRXh0cmFjdGlvblRpbWVvdXQsIGNvbmZpZ3VyYXRpb25NYW5hZ2VyLnNldE9uRXh0cmFjdGlvblRpbWVvdXQsIGNvbmZpZ3VyYXRpb25NYW5hZ2VyKTtcbiAgICAgICAgdGhpcy5zZXROYXRpdmVDb25maWd1cmF0aW9uKHRoaXMub25UaW1lb3V0RXJyb3JCdXR0b25DbGljaywgY29uZmlndXJhdGlvbk1hbmFnZXIuc2V0T25UaW1lb3V0RXJyb3JCdXR0b25DbGljaywgY29uZmlndXJhdGlvbk1hbmFnZXIpO1xuICAgICAgICB0aGlzLnNldE5hdGl2ZUNvbmZpZ3VyYXRpb24odGhpcy5vblRyYWNrU3RhdHVzLCBjb25maWd1cmF0aW9uTWFuYWdlci5zZXRPblRyYWNrU3RhdHVzLCBjb25maWd1cmF0aW9uTWFuYWdlcik7XG5cbiAgICAgICAgcmV0dXJuIGNvbmZpZ3VyYXRpb25NYW5hZ2VyO1xuICAgIH1cblxuICAgIC8vICNlbmRyZWdpb25cblxuICAgIC8vICNyZWdpb24gXCJNw6l0b2RvcyBwcml2YWRvc1wiXG5cbiAgICBwcml2YXRlIHNldE5hdGl2ZUNvbmZpZ3VyYXRpb24ocHJvcGVydHksIGNvbmZpZ3VyYXRpb25TZXR0ZXJGdW5jLCBjb250ZXh0OiBhbnkgPSBudWxsKSB7XG4gICAgICAgIGlmIChwcm9wZXJ0eSA9PT0gbnVsbCB8fCBwcm9wZXJ0eSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHNldHRlckZ1bmMgPSBjb250ZXh0ID8gY29uZmlndXJhdGlvblNldHRlckZ1bmMuYmluZChjb250ZXh0KSA6IGNvbmZpZ3VyYXRpb25TZXR0ZXJGdW5jO1xuICAgICAgICBzZXR0ZXJGdW5jKHByb3BlcnR5KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHRyeVBhcnNlSW50KHZhbHVlOiBhbnkpIHtcbiAgICAgICAgdmFyIGludFZhbHVlID0gcGFyc2VJbnQodmFsdWUpO1xuICAgICAgICByZXR1cm4gIWlzTmFOKGludFZhbHVlKSA/IGludFZhbHVlIDogdmFsdWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0cnlQYXJzZUZsb2F0KHZhbHVlOiBhbnkpIHtcbiAgICAgICAgdmFyIGZsb2F0VmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICAgICAgcmV0dXJuICFpc05hTihmbG9hdFZhbHVlKSA/IGZsb2F0VmFsdWUgOiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvLyAjZW5kcmVnaW9uXG59XG4iXX0=