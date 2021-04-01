/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, ViewChild, ElementRef, EventEmitter, HostBinding } from "@angular/core";
import { FPhiSelphiConfiguration } from "../../models/facephi-selphi-configuration";
import { FPhiSelphiWidgetService } from "../../services/fphi-selphi-widget.service";
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
         */
        function (value) {
            if (value)
                this._cssClass += " " + value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphiComponent.prototype, "widgetWidth", {
        get: /**
         * @return {?}
         */
        function () {
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
         */
        function () {
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
         */
        function () { return this._widgetConfiguration.resourcesPath; },
        /**
         * Ruta donde está ubicado el fichero widget.xml y el resto de recursos personalizables del widget.
         */
        set: /**
         * Ruta donde está ubicado el fichero widget.xml y el resto de recursos personalizables del widget.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.resourcesPath = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphiComponent.prototype, "graphPath", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.graphPath; },
        /**
         * Ruta donde está ubicado el fichero graph.xml.
         */
        set: /**
         * Ruta donde está ubicado el fichero graph.xml.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.graphPath = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphiComponent.prototype, "language", {
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
    Object.defineProperty(FacePhiSelphiComponent.prototype, "dpiList", {
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
    Object.defineProperty(FacePhiSelphiComponent.prototype, "cameraWidth", {
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
    Object.defineProperty(FacePhiSelphiComponent.prototype, "cameraHeight", {
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
    Object.defineProperty(FacePhiSelphiComponent.prototype, "cameraRotation", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.cameraRotation; },
        /**
         * Rotación de la cámara.
         */
        set: /**
         * Rotación de la cámara.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.cameraRotation = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphiComponent.prototype, "cameraType", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.cameraType; },
        /**
         * Selector de tipo de cámara a utilizar para realizar la captura (frontal o trasera).
         */
        set: /**
         * Selector de tipo de cámara a utilizar para realizar la captura (frontal o trasera).
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.cameraType = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphiComponent.prototype, "tutorial", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.tutorial; },
        /**
         * Indica si el tutorial está disponible en el widget.
         */
        set: /**
         * Indica si el tutorial está disponible en el widget.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.tutorial = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphiComponent.prototype, "extractionMode", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.extractionMode; },
        /**
         * Modo de extracción o flujo de ejecución utilizado por el widget.
         */
        set: /**
         * Modo de extracción o flujo de ejecución utilizado por el widget.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.extractionMode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphiComponent.prototype, "livenessMode", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.livenessMode; },
        /**
         * Modos de verificación de prueba de vida utilizado por el widget.
         */
        set: /**
         * Modos de verificación de prueba de vida utilizado por el widget.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.livenessMode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphiComponent.prototype, "livenessPrecision", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.livenessPrecision; },
        /**
         *
         */
        set: /**
         *
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.livenessPrecision = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphiComponent.prototype, "livenessMoveInitialError", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.livenessMoveInitialError; },
        /**
         *
         */
        set: /**
         *
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.livenessMoveInitialError = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphiComponent.prototype, "livenessMoveInfoTime", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.livenessMoveInfoTime; },
        /**
         *
         */
        set: /**
         *
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.livenessMoveInfoTime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphiComponent.prototype, "interactible", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.interactible; },
        /**
         * Indica si el widget permite la interacción con el usuario.
         */
        set: /**
         * Indica si el widget permite la interacción con el usuario.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.interactible = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphiComponent.prototype, "registerTime", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.registerTime; },
        /**
         * Tiempo de registro en segundos.
         */
        set: /**
         * Tiempo de registro en segundos.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.registerTime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphiComponent.prototype, "authenticateTime", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.authenticateTime; },
        /**
         * Tiempo de autenticación en segundos.
         */
        set: /**
         * Tiempo de autenticación en segundos.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.authenticateTime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphiComponent.prototype, "imageFormat", {
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
    Object.defineProperty(FacePhiSelphiComponent.prototype, "imageQuality", {
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
    Object.defineProperty(FacePhiSelphiComponent.prototype, "logImages", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.logImages; },
        /**
         *
         */
        set: /**
         *
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.logImages = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphiComponent.prototype, "cropFactor", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.cropFactor; },
        /**
         * Factor de recorte de las imágenes devueltas por el widget.
         */
        set: /**
         * Factor de recorte de las imágenes devueltas por el widget.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.cropFactor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphiComponent.prototype, "cropImage", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.cropImage; },
        /**
         * Indica si el widget debe recortar las imágenes capturadas, o no.
         */
        set: /**
         * Indica si el widget debe recortar las imágenes capturadas, o no.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.cropImage = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphiComponent.prototype, "templateFormat", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.templateFormat; },
        /**
         * Formato de salida de la información de template generada por el widget.
         */
        set: /**
         * Formato de salida de la información de template generada por el widget.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.templateFormat = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphiComponent.prototype, "stabilizationStage", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.stabilizationStage; },
        /**
         * Activa la fase de estabilización previa a la captura. Por defecto, la estabilización estará desactivada.
         * En caso de haber seleccionado LivenessMode==Move, este parámetro no se tendrá en cuenta y siempre se realizará fase de estabilizado.
         */
        set: /**
         * Activa la fase de estabilización previa a la captura. Por defecto, la estabilización estará desactivada.
         * En caso de haber seleccionado LivenessMode==Move, este parámetro no se tendrá en cuenta y siempre se realizará fase de estabilizado.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.stabilizationStage = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphiComponent.prototype, "videoRecord", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.videoRecord; },
        /**
         * Indica si el widget debe grabar la sesión del usuario en video.
         */
        set: /**
         * Indica si el widget debe grabar la sesión del usuario en video.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.videoRecord = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphiComponent.prototype, "videoRecordRate", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.videoRecordRate; },
        /**
         * Frecuencia de grabación (en frames por segundo).
         */
        set: /**
         * Frecuencia de grabación (en frames por segundo).
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.videoRecordRate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphiComponent.prototype, "videoRecordScale", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.videoRecordScale; },
        /**
         * Factor de escalado aplicado sobre las capturas realizadas para la generación del video.
         * Toma valores porcentuales de 0.0 a 1.0 (que equivaldría a una escala del 100% de resolución de cámara seleccionada).
         */
        set: /**
         * Factor de escalado aplicado sobre las capturas realizadas para la generación del video.
         * Toma valores porcentuales de 0.0 a 1.0 (que equivaldría a una escala del 100% de resolución de cámara seleccionada).
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.videoRecordScale = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphiComponent.prototype, "videoRecordType", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.videoRecordType; },
        /**
         * Tipo de salida del video generado. Los posibles valores se tomarán del enumerado "FPhi.Selphi.RecordType".
         */
        set: /**
         * Tipo de salida del video generado. Los posibles valores se tomarán del enumerado "FPhi.Selphi.RecordType".
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.videoRecordType = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphiComponent.prototype, "debugMode", {
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
        var widgetInitFunc = (/**
         * @return {?}
         */
        function () {
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
        this._widgetConfiguration.onModuleLoaded = (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onModuleLoaded.emit(eventData); });
        this._widgetConfiguration.onStabilizing = (/**
         * @param {?} stabilizingResult
         * @return {?}
         */
        function (stabilizingResult) { _this.onStabilizing.emit(stabilizingResult); });
        this._widgetConfiguration.onExtractionFinish = (/**
         * @param {?} extractionResult
         * @return {?}
         */
        function (extractionResult) { _this.onExtractionFinish.emit(extractionResult); });
        this._widgetConfiguration.onUserCancel = (/**
         * @return {?}
         */
        function () { _this.onUserCancel.emit(); });
        this._widgetConfiguration.onExceptionCaptured = (/**
         * @param {?} exceptionResult
         * @return {?}
         */
        function (exceptionResult) { _this.onExceptionCaptured.emit(exceptionResult); });
        this._widgetConfiguration.onLivenessError = (/**
         * @param {?} livenessErrorResult
         * @return {?}
         */
        function (livenessErrorResult) { _this.onLivenessError.emit(livenessErrorResult); });
        this._widgetConfiguration.onLivenessErrorButtonClick = (/**
         * @return {?}
         */
        function () { _this.onLivenessErrorButtonClick.emit(); });
        this._widgetConfiguration.onExtractionTimeout = (/**
         * @param {?} extractionTimeoutResult
         * @return {?}
         */
        function (extractionTimeoutResult) { _this.onExtractionTimeout.emit(extractionTimeoutResult); });
        this._widgetConfiguration.onTimeoutErrorButtonClick = (/**
         * @return {?}
         */
        function () { _this.onTimeoutErrorButtonClick.emit(); });
        this._widgetConfiguration.onTrackStatus = (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onTrackStatus.emit(eventData); });
        return this;
    };
    FacePhiSelphiComponent.decorators = [
        { type: Component, args: [{
                    selector: "facephi-selphi",
                    template: "<div #widgetContainer\n     [style.width]=\"widgetWidth\"\n     [style.height]=\"widgetHeight\"\n     [ngClass]=\"containerCssClass\">\n</div>\n\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    FacePhiSelphiComponent.ctorParameters = function () { return [
        { type: FPhiSelphiWidgetService }
    ]; };
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
    return FacePhiSelphiComponent;
}());
export { FacePhiSelphiComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FacePhiSelphiComponent.prototype._cssClass;
    /**
     * @type {?}
     * @private
     */
    FacePhiSelphiComponent.prototype._widgetConfiguration;
    /**
     * Anchura del componente.
     * @type {?}
     */
    FacePhiSelphiComponent.prototype.componentWidth;
    /**
     * Altura del componente.
     * @type {?}
     */
    FacePhiSelphiComponent.prototype.componentHeight;
    /**
     * Referencia interna al contenedor sobre el que se generará el widget web.
     * @type {?}
     */
    FacePhiSelphiComponent.prototype.widgetContainer;
    /**
     * Clases CSS aplicadas sobre el contenedor del widget web.
     * @type {?}
     */
    FacePhiSelphiComponent.prototype.containerCssClass;
    /**
     * Ruta en la que están localizados los recursos javascript nativos del widget web.
     * @type {?}
     */
    FacePhiSelphiComponent.prototype.widgetLibPath;
    /**
     * Flag para indicar si queremos que sea el componente el encargado de cargar e inicializar todos los recursos javascript del widget y borrarlos en su evento 'onDestroy'.
     * @type {?}
     */
    FacePhiSelphiComponent.prototype.autoLoadLibResources;
    /**
     * Evento lanzado cuando los recursos del widget se han cargado correctamente.
     * @type {?}
     */
    FacePhiSelphiComponent.prototype.onComponentLoaded;
    /**
     * Evento lanzado por el widget cuando se ha finalizado el proceso de carga e inicialización, tando del widget, como de los recursos asociados al mismo.
     * @type {?}
     */
    FacePhiSelphiComponent.prototype.onModuleLoaded;
    /**
     * Evento lanzado durante los ciclos de estabilización de la imagen para la correcta realización de la captura.
     * @type {?}
     */
    FacePhiSelphiComponent.prototype.onStabilizing;
    /**
     * Evento lanzado cuando el proceso de extracción ha finalizado correctamente. Devuelve el resultado de la captura.
     * @type {?}
     */
    FacePhiSelphiComponent.prototype.onExtractionFinish;
    /**
     * Evento lanzado cuando el usuario cancela el proceso de extracción.
     * @type {?}
     */
    FacePhiSelphiComponent.prototype.onUserCancel;
    /**
     * Evento lanzado en caso de que se produzca un error interno del widget.
     * @type {?}
     */
    FacePhiSelphiComponent.prototype.onExceptionCaptured;
    /**
     * Evento lanzado cuando el proceso de verificación de autenticidad por prueba de vida falla.
     * @type {?}
     */
    FacePhiSelphiComponent.prototype.onLivenessError;
    /**
     * Evento lanzado cuando el proceso de verificación de autenticidad por prueba de vida falla y el usuario pulsa el botón de la pantalla de error mostrada.
     * @type {?}
     */
    FacePhiSelphiComponent.prototype.onLivenessErrorButtonClick;
    /**
     * Evento lanzado si el proceso de captura excede el tiempo máximo disponible.
     * @type {?}
     */
    FacePhiSelphiComponent.prototype.onExtractionTimeout;
    /**
     * Evento lanzado cuando el proceso de captura excede el tiempo máximo disponible y el usuario pulsa el botón de la pantalla de error mostrada.
     * @type {?}
     */
    FacePhiSelphiComponent.prototype.onTimeoutErrorButtonClick;
    /**
     * Evento lanzado tras cualquier acción realizada por el usuario sobre la interfaz gráfica del widget o ante cualquier cambio de estado
     * durante el proceso de captura.
     * @type {?}
     */
    FacePhiSelphiComponent.prototype.onTrackStatus;
    /**
     * @type {?}
     * @private
     */
    FacePhiSelphiComponent.prototype.widgetService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXBoaS1zZWxwaGkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmFjZXBoaS1zZWxwaGkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9mYWNlcGhpLXNlbHBoaS9mYWNlcGhpLXNlbHBoaS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBR1QsS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixXQUFXLEVBQ2QsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDcEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFHcEY7SUFnY0ksYUFBYTtJQUViLGFBQWE7SUFFYiwwQkFBMEI7SUFFMUIsZ0NBQ1ksYUFBc0M7UUFBdEMsa0JBQWEsR0FBYixhQUFhLENBQXlCOztRQTliMUMsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2Qix5QkFBb0IsR0FBNEIsSUFBSSx1QkFBdUIsRUFBRSxDQUFDOzs7OztRQW1FL0Usa0JBQWEsR0FBRywyQkFBMkIsQ0FBQzs7OztRQU01Qyx5QkFBb0IsR0FBWSxJQUFJLENBQUM7Ozs7OztRQThTckMsc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQzs7OztRQU01QyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7Ozs7UUFNekMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDOzs7O1FBTXhDLHVCQUFrQixHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7Ozs7UUFNN0MsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDOzs7O1FBTXZDLHdCQUFtQixHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7Ozs7UUFNOUMsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDOzs7O1FBTTFDLCtCQUEwQixHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7Ozs7UUFNckQsd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQzs7OztRQU05Qyw4QkFBeUIsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDOzs7OztRQU9wRCxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFVM0MsQ0FBQztJQXhiTCxzQkFFVyw0Q0FBUTtRQU5uQixhQUFhO1FBRWIsd0JBQXdCOzs7Ozs7O1FBRXhCO1lBR0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7Ozs7O1FBRUQsVUFBb0IsS0FBYTtZQUM3QixJQUFJLEtBQUs7Z0JBQ0wsSUFBSSxDQUFDLFNBQVMsSUFBSSxNQUFJLEtBQU8sQ0FBQztRQUN0QyxDQUFDOzs7T0FMQTtJQWFELHNCQUFXLCtDQUFXOzs7O1FBQXRCO1lBQ0ksT0FBTyxJQUFJLENBQUMsY0FBYztnQkFDdEIsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLGNBQWMsS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO29CQUMxRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWM7b0JBQ3JCLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEdBQUc7d0JBQ3JDLENBQUMsQ0FBSSxVQUFVLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFJO3dCQUN4QyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWM7Z0JBQzdCLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDakIsQ0FBQzs7O09BQUE7SUFRRCxzQkFBVyxnREFBWTs7OztRQUF2QjtZQUNJLE9BQU8sSUFBSSxDQUFDLGVBQWU7Z0JBQ3ZCLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxlQUFlLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztvQkFDNUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlO29CQUN0QixDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxHQUFHO3dCQUN0QyxDQUFDLENBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBSTt3QkFDekMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlO2dCQUM5QixDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ2pCLENBQUM7OztPQUFBO0lBK0JELHNCQUNXLGlEQUFhOzs7O1FBSXhCLGNBQXFDLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFSdEY7O1dBRUc7Ozs7OztRQUNILFVBQ3lCLEtBQWE7WUFDbEMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDcEQsQ0FBQzs7O09BQUE7SUFPRCxzQkFDVyw2Q0FBUzs7OztRQUlwQixjQUFpQyxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBUjlFOztXQUVHOzs7Ozs7UUFDSCxVQUNxQixLQUFhO1lBQzlCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2hELENBQUM7OztPQUFBO0lBT0Qsc0JBQ1csNENBQVE7Ozs7UUFJbkIsY0FBZ0MsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQVI1RTs7V0FFRzs7Ozs7O1FBQ0gsVUFDb0IsS0FBYTtZQUM3QixJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUMvQyxDQUFDOzs7T0FBQTtJQU9ELHNCQUNXLDJDQUFPOzs7O1FBSWxCLGNBQXNDLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFSakY7O1dBRUc7Ozs7OztRQUNILFVBQ21CLEtBQW9CO1lBQ25DLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQzlDLENBQUM7OztPQUFBO0lBT0Qsc0JBQ1csK0NBQVc7Ozs7UUFJdEIsY0FBbUMsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQVJsRjs7V0FFRzs7Ozs7O1FBQ0gsVUFDdUIsS0FBYTtZQUNoQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUNsRCxDQUFDOzs7T0FBQTtJQU9ELHNCQUNXLGdEQUFZOzs7O1FBSXZCLGNBQW9DLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFScEY7O1dBRUc7Ozs7OztRQUNILFVBQ3dCLEtBQWE7WUFDakMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDbkQsQ0FBQzs7O09BQUE7SUFPRCxzQkFDVyxrREFBYzs7OztRQUl6QixjQUFtQyxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBUnJGOztXQUVHOzs7Ozs7UUFDSCxVQUMwQixLQUFVO1lBQ2hDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3JELENBQUM7OztPQUFBO0lBT0Qsc0JBQ1csOENBQVU7Ozs7UUFJckIsY0FBK0IsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQVI3RTs7V0FFRzs7Ozs7O1FBQ0gsVUFDc0IsS0FBVTtZQUM1QixJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUNqRCxDQUFDOzs7T0FBQTtJQU9ELHNCQUNXLDRDQUFROzs7O1FBSW5CLGNBQWlDLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFSN0U7O1dBRUc7Ozs7OztRQUNILFVBQ29CLEtBQWM7WUFDOUIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDL0MsQ0FBQzs7O09BQUE7SUFPRCxzQkFDVyxrREFBYzs7OztRQUl6QixjQUFtQyxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBUnJGOztXQUVHOzs7Ozs7UUFDSCxVQUMwQixLQUFVO1lBQ2hDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3JELENBQUM7OztPQUFBO0lBT0Qsc0JBQ1csZ0RBQVk7Ozs7UUFJdkIsY0FBaUMsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQVJqRjs7V0FFRzs7Ozs7O1FBQ0gsVUFDd0IsS0FBVTtZQUM5QixJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUNuRCxDQUFDOzs7T0FBQTtJQU9ELHNCQUNXLHFEQUFpQjs7OztRQUk1QixjQUF5QyxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7UUFSOUY7O1dBRUc7Ozs7OztRQUNILFVBQzZCLEtBQWE7WUFDdEMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztRQUN4RCxDQUFDOzs7T0FBQTtJQU9ELHNCQUNXLDREQUF3Qjs7OztRQUluQyxjQUFnRCxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7UUFSNUc7O1dBRUc7Ozs7OztRQUNILFVBQ29DLEtBQWE7WUFDN0MsSUFBSSxDQUFDLG9CQUFvQixDQUFDLHdCQUF3QixHQUFHLEtBQUssQ0FBQztRQUMvRCxDQUFDOzs7T0FBQTtJQU9ELHNCQUNXLHdEQUFvQjs7OztRQUkvQixjQUE0QyxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7UUFScEc7O1dBRUc7Ozs7OztRQUNILFVBQ2dDLEtBQWE7WUFDekMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztRQUMzRCxDQUFDOzs7T0FBQTtJQU9ELHNCQUNXLGdEQUFZOzs7O1FBSXZCLGNBQXFDLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFSckY7O1dBRUc7Ozs7OztRQUNILFVBQ3dCLEtBQWM7WUFDbEMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDbkQsQ0FBQzs7O09BQUE7SUFPRCxzQkFDVyxnREFBWTs7OztRQUl2QixjQUFvQyxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBUnBGOztXQUVHOzs7Ozs7UUFDSCxVQUN3QixLQUFhO1lBQ2pDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ25ELENBQUM7OztPQUFBO0lBT0Qsc0JBQ1csb0RBQWdCOzs7O1FBSTNCLGNBQXdDLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztRQVI1Rjs7V0FFRzs7Ozs7O1FBQ0gsVUFDNEIsS0FBYTtZQUNyQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ3ZELENBQUM7OztPQUFBO0lBT0Qsc0JBQ1csK0NBQVc7Ozs7UUFJdEIsY0FBbUMsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQVJsRjs7V0FFRzs7Ozs7O1FBQ0gsVUFDdUIsS0FBYTtZQUNoQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUNsRCxDQUFDOzs7T0FBQTtJQU9ELHNCQUNXLGdEQUFZOzs7O1FBSXZCLGNBQW9DLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFScEY7O1dBRUc7Ozs7OztRQUNILFVBQ3dCLEtBQWE7WUFDakMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDbkQsQ0FBQzs7O09BQUE7SUFPRCxzQkFDVyw2Q0FBUzs7OztRQUlwQixjQUFrQyxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBUi9FOztXQUVHOzs7Ozs7UUFDSCxVQUNxQixLQUFjO1lBQy9CLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2hELENBQUM7OztPQUFBO0lBT0Qsc0JBQ1csOENBQVU7Ozs7UUFJckIsY0FBa0MsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQVJoRjs7V0FFRzs7Ozs7O1FBQ0gsVUFDc0IsS0FBYTtZQUMvQixJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUNqRCxDQUFDOzs7T0FBQTtJQU9ELHNCQUNXLDZDQUFTOzs7O1FBSXBCLGNBQWtDLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFSL0U7O1dBRUc7Ozs7OztRQUNILFVBQ3FCLEtBQWM7WUFDL0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDaEQsQ0FBQzs7O09BQUE7SUFPRCxzQkFDVyxrREFBYzs7OztRQUl6QixjQUFzQyxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBUnhGOztXQUVHOzs7Ozs7UUFDSCxVQUMwQixLQUFhO1lBQ25DLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3JELENBQUM7OztPQUFBO0lBUUQsc0JBQ1csc0RBQWtCOzs7O1FBSTdCLGNBQTJDLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztRQVRqRzs7O1dBR0c7Ozs7Ozs7UUFDSCxVQUM4QixLQUFjO1lBQ3hDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDekQsQ0FBQzs7O09BQUE7SUFPRCxzQkFDVywrQ0FBVzs7OztRQUl0QixjQUFvQyxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBUm5GOztXQUVHOzs7Ozs7UUFDSCxVQUN1QixLQUFjO1lBQ2pDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ2xELENBQUM7OztPQUFBO0lBT0Qsc0JBQ1csbURBQWU7Ozs7UUFJMUIsY0FBdUMsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztRQVIxRjs7V0FFRzs7Ozs7O1FBQ0gsVUFDMkIsS0FBYTtZQUNwQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUN0RCxDQUFDOzs7T0FBQTtJQVFELHNCQUNXLG9EQUFnQjs7OztRQUkzQixjQUF3QyxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7UUFUNUY7OztXQUdHOzs7Ozs7O1FBQ0gsVUFDNEIsS0FBYTtZQUNyQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ3ZELENBQUM7OztPQUFBO0lBT0Qsc0JBQ1csbURBQWU7Ozs7UUFJMUIsY0FBb0MsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztRQVJ2Rjs7V0FFRzs7Ozs7O1FBQ0gsVUFDMkIsS0FBVTtZQUNqQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUN0RCxDQUFDOzs7T0FBQTtJQU9ELHNCQUNXLDZDQUFTOzs7O1FBSXBCLGNBQWtDLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFSL0U7O1dBRUc7Ozs7OztRQUNILFVBQ3FCLEtBQWM7WUFDL0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDaEQsQ0FBQzs7O09BQUE7Ozs7SUFxRkQseUNBQVE7OztJQUFSO1FBQ0ksNElBQTRJO1FBQzVJLHlHQUF5RztRQUN6RywyR0FBMkc7UUFIL0csaUJBdUJDO1FBbEJHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUM7UUFDL0UsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDOztZQUViLGNBQWM7OztRQUFHO1lBQ25CLDBEQUEwRDtZQUMxRCxLQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFOUIsS0FBSSxDQUFDLGFBQWE7aUJBQ2IsaUJBQWlCLENBQUMsS0FBSSxDQUFDLG9CQUFvQixDQUFDO2lCQUM1QyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzVCLENBQUMsQ0FBQTtRQUVELElBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQzNCLElBQUksQ0FBQyxhQUFhO2lCQUNiLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO2lCQUMvQixTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDbEM7O1lBQ0csY0FBYyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELDRDQUFXOzs7SUFBWDtRQUNJLG9EQUFvRDtRQUNwRCxJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUMzQixJQUFJLENBQUMsYUFBYTtpQkFDYixlQUFlLEVBQUU7aUJBQ2pCLGFBQWEsRUFBRSxDQUFDO1NBQ3hCO0lBQ0wsQ0FBQztJQUVELGFBQWE7SUFFYiw2QkFBNkI7Ozs7Ozs7SUFFckIsNENBQVc7Ozs7Ozs7SUFBbkI7UUFBQSxpQkFhQztRQVpHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjOzs7O1FBQUcsVUFBQSxTQUFTLElBQU0sS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQztRQUNqRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsYUFBYTs7OztRQUFHLFVBQUEsaUJBQWlCLElBQU0sS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDO1FBQy9HLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxrQkFBa0I7Ozs7UUFBRyxVQUFBLGdCQUFnQixJQUFNLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDO1FBQ3ZILElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZOzs7UUFBRyxjQUFRLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQztRQUM3RSxJQUFJLENBQUMsb0JBQW9CLENBQUMsbUJBQW1COzs7O1FBQUcsVUFBQSxlQUFlLElBQU0sS0FBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDO1FBQ3ZILElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlOzs7O1FBQUcsVUFBQSxtQkFBbUIsSUFBTSxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUM7UUFDdkgsSUFBSSxDQUFDLG9CQUFvQixDQUFDLDBCQUEwQjs7O1FBQUcsY0FBUSxLQUFJLENBQUMsMEJBQTBCLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQztRQUN6RyxJQUFJLENBQUMsb0JBQW9CLENBQUMsbUJBQW1COzs7O1FBQUcsVUFBQSx1QkFBdUIsSUFBTSxLQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQztRQUN2SSxJQUFJLENBQUMsb0JBQW9CLENBQUMseUJBQXlCOzs7UUFBRyxjQUFRLEtBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDO1FBQ3ZHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhOzs7O1FBQUcsVUFBQSxTQUFTLElBQU0sS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQztRQUUvRixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDOztnQkE3ZkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLDhKQUE4Qzs7aUJBRWpEOzs7O2dCQVBRLHVCQUF1Qjs7OzJCQW1CM0IsS0FBSyxTQUFDLE9BQU8sY0FDYixXQUFXLFNBQUMsT0FBTztpQ0FhbkIsS0FBSyxTQUFDLE9BQU87a0NBZ0JiLEtBQUssU0FBQyxRQUFRO2tDQWdCZCxTQUFTLFNBQUMsaUJBQWlCO29DQU0zQixLQUFLO2dDQVFMLEtBQUs7dUNBTUwsS0FBSztnQ0FNTCxLQUFLOzRCQVVMLEtBQUs7MkJBVUwsS0FBSzswQkFVTCxLQUFLOzhCQVVMLEtBQUs7K0JBVUwsS0FBSztpQ0FVTCxLQUFLOzZCQVVMLEtBQUs7MkJBVUwsS0FBSztpQ0FVTCxLQUFLOytCQVVMLEtBQUs7b0NBVUwsS0FBSzsyQ0FVTCxLQUFLO3VDQVVMLEtBQUs7K0JBVUwsS0FBSzsrQkFVTCxLQUFLO21DQVVMLEtBQUs7OEJBVUwsS0FBSzsrQkFVTCxLQUFLOzRCQVVMLEtBQUs7NkJBVUwsS0FBSzs0QkFVTCxLQUFLO2lDQVVMLEtBQUs7cUNBV0wsS0FBSzs4QkFVTCxLQUFLO2tDQVVMLEtBQUs7bUNBV0wsS0FBSztrQ0FVTCxLQUFLOzRCQVVMLEtBQUs7b0NBY0wsTUFBTTtpQ0FNTixNQUFNO2dDQU1OLE1BQU07cUNBTU4sTUFBTTsrQkFNTixNQUFNO3NDQU1OLE1BQU07a0NBTU4sTUFBTTs2Q0FNTixNQUFNO3NDQU1OLE1BQU07NENBTU4sTUFBTTtnQ0FPTixNQUFNOztJQW9FWCw2QkFBQztDQUFBLEFBamdCRCxJQWlnQkM7U0E1Zlksc0JBQXNCOzs7Ozs7SUFJL0IsMkNBQStCOzs7OztJQUMvQixzREFBc0Y7Ozs7O0lBb0J0RixnREFDMkI7Ozs7O0lBZTNCLGlEQUM0Qjs7Ozs7SUFlNUIsaURBQzRDOzs7OztJQUs1QyxtREFDaUM7Ozs7O0lBT2pDLCtDQUNtRDs7Ozs7SUFLbkQsc0RBQzRDOzs7OztJQTZTNUMsbURBQ21EOzs7OztJQUtuRCxnREFDZ0Q7Ozs7O0lBS2hELCtDQUMrQzs7Ozs7SUFLL0Msb0RBQ29EOzs7OztJQUtwRCw4Q0FDOEM7Ozs7O0lBSzlDLHFEQUNxRDs7Ozs7SUFLckQsaURBQ2lEOzs7OztJQUtqRCw0REFDNEQ7Ozs7O0lBSzVELHFEQUNxRDs7Ozs7SUFLckQsMkRBQzJEOzs7Ozs7SUFNM0QsK0NBQytDOzs7OztJQVMzQywrQ0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBPbkluaXQsXG4gICAgT25EZXN0cm95LFxuICAgIElucHV0LFxuICAgIE91dHB1dCxcbiAgICBWaWV3Q2hpbGQsXG4gICAgRWxlbWVudFJlZixcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgSG9zdEJpbmRpbmdcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgRlBoaVNlbHBoaUNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2ZhY2VwaGktc2VscGhpLWNvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB7IEZQaGlTZWxwaGlXaWRnZXRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2ZwaGktc2VscGhpLXdpZGdldC5zZXJ2aWNlXCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiZmFjZXBoaS1zZWxwaGlcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2ZhY2VwaGktc2VscGhpLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2ZhY2VwaGktc2VscGhpLmNvbXBvbmVudC5zY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEZhY2VQaGlTZWxwaGlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICAvLyAjcmVnaW9uIFwiQXRyaWJ1dG9zXCJcblxuICAgIHByaXZhdGUgX2Nzc0NsYXNzOiBzdHJpbmcgPSBcIlwiO1xuICAgIHByaXZhdGUgX3dpZGdldENvbmZpZ3VyYXRpb246IEZQaGlTZWxwaGlDb25maWd1cmF0aW9uID0gbmV3IEZQaGlTZWxwaGlDb25maWd1cmF0aW9uKCk7XG5cbiAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAvLyAjcmVnaW9uIFwiUHJvcGllZGFkZXNcIlxuXG4gICAgQElucHV0KFwiY2xhc3NcIilcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzc1wiKVxuICAgIHB1YmxpYyBnZXQgY3NzQ2xhc3MoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nzc0NsYXNzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgY3NzQ2xhc3ModmFsdWU6IHN0cmluZykge1xuICAgICAgICBpZiAodmFsdWUpXG4gICAgICAgICAgICB0aGlzLl9jc3NDbGFzcyArPSBgICR7dmFsdWV9YDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbmNodXJhIGRlbCBjb21wb25lbnRlLlxuICAgICAqL1xuICAgIEBJbnB1dChcIndpZHRoXCIpXG4gICAgcHVibGljIGNvbXBvbmVudFdpZHRoOiBhbnk7XG5cbiAgICBwdWJsaWMgZ2V0IHdpZGdldFdpZHRoKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudFdpZHRoXG4gICAgICAgICAgICA/IHR5cGVvZiB0aGlzLmNvbXBvbmVudFdpZHRoID09PSBcInN0cmluZ1wiICYmIHRoaXMuY29tcG9uZW50V2lkdGguZW5kc1dpdGgoXCIlXCIpXG4gICAgICAgICAgICAgICAgPyB0aGlzLmNvbXBvbmVudFdpZHRoXG4gICAgICAgICAgICAgICAgOiBwYXJzZUZsb2F0KHRoaXMuY29tcG9uZW50V2lkdGgpICE9PSBOYU5cbiAgICAgICAgICAgICAgICAgICAgPyBgJHtwYXJzZUZsb2F0KHRoaXMuY29tcG9uZW50V2lkdGgpfXB4YFxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuY29tcG9uZW50V2lkdGhcbiAgICAgICAgICAgIDogXCIxMDAlXCI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWx0dXJhIGRlbCBjb21wb25lbnRlLlxuICAgICAqL1xuICAgIEBJbnB1dChcImhlaWdodFwiKVxuICAgIHB1YmxpYyBjb21wb25lbnRIZWlnaHQ6IGFueTtcblxuICAgIHB1YmxpYyBnZXQgd2lkZ2V0SGVpZ2h0KCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudEhlaWdodFxuICAgICAgICAgICAgPyB0eXBlb2YgdGhpcy5jb21wb25lbnRIZWlnaHQgPT09IFwic3RyaW5nXCIgJiYgdGhpcy5jb21wb25lbnRIZWlnaHQuZW5kc1dpdGgoXCIlXCIpXG4gICAgICAgICAgICAgICAgPyB0aGlzLmNvbXBvbmVudEhlaWdodFxuICAgICAgICAgICAgICAgIDogcGFyc2VGbG9hdCh0aGlzLmNvbXBvbmVudEhlaWdodCkgIT09IE5hTlxuICAgICAgICAgICAgICAgICAgICA/IGAke3BhcnNlRmxvYXQodGhpcy5jb21wb25lbnRIZWlnaHQpfXB4YFxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuY29tcG9uZW50SGVpZ2h0XG4gICAgICAgICAgICA6IFwiMTAwJVwiO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlZmVyZW5jaWEgaW50ZXJuYSBhbCBjb250ZW5lZG9yIHNvYnJlIGVsIHF1ZSBzZSBnZW5lcmFyw6EgZWwgd2lkZ2V0IHdlYi5cbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKFwid2lkZ2V0Q29udGFpbmVyXCIpXG4gICAgcHVibGljIHJlYWRvbmx5IHdpZGdldENvbnRhaW5lcjogRWxlbWVudFJlZjtcblxuICAgIC8qKlxuICAgICAqIENsYXNlcyBDU1MgYXBsaWNhZGFzIHNvYnJlIGVsIGNvbnRlbmVkb3IgZGVsIHdpZGdldCB3ZWIuXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgY29udGFpbmVyQ3NzQ2xhc3M6IHN0cmluZztcblxuICAgIC8vICNyZWdpb24gXCJDb25maWd1cmFjacOzblwiXG5cbiAgICAvKipcbiAgICAgKiBSdXRhIGVuIGxhIHF1ZSBlc3TDoW4gbG9jYWxpemFkb3MgbG9zIHJlY3Vyc29zIGphdmFzY3JpcHQgbmF0aXZvcyBkZWwgd2lkZ2V0IHdlYi5cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB3aWRnZXRMaWJQYXRoID0gXCJhc3NldHMvbGliL2ZhY2VwaGkvc2VscGhpXCI7XG5cbiAgICAvKipcbiAgICAgKiBGbGFnIHBhcmEgaW5kaWNhciBzaSBxdWVyZW1vcyBxdWUgc2VhIGVsIGNvbXBvbmVudGUgZWwgZW5jYXJnYWRvIGRlIGNhcmdhciBlIGluaWNpYWxpemFyIHRvZG9zIGxvcyByZWN1cnNvcyBqYXZhc2NyaXB0IGRlbCB3aWRnZXQgeSBib3JyYXJsb3MgZW4gc3UgZXZlbnRvICdvbkRlc3Ryb3knLlxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGF1dG9Mb2FkTGliUmVzb3VyY2VzOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqIFJ1dGEgZG9uZGUgZXN0w6EgdWJpY2FkbyBlbCBmaWNoZXJvIHdpZGdldC54bWwgeSBlbCByZXN0byBkZSByZWN1cnNvcyBwZXJzb25hbGl6YWJsZXMgZGVsIHdpZGdldC5cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcmVzb3VyY2VzUGF0aCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24ucmVzb3VyY2VzUGF0aCA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgcmVzb3VyY2VzUGF0aCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi5yZXNvdXJjZXNQYXRoOyB9XG5cbiAgICAvKipcbiAgICAgKiBSdXRhIGRvbmRlIGVzdMOhIHViaWNhZG8gZWwgZmljaGVybyBncmFwaC54bWwuXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IGdyYXBoUGF0aCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24uZ3JhcGhQYXRoID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBncmFwaFBhdGgoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24uZ3JhcGhQYXRoOyB9XG5cbiAgICAvKipcbiAgICAgKiBJZGlvbWEgZW4gcXVlIHNlIG1vc3RyYXLDoSBsYSBpbmZvcm1hY2nDs24gZGVsIHdpZGdldC5cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgbGFuZ3VhZ2UodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLmxhbmd1YWdlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBsYW5ndWFnZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi5sYW5ndWFnZTsgfVxuXG4gICAgLyoqXG4gICAgICogTGlzdGEgZGUgZGVuc2lkYWRlcyBkZSBww614ZWxlcyBlbiBwYW50YWxsYSBzb3BvcnRhZGFzIHBvciBlbCB3aWRnZXQsIGRlIGNhcmEgYSBtb3N0cmFyIGxhcyBpbcOhZ2VuZXMgZGUgcmVjdXJzbyBhZGVjdWFkYXMgYSBsYSBwYW50YWxsYSBhY3R1YWwuXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IGRwaUxpc3QodmFsdWU6IEFycmF5PG51bWJlcj4pIHtcbiAgICAgICAgdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi5kcGlMaXN0ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBkcGlMaXN0KCk6IEFycmF5PG51bWJlcj4geyByZXR1cm4gdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi5kcGlMaXN0OyB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNvbHVjacOzbiBob3Jpem9udGFsIHByZWZlcmlkYSBkZSBsYSBjw6FtYXJhIChlbCB3aWRnZXQgaW50ZW50YXLDoSBzZWxlY2Npb25hciBsYSByZXNvbHVjacOzbiBtw6FzIGNlcmNhbmEpLlxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBjYW1lcmFXaWR0aCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24uY2FtZXJhV2lkdGggPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGNhbWVyYVdpZHRoKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLmNhbWVyYVdpZHRoOyB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNvbHVjacOzbiB2ZXJ0aWNhbCBwcmVmZXJpZGEgZGUgbGEgY8OhbWFyYSAoZWwgd2lkZ2V0IGludGVudGFyw6Egc2VsZWNjaW9uYXIgbGEgcmVzb2x1Y2nDs24gbcOhcyBjZXJjYW5hKS5cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgY2FtZXJhSGVpZ2h0KHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi5jYW1lcmFIZWlnaHQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGNhbWVyYUhlaWdodCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi5jYW1lcmFIZWlnaHQ7IH1cblxuICAgIC8qKlxuICAgICAqIFJvdGFjacOzbiBkZSBsYSBjw6FtYXJhLlxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBjYW1lcmFSb3RhdGlvbih2YWx1ZTogYW55KSB7XG4gICAgICAgIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24uY2FtZXJhUm90YXRpb24gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGNhbWVyYVJvdGF0aW9uKCk6IGFueSB7IHJldHVybiB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLmNhbWVyYVJvdGF0aW9uOyB9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3RvciBkZSB0aXBvIGRlIGPDoW1hcmEgYSB1dGlsaXphciBwYXJhIHJlYWxpemFyIGxhIGNhcHR1cmEgKGZyb250YWwgbyB0cmFzZXJhKS5cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgY2FtZXJhVHlwZSh2YWx1ZTogYW55KSB7XG4gICAgICAgIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24uY2FtZXJhVHlwZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgY2FtZXJhVHlwZSgpOiBhbnkgeyByZXR1cm4gdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi5jYW1lcmFUeXBlOyB9XG5cbiAgICAvKipcbiAgICAgKiBJbmRpY2Egc2kgZWwgdHV0b3JpYWwgZXN0w6EgZGlzcG9uaWJsZSBlbiBlbCB3aWRnZXQuXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHR1dG9yaWFsKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24udHV0b3JpYWwgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHR1dG9yaWFsKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi50dXRvcmlhbDsgfVxuXG4gICAgLyoqXG4gICAgICogTW9kbyBkZSBleHRyYWNjacOzbiBvIGZsdWpvIGRlIGVqZWN1Y2nDs24gdXRpbGl6YWRvIHBvciBlbCB3aWRnZXQuXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IGV4dHJhY3Rpb25Nb2RlKHZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi5leHRyYWN0aW9uTW9kZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZXh0cmFjdGlvbk1vZGUoKTogYW55IHsgcmV0dXJuIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24uZXh0cmFjdGlvbk1vZGU7IH1cblxuICAgIC8qKlxuICAgICAqIE1vZG9zIGRlIHZlcmlmaWNhY2nDs24gZGUgcHJ1ZWJhIGRlIHZpZGEgdXRpbGl6YWRvIHBvciBlbCB3aWRnZXQuXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IGxpdmVuZXNzTW9kZSh2YWx1ZTogYW55KSB7XG4gICAgICAgIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24ubGl2ZW5lc3NNb2RlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBsaXZlbmVzc01vZGUoKTogYW55IHsgcmV0dXJuIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24ubGl2ZW5lc3NNb2RlOyB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgbGl2ZW5lc3NQcmVjaXNpb24odmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLmxpdmVuZXNzUHJlY2lzaW9uID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBsaXZlbmVzc1ByZWNpc2lvbigpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi5saXZlbmVzc1ByZWNpc2lvbjsgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IGxpdmVuZXNzTW92ZUluaXRpYWxFcnJvcih2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24ubGl2ZW5lc3NNb3ZlSW5pdGlhbEVycm9yID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBsaXZlbmVzc01vdmVJbml0aWFsRXJyb3IoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24ubGl2ZW5lc3NNb3ZlSW5pdGlhbEVycm9yOyB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgbGl2ZW5lc3NNb3ZlSW5mb1RpbWUodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLmxpdmVuZXNzTW92ZUluZm9UaW1lID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBsaXZlbmVzc01vdmVJbmZvVGltZSgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi5saXZlbmVzc01vdmVJbmZvVGltZTsgfVxuXG4gICAgLyoqXG4gICAgICogSW5kaWNhIHNpIGVsIHdpZGdldCBwZXJtaXRlIGxhIGludGVyYWNjacOzbiBjb24gZWwgdXN1YXJpby5cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgaW50ZXJhY3RpYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24uaW50ZXJhY3RpYmxlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBpbnRlcmFjdGlibGUoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLmludGVyYWN0aWJsZTsgfVxuXG4gICAgLyoqXG4gICAgICogVGllbXBvIGRlIHJlZ2lzdHJvIGVuIHNlZ3VuZG9zLlxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCByZWdpc3RlclRpbWUodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLnJlZ2lzdGVyVGltZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgcmVnaXN0ZXJUaW1lKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLnJlZ2lzdGVyVGltZTsgfVxuXG4gICAgLyoqXG4gICAgICogVGllbXBvIGRlIGF1dGVudGljYWNpw7NuIGVuIHNlZ3VuZG9zLlxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBhdXRoZW50aWNhdGVUaW1lKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi5hdXRoZW50aWNhdGVUaW1lID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhdXRoZW50aWNhdGVUaW1lKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLmF1dGhlbnRpY2F0ZVRpbWU7IH1cblxuICAgIC8qKlxuICAgICAqIEZvcm1hdG8gZGUgbGFzIGltw6FnZW5lcyBjYXB0dXJhZGFzIHBvciBlbCB3aWRnZXQgKE1JTUUgdHlwZSkuXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IGltYWdlRm9ybWF0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi5pbWFnZUZvcm1hdCA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaW1hZ2VGb3JtYXQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24uaW1hZ2VGb3JtYXQ7IH1cblxuICAgIC8qKlxuICAgICAqIEZhY3RvciBkZSBjYWxpZGFkIGRlIGxhcyBpbcOhZ2VuZXMgZGV2dWVsdGFzIChyYW5nbyAwLjAgYSAxLjApLiDDmm5pY2FtZW50ZSBhcGxpY2FibGUgY3VhbmRvIGVsIGZvcm1hdG8gZGUgaW1hZ2VuIHNlIGhhIGVzcGVjaWZpY2FkbyBjb21vIFwiaW1hZ2UvanBlZ1wiLlxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBpbWFnZVF1YWxpdHkodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLmltYWdlUXVhbGl0eSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaW1hZ2VRdWFsaXR5KCk6IG51bWJlciB7IHJldHVybiB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLmltYWdlUXVhbGl0eTsgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IGxvZ0ltYWdlcyh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLmxvZ0ltYWdlcyA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgbG9nSW1hZ2VzKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi5sb2dJbWFnZXM7IH1cblxuICAgIC8qKlxuICAgICAqIEZhY3RvciBkZSByZWNvcnRlIGRlIGxhcyBpbcOhZ2VuZXMgZGV2dWVsdGFzIHBvciBlbCB3aWRnZXQuXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IGNyb3BGYWN0b3IodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLmNyb3BGYWN0b3IgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGNyb3BGYWN0b3IoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24uY3JvcEZhY3RvcjsgfVxuXG4gICAgLyoqXG4gICAgICogSW5kaWNhIHNpIGVsIHdpZGdldCBkZWJlIHJlY29ydGFyIGxhcyBpbcOhZ2VuZXMgY2FwdHVyYWRhcywgbyBuby5cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgY3JvcEltYWdlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24uY3JvcEltYWdlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBjcm9wSW1hZ2UoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLmNyb3BJbWFnZTsgfVxuXG4gICAgLyoqXG4gICAgICogRm9ybWF0byBkZSBzYWxpZGEgZGUgbGEgaW5mb3JtYWNpw7NuIGRlIHRlbXBsYXRlIGdlbmVyYWRhIHBvciBlbCB3aWRnZXQuXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHRlbXBsYXRlRm9ybWF0KHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi50ZW1wbGF0ZUZvcm1hdCA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgdGVtcGxhdGVGb3JtYXQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24udGVtcGxhdGVGb3JtYXQ7IH1cblxuICAgIC8qKlxuICAgICAqIEFjdGl2YSBsYSBmYXNlIGRlIGVzdGFiaWxpemFjacOzbiBwcmV2aWEgYSBsYSBjYXB0dXJhLiBQb3IgZGVmZWN0bywgbGEgZXN0YWJpbGl6YWNpw7NuIGVzdGFyw6EgZGVzYWN0aXZhZGEuXG4gICAgICogRW4gY2FzbyBkZSBoYWJlciBzZWxlY2Npb25hZG8gTGl2ZW5lc3NNb2RlPT1Nb3ZlLCBlc3RlIHBhcsOhbWV0cm8gbm8gc2UgdGVuZHLDoSBlbiBjdWVudGEgeSBzaWVtcHJlIHNlIHJlYWxpemFyw6EgZmFzZSBkZSBlc3RhYmlsaXphZG8uXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHN0YWJpbGl6YXRpb25TdGFnZSh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLnN0YWJpbGl6YXRpb25TdGFnZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgc3RhYmlsaXphdGlvblN0YWdlKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi5zdGFiaWxpemF0aW9uU3RhZ2U7IH1cblxuICAgIC8qKlxuICAgICAqIEluZGljYSBzaSBlbCB3aWRnZXQgZGViZSBncmFiYXIgbGEgc2VzacOzbiBkZWwgdXN1YXJpbyBlbiB2aWRlby5cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgdmlkZW9SZWNvcmQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi52aWRlb1JlY29yZCA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgdmlkZW9SZWNvcmQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLnZpZGVvUmVjb3JkOyB9XG5cbiAgICAvKipcbiAgICAgKiBGcmVjdWVuY2lhIGRlIGdyYWJhY2nDs24gKGVuIGZyYW1lcyBwb3Igc2VndW5kbykuXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHZpZGVvUmVjb3JkUmF0ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24udmlkZW9SZWNvcmRSYXRlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCB2aWRlb1JlY29yZFJhdGUoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24udmlkZW9SZWNvcmRSYXRlOyB9XG5cbiAgICAvKipcbiAgICAgKiBGYWN0b3IgZGUgZXNjYWxhZG8gYXBsaWNhZG8gc29icmUgbGFzIGNhcHR1cmFzIHJlYWxpemFkYXMgcGFyYSBsYSBnZW5lcmFjacOzbiBkZWwgdmlkZW8uXG4gICAgICogVG9tYSB2YWxvcmVzIHBvcmNlbnR1YWxlcyBkZSAwLjAgYSAxLjAgKHF1ZSBlcXVpdmFsZHLDrWEgYSB1bmEgZXNjYWxhIGRlbCAxMDAlIGRlIHJlc29sdWNpw7NuIGRlIGPDoW1hcmEgc2VsZWNjaW9uYWRhKS5cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgdmlkZW9SZWNvcmRTY2FsZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24udmlkZW9SZWNvcmRTY2FsZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgdmlkZW9SZWNvcmRTY2FsZSgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi52aWRlb1JlY29yZFNjYWxlOyB9XG5cbiAgICAvKipcbiAgICAgKiBUaXBvIGRlIHNhbGlkYSBkZWwgdmlkZW8gZ2VuZXJhZG8uIExvcyBwb3NpYmxlcyB2YWxvcmVzIHNlIHRvbWFyw6FuIGRlbCBlbnVtZXJhZG8gXCJGUGhpLlNlbHBoaS5SZWNvcmRUeXBlXCIuXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHZpZGVvUmVjb3JkVHlwZSh2YWx1ZTogYW55KSB7XG4gICAgICAgIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24udmlkZW9SZWNvcmRUeXBlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCB2aWRlb1JlY29yZFR5cGUoKTogYW55IHsgcmV0dXJuIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24udmlkZW9SZWNvcmRUeXBlOyB9XG5cbiAgICAvKipcbiAgICAgKiBBY3RpdmEgZWwgbW9kbyBkZSBkZXB1cmFjacOzbiBkZWwgd2lkZ2V0LCBlbiBlbCBxdWUgc2UgbW9zdHJhcsOhbiBtZW5zYWplcyBpbmZvcm1hdGl2b3MgZW4gbGEgY29uc29sYSBkZWwgbmF2ZWdhZG9yLlxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBkZWJ1Z01vZGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi5kZWJ1Z01vZGUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGRlYnVnTW9kZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24uZGVidWdNb2RlOyB9XG5cbiAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAvLyAjcmVnaW9uIFwiRXZlbnRvc1wiXG5cbiAgICAvKipcbiAgICAgKiBFdmVudG8gbGFuemFkbyBjdWFuZG8gbG9zIHJlY3Vyc29zIGRlbCB3aWRnZXQgc2UgaGFuIGNhcmdhZG8gY29ycmVjdGFtZW50ZS5cbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25Db21wb25lbnRMb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAgIC8qKlxuICAgICAqIEV2ZW50byBsYW56YWRvIHBvciBlbCB3aWRnZXQgY3VhbmRvIHNlIGhhIGZpbmFsaXphZG8gZWwgcHJvY2VzbyBkZSBjYXJnYSBlIGluaWNpYWxpemFjacOzbiwgdGFuZG8gZGVsIHdpZGdldCwgY29tbyBkZSBsb3MgcmVjdXJzb3MgYXNvY2lhZG9zIGFsIG1pc21vLlxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvbk1vZHVsZUxvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gICAgLyoqXG4gICAgICogRXZlbnRvIGxhbnphZG8gZHVyYW50ZSBsb3MgY2ljbG9zIGRlIGVzdGFiaWxpemFjacOzbiBkZSBsYSBpbWFnZW4gcGFyYSBsYSBjb3JyZWN0YSByZWFsaXphY2nDs24gZGUgbGEgY2FwdHVyYS5cbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25TdGFiaWxpemluZyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gICAgLyoqXG4gICAgICogRXZlbnRvIGxhbnphZG8gY3VhbmRvIGVsIHByb2Nlc28gZGUgZXh0cmFjY2nDs24gaGEgZmluYWxpemFkbyBjb3JyZWN0YW1lbnRlLiBEZXZ1ZWx2ZSBlbCByZXN1bHRhZG8gZGUgbGEgY2FwdHVyYS5cbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25FeHRyYWN0aW9uRmluaXNoID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgICAvKipcbiAgICAgKiBFdmVudG8gbGFuemFkbyBjdWFuZG8gZWwgdXN1YXJpbyBjYW5jZWxhIGVsIHByb2Nlc28gZGUgZXh0cmFjY2nDs24uXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uVXNlckNhbmNlbCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gICAgLyoqXG4gICAgICogRXZlbnRvIGxhbnphZG8gZW4gY2FzbyBkZSBxdWUgc2UgcHJvZHV6Y2EgdW4gZXJyb3IgaW50ZXJubyBkZWwgd2lkZ2V0LlxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvbkV4Y2VwdGlvbkNhcHR1cmVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgICAvKipcbiAgICAgKiBFdmVudG8gbGFuemFkbyBjdWFuZG8gZWwgcHJvY2VzbyBkZSB2ZXJpZmljYWNpw7NuIGRlIGF1dGVudGljaWRhZCBwb3IgcHJ1ZWJhIGRlIHZpZGEgZmFsbGEuXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uTGl2ZW5lc3NFcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gICAgLyoqXG4gICAgICogRXZlbnRvIGxhbnphZG8gY3VhbmRvIGVsIHByb2Nlc28gZGUgdmVyaWZpY2FjacOzbiBkZSBhdXRlbnRpY2lkYWQgcG9yIHBydWViYSBkZSB2aWRhIGZhbGxhIHkgZWwgdXN1YXJpbyBwdWxzYSBlbCBib3TDs24gZGUgbGEgcGFudGFsbGEgZGUgZXJyb3IgbW9zdHJhZGEuXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uTGl2ZW5lc3NFcnJvckJ1dHRvbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgICAvKipcbiAgICAgKiBFdmVudG8gbGFuemFkbyBzaSBlbCBwcm9jZXNvIGRlIGNhcHR1cmEgZXhjZWRlIGVsIHRpZW1wbyBtw6F4aW1vIGRpc3BvbmlibGUuXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uRXh0cmFjdGlvblRpbWVvdXQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAgIC8qKlxuICAgICAqIEV2ZW50byBsYW56YWRvIGN1YW5kbyBlbCBwcm9jZXNvIGRlIGNhcHR1cmEgZXhjZWRlIGVsIHRpZW1wbyBtw6F4aW1vIGRpc3BvbmlibGUgeSBlbCB1c3VhcmlvIHB1bHNhIGVsIGJvdMOzbiBkZSBsYSBwYW50YWxsYSBkZSBlcnJvciBtb3N0cmFkYS5cbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25UaW1lb3V0RXJyb3JCdXR0b25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gICAgLyoqXG4gICAgICogRXZlbnRvIGxhbnphZG8gdHJhcyBjdWFscXVpZXIgYWNjacOzbiByZWFsaXphZGEgcG9yIGVsIHVzdWFyaW8gc29icmUgbGEgaW50ZXJmYXogZ3LDoWZpY2EgZGVsIHdpZGdldCBvIGFudGUgY3VhbHF1aWVyIGNhbWJpbyBkZSBlc3RhZG9cbiAgICAgKiBkdXJhbnRlIGVsIHByb2Nlc28gZGUgY2FwdHVyYS5cbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25UcmFja1N0YXR1cyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gICAgLy8gI2VuZHJlZ2lvblxuXG4gICAgLy8gI2VuZHJlZ2lvblxuXG4gICAgLy8gI3JlZ2lvbiBcIkNvbnN0cnVjdG9yZXNcIlxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgd2lkZ2V0U2VydmljZTogRlBoaVNlbHBoaVdpZGdldFNlcnZpY2VcbiAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIC8vY29uc29sZS53YXJuKGA+Pj4+IFtmYWNlcGhpLXNlbHBoaV0gbmdPbkluaXQgeyBhdXRvTG9hZExpYlJlc291cmNlczogJHt0aGlzLmF1dG9Mb2FkTGliUmVzb3VyY2VzfSB9YCwgdGhpcy53aWRnZXRDb250YWluZXIubmF0aXZlRWxlbWVudCk7XG4gICAgICAgIC8vY29uc29sZS5sb2coYHdpZGdldENvbnRhaW5lci5vZmZzZXRXaWR0aDogJHsodGhpcy53aWRnZXRDb250YWluZXIubmF0aXZlRWxlbWVudCBhcyBhbnkpLm9mZnNldFdpZHRofWApO1xuICAgICAgICAvL2NvbnNvbGUubG9nKGB3aWRnZXRDb250YWluZXIub2Zmc2V0SGVpZ2h0OiAkeyh0aGlzLndpZGdldENvbnRhaW5lci5uYXRpdmVFbGVtZW50IGFzIGFueSkub2Zmc2V0SGVpZ2h0fWApO1xuXG4gICAgICAgIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24ud2lkZ2V0Q29udGFpbmVyID0gdGhpcy53aWRnZXRDb250YWluZXIubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5zZXR1cEV2ZW50cygpO1xuXG4gICAgICAgIGNvbnN0IHdpZGdldEluaXRGdW5jID0gKCkgPT4ge1xuICAgICAgICAgICAgLy9jb25zb2xlLndhcm4oXCI+Pj4+IFtmYWNlcGhpLXNlbHBoaV0gIENPTlRST0wgTE9BREVEISFcIik7XG4gICAgICAgICAgICB0aGlzLm9uQ29tcG9uZW50TG9hZGVkLmVtaXQoKTtcblxuICAgICAgICAgICAgdGhpcy53aWRnZXRTZXJ2aWNlXG4gICAgICAgICAgICAgICAgLmNyZWF0ZVVzZXJDb250cm9sKHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24pXG4gICAgICAgICAgICAgICAgLnN0YXJ0VXNlckNvbnRyb2woKTtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy5hdXRvTG9hZExpYlJlc291cmNlcykge1xuICAgICAgICAgICAgdGhpcy53aWRnZXRTZXJ2aWNlXG4gICAgICAgICAgICAgICAgLmxvYWRDb250cm9sKHRoaXMud2lkZ2V0TGliUGF0aClcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKHdpZGdldEluaXRGdW5jKTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICB3aWRnZXRJbml0RnVuYygpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICAvL2NvbnNvbGUud2FybihcIj4+Pj4gW2ZhY2VwaGktc2VscGhpXSBuZ09uRGVzdHJveVwiKTtcbiAgICAgICAgaWYgKHRoaXMuYXV0b0xvYWRMaWJSZXNvdXJjZXMpIHtcbiAgICAgICAgICAgIHRoaXMud2lkZ2V0U2VydmljZVxuICAgICAgICAgICAgICAgIC5zdG9wVXNlckNvbnRyb2woKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVDb250cm9sKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAvLyAjcmVnaW9uIFwiTcOpdG9kb3MgcHJpdmFkb3NcIlxuXG4gICAgcHJpdmF0ZSBzZXR1cEV2ZW50cygpOiBGYWNlUGhpU2VscGhpQ29tcG9uZW50IHtcbiAgICAgICAgdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi5vbk1vZHVsZUxvYWRlZCA9IGV2ZW50RGF0YSA9PiB7IHRoaXMub25Nb2R1bGVMb2FkZWQuZW1pdChldmVudERhdGEpOyB9O1xuICAgICAgICB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLm9uU3RhYmlsaXppbmcgPSBzdGFiaWxpemluZ1Jlc3VsdCA9PiB7IHRoaXMub25TdGFiaWxpemluZy5lbWl0KHN0YWJpbGl6aW5nUmVzdWx0KTsgfTtcbiAgICAgICAgdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi5vbkV4dHJhY3Rpb25GaW5pc2ggPSBleHRyYWN0aW9uUmVzdWx0ID0+IHsgdGhpcy5vbkV4dHJhY3Rpb25GaW5pc2guZW1pdChleHRyYWN0aW9uUmVzdWx0KTsgfTtcbiAgICAgICAgdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi5vblVzZXJDYW5jZWwgPSAoKSA9PiB7IHRoaXMub25Vc2VyQ2FuY2VsLmVtaXQoKTsgfTtcbiAgICAgICAgdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi5vbkV4Y2VwdGlvbkNhcHR1cmVkID0gZXhjZXB0aW9uUmVzdWx0ID0+IHsgdGhpcy5vbkV4Y2VwdGlvbkNhcHR1cmVkLmVtaXQoZXhjZXB0aW9uUmVzdWx0KTsgfTtcbiAgICAgICAgdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi5vbkxpdmVuZXNzRXJyb3IgPSBsaXZlbmVzc0Vycm9yUmVzdWx0ID0+IHsgdGhpcy5vbkxpdmVuZXNzRXJyb3IuZW1pdChsaXZlbmVzc0Vycm9yUmVzdWx0KTsgfTtcbiAgICAgICAgdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi5vbkxpdmVuZXNzRXJyb3JCdXR0b25DbGljayA9ICgpID0+IHsgdGhpcy5vbkxpdmVuZXNzRXJyb3JCdXR0b25DbGljay5lbWl0KCk7IH07XG4gICAgICAgIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24ub25FeHRyYWN0aW9uVGltZW91dCA9IGV4dHJhY3Rpb25UaW1lb3V0UmVzdWx0ID0+IHsgdGhpcy5vbkV4dHJhY3Rpb25UaW1lb3V0LmVtaXQoZXh0cmFjdGlvblRpbWVvdXRSZXN1bHQpOyB9O1xuICAgICAgICB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLm9uVGltZW91dEVycm9yQnV0dG9uQ2xpY2sgPSAoKSA9PiB7IHRoaXMub25UaW1lb3V0RXJyb3JCdXR0b25DbGljay5lbWl0KCk7IH07XG4gICAgICAgIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24ub25UcmFja1N0YXR1cyA9IGV2ZW50RGF0YSA9PiB7IHRoaXMub25UcmFja1N0YXR1cy5lbWl0KGV2ZW50RGF0YSk7IH07XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gI2VuZHJlZ2lvblxuXG59XG4iXX0=