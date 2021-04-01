(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs'), require('rxjs/index'), require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('facephi-selphi', ['exports', 'rxjs', 'rxjs/index', '@angular/core', '@angular/common'], factory) :
    (factory((global['facephi-selphi'] = {}),global.rxjs,global.rxjs.index,global.ng.core,global.ng.common));
}(this, (function (exports,rxjs,index,i0,i1) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Modelo con la información de configuración del widget Selphi.
     */
    var /**
     * Modelo con la información de configuración del widget Selphi.
     */ FPhiSelphiConfiguration = /** @class */ (function () {
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
                if (context === void 0) {
                    context = null;
                }
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
                if (delayTime === void 0) {
                    delayTime = 0;
                }
                /** @type {?} */
                var subscription = index.timer(delayTime, pollTime)
                    .subscribe(( /**
             * @return {?}
             */function () {
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
    var FPhiSelphiWidgetService = /** @class */ (function () {
        // #endregion
        // #region "Constructores"
        function FPhiSelphiWidgetService(document, rendererFactory) {
            this.document = document;
            this.rendererFactory = rendererFactory;
            this._renderer = this.rendererFactory.createRenderer(null, null);
        }
        Object.defineProperty(FPhiSelphiWidgetService.prototype, "fPhiSelphiNamespace", {
            // #endregion
            // #region "Propiedades"
            get: 
            // #endregion
            // #region "Propiedades"
            /**
             * @private
             * @return {?}
             */
            function () { return window["FPhi"] && window["FPhi"].Selphi ? window["FPhi"].Selphi : undefined; },
            set: /**
             * @private
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (window["FPhi"])
                    window["FPhi"].Selphi = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FPhiSelphiWidgetService.prototype, "fPhiWidgetScriptPath", {
            get: /**
             * @private
             * @return {?}
             */ function () { return this._assetsBasePath + "/FPhi.Widget.wasm.js"; },
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
        FPhiSelphiWidgetService.prototype.loadControl =
            // #endregion
            // #region "Métodos públicos"
            /**
             * Realiza la carga dinámica del recurso javascript del widget web.
             * @param {?} basePath Ruta base de la carpeta de los ficheros del widget.
             * @return {?}
             */
            function (basePath) {
                var _this = this;
                //console.log(`>>>> FPhiSelphiWidgetService :: loadControl --> basePath: ${basePath}`);
                this._assetsBasePath = basePath;
                /** @type {?} */
                var fPhiWidgetScript = this._renderer.createElement("script");
                this._renderer.setAttribute(fPhiWidgetScript, "src", this.fPhiWidgetScriptPath);
                this._renderer.setAttribute(fPhiWidgetScript, "type", "text/javascript");
                this._renderer.appendChild(this.document.body, fPhiWidgetScript);
                return new rxjs.Observable(( /**
                 * @param {?} subscriber
                 * @return {?}
                 */function (subscriber) {
                    RxjsHelper.poll(5, ( /**
                     * @return {?}
                     */function () { return _this.fPhiSelphiNamespace !== null && _this.fPhiSelphiNamespace !== undefined && _this.fPhiSelphiNamespace.Widget !== null && _this.fPhiSelphiNamespace.Widget !== undefined; }), ( /**
                     * @return {?}
                     */function () { return subscriber.next(_this); }));
                }));
            };
        /**
         * Elimina los recursos javascript del widget incluidos en el DOM de la página.
         */
        /**
         * Elimina los recursos javascript del widget incluidos en el DOM de la página.
         * @return {?}
         */
        FPhiSelphiWidgetService.prototype.removeControl = /**
         * Elimina los recursos javascript del widget incluidos en el DOM de la página.
         * @return {?}
         */
            function () {
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
                    .querySelectorAll("script[src*=\"" + this._assetsBasePath + "\"]")
                    .forEach(( /**
             * @param {?} element
             * @return {?}
             */function (element) { element.parentNode.removeChild(element); }));
                this.document
                    .querySelectorAll("style#FPhi_Widget_style")
                    .forEach(( /**
             * @param {?} element
             * @return {?}
             */function (element) { element.parentNode.removeChild(element); }));
                //console.warn(`>>>> FPhiSelphiWidgetService :: Control removed`);
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
        FPhiSelphiWidgetService.prototype.createUserControl = /**
         * Crea una instancia del widget web nativo con los datos de configuración indicados.
         * @param {?} config Datos de configuración del widget.
         * @return {?}
         */
            function (config) {
                //console.warn(">>>> FPhiSelphiWidgetService :: createUserControl", config, config.getNativeConfiguration());
                this._fPhiWidgetConfiguration = config;
                this._fPhiWidget = new this.fPhiSelphiNamespace.Widget(config.getNativeConfiguration());
                //console.log(this._fPhiWidget);
                if (this._fPhiWidgetConfiguration.debugMode !== null && this._fPhiWidgetConfiguration.debugMode !== undefined)
                    this._fPhiWidget.debug = this._fPhiWidgetConfiguration.debugMode;
                //console.log(this._fPhiWidget);
                return this;
            };
        /**
         * Inicia el widget.
         */
        /**
         * Inicia el widget.
         * @return {?}
         */
        FPhiSelphiWidgetService.prototype.startUserControl = /**
         * Inicia el widget.
         * @return {?}
         */
            function () {
                if (this._fPhiWidget)
                    this._fPhiWidget.Start();
                return this;
            };
        /**
         * Detiene la ejecución del widget.
         */
        /**
         * Detiene la ejecución del widget.
         * @return {?}
         */
        FPhiSelphiWidgetService.prototype.stopUserControl = /**
         * Detiene la ejecución del widget.
         * @return {?}
         */
            function () {
                if (this._fPhiWidget)
                    this._fPhiWidget.Stop();
                return this;
            };
        FPhiSelphiWidgetService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: "root"
                    },] }
        ];
        /** @nocollapse */
        FPhiSelphiWidgetService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: [i1.DOCUMENT,] }] },
                { type: i0.RendererFactory2 }
            ];
        };
        /** @nocollapse */ FPhiSelphiWidgetService.ngInjectableDef = i0.defineInjectable({ factory: function FPhiSelphiWidgetService_Factory() { return new FPhiSelphiWidgetService(i0.inject(i1.DOCUMENT), i0.inject(i0.RendererFactory2)); }, token: FPhiSelphiWidgetService, providedIn: "root" });
        return FPhiSelphiWidgetService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FacePhiSelphiComponent = /** @class */ (function () {
        // #endregion
        // #endregion
        // #region "Constructores"
        function FacePhiSelphiComponent(widgetService) {
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
            this.onComponentLoaded = new i0.EventEmitter();
            /**
             * Evento lanzado por el widget cuando se ha finalizado el proceso de carga e inicialización, tando del widget, como de los recursos asociados al mismo.
             */
            this.onModuleLoaded = new i0.EventEmitter();
            /**
             * Evento lanzado durante los ciclos de estabilización de la imagen para la correcta realización de la captura.
             */
            this.onStabilizing = new i0.EventEmitter();
            /**
             * Evento lanzado cuando el proceso de extracción ha finalizado correctamente. Devuelve el resultado de la captura.
             */
            this.onExtractionFinish = new i0.EventEmitter();
            /**
             * Evento lanzado cuando el usuario cancela el proceso de extracción.
             */
            this.onUserCancel = new i0.EventEmitter();
            /**
             * Evento lanzado en caso de que se produzca un error interno del widget.
             */
            this.onExceptionCaptured = new i0.EventEmitter();
            /**
             * Evento lanzado cuando el proceso de verificación de autenticidad por prueba de vida falla.
             */
            this.onLivenessError = new i0.EventEmitter();
            /**
             * Evento lanzado cuando el proceso de verificación de autenticidad por prueba de vida falla y el usuario pulsa el botón de la pantalla de error mostrada.
             */
            this.onLivenessErrorButtonClick = new i0.EventEmitter();
            /**
             * Evento lanzado si el proceso de captura excede el tiempo máximo disponible.
             */
            this.onExtractionTimeout = new i0.EventEmitter();
            /**
             * Evento lanzado cuando el proceso de captura excede el tiempo máximo disponible y el usuario pulsa el botón de la pantalla de error mostrada.
             */
            this.onTimeoutErrorButtonClick = new i0.EventEmitter();
            /**
             * Evento lanzado tras cualquier acción realizada por el usuario sobre la interfaz gráfica del widget o ante cualquier cambio de estado
             * durante el proceso de captura.
             */
            this.onTrackStatus = new i0.EventEmitter();
        }
        Object.defineProperty(FacePhiSelphiComponent.prototype, "cssClass", {
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
             */ function (value) {
                if (value)
                    this._cssClass += " " + value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FacePhiSelphiComponent.prototype, "widgetWidth", {
            get: /**
             * @return {?}
             */ function () {
                return this.componentWidth
                    ? typeof this.componentWidth === "string" && this.componentWidth.endsWith("%")
                        ? this.componentWidth
                        : parseFloat(this.componentWidth) !== NaN
                            ? parseFloat(this.componentWidth) + "px"
                            : this.componentWidth
                    : "100%";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FacePhiSelphiComponent.prototype, "widgetHeight", {
            get: /**
             * @return {?}
             */ function () {
                return this.componentHeight
                    ? typeof this.componentHeight === "string" && this.componentHeight.endsWith("%")
                        ? this.componentHeight
                        : parseFloat(this.componentHeight) !== NaN
                            ? parseFloat(this.componentHeight) + "px"
                            : this.componentHeight
                    : "100%";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FacePhiSelphiComponent.prototype, "resourcesPath", {
            get: /**
             * @return {?}
             */ function () { return this._widgetConfiguration.resourcesPath; },
            /**
             * Ruta donde está ubicado el fichero widget.xml y el resto de recursos personalizables del widget.
             */
            set: /**
             * Ruta donde está ubicado el fichero widget.xml y el resto de recursos personalizables del widget.
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._widgetConfiguration.resourcesPath = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FacePhiSelphiComponent.prototype, "graphPath", {
            get: /**
             * @return {?}
             */ function () { return this._widgetConfiguration.graphPath; },
            /**
             * Ruta donde está ubicado el fichero graph.xml.
             */
            set: /**
             * Ruta donde está ubicado el fichero graph.xml.
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._widgetConfiguration.graphPath = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FacePhiSelphiComponent.prototype, "language", {
            get: /**
             * @return {?}
             */ function () { return this._widgetConfiguration.language; },
            /**
             * Idioma en que se mostrará la información del widget.
             */
            set: /**
             * Idioma en que se mostrará la información del widget.
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._widgetConfiguration.language = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FacePhiSelphiComponent.prototype, "dpiList", {
            get: /**
             * @return {?}
             */ function () { return this._widgetConfiguration.dpiList; },
            /**
             * Lista de densidades de píxeles en pantalla soportadas por el widget, de cara a mostrar las imágenes de recurso adecuadas a la pantalla actual.
             */
            set: /**
             * Lista de densidades de píxeles en pantalla soportadas por el widget, de cara a mostrar las imágenes de recurso adecuadas a la pantalla actual.
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._widgetConfiguration.dpiList = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FacePhiSelphiComponent.prototype, "cameraWidth", {
            get: /**
             * @return {?}
             */ function () { return this._widgetConfiguration.cameraWidth; },
            /**
             * Resolución horizontal preferida de la cámara (el widget intentará seleccionar la resolución más cercana).
             */
            set: /**
             * Resolución horizontal preferida de la cámara (el widget intentará seleccionar la resolución más cercana).
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._widgetConfiguration.cameraWidth = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FacePhiSelphiComponent.prototype, "cameraHeight", {
            get: /**
             * @return {?}
             */ function () { return this._widgetConfiguration.cameraHeight; },
            /**
             * Resolución vertical preferida de la cámara (el widget intentará seleccionar la resolución más cercana).
             */
            set: /**
             * Resolución vertical preferida de la cámara (el widget intentará seleccionar la resolución más cercana).
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._widgetConfiguration.cameraHeight = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FacePhiSelphiComponent.prototype, "cameraRotation", {
            get: /**
             * @return {?}
             */ function () { return this._widgetConfiguration.cameraRotation; },
            /**
             * Rotación de la cámara.
             */
            set: /**
             * Rotación de la cámara.
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._widgetConfiguration.cameraRotation = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FacePhiSelphiComponent.prototype, "cameraType", {
            get: /**
             * @return {?}
             */ function () { return this._widgetConfiguration.cameraType; },
            /**
             * Selector de tipo de cámara a utilizar para realizar la captura (frontal o trasera).
             */
            set: /**
             * Selector de tipo de cámara a utilizar para realizar la captura (frontal o trasera).
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._widgetConfiguration.cameraType = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FacePhiSelphiComponent.prototype, "tutorial", {
            get: /**
             * @return {?}
             */ function () { return this._widgetConfiguration.tutorial; },
            /**
             * Indica si el tutorial está disponible en el widget.
             */
            set: /**
             * Indica si el tutorial está disponible en el widget.
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._widgetConfiguration.tutorial = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FacePhiSelphiComponent.prototype, "extractionMode", {
            get: /**
             * @return {?}
             */ function () { return this._widgetConfiguration.extractionMode; },
            /**
             * Modo de extracción o flujo de ejecución utilizado por el widget.
             */
            set: /**
             * Modo de extracción o flujo de ejecución utilizado por el widget.
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._widgetConfiguration.extractionMode = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FacePhiSelphiComponent.prototype, "livenessMode", {
            get: /**
             * @return {?}
             */ function () { return this._widgetConfiguration.livenessMode; },
            /**
             * Modos de verificación de prueba de vida utilizado por el widget.
             */
            set: /**
             * Modos de verificación de prueba de vida utilizado por el widget.
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._widgetConfiguration.livenessMode = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FacePhiSelphiComponent.prototype, "livenessPrecision", {
            get: /**
             * @return {?}
             */ function () { return this._widgetConfiguration.livenessPrecision; },
            /**
             *
             */
            set: /**
             *
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._widgetConfiguration.livenessPrecision = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FacePhiSelphiComponent.prototype, "livenessMoveInitialError", {
            get: /**
             * @return {?}
             */ function () { return this._widgetConfiguration.livenessMoveInitialError; },
            /**
             *
             */
            set: /**
             *
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._widgetConfiguration.livenessMoveInitialError = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FacePhiSelphiComponent.prototype, "livenessMoveInfoTime", {
            get: /**
             * @return {?}
             */ function () { return this._widgetConfiguration.livenessMoveInfoTime; },
            /**
             *
             */
            set: /**
             *
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._widgetConfiguration.livenessMoveInfoTime = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FacePhiSelphiComponent.prototype, "interactible", {
            get: /**
             * @return {?}
             */ function () { return this._widgetConfiguration.interactible; },
            /**
             * Indica si el widget permite la interacción con el usuario.
             */
            set: /**
             * Indica si el widget permite la interacción con el usuario.
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._widgetConfiguration.interactible = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FacePhiSelphiComponent.prototype, "registerTime", {
            get: /**
             * @return {?}
             */ function () { return this._widgetConfiguration.registerTime; },
            /**
             * Tiempo de registro en segundos.
             */
            set: /**
             * Tiempo de registro en segundos.
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._widgetConfiguration.registerTime = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FacePhiSelphiComponent.prototype, "authenticateTime", {
            get: /**
             * @return {?}
             */ function () { return this._widgetConfiguration.authenticateTime; },
            /**
             * Tiempo de autenticación en segundos.
             */
            set: /**
             * Tiempo de autenticación en segundos.
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._widgetConfiguration.authenticateTime = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FacePhiSelphiComponent.prototype, "imageFormat", {
            get: /**
             * @return {?}
             */ function () { return this._widgetConfiguration.imageFormat; },
            /**
             * Formato de las imágenes capturadas por el widget (MIME type).
             */
            set: /**
             * Formato de las imágenes capturadas por el widget (MIME type).
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._widgetConfiguration.imageFormat = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FacePhiSelphiComponent.prototype, "imageQuality", {
            get: /**
             * @return {?}
             */ function () { return this._widgetConfiguration.imageQuality; },
            /**
             * Factor de calidad de las imágenes devueltas (rango 0.0 a 1.0). Únicamente aplicable cuando el formato de imagen se ha especificado como "image/jpeg".
             */
            set: /**
             * Factor de calidad de las imágenes devueltas (rango 0.0 a 1.0). Únicamente aplicable cuando el formato de imagen se ha especificado como "image/jpeg".
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._widgetConfiguration.imageQuality = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FacePhiSelphiComponent.prototype, "logImages", {
            get: /**
             * @return {?}
             */ function () { return this._widgetConfiguration.logImages; },
            /**
             *
             */
            set: /**
             *
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._widgetConfiguration.logImages = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FacePhiSelphiComponent.prototype, "cropFactor", {
            get: /**
             * @return {?}
             */ function () { return this._widgetConfiguration.cropFactor; },
            /**
             * Factor de recorte de las imágenes devueltas por el widget.
             */
            set: /**
             * Factor de recorte de las imágenes devueltas por el widget.
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._widgetConfiguration.cropFactor = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FacePhiSelphiComponent.prototype, "cropImage", {
            get: /**
             * @return {?}
             */ function () { return this._widgetConfiguration.cropImage; },
            /**
             * Indica si el widget debe recortar las imágenes capturadas, o no.
             */
            set: /**
             * Indica si el widget debe recortar las imágenes capturadas, o no.
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._widgetConfiguration.cropImage = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FacePhiSelphiComponent.prototype, "templateFormat", {
            get: /**
             * @return {?}
             */ function () { return this._widgetConfiguration.templateFormat; },
            /**
             * Formato de salida de la información de template generada por el widget.
             */
            set: /**
             * Formato de salida de la información de template generada por el widget.
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._widgetConfiguration.templateFormat = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FacePhiSelphiComponent.prototype, "stabilizationStage", {
            get: /**
             * @return {?}
             */ function () { return this._widgetConfiguration.stabilizationStage; },
            /**
             * Activa la fase de estabilización previa a la captura. Por defecto, la estabilización estará desactivada.
             * En caso de haber seleccionado LivenessMode==Move, este parámetro no se tendrá en cuenta y siempre se realizará fase de estabilizado.
             */
            set: /**
             * Activa la fase de estabilización previa a la captura. Por defecto, la estabilización estará desactivada.
             * En caso de haber seleccionado LivenessMode==Move, este parámetro no se tendrá en cuenta y siempre se realizará fase de estabilizado.
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._widgetConfiguration.stabilizationStage = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FacePhiSelphiComponent.prototype, "videoRecord", {
            get: /**
             * @return {?}
             */ function () { return this._widgetConfiguration.videoRecord; },
            /**
             * Indica si el widget debe grabar la sesión del usuario en video.
             */
            set: /**
             * Indica si el widget debe grabar la sesión del usuario en video.
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._widgetConfiguration.videoRecord = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FacePhiSelphiComponent.prototype, "videoRecordRate", {
            get: /**
             * @return {?}
             */ function () { return this._widgetConfiguration.videoRecordRate; },
            /**
             * Frecuencia de grabación (en frames por segundo).
             */
            set: /**
             * Frecuencia de grabación (en frames por segundo).
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._widgetConfiguration.videoRecordRate = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FacePhiSelphiComponent.prototype, "videoRecordScale", {
            get: /**
             * @return {?}
             */ function () { return this._widgetConfiguration.videoRecordScale; },
            /**
             * Factor de escalado aplicado sobre las capturas realizadas para la generación del video.
             * Toma valores porcentuales de 0.0 a 1.0 (que equivaldría a una escala del 100% de resolución de cámara seleccionada).
             */
            set: /**
             * Factor de escalado aplicado sobre las capturas realizadas para la generación del video.
             * Toma valores porcentuales de 0.0 a 1.0 (que equivaldría a una escala del 100% de resolución de cámara seleccionada).
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._widgetConfiguration.videoRecordScale = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FacePhiSelphiComponent.prototype, "videoRecordType", {
            get: /**
             * @return {?}
             */ function () { return this._widgetConfiguration.videoRecordType; },
            /**
             * Tipo de salida del video generado. Los posibles valores se tomarán del enumerado "FPhi.Selphi.RecordType".
             */
            set: /**
             * Tipo de salida del video generado. Los posibles valores se tomarán del enumerado "FPhi.Selphi.RecordType".
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._widgetConfiguration.videoRecordType = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FacePhiSelphiComponent.prototype, "debugMode", {
            get: /**
             * @return {?}
             */ function () { return this._widgetConfiguration.debugMode; },
            /**
             * Activa el modo de depuración del widget, en el que se mostrarán mensajes informativos en la consola del navegador.
             */
            set: /**
             * Activa el modo de depuración del widget, en el que se mostrarán mensajes informativos en la consola del navegador.
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._widgetConfiguration.debugMode = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        FacePhiSelphiComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                //console.warn(`>>>> [facephi-selphi] ngOnInit { autoLoadLibResources: ${this.autoLoadLibResources} }`, this.widgetContainer.nativeElement);
                //console.log(`widgetContainer.offsetWidth: ${(this.widgetContainer.nativeElement as any).offsetWidth}`);
                //console.log(`widgetContainer.offsetHeight: ${(this.widgetContainer.nativeElement as any).offsetHeight}`);
                var _this = this;
                this._widgetConfiguration.widgetContainer = this.widgetContainer.nativeElement;
                this.setupEvents();
                /** @type {?} */
                var widgetInitFunc = ( /**
                 * @return {?}
                 */function () {
                    //console.warn(">>>> [facephi-selphi]  CONTROL LOADED!!");
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
        FacePhiSelphiComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                //console.warn(">>>> [facephi-selphi] ngOnDestroy");
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
        FacePhiSelphiComponent.prototype.setupEvents =
            // #endregion
            // #region "Métodos privados"
            /**
             * @private
             * @return {?}
             */
            function () {
                var _this = this;
                this._widgetConfiguration.onModuleLoaded = ( /**
                 * @param {?} eventData
                 * @return {?}
                 */function (eventData) { _this.onModuleLoaded.emit(eventData); });
                this._widgetConfiguration.onStabilizing = ( /**
                 * @param {?} stabilizingResult
                 * @return {?}
                 */function (stabilizingResult) { _this.onStabilizing.emit(stabilizingResult); });
                this._widgetConfiguration.onExtractionFinish = ( /**
                 * @param {?} extractionResult
                 * @return {?}
                 */function (extractionResult) { _this.onExtractionFinish.emit(extractionResult); });
                this._widgetConfiguration.onUserCancel = ( /**
                 * @return {?}
                 */function () { _this.onUserCancel.emit(); });
                this._widgetConfiguration.onExceptionCaptured = ( /**
                 * @param {?} exceptionResult
                 * @return {?}
                 */function (exceptionResult) { _this.onExceptionCaptured.emit(exceptionResult); });
                this._widgetConfiguration.onLivenessError = ( /**
                 * @param {?} livenessErrorResult
                 * @return {?}
                 */function (livenessErrorResult) { _this.onLivenessError.emit(livenessErrorResult); });
                this._widgetConfiguration.onLivenessErrorButtonClick = ( /**
                 * @return {?}
                 */function () { _this.onLivenessErrorButtonClick.emit(); });
                this._widgetConfiguration.onExtractionTimeout = ( /**
                 * @param {?} extractionTimeoutResult
                 * @return {?}
                 */function (extractionTimeoutResult) { _this.onExtractionTimeout.emit(extractionTimeoutResult); });
                this._widgetConfiguration.onTimeoutErrorButtonClick = ( /**
                 * @return {?}
                 */function () { _this.onTimeoutErrorButtonClick.emit(); });
                this._widgetConfiguration.onTrackStatus = ( /**
                 * @param {?} eventData
                 * @return {?}
                 */function (eventData) { _this.onTrackStatus.emit(eventData); });
                return this;
            };
        FacePhiSelphiComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "facephi-selphi",
                        template: "<div #widgetContainer\n     [style.width]=\"widgetWidth\"\n     [style.height]=\"widgetHeight\"\n     [ngClass]=\"containerCssClass\">\n</div>\n\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        FacePhiSelphiComponent.ctorParameters = function () {
            return [
                { type: FPhiSelphiWidgetService }
            ];
        };
        FacePhiSelphiComponent.propDecorators = {
            cssClass: [{ type: i0.Input, args: ["class",] }, { type: i0.HostBinding, args: ["class",] }],
            componentWidth: [{ type: i0.Input, args: ["width",] }],
            componentHeight: [{ type: i0.Input, args: ["height",] }],
            widgetContainer: [{ type: i0.ViewChild, args: ["widgetContainer",] }],
            containerCssClass: [{ type: i0.Input }],
            widgetLibPath: [{ type: i0.Input }],
            autoLoadLibResources: [{ type: i0.Input }],
            resourcesPath: [{ type: i0.Input }],
            graphPath: [{ type: i0.Input }],
            language: [{ type: i0.Input }],
            dpiList: [{ type: i0.Input }],
            cameraWidth: [{ type: i0.Input }],
            cameraHeight: [{ type: i0.Input }],
            cameraRotation: [{ type: i0.Input }],
            cameraType: [{ type: i0.Input }],
            tutorial: [{ type: i0.Input }],
            extractionMode: [{ type: i0.Input }],
            livenessMode: [{ type: i0.Input }],
            livenessPrecision: [{ type: i0.Input }],
            livenessMoveInitialError: [{ type: i0.Input }],
            livenessMoveInfoTime: [{ type: i0.Input }],
            interactible: [{ type: i0.Input }],
            registerTime: [{ type: i0.Input }],
            authenticateTime: [{ type: i0.Input }],
            imageFormat: [{ type: i0.Input }],
            imageQuality: [{ type: i0.Input }],
            logImages: [{ type: i0.Input }],
            cropFactor: [{ type: i0.Input }],
            cropImage: [{ type: i0.Input }],
            templateFormat: [{ type: i0.Input }],
            stabilizationStage: [{ type: i0.Input }],
            videoRecord: [{ type: i0.Input }],
            videoRecordRate: [{ type: i0.Input }],
            videoRecordScale: [{ type: i0.Input }],
            videoRecordType: [{ type: i0.Input }],
            debugMode: [{ type: i0.Input }],
            onComponentLoaded: [{ type: i0.Output }],
            onModuleLoaded: [{ type: i0.Output }],
            onStabilizing: [{ type: i0.Output }],
            onExtractionFinish: [{ type: i0.Output }],
            onUserCancel: [{ type: i0.Output }],
            onExceptionCaptured: [{ type: i0.Output }],
            onLivenessError: [{ type: i0.Output }],
            onLivenessErrorButtonClick: [{ type: i0.Output }],
            onExtractionTimeout: [{ type: i0.Output }],
            onTimeoutErrorButtonClick: [{ type: i0.Output }],
            onTrackStatus: [{ type: i0.Output }]
        };
        return FacePhiSelphiComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FPhiSelphiConstants = /** @class */ (function () {
        function FPhiSelphiConstants() {
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
        return FPhiSelphiConstants;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FacePhiSelphiModule = /** @class */ (function () {
        function FacePhiSelphiModule() {
        }
        FacePhiSelphiModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            FacePhiSelphiComponent
                        ],
                        imports: [
                            i1.CommonModule
                        ],
                        exports: [
                            FacePhiSelphiComponent
                        ]
                    },] }
        ];
        return FacePhiSelphiModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.FacePhiSelphiComponent = FacePhiSelphiComponent;
    exports.FPhiSelphiConfiguration = FPhiSelphiConfiguration;
    exports.FPhiSelphiConstants = FPhiSelphiConstants;
    exports.FacePhiSelphiModule = FacePhiSelphiModule;
    exports.ɵa = FPhiSelphiWidgetService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=facephi-selphi.umd.js.map