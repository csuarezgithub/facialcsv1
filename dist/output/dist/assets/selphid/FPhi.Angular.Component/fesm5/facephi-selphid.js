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
var RxjsHelper = /** @class */ (function () {
    function RxjsHelper() {
    }
    /**
     * Encapsula una rutina de chequeo de una condición hasta que ésta se cumpla.
     * @param pollTime Intervalo de chequeo (en ms).
     * @param evalFunc Función para evaluar la condición deseada.
     * @param successFunc Función a invocar cuando la condición se cumpla.
     * @param delayTime Tiempo de retardo para iniciar el proceso de chequeo. Por defecto 0ms.
     */
    /**
     * Encapsula una rutina de chequeo de una condición hasta que ésta se cumpla.
     * @param {?} pollTime Intervalo de chequeo (en ms).
     * @param {?} evalFunc Función para evaluar la condición deseada.
     * @param {?} successFunc Función a invocar cuando la condición se cumpla.
     * @param {?=} delayTime Tiempo de retardo para iniciar el proceso de chequeo. Por defecto 0ms.
     * @return {?}
     */
    RxjsHelper.poll = /**
     * Encapsula una rutina de chequeo de una condición hasta que ésta se cumpla.
     * @param {?} pollTime Intervalo de chequeo (en ms).
     * @param {?} evalFunc Función para evaluar la condición deseada.
     * @param {?} successFunc Función a invocar cuando la condición se cumpla.
     * @param {?=} delayTime Tiempo de retardo para iniciar el proceso de chequeo. Por defecto 0ms.
     * @return {?}
     */
    function (pollTime, evalFunc, successFunc, delayTime) {
        if (delayTime === void 0) { delayTime = 0; }
        /** @type {?} */
        var subscription = timer(delayTime, pollTime)
            .subscribe((/**
         * @return {?}
         */
        function () {
            if (!evalFunc())
                return;
            subscription.unsubscribe();
            successFunc();
        }));
    };
    return RxjsHelper;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FPhiSelphIdWidgetService = /** @class */ (function () {
    // #endregion
    // #region "Constructores"
    function FPhiSelphIdWidgetService(document, rendererFactory, http) {
        this.document = document;
        this.rendererFactory = rendererFactory;
        this.http = http;
        this._renderer = this.rendererFactory.createRenderer(null, null);
    }
    Object.defineProperty(FPhiSelphIdWidgetService.prototype, "fPhiSelphIdNamespace", {
        // #endregion
        // #region "Propiedades"
        get: 
        // #endregion
        // #region "Propiedades"
        /**
         * @private
         * @return {?}
         */
        function () { return window["FPhi"] && window["FPhi"].SelphID ? window["FPhi"].SelphID : undefined; },
        set: /**
         * @private
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (window["FPhi"])
                window["FPhi"].SelphID = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FPhiSelphIdWidgetService.prototype, "fPhiWidgetScriptPath", {
        get: /**
         * @private
         * @return {?}
         */
        function () { return this._assetsBasePath + "/FPhi.Widget.wasm.js"; },
        enumerable: true,
        configurable: true
    });
    // #endregion
    // #region "Métodos públicos"
    /**
     * Realiza la carga dinámica del recurso javascript del widget web.
     * @param basePath Ruta base de la carpeta de los ficheros del widget.
     */
    // #endregion
    // #region "Métodos públicos"
    /**
     * Realiza la carga dinámica del recurso javascript del widget web.
     * @param {?} basePath Ruta base de la carpeta de los ficheros del widget.
     * @return {?}
     */
    FPhiSelphIdWidgetService.prototype.loadControl = 
    // #endregion
    // #region "Métodos públicos"
    /**
     * Realiza la carga dinámica del recurso javascript del widget web.
     * @param {?} basePath Ruta base de la carpeta de los ficheros del widget.
     * @return {?}
     */
    function (basePath) {
        var _this = this;
        //console.log(`>>>> FPhiSelphIdWidgetService :: loadControl --> basePath: ${basePath}`);
        this._assetsBasePath = basePath;
        /** @type {?} */
        var fPhiWidgetScript = this._renderer.createElement("script");
        this._renderer.setAttribute(fPhiWidgetScript, "src", this.fPhiWidgetScriptPath);
        this._renderer.setAttribute(fPhiWidgetScript, "type", "text/javascript");
        this._renderer.appendChild(this.document.body, fPhiWidgetScript);
        return new Observable((/**
         * @param {?} subscriber
         * @return {?}
         */
        function (subscriber) {
            RxjsHelper.poll(5, (/**
             * @return {?}
             */
            function () { return _this.fPhiSelphIdNamespace !== null && _this.fPhiSelphIdNamespace !== undefined && _this.fPhiSelphIdNamespace.Widget !== null && _this.fPhiSelphIdNamespace.Widget !== undefined; }), (/**
             * @return {?}
             */
            function () { return subscriber.next(_this); }));
        }));
    };
    /**
     * Elimina los recursos javascript del widget incluidos en el DOM de la página.
     */
    /**
     * Elimina los recursos javascript del widget incluidos en el DOM de la página.
     * @return {?}
     */
    FPhiSelphIdWidgetService.prototype.removeControl = /**
     * Elimina los recursos javascript del widget incluidos en el DOM de la página.
     * @return {?}
     */
    function () {
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
            .querySelectorAll("script[src*=\"" + this._assetsBasePath + "\"]")
            .forEach((/**
         * @param {?} element
         * @return {?}
         */
        function (element) { element.parentNode.removeChild(element); }));
        this.document
            .querySelectorAll("style#FPhi_Widget_style")
            .forEach((/**
         * @param {?} element
         * @return {?}
         */
        function (element) { element.parentNode.removeChild(element); }));
        //console.warn(`>>>> FPhiSelphIdWidgetService :: Control removed`);
        return this;
    };
    /**
     * Crea una instancia del widget web nativo con los datos de configuración indicados.
     * @param config Datos de configuración del widget.
     */
    /**
     * Crea una instancia del widget web nativo con los datos de configuración indicados.
     * @param {?} config Datos de configuración del widget.
     * @return {?}
     */
    FPhiSelphIdWidgetService.prototype.createUserControl = /**
     * Crea una instancia del widget web nativo con los datos de configuración indicados.
     * @param {?} config Datos de configuración del widget.
     * @return {?}
     */
    function (config) {
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
    };
    /**
     * Inicia el widget.
     */
    /**
     * Inicia el widget.
     * @return {?}
     */
    FPhiSelphIdWidgetService.prototype.startUserControl = /**
     * Inicia el widget.
     * @return {?}
     */
    function () {
        if (this._fPhiWidget) {
            // console.warn(">>>> FPhiSelphIdWidgetService :: startUserControl");
            this._fPhiWidget.Start();
        }
        return this;
    };
    /**
     * Detiene la ejecución del widget.
     */
    /**
     * Detiene la ejecución del widget.
     * @return {?}
     */
    FPhiSelphIdWidgetService.prototype.stopUserControl = /**
     * Detiene la ejecución del widget.
     * @return {?}
     */
    function () {
        if (this._fPhiWidget) {
            // console.warn(">>>> FPhiSelphIdWidgetService :: stopUserControl");
            this._fPhiWidget.Stop();
        }
        return this;
    };
    /**
     * Verifica que el entorno de ejecución actual está correctamente licenciado para el uso de las capacidades de detección del widget.
     */
    /**
     * Verifica que el entorno de ejecución actual está correctamente licenciado para el uso de las capacidades de detección del widget.
     * @return {?}
     */
    FPhiSelphIdWidgetService.prototype.isWidgetLicensed = /**
     * Verifica que el entorno de ejecución actual está correctamente licenciado para el uso de las capacidades de detección del widget.
     * @return {?}
     */
    function () {
        return this.http.get(FPhiSelphIdWidgetService.licenseCheckUrl, { observe: "response" })
            .pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        function (response) { return response.status !== 403; })));
    };
    // #region "Atributos"
    FPhiSelphIdWidgetService.licenseCheckUrl = "https://ecertic.idcapture.es/auth";
    FPhiSelphIdWidgetService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] }
    ];
    /** @nocollapse */
    FPhiSelphIdWidgetService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: RendererFactory2 },
        { type: HttpClient }
    ]; };
    /** @nocollapse */ FPhiSelphIdWidgetService.ngInjectableDef = defineInjectable({ factory: function FPhiSelphIdWidgetService_Factory() { return new FPhiSelphIdWidgetService(inject(DOCUMENT), inject(RendererFactory2), inject(HttpClient)); }, token: FPhiSelphIdWidgetService, providedIn: "root" });
    return FPhiSelphIdWidgetService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Modelo con la información de configuración del widget Selphi.
 */
var  /**
 * Modelo con la información de configuración del widget Selphi.
 */
FPhiSelphIdConfiguration = /** @class */ (function () {
    function FPhiSelphIdConfiguration() {
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
     */
    // #endregion
    // #region "Métodos públicos"
    /**
     * Genera una instancia de "FPhi.SelphID.ConfigurationManager" con los datos de configuración de la instancia actual para inicializar el widget.
     * @return {?}
     */
    FPhiSelphIdConfiguration.prototype.getNativeConfiguration = 
    // #endregion
    // #region "Métodos públicos"
    /**
     * Genera una instancia de "FPhi.SelphID.ConfigurationManager" con los datos de configuración de la instancia actual para inicializar el widget.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var configurationManager = new window["FPhi"].SelphID.ConfigurationManager();
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
    FPhiSelphIdConfiguration.prototype.setNativeConfiguration = 
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
    return FPhiSelphIdConfiguration;
}());
/**
 * Datos de dimensiones del documento capturado por el widget.
 */
var  /**
 * Datos de dimensiones del documento capturado por el widget.
 */
FPhiSelphIdDocumentDimensions = /** @class */ (function () {
    function FPhiSelphIdDocumentDimensions() {
    }
    return FPhiSelphIdDocumentDimensions;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FacePhiSelphIdComponent = /** @class */ (function () {
    // #endregion
    // #endregion
    // #region "Constructores"
    function FacePhiSelphIdComponent(widgetService) {
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
    Object.defineProperty(FacePhiSelphIdComponent.prototype, "cssClass", {
        // #endregion
        // #region "Propiedades"
        get: 
        // #endregion
        // #region "Propiedades"
        /**
         * @return {?}
         */
        function () {
            return this._cssClass;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value)
                this._cssClass += " " + value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphIdComponent.prototype, "widgetWidth", {
        get: /**
         * @return {?}
         */
        function () {
            return this.componentWidth
                ? typeof this.componentWidth === "string" && this.componentWidth.endsWith("%")
                    ? this.componentWidth
                    : parseFloat(this.componentWidth) + "px"
                : "100%";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphIdComponent.prototype, "widgetHeight", {
        get: /**
         * @return {?}
         */
        function () {
            return this.componentHeight
                ? typeof this.componentWidth === "string" && this.componentHeight.endsWith("%")
                    ? this.componentHeight
                    : parseFloat(this.componentHeight) + "px"
                : "100%";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphIdComponent.prototype, "language", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.language; },
        /**
         * Idioma en que se mostrará la información del widget.
         */
        set: /**
         * Idioma en que se mostrará la información del widget.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.language = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphIdComponent.prototype, "dpiList", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.dpiList; },
        /**
         * Lista de densidades de píxeles en pantalla soportadas por el widget, de cara a mostrar las imágenes de recurso adecuadas a la pantalla actual.
         */
        set: /**
         * Lista de densidades de píxeles en pantalla soportadas por el widget, de cara a mostrar las imágenes de recurso adecuadas a la pantalla actual.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.dpiList = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphIdComponent.prototype, "captureMode", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.captureMode; },
        /**
         * Modo de captura de documento. Controla el flujo de ejecución del widget.
         */
        set: /**
         * Modo de captura de documento. Controla el flujo de ejecución del widget.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.captureMode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphIdComponent.prototype, "previewCapture", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.previewCapture; },
        /**
         * En caso de estar habilitado, el widget mostrará el documento capturado y solicitará confirmación al usuario.
         */
        set: /**
         * En caso de estar habilitado, el widget mostrará el documento capturado y solicitará confirmación al usuario.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.previewCapture = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphIdComponent.prototype, "documentDimensions", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.documentDimensions; },
        /**
         * Dimensiones físicas (en mm) del documento a capturar.
         */
        set: /**
         * Dimensiones físicas (en mm) del documento a capturar.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.documentDimensions = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphIdComponent.prototype, "qualityThreshold", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.qualityThreshold; },
        /**
         * Umbral de tolerancia para dar por válida una captura de documento.
         */
        set: /**
         * Umbral de tolerancia para dar por válida una captura de documento.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.qualityThreshold = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphIdComponent.prototype, "cropFactor", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.cropFactor; },
        /**
         * Factor de escalado sobre el área de recorte de la imagen del documento. La imagen devuelta se escala de acuerdo con este valor.
         * Solamente se permiten valores mayores o iguales a 1.0.
         */
        set: /**
         * Factor de escalado sobre el área de recorte de la imagen del documento. La imagen devuelta se escala de acuerdo con este valor.
         * Solamente se permiten valores mayores o iguales a 1.0.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.cropFactor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphIdComponent.prototype, "forceLandscape", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.forceLandscape; },
        /**
         * En caso de estar habilitado, el widget se mostrará siempre en disposición horizontal, rotándose 90 grados en disposiciones verticales.
         */
        set: /**
         * En caso de estar habilitado, el widget se mostrará siempre en disposición horizontal, rotándose 90 grados en disposiciones verticales.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.forceLandscape = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphIdComponent.prototype, "canvasHD", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.canvasHD; },
        /**
         * Activa el modo de visualización del drawer en pantallas de alta densidad.
         */
        set: /**
         * Activa el modo de visualización del drawer en pantallas de alta densidad.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.canvasHD = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphIdComponent.prototype, "initialTip", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.initialTip; },
        /**
         * Muestra un mensaje de advertencia de uso inicial tras la carga del widget.
         */
        set: /**
         * Muestra un mensaje de advertencia de uso inicial tras la carga del widget.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.initialTip = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphIdComponent.prototype, "cameraWidth", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.cameraWidth; },
        /**
         * Resolución horizontal preferida de la cámara (el widget intentará seleccionar la resolución más cercana).
         */
        set: /**
         * Resolución horizontal preferida de la cámara (el widget intentará seleccionar la resolución más cercana).
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.cameraWidth = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphIdComponent.prototype, "cameraHeight", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.cameraHeight; },
        /**
         * Resolución vertical preferida de la cámara (el widget intentará seleccionar la resolución más cercana).
         */
        set: /**
         * Resolución vertical preferida de la cámara (el widget intentará seleccionar la resolución más cercana).
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.cameraHeight = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphIdComponent.prototype, "cameraId", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.cameraId; },
        /**
         * Identificador de la cámara a utilizar para la realización de la captura (si no se especifica, el widget seleccionará la cámara trasera expuesta por defecto por el dispositivo).
         */
        set: /**
         * Identificador de la cámara a utilizar para la realización de la captura (si no se especifica, el widget seleccionará la cámara trasera expuesta por defecto por el dispositivo).
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.cameraId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphIdComponent.prototype, "captureTimeout", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.captureTimeout; },
        /**
         * Tiempo disponible para la captura de una imagen de documento antes de emitirse un timeout (por defecto 10s).
         * Valores <= 0.0 anulan la limitación de tiempo de captura.
         */
        set: /**
         * Tiempo disponible para la captura de una imagen de documento antes de emitirse un timeout (por defecto 10s).
         * Valores <= 0.0 anulan la limitación de tiempo de captura.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.captureTimeout = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphIdComponent.prototype, "captureRetries", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.captureRetries; },
        /**
         * Número máximo de reintentos para obtener una captura válida de imagen de documento.
         * Valores <= 0 establecen un número infinito de reintentos.
         */
        set: /**
         * Número máximo de reintentos para obtener una captura válida de imagen de documento.
         * Valores <= 0 establecen un número infinito de reintentos.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.captureRetries = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphIdComponent.prototype, "captureSensibility", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.captureSensibility; },
        /**
         * Sensibilidad de captura durante la detección de bordes del widget.
         */
        set: /**
         * Sensibilidad de captura durante la detección de bordes del widget.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.captureSensibility = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphIdComponent.prototype, "imageFormat", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.imageFormat; },
        /**
         * Formato de las imágenes capturadas por el widget (MIME type).
         */
        set: /**
         * Formato de las imágenes capturadas por el widget (MIME type).
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.imageFormat = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphIdComponent.prototype, "imageQuality", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.imageQuality; },
        /**
         * Factor de calidad de las imágenes devueltas (rango 0.0 a 1.0). Únicamente aplicable cuando el formato de imagen se ha especificado como "image/jpeg".
         */
        set: /**
         * Factor de calidad de las imágenes devueltas (rango 0.0 a 1.0). Únicamente aplicable cuando el formato de imagen se ha especificado como "image/jpeg".
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.imageQuality = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphIdComponent.prototype, "debugMode", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.debugMode; },
        /**
         * Activa el modo de depuración del widget, en el que se mostrarán mensajes informativos en la consola del navegador.
         */
        set: /**
         * Activa el modo de depuración del widget, en el que se mostrarán mensajes informativos en la consola del navegador.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.debugMode = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FacePhiSelphIdComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        //console.warn(`>>>> [facephi-selphid] ngOnInit { autoLoadLibResources: ${this.autoLoadLibResources} }`, this.widgetContainer.nativeElement);
        //console.log(`widgetContainer.offsetWidth: ${(this.widgetContainer.nativeElement as any).offsetWidth}`);
        //console.log(`widgetContainer.offsetHeight: ${(this.widgetContainer.nativeElement as any).offsetHeight}`);
        this._widgetConfiguration.widgetContainer = this.widgetContainer.nativeElement;
        this.setupEvents();
        /** @type {?} */
        var widgetInitFunc = (/**
         * @return {?}
         */
        function () {
            //console.warn(">>>> [facephi-selphid]  CONTROL LOADED!!");
            _this.onComponentLoaded.emit();
            _this.widgetService
                .createUserControl(_this._widgetConfiguration)
                .startUserControl();
        });
        if (this.autoLoadLibResources) {
            this.widgetService
                .loadControl(this.widgetLibPath)
                .subscribe(widgetInitFunc);
        }
        else
            widgetInitFunc();
    };
    /**
     * @return {?}
     */
    FacePhiSelphIdComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.autoLoadLibResources) {
            this.widgetService
                .stopUserControl()
                .removeControl();
        }
    };
    // #endregion
    // #region "Métodos privados"
    // #endregion
    // #region "Métodos privados"
    /**
     * @private
     * @return {?}
     */
    FacePhiSelphIdComponent.prototype.setupEvents = 
    // #endregion
    // #region "Métodos privados"
    /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._widgetConfiguration.onModuleLoaded = (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onModuleLoaded.emit(eventData); });
        this._widgetConfiguration.onExtractionFinished = (/**
         * @param {?} extractionResult
         * @return {?}
         */
        function (extractionResult) { _this.onExtractionFinished.emit(extractionResult); });
        this._widgetConfiguration.onUserCancelled = (/**
         * @return {?}
         */
        function () { _this.onUserCancelled.emit(); });
        this._widgetConfiguration.onExceptionCaptured = (/**
         * @param {?} exceptionResult
         * @return {?}
         */
        function (exceptionResult) { _this.onExceptionCaptured.emit(exceptionResult); });
        this._widgetConfiguration.onExtractionTimeout = (/**
         * @return {?}
         */
        function () { _this.onExtractionTimeout.emit(); });
        this._widgetConfiguration.onTrackStatus = (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onTrackStatus.emit(eventData); });
        return this;
    };
    FacePhiSelphIdComponent.decorators = [
        { type: Component, args: [{
                    selector: "facephi-selphid",
                    template: "<div #widgetContainer\n     [style.width]=\"widgetWidth\"\n     [style.height]=\"widgetHeight\"\n     [ngClass]=\"containerCssClass\">\n</div>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    FacePhiSelphIdComponent.ctorParameters = function () { return [
        { type: FPhiSelphIdWidgetService }
    ]; };
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
    return FacePhiSelphIdComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FPhiSelphIdConstants = /** @class */ (function () {
    function FPhiSelphIdConstants() {
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
    return FPhiSelphIdConstants;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FacePhiSelphIdModule = /** @class */ (function () {
    function FacePhiSelphIdModule() {
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
    return FacePhiSelphIdModule;
}());

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