import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { timer } from 'rxjs/index';
import { Injectable, Inject, RendererFactory2, NgModule, Component, Input, Output, ViewChild, EventEmitter, HostBinding, defineInjectable, inject } from '@angular/core';
import { DOCUMENT, CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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
class FPhiSelphIdWidgetService {
    // #endregion
    // #region "Constructores"
    /**
     * @param {?} document
     * @param {?} rendererFactory
     * @param {?} http
     */
    constructor(document, rendererFactory, http) {
        this.document = document;
        this.rendererFactory = rendererFactory;
        this.http = http;
        this._renderer = this.rendererFactory.createRenderer(null, null);
    }
    // #endregion
    // #region "Propiedades"
    /**
     * @private
     * @return {?}
     */
    get fPhiSelphIdNamespace() { return window["FPhi"] && window["FPhi"].SelphID ? window["FPhi"].SelphID : undefined; }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    set fPhiSelphIdNamespace(value) {
        if (window["FPhi"])
            window["FPhi"].SelphID = value;
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
        //console.log(`>>>> FPhiSelphIdWidgetService :: loadControl --> basePath: ${basePath}`);
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
            () => this.fPhiSelphIdNamespace !== null && this.fPhiSelphIdNamespace !== undefined && this.fPhiSelphIdNamespace.Widget !== null && this.fPhiSelphIdNamespace.Widget !== undefined), (/**
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
        //console.warn(`>>>> FPhiSelphIdWidgetService :: removeControl("${this._assetsBasePath}")`);
        delete this._fPhiWidget;
        delete this._fPhiWidgetConfiguration;
        delete this.fPhiSelphIdNamespace;
        this._fPhiWidget = undefined;
        this._fPhiWidgetConfiguration = undefined;
        this.fPhiSelphIdNamespace = undefined;
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
        //console.warn(`>>>> FPhiSelphIdWidgetService :: Control removed`);
        return this;
    }
    /**
     * Crea una instancia del widget web nativo con los datos de configuración indicados.
     * @param {?} config Datos de configuración del widget.
     * @return {?}
     */
    createUserControl(config) {
        //console.warn(">>>> FPhiSelphIdWidgetService :: createUserControl", config, config.getNativeConfiguration());
        //console.log(`widgetContainer.clientWidth: ${config.widgetContainer.clientWidth}`);
        //console.log(`widgetContainer.clientHeight: ${config.widgetContainer.clientHeight}`);
        //console.log(`widgetContainer.offsetWidth: ${config.widgetContainer.offsetWidth}`);
        //console.log(`widgetContainer.offsetHeight: ${config.widgetContainer.offsetHeight}`);
        //console.log(`widgetContainer.computedStyleWidth: ${window.getComputedStyle(config.widgetContainer).width}`);
        //console.log(`widgetContainer.computedStyleHeight: ${window.getComputedStyle(config.widgetContainer).height}`);
        this._fPhiWidgetConfiguration = config;
        this._fPhiWidget = new this.fPhiSelphIdNamespace.Widget(config.getNativeConfiguration());
        //console.log(this._fPhiSelphIdWidget);
        if (this._fPhiWidgetConfiguration.debugMode !== null && this._fPhiWidgetConfiguration.debugMode !== undefined)
            this._fPhiWidget.debug = this._fPhiWidgetConfiguration.debugMode;
        //console.log(this._fPhiSelphIdWidget);
        return this;
    }
    /**
     * Inicia el widget.
     * @return {?}
     */
    startUserControl() {
        if (this._fPhiWidget) {
            // console.warn(">>>> FPhiSelphIdWidgetService :: startUserControl");
            this._fPhiWidget.Start();
        }
        return this;
    }
    /**
     * Detiene la ejecución del widget.
     * @return {?}
     */
    stopUserControl() {
        if (this._fPhiWidget) {
            // console.warn(">>>> FPhiSelphIdWidgetService :: stopUserControl");
            this._fPhiWidget.Stop();
        }
        return this;
    }
    /**
     * Verifica que el entorno de ejecución actual está correctamente licenciado para el uso de las capacidades de detección del widget.
     * @return {?}
     */
    isWidgetLicensed() {
        return this.http.get(FPhiSelphIdWidgetService.licenseCheckUrl, { observe: "response" })
            .pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => response.status !== 403)));
    }
}
// #region "Atributos"
FPhiSelphIdWidgetService.licenseCheckUrl = "https://ecertic.idcapture.es/auth";
FPhiSelphIdWidgetService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
/** @nocollapse */
FPhiSelphIdWidgetService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: RendererFactory2 },
    { type: HttpClient }
];
/** @nocollapse */ FPhiSelphIdWidgetService.ngInjectableDef = defineInjectable({ factory: function FPhiSelphIdWidgetService_Factory() { return new FPhiSelphIdWidgetService(inject(DOCUMENT), inject(RendererFactory2), inject(HttpClient)); }, token: FPhiSelphIdWidgetService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Modelo con la información de configuración del widget Selphi.
 */
class FPhiSelphIdConfiguration {
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
/**
 * Datos de dimensiones del documento capturado por el widget.
 */
class FPhiSelphIdDocumentDimensions {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FacePhiSelphIdComponent {
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
        this._widgetConfiguration = new FPhiSelphIdConfiguration();
        // #region "Configuración"
        /**
         * Ruta en la que están localizados los recursos javascript nativos del widget web.
         */
        this.widgetLibPath = "assets/lib/facephi/selphid";
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
         * Evento lanzado cuando el proceso de extracción ha finalizado correctamente. Devuelve el resultado de la captura.
         */
        this.onExtractionFinished = new EventEmitter();
        /**
         * Evento lanzado cuando el usuario cancela el proceso de extracción.
         */
        this.onUserCancelled = new EventEmitter();
        /**
         * Evento lanzado en caso de que se produzca un error interno del widget.
         */
        this.onExceptionCaptured = new EventEmitter();
        /**
         * Evento lanzado si el proceso de captura excede el tiempo máximo disponible.
         */
        this.onExtractionTimeout = new EventEmitter();
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
                : `${parseFloat(this.componentWidth)}px`
            : "100%";
    }
    /**
     * @return {?}
     */
    get widgetHeight() {
        return this.componentHeight
            ? typeof this.componentWidth === "string" && this.componentHeight.endsWith("%")
                ? this.componentHeight
                : `${parseFloat(this.componentHeight)}px`
            : "100%";
    }
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
     * Modo de captura de documento. Controla el flujo de ejecución del widget.
     * @param {?} value
     * @return {?}
     */
    set captureMode(value) {
        this._widgetConfiguration.captureMode = value;
    }
    /**
     * @return {?}
     */
    get captureMode() { return this._widgetConfiguration.captureMode; }
    /**
     * En caso de estar habilitado, el widget mostrará el documento capturado y solicitará confirmación al usuario.
     * @param {?} value
     * @return {?}
     */
    set previewCapture(value) {
        this._widgetConfiguration.previewCapture = value;
    }
    /**
     * @return {?}
     */
    get previewCapture() { return this._widgetConfiguration.previewCapture; }
    /**
     * Dimensiones físicas (en mm) del documento a capturar.
     * @param {?} value
     * @return {?}
     */
    set documentDimensions(value) {
        this._widgetConfiguration.documentDimensions = value;
    }
    /**
     * @return {?}
     */
    get documentDimensions() { return this._widgetConfiguration.documentDimensions; }
    /**
     * Umbral de tolerancia para dar por válida una captura de documento.
     * @param {?} value
     * @return {?}
     */
    set qualityThreshold(value) {
        this._widgetConfiguration.qualityThreshold = value;
    }
    /**
     * @return {?}
     */
    get qualityThreshold() { return this._widgetConfiguration.qualityThreshold; }
    /**
     * Factor de escalado sobre el área de recorte de la imagen del documento. La imagen devuelta se escala de acuerdo con este valor.
     * Solamente se permiten valores mayores o iguales a 1.0.
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
     * En caso de estar habilitado, el widget se mostrará siempre en disposición horizontal, rotándose 90 grados en disposiciones verticales.
     * @param {?} value
     * @return {?}
     */
    set forceLandscape(value) {
        this._widgetConfiguration.forceLandscape = value;
    }
    /**
     * @return {?}
     */
    get forceLandscape() { return this._widgetConfiguration.forceLandscape; }
    /**
     * Activa el modo de visualización del drawer en pantallas de alta densidad.
     * @param {?} value
     * @return {?}
     */
    set canvasHD(value) {
        this._widgetConfiguration.canvasHD = value;
    }
    /**
     * @return {?}
     */
    get canvasHD() { return this._widgetConfiguration.canvasHD; }
    /**
     * Muestra un mensaje de advertencia de uso inicial tras la carga del widget.
     * @param {?} value
     * @return {?}
     */
    set initialTip(value) {
        this._widgetConfiguration.initialTip = value;
    }
    /**
     * @return {?}
     */
    get initialTip() { return this._widgetConfiguration.initialTip; }
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
     * Identificador de la cámara a utilizar para la realización de la captura (si no se especifica, el widget seleccionará la cámara trasera expuesta por defecto por el dispositivo).
     * @param {?} value
     * @return {?}
     */
    set cameraId(value) {
        this._widgetConfiguration.cameraId = value;
    }
    /**
     * @return {?}
     */
    get cameraId() { return this._widgetConfiguration.cameraId; }
    /**
     * Tiempo disponible para la captura de una imagen de documento antes de emitirse un timeout (por defecto 10s).
     * Valores <= 0.0 anulan la limitación de tiempo de captura.
     * @param {?} value
     * @return {?}
     */
    set captureTimeout(value) {
        this._widgetConfiguration.captureTimeout = value;
    }
    /**
     * @return {?}
     */
    get captureTimeout() { return this._widgetConfiguration.captureTimeout; }
    /**
     * Número máximo de reintentos para obtener una captura válida de imagen de documento.
     * Valores <= 0 establecen un número infinito de reintentos.
     * @param {?} value
     * @return {?}
     */
    set captureRetries(value) {
        this._widgetConfiguration.captureRetries = value;
    }
    /**
     * @return {?}
     */
    get captureRetries() { return this._widgetConfiguration.captureRetries; }
    /**
     * Sensibilidad de captura durante la detección de bordes del widget.
     * @param {?} value
     * @return {?}
     */
    set captureSensibility(value) {
        this._widgetConfiguration.captureSensibility = value;
    }
    /**
     * @return {?}
     */
    get captureSensibility() { return this._widgetConfiguration.captureSensibility; }
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
        //console.warn(`>>>> [facephi-selphid] ngOnInit { autoLoadLibResources: ${this.autoLoadLibResources} }`, this.widgetContainer.nativeElement);
        //console.log(`widgetContainer.offsetWidth: ${(this.widgetContainer.nativeElement as any).offsetWidth}`);
        //console.log(`widgetContainer.offsetHeight: ${(this.widgetContainer.nativeElement as any).offsetHeight}`);
        this._widgetConfiguration.widgetContainer = this.widgetContainer.nativeElement;
        this.setupEvents();
        /** @type {?} */
        const widgetInitFunc = (/**
         * @return {?}
         */
        () => {
            //console.warn(">>>> [facephi-selphid]  CONTROL LOADED!!");
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
        this._widgetConfiguration.onExtractionFinished = (/**
         * @param {?} extractionResult
         * @return {?}
         */
        extractionResult => { this.onExtractionFinished.emit(extractionResult); });
        this._widgetConfiguration.onUserCancelled = (/**
         * @return {?}
         */
        () => { this.onUserCancelled.emit(); });
        this._widgetConfiguration.onExceptionCaptured = (/**
         * @param {?} exceptionResult
         * @return {?}
         */
        exceptionResult => { this.onExceptionCaptured.emit(exceptionResult); });
        this._widgetConfiguration.onExtractionTimeout = (/**
         * @return {?}
         */
        () => { this.onExtractionTimeout.emit(); });
        this._widgetConfiguration.onTrackStatus = (/**
         * @param {?} eventData
         * @return {?}
         */
        eventData => { this.onTrackStatus.emit(eventData); });
        return this;
    }
}
FacePhiSelphIdComponent.decorators = [
    { type: Component, args: [{
                selector: "facephi-selphid",
                template: "<div #widgetContainer\n     [style.width]=\"widgetWidth\"\n     [style.height]=\"widgetHeight\"\n     [ngClass]=\"containerCssClass\">\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
FacePhiSelphIdComponent.ctorParameters = () => [
    { type: FPhiSelphIdWidgetService }
];
FacePhiSelphIdComponent.propDecorators = {
    cssClass: [{ type: Input, args: ["class",] }, { type: HostBinding, args: ["class",] }],
    componentWidth: [{ type: Input, args: ["width",] }],
    componentHeight: [{ type: Input, args: ["height",] }],
    widgetContainer: [{ type: ViewChild, args: ["widgetContainer",] }],
    containerCssClass: [{ type: Input }],
    widgetLibPath: [{ type: Input }],
    autoLoadLibResources: [{ type: Input }],
    language: [{ type: Input }],
    dpiList: [{ type: Input }],
    captureMode: [{ type: Input }],
    previewCapture: [{ type: Input }],
    documentDimensions: [{ type: Input }],
    qualityThreshold: [{ type: Input }],
    cropFactor: [{ type: Input }],
    forceLandscape: [{ type: Input }],
    canvasHD: [{ type: Input }],
    initialTip: [{ type: Input }],
    cameraWidth: [{ type: Input }],
    cameraHeight: [{ type: Input }],
    cameraId: [{ type: Input }],
    captureTimeout: [{ type: Input }],
    captureRetries: [{ type: Input }],
    captureSensibility: [{ type: Input }],
    imageFormat: [{ type: Input }],
    imageQuality: [{ type: Input }],
    debugMode: [{ type: Input }],
    onComponentLoaded: [{ type: Output }],
    onModuleLoaded: [{ type: Output }],
    onExtractionFinished: [{ type: Output }],
    onUserCancelled: [{ type: Output }],
    onExceptionCaptured: [{ type: Output }],
    onExtractionTimeout: [{ type: Output }],
    onTrackStatus: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FPhiSelphIdConstants {
}
/**
 * Modo de funcionamiento del widget a la hora de realizar la captura del documento.
 */
FPhiSelphIdConstants.CaptureMode = {
    /**
     * Captura únicamente el frente del documento.
     */
    Front: 0,
    /**
     * Captura únicamente el dorso del documento.
     */
    Back: 1,
    /**
     * Realiza una captura de ambas partes del documento.
     */
    Full: 2
};
/**
 * Tipo de excepción producida durante la ejecución del widget.
 */
FPhiSelphIdConstants.ExceptionType = {
    CameraError: 0,
    ExtractorError: 1,
    ControlNotInitializedError: 2,
    ImageCropResizeError: 3,
    UnexpectedCaptureError: 4
};
/**
 * Niveles de sensibilidad de captura en las capacidades de detección de bordes del widget.
 */
FPhiSelphIdConstants.CaptureSensibility = {
    Low: 0,
    Normal: 1,
    High: 2,
    Auto: 3
};
/**
 * Tipo de acción que se produce en la interacción del usuario con el widget.
 */
FPhiSelphIdConstants.TrackStatus = {
    ChangeState: 0,
    Tap: 1
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FacePhiSelphIdModule {
}
FacePhiSelphIdModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    FacePhiSelphIdComponent
                ],
                imports: [
                    CommonModule,
                    HttpClientModule
                ],
                exports: [
                    FacePhiSelphIdComponent
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

export { FacePhiSelphIdComponent, FPhiSelphIdConfiguration, FPhiSelphIdDocumentDimensions, FPhiSelphIdConstants, FPhiSelphIdWidgetService, FacePhiSelphIdModule };

//# sourceMappingURL=facephi-selphid.js.map