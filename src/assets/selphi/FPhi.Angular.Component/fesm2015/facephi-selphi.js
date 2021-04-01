import { Observable } from 'rxjs';
import { timer } from 'rxjs/index';
import { Injectable, Inject, RendererFactory2, NgModule, Component, Input, Output, ViewChild, EventEmitter, HostBinding, defineInjectable, inject } from '@angular/core';
import { DOCUMENT, CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Modelo con la información de configuración del widget Selphi.
 */
class FPhiSelphiConfiguration {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RxjsHelper {
    /**
     * Encapsula una rutina de chequeo de una condición hasta que ésta se cumpla.
     * @param {?} pollTime Intervalo de chequeo (en ms).
     * @param {?} evalFunc Función para evaluar la condición deseada.
     * @param {?} successFunc Función a invocar cuando la condición se cumpla.
     * @param {?=} delayTime Tiempo de retardo para iniciar el proceso de chequeo. Por defecto 0ms.
     * @return {?}
     */
    static poll(pollTime, evalFunc, successFunc, delayTime = 0) {
        /** @type {?} */
        const subscription = timer(delayTime, pollTime)
            .subscribe((/**
         * @return {?}
         */
        () => {
            if (!evalFunc())
                return;
            subscription.unsubscribe();
            successFunc();
        }));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FPhiSelphiWidgetService {
    // #endregion
    // #region "Constructores"
    /**
     * @param {?} document
     * @param {?} rendererFactory
     */
    constructor(document, rendererFactory) {
        this.document = document;
        this.rendererFactory = rendererFactory;
        this._renderer = this.rendererFactory.createRenderer(null, null);
    }
    // #endregion
    // #region "Propiedades"
    /**
     * @private
     * @return {?}
     */
    get fPhiSelphiNamespace() { return window["FPhi"] && window["FPhi"].Selphi ? window["FPhi"].Selphi : undefined; }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    set fPhiSelphiNamespace(value) {
        if (window["FPhi"])
            window["FPhi"].Selphi = value;
    }
    /**
     * @private
     * @return {?}
     */
    get fPhiWidgetScriptPath() { return `${this._assetsBasePath}/FPhi.Widget.wasm.js`; }
    // #endregion
    // #region "Métodos públicos"
    /**
     * Realiza la carga dinámica del recurso javascript del widget web.
     * @param {?} basePath Ruta base de la carpeta de los ficheros del widget.
     * @return {?}
     */
    loadControl(basePath) {
        //console.log(`>>>> FPhiSelphiWidgetService :: loadControl --> basePath: ${basePath}`);
        this._assetsBasePath = basePath;
        /** @type {?} */
        const fPhiWidgetScript = this._renderer.createElement("script");
        this._renderer.setAttribute(fPhiWidgetScript, "src", this.fPhiWidgetScriptPath);
        this._renderer.setAttribute(fPhiWidgetScript, "type", "text/javascript");
        this._renderer.appendChild(this.document.body, fPhiWidgetScript);
        return new Observable((/**
         * @param {?} subscriber
         * @return {?}
         */
        subscriber => {
            RxjsHelper.poll(5, (/**
             * @return {?}
             */
            () => this.fPhiSelphiNamespace !== null && this.fPhiSelphiNamespace !== undefined && this.fPhiSelphiNamespace.Widget !== null && this.fPhiSelphiNamespace.Widget !== undefined), (/**
             * @return {?}
             */
            () => subscriber.next(this)));
        }));
    }
    /**
     * Elimina los recursos javascript del widget incluidos en el DOM de la página.
     * @return {?}
     */
    removeControl() {
        if (!this._assetsBasePath)
            return this;
        //console.warn(`>>>> FPhiSelphiWidgetService :: removeControl("${this._assetsBasePath}")`);
        delete this._fPhiWidget;
        delete this._fPhiWidgetConfiguration;
        delete this.fPhiSelphiNamespace;
        this._fPhiWidget = undefined;
        this._fPhiWidgetConfiguration = undefined;
        this.fPhiSelphiNamespace = undefined;
        this.document
            .querySelectorAll(`script[src*="${this._assetsBasePath}"]`)
            .forEach((/**
         * @param {?} element
         * @return {?}
         */
        element => { element.parentNode.removeChild(element); }));
        this.document
            .querySelectorAll("style#FPhi_Widget_style")
            .forEach((/**
         * @param {?} element
         * @return {?}
         */
        element => { element.parentNode.removeChild(element); }));
        //console.warn(`>>>> FPhiSelphiWidgetService :: Control removed`);
        return this;
    }
    /**
     * Crea una instancia del widget web nativo con los datos de configuración indicados.
     * @param {?} config Datos de configuración del widget.
     * @return {?}
     */
    createUserControl(config) {
        //console.warn(">>>> FPhiSelphiWidgetService :: createUserControl", config, config.getNativeConfiguration());
        this._fPhiWidgetConfiguration = config;
        this._fPhiWidget = new this.fPhiSelphiNamespace.Widget(config.getNativeConfiguration());
        //console.log(this._fPhiWidget);
        if (this._fPhiWidgetConfiguration.debugMode !== null && this._fPhiWidgetConfiguration.debugMode !== undefined)
            this._fPhiWidget.debug = this._fPhiWidgetConfiguration.debugMode;
        //console.log(this._fPhiWidget);
        return this;
    }
    /**
     * Inicia el widget.
     * @return {?}
     */
    startUserControl() {
        if (this._fPhiWidget)
            this._fPhiWidget.Start();
        return this;
    }
    /**
     * Detiene la ejecución del widget.
     * @return {?}
     */
    stopUserControl() {
        if (this._fPhiWidget)
            this._fPhiWidget.Stop();
        return this;
    }
}
FPhiSelphiWidgetService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
/** @nocollapse */
FPhiSelphiWidgetService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: RendererFactory2 }
];
/** @nocollapse */ FPhiSelphiWidgetService.ngInjectableDef = defineInjectable({ factory: function FPhiSelphiWidgetService_Factory() { return new FPhiSelphiWidgetService(inject(DOCUMENT), inject(RendererFactory2)); }, token: FPhiSelphiWidgetService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FacePhiSelphiComponent {
    // #endregion
    // #endregion
    // #region "Constructores"
    /**
     * @param {?} widgetService
     */
    constructor(widgetService) {
        this.widgetService = widgetService;
        // #region "Atributos"
        this._cssClass = "";
        this._widgetConfiguration = new FPhiSelphiConfiguration();
        // #region "Configuración"
        /**
         * Ruta en la que están localizados los recursos javascript nativos del widget web.
         */
        this.widgetLibPath = "assets/lib/facephi/selphi";
        /**
         * Flag para indicar si queremos que sea el componente el encargado de cargar e inicializar todos los recursos javascript del widget y borrarlos en su evento 'onDestroy'.
         */
        this.autoLoadLibResources = true;
        // #endregion
        // #region "Eventos"
        /**
         * Evento lanzado cuando los recursos del widget se han cargado correctamente.
         */
        this.onComponentLoaded = new EventEmitter();
        /**
         * Evento lanzado por el widget cuando se ha finalizado el proceso de carga e inicialización, tando del widget, como de los recursos asociados al mismo.
         */
        this.onModuleLoaded = new EventEmitter();
        /**
         * Evento lanzado durante los ciclos de estabilización de la imagen para la correcta realización de la captura.
         */
        this.onStabilizing = new EventEmitter();
        /**
         * Evento lanzado cuando el proceso de extracción ha finalizado correctamente. Devuelve el resultado de la captura.
         */
        this.onExtractionFinish = new EventEmitter();
        /**
         * Evento lanzado cuando el usuario cancela el proceso de extracción.
         */
        this.onUserCancel = new EventEmitter();
        /**
         * Evento lanzado en caso de que se produzca un error interno del widget.
         */
        this.onExceptionCaptured = new EventEmitter();
        /**
         * Evento lanzado cuando el proceso de verificación de autenticidad por prueba de vida falla.
         */
        this.onLivenessError = new EventEmitter();
        /**
         * Evento lanzado cuando el proceso de verificación de autenticidad por prueba de vida falla y el usuario pulsa el botón de la pantalla de error mostrada.
         */
        this.onLivenessErrorButtonClick = new EventEmitter();
        /**
         * Evento lanzado si el proceso de captura excede el tiempo máximo disponible.
         */
        this.onExtractionTimeout = new EventEmitter();
        /**
         * Evento lanzado cuando el proceso de captura excede el tiempo máximo disponible y el usuario pulsa el botón de la pantalla de error mostrada.
         */
        this.onTimeoutErrorButtonClick = new EventEmitter();
        /**
         * Evento lanzado tras cualquier acción realizada por el usuario sobre la interfaz gráfica del widget o ante cualquier cambio de estado
         * durante el proceso de captura.
         */
        this.onTrackStatus = new EventEmitter();
    }
    // #endregion
    // #region "Propiedades"
    /**
     * @return {?}
     */
    get cssClass() {
        return this._cssClass;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set cssClass(value) {
        if (value)
            this._cssClass += ` ${value}`;
    }
    /**
     * @return {?}
     */
    get widgetWidth() {
        return this.componentWidth
            ? typeof this.componentWidth === "string" && this.componentWidth.endsWith("%")
                ? this.componentWidth
                : parseFloat(this.componentWidth) !== NaN
                    ? `${parseFloat(this.componentWidth)}px`
                    : this.componentWidth
            : "100%";
    }
    /**
     * @return {?}
     */
    get widgetHeight() {
        return this.componentHeight
            ? typeof this.componentHeight === "string" && this.componentHeight.endsWith("%")
                ? this.componentHeight
                : parseFloat(this.componentHeight) !== NaN
                    ? `${parseFloat(this.componentHeight)}px`
                    : this.componentHeight
            : "100%";
    }
    /**
     * Ruta donde está ubicado el fichero widget.xml y el resto de recursos personalizables del widget.
     * @param {?} value
     * @return {?}
     */
    set resourcesPath(value) {
        this._widgetConfiguration.resourcesPath = value;
    }
    /**
     * @return {?}
     */
    get resourcesPath() { return this._widgetConfiguration.resourcesPath; }
    /**
     * Ruta donde está ubicado el fichero graph.xml.
     * @param {?} value
     * @return {?}
     */
    set graphPath(value) {
        this._widgetConfiguration.graphPath = value;
    }
    /**
     * @return {?}
     */
    get graphPath() { return this._widgetConfiguration.graphPath; }
    /**
     * Idioma en que se mostrará la información del widget.
     * @param {?} value
     * @return {?}
     */
    set language(value) {
        this._widgetConfiguration.language = value;
    }
    /**
     * @return {?}
     */
    get language() { return this._widgetConfiguration.language; }
    /**
     * Lista de densidades de píxeles en pantalla soportadas por el widget, de cara a mostrar las imágenes de recurso adecuadas a la pantalla actual.
     * @param {?} value
     * @return {?}
     */
    set dpiList(value) {
        this._widgetConfiguration.dpiList = value;
    }
    /**
     * @return {?}
     */
    get dpiList() { return this._widgetConfiguration.dpiList; }
    /**
     * Resolución horizontal preferida de la cámara (el widget intentará seleccionar la resolución más cercana).
     * @param {?} value
     * @return {?}
     */
    set cameraWidth(value) {
        this._widgetConfiguration.cameraWidth = value;
    }
    /**
     * @return {?}
     */
    get cameraWidth() { return this._widgetConfiguration.cameraWidth; }
    /**
     * Resolución vertical preferida de la cámara (el widget intentará seleccionar la resolución más cercana).
     * @param {?} value
     * @return {?}
     */
    set cameraHeight(value) {
        this._widgetConfiguration.cameraHeight = value;
    }
    /**
     * @return {?}
     */
    get cameraHeight() { return this._widgetConfiguration.cameraHeight; }
    /**
     * Rotación de la cámara.
     * @param {?} value
     * @return {?}
     */
    set cameraRotation(value) {
        this._widgetConfiguration.cameraRotation = value;
    }
    /**
     * @return {?}
     */
    get cameraRotation() { return this._widgetConfiguration.cameraRotation; }
    /**
     * Selector de tipo de cámara a utilizar para realizar la captura (frontal o trasera).
     * @param {?} value
     * @return {?}
     */
    set cameraType(value) {
        this._widgetConfiguration.cameraType = value;
    }
    /**
     * @return {?}
     */
    get cameraType() { return this._widgetConfiguration.cameraType; }
    /**
     * Indica si el tutorial está disponible en el widget.
     * @param {?} value
     * @return {?}
     */
    set tutorial(value) {
        this._widgetConfiguration.tutorial = value;
    }
    /**
     * @return {?}
     */
    get tutorial() { return this._widgetConfiguration.tutorial; }
    /**
     * Modo de extracción o flujo de ejecución utilizado por el widget.
     * @param {?} value
     * @return {?}
     */
    set extractionMode(value) {
        this._widgetConfiguration.extractionMode = value;
    }
    /**
     * @return {?}
     */
    get extractionMode() { return this._widgetConfiguration.extractionMode; }
    /**
     * Modos de verificación de prueba de vida utilizado por el widget.
     * @param {?} value
     * @return {?}
     */
    set livenessMode(value) {
        this._widgetConfiguration.livenessMode = value;
    }
    /**
     * @return {?}
     */
    get livenessMode() { return this._widgetConfiguration.livenessMode; }
    /**
     *
     * @param {?} value
     * @return {?}
     */
    set livenessPrecision(value) {
        this._widgetConfiguration.livenessPrecision = value;
    }
    /**
     * @return {?}
     */
    get livenessPrecision() { return this._widgetConfiguration.livenessPrecision; }
    /**
     *
     * @param {?} value
     * @return {?}
     */
    set livenessMoveInitialError(value) {
        this._widgetConfiguration.livenessMoveInitialError = value;
    }
    /**
     * @return {?}
     */
    get livenessMoveInitialError() { return this._widgetConfiguration.livenessMoveInitialError; }
    /**
     *
     * @param {?} value
     * @return {?}
     */
    set livenessMoveInfoTime(value) {
        this._widgetConfiguration.livenessMoveInfoTime = value;
    }
    /**
     * @return {?}
     */
    get livenessMoveInfoTime() { return this._widgetConfiguration.livenessMoveInfoTime; }
    /**
     * Indica si el widget permite la interacción con el usuario.
     * @param {?} value
     * @return {?}
     */
    set interactible(value) {
        this._widgetConfiguration.interactible = value;
    }
    /**
     * @return {?}
     */
    get interactible() { return this._widgetConfiguration.interactible; }
    /**
     * Tiempo de registro en segundos.
     * @param {?} value
     * @return {?}
     */
    set registerTime(value) {
        this._widgetConfiguration.registerTime = value;
    }
    /**
     * @return {?}
     */
    get registerTime() { return this._widgetConfiguration.registerTime; }
    /**
     * Tiempo de autenticación en segundos.
     * @param {?} value
     * @return {?}
     */
    set authenticateTime(value) {
        this._widgetConfiguration.authenticateTime = value;
    }
    /**
     * @return {?}
     */
    get authenticateTime() { return this._widgetConfiguration.authenticateTime; }
    /**
     * Formato de las imágenes capturadas por el widget (MIME type).
     * @param {?} value
     * @return {?}
     */
    set imageFormat(value) {
        this._widgetConfiguration.imageFormat = value;
    }
    /**
     * @return {?}
     */
    get imageFormat() { return this._widgetConfiguration.imageFormat; }
    /**
     * Factor de calidad de las imágenes devueltas (rango 0.0 a 1.0). Únicamente aplicable cuando el formato de imagen se ha especificado como "image/jpeg".
     * @param {?} value
     * @return {?}
     */
    set imageQuality(value) {
        this._widgetConfiguration.imageQuality = value;
    }
    /**
     * @return {?}
     */
    get imageQuality() { return this._widgetConfiguration.imageQuality; }
    /**
     *
     * @param {?} value
     * @return {?}
     */
    set logImages(value) {
        this._widgetConfiguration.logImages = value;
    }
    /**
     * @return {?}
     */
    get logImages() { return this._widgetConfiguration.logImages; }
    /**
     * Factor de recorte de las imágenes devueltas por el widget.
     * @param {?} value
     * @return {?}
     */
    set cropFactor(value) {
        this._widgetConfiguration.cropFactor = value;
    }
    /**
     * @return {?}
     */
    get cropFactor() { return this._widgetConfiguration.cropFactor; }
    /**
     * Indica si el widget debe recortar las imágenes capturadas, o no.
     * @param {?} value
     * @return {?}
     */
    set cropImage(value) {
        this._widgetConfiguration.cropImage = value;
    }
    /**
     * @return {?}
     */
    get cropImage() { return this._widgetConfiguration.cropImage; }
    /**
     * Formato de salida de la información de template generada por el widget.
     * @param {?} value
     * @return {?}
     */
    set templateFormat(value) {
        this._widgetConfiguration.templateFormat = value;
    }
    /**
     * @return {?}
     */
    get templateFormat() { return this._widgetConfiguration.templateFormat; }
    /**
     * Activa la fase de estabilización previa a la captura. Por defecto, la estabilización estará desactivada.
     * En caso de haber seleccionado LivenessMode==Move, este parámetro no se tendrá en cuenta y siempre se realizará fase de estabilizado.
     * @param {?} value
     * @return {?}
     */
    set stabilizationStage(value) {
        this._widgetConfiguration.stabilizationStage = value;
    }
    /**
     * @return {?}
     */
    get stabilizationStage() { return this._widgetConfiguration.stabilizationStage; }
    /**
     * Indica si el widget debe grabar la sesión del usuario en video.
     * @param {?} value
     * @return {?}
     */
    set videoRecord(value) {
        this._widgetConfiguration.videoRecord = value;
    }
    /**
     * @return {?}
     */
    get videoRecord() { return this._widgetConfiguration.videoRecord; }
    /**
     * Frecuencia de grabación (en frames por segundo).
     * @param {?} value
     * @return {?}
     */
    set videoRecordRate(value) {
        this._widgetConfiguration.videoRecordRate = value;
    }
    /**
     * @return {?}
     */
    get videoRecordRate() { return this._widgetConfiguration.videoRecordRate; }
    /**
     * Factor de escalado aplicado sobre las capturas realizadas para la generación del video.
     * Toma valores porcentuales de 0.0 a 1.0 (que equivaldría a una escala del 100% de resolución de cámara seleccionada).
     * @param {?} value
     * @return {?}
     */
    set videoRecordScale(value) {
        this._widgetConfiguration.videoRecordScale = value;
    }
    /**
     * @return {?}
     */
    get videoRecordScale() { return this._widgetConfiguration.videoRecordScale; }
    /**
     * Tipo de salida del video generado. Los posibles valores se tomarán del enumerado "FPhi.Selphi.RecordType".
     * @param {?} value
     * @return {?}
     */
    set videoRecordType(value) {
        this._widgetConfiguration.videoRecordType = value;
    }
    /**
     * @return {?}
     */
    get videoRecordType() { return this._widgetConfiguration.videoRecordType; }
    /**
     * Activa el modo de depuración del widget, en el que se mostrarán mensajes informativos en la consola del navegador.
     * @param {?} value
     * @return {?}
     */
    set debugMode(value) {
        this._widgetConfiguration.debugMode = value;
    }
    /**
     * @return {?}
     */
    get debugMode() { return this._widgetConfiguration.debugMode; }
    /**
     * @return {?}
     */
    ngOnInit() {
        //console.warn(`>>>> [facephi-selphi] ngOnInit { autoLoadLibResources: ${this.autoLoadLibResources} }`, this.widgetContainer.nativeElement);
        //console.log(`widgetContainer.offsetWidth: ${(this.widgetContainer.nativeElement as any).offsetWidth}`);
        //console.log(`widgetContainer.offsetHeight: ${(this.widgetContainer.nativeElement as any).offsetHeight}`);
        this._widgetConfiguration.widgetContainer = this.widgetContainer.nativeElement;
        this.setupEvents();
        /** @type {?} */
        const widgetInitFunc = (/**
         * @return {?}
         */
        () => {
            //console.warn(">>>> [facephi-selphi]  CONTROL LOADED!!");
            this.onComponentLoaded.emit();
            this.widgetService
                .createUserControl(this._widgetConfiguration)
                .startUserControl();
        });
        if (this.autoLoadLibResources) {
            this.widgetService
                .loadControl(this.widgetLibPath)
                .subscribe(widgetInitFunc);
        }
        else
            widgetInitFunc();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        //console.warn(">>>> [facephi-selphi] ngOnDestroy");
        if (this.autoLoadLibResources) {
            this.widgetService
                .stopUserControl()
                .removeControl();
        }
    }
    // #endregion
    // #region "Métodos privados"
    /**
     * @private
     * @return {?}
     */
    setupEvents() {
        this._widgetConfiguration.onModuleLoaded = (/**
         * @param {?} eventData
         * @return {?}
         */
        eventData => { this.onModuleLoaded.emit(eventData); });
        this._widgetConfiguration.onStabilizing = (/**
         * @param {?} stabilizingResult
         * @return {?}
         */
        stabilizingResult => { this.onStabilizing.emit(stabilizingResult); });
        this._widgetConfiguration.onExtractionFinish = (/**
         * @param {?} extractionResult
         * @return {?}
         */
        extractionResult => { this.onExtractionFinish.emit(extractionResult); });
        this._widgetConfiguration.onUserCancel = (/**
         * @return {?}
         */
        () => { this.onUserCancel.emit(); });
        this._widgetConfiguration.onExceptionCaptured = (/**
         * @param {?} exceptionResult
         * @return {?}
         */
        exceptionResult => { this.onExceptionCaptured.emit(exceptionResult); });
        this._widgetConfiguration.onLivenessError = (/**
         * @param {?} livenessErrorResult
         * @return {?}
         */
        livenessErrorResult => { this.onLivenessError.emit(livenessErrorResult); });
        this._widgetConfiguration.onLivenessErrorButtonClick = (/**
         * @return {?}
         */
        () => { this.onLivenessErrorButtonClick.emit(); });
        this._widgetConfiguration.onExtractionTimeout = (/**
         * @param {?} extractionTimeoutResult
         * @return {?}
         */
        extractionTimeoutResult => { this.onExtractionTimeout.emit(extractionTimeoutResult); });
        this._widgetConfiguration.onTimeoutErrorButtonClick = (/**
         * @return {?}
         */
        () => { this.onTimeoutErrorButtonClick.emit(); });
        this._widgetConfiguration.onTrackStatus = (/**
         * @param {?} eventData
         * @return {?}
         */
        eventData => { this.onTrackStatus.emit(eventData); });
        return this;
    }
}
FacePhiSelphiComponent.decorators = [
    { type: Component, args: [{
                selector: "facephi-selphi",
                template: "<div #widgetContainer\n     [style.width]=\"widgetWidth\"\n     [style.height]=\"widgetHeight\"\n     [ngClass]=\"containerCssClass\">\n</div>\n\n",
                styles: [""]
            }] }
];
/** @nocollapse */
FacePhiSelphiComponent.ctorParameters = () => [
    { type: FPhiSelphiWidgetService }
];
FacePhiSelphiComponent.propDecorators = {
    cssClass: [{ type: Input, args: ["class",] }, { type: HostBinding, args: ["class",] }],
    componentWidth: [{ type: Input, args: ["width",] }],
    componentHeight: [{ type: Input, args: ["height",] }],
    widgetContainer: [{ type: ViewChild, args: ["widgetContainer",] }],
    containerCssClass: [{ type: Input }],
    widgetLibPath: [{ type: Input }],
    autoLoadLibResources: [{ type: Input }],
    resourcesPath: [{ type: Input }],
    graphPath: [{ type: Input }],
    language: [{ type: Input }],
    dpiList: [{ type: Input }],
    cameraWidth: [{ type: Input }],
    cameraHeight: [{ type: Input }],
    cameraRotation: [{ type: Input }],
    cameraType: [{ type: Input }],
    tutorial: [{ type: Input }],
    extractionMode: [{ type: Input }],
    livenessMode: [{ type: Input }],
    livenessPrecision: [{ type: Input }],
    livenessMoveInitialError: [{ type: Input }],
    livenessMoveInfoTime: [{ type: Input }],
    interactible: [{ type: Input }],
    registerTime: [{ type: Input }],
    authenticateTime: [{ type: Input }],
    imageFormat: [{ type: Input }],
    imageQuality: [{ type: Input }],
    logImages: [{ type: Input }],
    cropFactor: [{ type: Input }],
    cropImage: [{ type: Input }],
    templateFormat: [{ type: Input }],
    stabilizationStage: [{ type: Input }],
    videoRecord: [{ type: Input }],
    videoRecordRate: [{ type: Input }],
    videoRecordScale: [{ type: Input }],
    videoRecordType: [{ type: Input }],
    debugMode: [{ type: Input }],
    onComponentLoaded: [{ type: Output }],
    onModuleLoaded: [{ type: Output }],
    onStabilizing: [{ type: Output }],
    onExtractionFinish: [{ type: Output }],
    onUserCancel: [{ type: Output }],
    onExceptionCaptured: [{ type: Output }],
    onLivenessError: [{ type: Output }],
    onLivenessErrorButtonClick: [{ type: Output }],
    onExtractionTimeout: [{ type: Output }],
    onTimeoutErrorButtonClick: [{ type: Output }],
    onTrackStatus: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FPhiSelphiConstants {
}
/**
 * Modos de rotación de la cámara para la realización de la captura.
 */
FPhiSelphiConstants.CameraRotation = {
    None: 0,
    Deg90: 1,
    Deg180: 2,
    Deg270: 3
};
/**
 * Modos de extracción o flujos de ejecución disponibles en el widget.
 */
FPhiSelphiConstants.ExtractionMode = {
    /**
     * Registro de usuarios.
     */
    Register: 0,
    /**
     * Autenticación de usuarios.
     */
    Authenticate: 1
};
/**
 * Modos de verificación de prueba de vida disponibles.
 */
FPhiSelphiConstants.LivenessMode = {
    /**
     * Verificación de prueba de vida desactivada.
     */
    None: 0,
    /**
     * Prueba de vida mediante parpadeo.
     */
    Blink: 1,
    /**
     * Prueba de vida mediante movimiento.
     */
    Move: 2,
    /**
     * Prueba de vida pasivo.
     */
    Passive: 3
};
/**
 * Tipo de excepción producida durante la ejecución del widget.
 */
FPhiSelphiConstants.ExceptionType = {
    CameraError: 0,
    ExtractorError: 1,
    ControlNotInitializedError: 2,
    ImageCropResizeError: 3,
    UnexpectedCaptureError: 4
};
FPhiSelphiConstants.SampleDiagnostic = {
    Ok: 0,
    FaceNotFound: 1,
    RightEyeNotFound: 2,
    LeftEyeNotFound: 3,
    EyesNotFound: 4,
    FaceTooFar: 5,
    FaceTooClose: 6,
    TooCloseToWindowSide: 7,
    AngleExceeded: 8,
    QualityCheckFailed: 9,
    NotRated: 10
};
FPhiSelphiConstants.FinalDiagnostic = {
    InsufficientValidSamples: 0,
    TemplateCreationInProgress: 1,
    TemplateCreated: 2
};
FPhiSelphiConstants.LivenessDiagnostic = {
    NotRated: 0,
    PhotoDetected: 1,
    LivenessDetected: 2,
    Unsuccess: 3,
    UnsuccessLowPerformance: 4,
    UnsuccessGlasses: 5,
    UnsuccessLight: 6,
    UnsuccessNoMovement: 7,
    UnsuccessWrongDirection: 8,
    UnsuccessTooFar: 9
};
/**
 * Formato de salida de la información de template generada por el widget.
 */
FPhiSelphiConstants.TemplateFormat = {
    ByteArray: 0,
    Base64: 1
};
/**
 * Formato de salida de la grabación del video de sesión del usuario. Tipo de proceso utilizado para la generación del video.
 */
FPhiSelphiConstants.RecorderType = {
    Gif: 0,
    Remote: 1
};
/**
 * Tipo de cámara a utilizar para la captura del selfie.
 */
FPhiSelphiConstants.CameraType = {
    Front: 0,
    Back: 1
};
/**
 * Tipo de acción que se produce en la interacción del usuario con el widget.
 */
FPhiSelphiConstants.TrackStatus = {
    ChangeState: 0,
    Tap: 1
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FacePhiSelphiModule {
}
FacePhiSelphiModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    FacePhiSelphiComponent
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    FacePhiSelphiComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FacePhiSelphiComponent, FPhiSelphiConfiguration, FPhiSelphiConstants, FacePhiSelphiModule, FPhiSelphiWidgetService as ɵa };

//# sourceMappingURL=facephi-selphi.js.map