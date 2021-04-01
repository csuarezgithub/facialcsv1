/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, ViewChild, ElementRef, EventEmitter, HostBinding } from "@angular/core";
import { FPhiSelphIdWidgetService } from "../../services/fphi-selphid-widget.service";
import { FPhiSelphIdConfiguration, FPhiSelphIdDocumentDimensions } from "../../models/facephi-selphid-configuration";
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
export { FacePhiSelphIdComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FacePhiSelphIdComponent.prototype._cssClass;
    /**
     * @type {?}
     * @private
     */
    FacePhiSelphIdComponent.prototype._widgetConfiguration;
    /**
     * Anchura del componente.
     * @type {?}
     */
    FacePhiSelphIdComponent.prototype.componentWidth;
    /**
     * Altura del componente.
     * @type {?}
     */
    FacePhiSelphIdComponent.prototype.componentHeight;
    /**
     * Referencia interna al contenedor sobre el que se generará el widget web.
     * @type {?}
     */
    FacePhiSelphIdComponent.prototype.widgetContainer;
    /**
     * Clases CSS aplicadas sobre el contenedor del widget web.
     * @type {?}
     */
    FacePhiSelphIdComponent.prototype.containerCssClass;
    /**
     * Ruta en la que están localizados los recursos javascript nativos del widget web.
     * @type {?}
     */
    FacePhiSelphIdComponent.prototype.widgetLibPath;
    /**
     * Flag para indicar si queremos que sea el componente el encargado de cargar e inicializar todos los recursos javascript del widget y borrarlos en su evento 'onDestroy'.
     * @type {?}
     */
    FacePhiSelphIdComponent.prototype.autoLoadLibResources;
    /**
     * Evento lanzado cuando los recursos del widget se han cargado correctamente.
     * @type {?}
     */
    FacePhiSelphIdComponent.prototype.onComponentLoaded;
    /**
     * Evento lanzado por el widget cuando se ha finalizado el proceso de carga e inicialización, tando del widget, como de los recursos asociados al mismo.
     * @type {?}
     */
    FacePhiSelphIdComponent.prototype.onModuleLoaded;
    /**
     * Evento lanzado cuando el proceso de extracción ha finalizado correctamente. Devuelve el resultado de la captura.
     * @type {?}
     */
    FacePhiSelphIdComponent.prototype.onExtractionFinished;
    /**
     * Evento lanzado cuando el usuario cancela el proceso de extracción.
     * @type {?}
     */
    FacePhiSelphIdComponent.prototype.onUserCancelled;
    /**
     * Evento lanzado en caso de que se produzca un error interno del widget.
     * @type {?}
     */
    FacePhiSelphIdComponent.prototype.onExceptionCaptured;
    /**
     * Evento lanzado si el proceso de captura excede el tiempo máximo disponible.
     * @type {?}
     */
    FacePhiSelphIdComponent.prototype.onExtractionTimeout;
    /**
     * Evento lanzado tras cualquier acción realizada por el usuario sobre la interfaz gráfica del widget o ante cualquier cambio de estado
     * durante el proceso de captura.
     * @type {?}
     */
    FacePhiSelphIdComponent.prototype.onTrackStatus;
    /**
     * @type {?}
     * @private
     */
    FacePhiSelphIdComponent.prototype.widgetService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXBoaS1zZWxwaGlkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZhY2VwaGktc2VscGhpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ZhY2VwaGktc2VscGhpZC9mYWNlcGhpLXNlbHBoaWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUdULEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osV0FBVyxFQUNkLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBRXJIO0lBa1VJLGFBQWE7SUFFYixhQUFhO0lBRWIsMEJBQTBCO0lBRTFCLGlDQUNZLGFBQXVDO1FBQXZDLGtCQUFhLEdBQWIsYUFBYSxDQUEwQjs7UUFoVTNDLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIseUJBQW9CLEdBQTZCLElBQUksd0JBQXdCLEVBQUUsQ0FBQzs7Ozs7UUErRGpGLGtCQUFhLEdBQUcsNEJBQTRCLENBQUM7Ozs7UUFNN0MseUJBQW9CLEdBQVksSUFBSSxDQUFDOzs7Ozs7UUE0TXJDLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7Ozs7UUFNNUMsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDOzs7O1FBTXpDLHlCQUFvQixHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7Ozs7UUFNL0Msb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDOzs7O1FBTTFDLHdCQUFtQixHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7Ozs7UUFNOUMsd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQzs7Ozs7UUFPOUMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lB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RDs7Ozs7SUFLaEQsdURBQ3NEOzs7OztJQUt0RCxrREFDaUQ7Ozs7O0lBS2pELHNEQUNxRDs7Ozs7SUFLckQsc0RBQ3FEOzs7Ozs7SUFNckQsZ0RBQytDOzs7OztJQVMzQyxnREFBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBPbkluaXQsXG4gICAgT25EZXN0cm95LFxuICAgIElucHV0LFxuICAgIE91dHB1dCxcbiAgICBWaWV3Q2hpbGQsXG4gICAgRWxlbWVudFJlZixcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgSG9zdEJpbmRpbmdcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgRlBoaVNlbHBoSWRXaWRnZXRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2ZwaGktc2VscGhpZC13aWRnZXQuc2VydmljZVwiO1xuaW1wb3J0IHsgRlBoaVNlbHBoSWRDb25maWd1cmF0aW9uLCBGUGhpU2VscGhJZERvY3VtZW50RGltZW5zaW9ucyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZmFjZXBoaS1zZWxwaGlkLWNvbmZpZ3VyYXRpb25cIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiZmFjZXBoaS1zZWxwaGlkXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9mYWNlcGhpLXNlbHBoaWQuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vZmFjZXBoaS1zZWxwaGlkLmNvbXBvbmVudC5zY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEZhY2VQaGlTZWxwaElkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgLy8gI3JlZ2lvbiBcIkF0cmlidXRvc1wiXG5cbiAgICBwcml2YXRlIF9jc3NDbGFzczogc3RyaW5nID0gXCJcIjtcbiAgICBwcml2YXRlIF93aWRnZXRDb25maWd1cmF0aW9uOiBGUGhpU2VscGhJZENvbmZpZ3VyYXRpb24gPSBuZXcgRlBoaVNlbHBoSWRDb25maWd1cmF0aW9uKCk7XG5cbiAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAvLyAjcmVnaW9uIFwiUHJvcGllZGFkZXNcIlxuXG4gICAgQElucHV0KFwiY2xhc3NcIilcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzc1wiKVxuICAgIHB1YmxpYyBnZXQgY3NzQ2xhc3MoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nzc0NsYXNzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgY3NzQ2xhc3ModmFsdWU6IHN0cmluZykge1xuICAgICAgICBpZiAodmFsdWUpXG4gICAgICAgICAgICB0aGlzLl9jc3NDbGFzcyArPSBgICR7dmFsdWV9YDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbmNodXJhIGRlbCBjb21wb25lbnRlLlxuICAgICAqL1xuICAgIEBJbnB1dChcIndpZHRoXCIpXG4gICAgcHVibGljIGNvbXBvbmVudFdpZHRoOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgZ2V0IHdpZGdldFdpZHRoKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudFdpZHRoXG4gICAgICAgICAgICA/IHR5cGVvZiB0aGlzLmNvbXBvbmVudFdpZHRoID09PSBcInN0cmluZ1wiICYmIHRoaXMuY29tcG9uZW50V2lkdGguZW5kc1dpdGgoXCIlXCIpXG4gICAgICAgICAgICAgICAgPyB0aGlzLmNvbXBvbmVudFdpZHRoXG4gICAgICAgICAgICAgICAgOiBgJHtwYXJzZUZsb2F0KHRoaXMuY29tcG9uZW50V2lkdGgpfXB4YFxuICAgICAgICAgICAgOiBcIjEwMCVcIjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbHR1cmEgZGVsIGNvbXBvbmVudGUuXG4gICAgICovXG4gICAgQElucHV0KFwiaGVpZ2h0XCIpXG4gICAgcHVibGljIGNvbXBvbmVudEhlaWdodDogc3RyaW5nO1xuXG4gICAgcHVibGljIGdldCB3aWRnZXRIZWlnaHQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50SGVpZ2h0XG4gICAgICAgICAgICA/IHR5cGVvZiB0aGlzLmNvbXBvbmVudFdpZHRoID09PSBcInN0cmluZ1wiICYmIHRoaXMuY29tcG9uZW50SGVpZ2h0LmVuZHNXaXRoKFwiJVwiKVxuICAgICAgICAgICAgICAgID8gdGhpcy5jb21wb25lbnRIZWlnaHRcbiAgICAgICAgICAgICAgICA6IGAke3BhcnNlRmxvYXQodGhpcy5jb21wb25lbnRIZWlnaHQpfXB4YFxuICAgICAgICAgICAgOiBcIjEwMCVcIjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWZlcmVuY2lhIGludGVybmEgYWwgY29udGVuZWRvciBzb2JyZSBlbCBxdWUgc2UgZ2VuZXJhcsOhIGVsIHdpZGdldCB3ZWIuXG4gICAgICovXG4gICAgQFZpZXdDaGlsZChcIndpZGdldENvbnRhaW5lclwiKVxuICAgIHB1YmxpYyByZWFkb25seSB3aWRnZXRDb250YWluZXI6IEVsZW1lbnRSZWY7XG5cbiAgICAvKipcbiAgICAgKiBDbGFzZXMgQ1NTIGFwbGljYWRhcyBzb2JyZSBlbCBjb250ZW5lZG9yIGRlbCB3aWRnZXQgd2ViLlxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGNvbnRhaW5lckNzc0NsYXNzOiBzdHJpbmc7XG5cbiAgICAvLyAjcmVnaW9uIFwiQ29uZmlndXJhY2nDs25cIlxuXG4gICAgLyoqXG4gICAgICogUnV0YSBlbiBsYSBxdWUgZXN0w6FuIGxvY2FsaXphZG9zIGxvcyByZWN1cnNvcyBqYXZhc2NyaXB0IG5hdGl2b3MgZGVsIHdpZGdldCB3ZWIuXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgd2lkZ2V0TGliUGF0aCA9IFwiYXNzZXRzL2xpYi9mYWNlcGhpL3NlbHBoaWRcIjtcblxuICAgIC8qKlxuICAgICAqIEZsYWcgcGFyYSBpbmRpY2FyIHNpIHF1ZXJlbW9zIHF1ZSBzZWEgZWwgY29tcG9uZW50ZSBlbCBlbmNhcmdhZG8gZGUgY2FyZ2FyIGUgaW5pY2lhbGl6YXIgdG9kb3MgbG9zIHJlY3Vyc29zIGphdmFzY3JpcHQgZGVsIHdpZGdldCB5IGJvcnJhcmxvcyBlbiBzdSBldmVudG8gJ29uRGVzdHJveScuXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgYXV0b0xvYWRMaWJSZXNvdXJjZXM6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogSWRpb21hIGVuIHF1ZSBzZSBtb3N0cmFyw6EgbGEgaW5mb3JtYWNpw7NuIGRlbCB3aWRnZXQuXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IGxhbmd1YWdlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi5sYW5ndWFnZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgbGFuZ3VhZ2UoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24ubGFuZ3VhZ2U7IH1cblxuICAgIC8qKlxuICAgICAqIExpc3RhIGRlIGRlbnNpZGFkZXMgZGUgcMOteGVsZXMgZW4gcGFudGFsbGEgc29wb3J0YWRhcyBwb3IgZWwgd2lkZ2V0LCBkZSBjYXJhIGEgbW9zdHJhciBsYXMgaW3DoWdlbmVzIGRlIHJlY3Vyc28gYWRlY3VhZGFzIGEgbGEgcGFudGFsbGEgYWN0dWFsLlxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBkcGlMaXN0KHZhbHVlOiBBcnJheTxudW1iZXI+KSB7XG4gICAgICAgIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24uZHBpTGlzdCA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZHBpTGlzdCgpOiBBcnJheTxudW1iZXI+IHsgcmV0dXJuIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24uZHBpTGlzdDsgfVxuXG4gICAgLyoqXG4gICAgICogTW9kbyBkZSBjYXB0dXJhIGRlIGRvY3VtZW50by4gQ29udHJvbGEgZWwgZmx1am8gZGUgZWplY3VjacOzbiBkZWwgd2lkZ2V0LlxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBjYXB0dXJlTW9kZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24uY2FwdHVyZU1vZGUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGNhcHR1cmVNb2RlKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLmNhcHR1cmVNb2RlOyB9XG5cbiAgICAvKipcbiAgICAgKiBFbiBjYXNvIGRlIGVzdGFyIGhhYmlsaXRhZG8sIGVsIHdpZGdldCBtb3N0cmFyw6EgZWwgZG9jdW1lbnRvIGNhcHR1cmFkbyB5IHNvbGljaXRhcsOhIGNvbmZpcm1hY2nDs24gYWwgdXN1YXJpby5cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcHJldmlld0NhcHR1cmUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi5wcmV2aWV3Q2FwdHVyZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgcHJldmlld0NhcHR1cmUoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLnByZXZpZXdDYXB0dXJlOyB9XG5cbiAgICAvKipcbiAgICAgKiBEaW1lbnNpb25lcyBmw61zaWNhcyAoZW4gbW0pIGRlbCBkb2N1bWVudG8gYSBjYXB0dXJhci5cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgZG9jdW1lbnREaW1lbnNpb25zKHZhbHVlOiBGUGhpU2VscGhJZERvY3VtZW50RGltZW5zaW9ucykge1xuICAgICAgICB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLmRvY3VtZW50RGltZW5zaW9ucyA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZG9jdW1lbnREaW1lbnNpb25zKCk6IEZQaGlTZWxwaElkRG9jdW1lbnREaW1lbnNpb25zIHsgcmV0dXJuIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24uZG9jdW1lbnREaW1lbnNpb25zOyB9XG5cbiAgICAvKipcbiAgICAgKiBVbWJyYWwgZGUgdG9sZXJhbmNpYSBwYXJhIGRhciBwb3IgdsOhbGlkYSB1bmEgY2FwdHVyYSBkZSBkb2N1bWVudG8uXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHF1YWxpdHlUaHJlc2hvbGQodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLnF1YWxpdHlUaHJlc2hvbGQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHF1YWxpdHlUaHJlc2hvbGQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24ucXVhbGl0eVRocmVzaG9sZDsgfVxuXG4gICAgLyoqXG4gICAgICogRmFjdG9yIGRlIGVzY2FsYWRvIHNvYnJlIGVsIMOhcmVhIGRlIHJlY29ydGUgZGUgbGEgaW1hZ2VuIGRlbCBkb2N1bWVudG8uIExhIGltYWdlbiBkZXZ1ZWx0YSBzZSBlc2NhbGEgZGUgYWN1ZXJkbyBjb24gZXN0ZSB2YWxvci5cbiAgICAgKiBTb2xhbWVudGUgc2UgcGVybWl0ZW4gdmFsb3JlcyBtYXlvcmVzIG8gaWd1YWxlcyBhIDEuMC5cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgY3JvcEZhY3Rvcih2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24uY3JvcEZhY3RvciA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgY3JvcEZhY3RvcigpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi5jcm9wRmFjdG9yOyB9XG5cbiAgICAvKipcbiAgICAgKiBFbiBjYXNvIGRlIGVzdGFyIGhhYmlsaXRhZG8sIGVsIHdpZGdldCBzZSBtb3N0cmFyw6Egc2llbXByZSBlbiBkaXNwb3NpY2nDs24gaG9yaXpvbnRhbCwgcm90w6FuZG9zZSA5MCBncmFkb3MgZW4gZGlzcG9zaWNpb25lcyB2ZXJ0aWNhbGVzLlxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBmb3JjZUxhbmRzY2FwZSh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLmZvcmNlTGFuZHNjYXBlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBmb3JjZUxhbmRzY2FwZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24uZm9yY2VMYW5kc2NhcGU7IH1cblxuICAgIC8qKlxuICAgICAqIEFjdGl2YSBlbCBtb2RvIGRlIHZpc3VhbGl6YWNpw7NuIGRlbCBkcmF3ZXIgZW4gcGFudGFsbGFzIGRlIGFsdGEgZGVuc2lkYWQuXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IGNhbnZhc0hEKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24uY2FudmFzSEQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGNhbnZhc0hEKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi5jYW52YXNIRDsgfVxuXG4gICAgLyoqXG4gICAgICogTXVlc3RyYSB1biBtZW5zYWplIGRlIGFkdmVydGVuY2lhIGRlIHVzbyBpbmljaWFsIHRyYXMgbGEgY2FyZ2EgZGVsIHdpZGdldC5cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgaW5pdGlhbFRpcCh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLmluaXRpYWxUaXAgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGluaXRpYWxUaXAoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLmluaXRpYWxUaXA7IH1cblxuICAgIC8qKlxuICAgICAqIFJlc29sdWNpw7NuIGhvcml6b250YWwgcHJlZmVyaWRhIGRlIGxhIGPDoW1hcmEgKGVsIHdpZGdldCBpbnRlbnRhcsOhIHNlbGVjY2lvbmFyIGxhIHJlc29sdWNpw7NuIG3DoXMgY2VyY2FuYSkuXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IGNhbWVyYVdpZHRoKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi5jYW1lcmFXaWR0aCA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgY2FtZXJhV2lkdGgoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24uY2FtZXJhV2lkdGg7IH1cblxuICAgIC8qKlxuICAgICAqIFJlc29sdWNpw7NuIHZlcnRpY2FsIHByZWZlcmlkYSBkZSBsYSBjw6FtYXJhIChlbCB3aWRnZXQgaW50ZW50YXLDoSBzZWxlY2Npb25hciBsYSByZXNvbHVjacOzbiBtw6FzIGNlcmNhbmEpLlxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBjYW1lcmFIZWlnaHQodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLmNhbWVyYUhlaWdodCA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgY2FtZXJhSGVpZ2h0KCk6IG51bWJlciB7IHJldHVybiB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLmNhbWVyYUhlaWdodDsgfVxuXG4gICAgLyoqXG4gICAgICogSWRlbnRpZmljYWRvciBkZSBsYSBjw6FtYXJhIGEgdXRpbGl6YXIgcGFyYSBsYSByZWFsaXphY2nDs24gZGUgbGEgY2FwdHVyYSAoc2kgbm8gc2UgZXNwZWNpZmljYSwgZWwgd2lkZ2V0IHNlbGVjY2lvbmFyw6EgbGEgY8OhbWFyYSB0cmFzZXJhIGV4cHVlc3RhIHBvciBkZWZlY3RvIHBvciBlbCBkaXNwb3NpdGl2bykuXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IGNhbWVyYUlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi5jYW1lcmFJZCA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgY2FtZXJhSWQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24uY2FtZXJhSWQ7IH1cblxuICAgIC8qKlxuICAgICAqIFRpZW1wbyBkaXNwb25pYmxlIHBhcmEgbGEgY2FwdHVyYSBkZSB1bmEgaW1hZ2VuIGRlIGRvY3VtZW50byBhbnRlcyBkZSBlbWl0aXJzZSB1biB0aW1lb3V0IChwb3IgZGVmZWN0byAxMHMpLiBcbiAgICAgKiBWYWxvcmVzIDw9IDAuMCBhbnVsYW4gbGEgbGltaXRhY2nDs24gZGUgdGllbXBvIGRlIGNhcHR1cmEuXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IGNhcHR1cmVUaW1lb3V0KHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi5jYXB0dXJlVGltZW91dCA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgY2FwdHVyZVRpbWVvdXQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24uY2FwdHVyZVRpbWVvdXQ7IH1cblxuICAgIC8qKlxuICAgICAqIE7Dum1lcm8gbcOheGltbyBkZSByZWludGVudG9zIHBhcmEgb2J0ZW5lciB1bmEgY2FwdHVyYSB2w6FsaWRhIGRlIGltYWdlbiBkZSBkb2N1bWVudG8uXG4gICAgICogVmFsb3JlcyA8PSAwIGVzdGFibGVjZW4gdW4gbsO6bWVybyBpbmZpbml0byBkZSByZWludGVudG9zLlxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBjYXB0dXJlUmV0cmllcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24uY2FwdHVyZVJldHJpZXMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGNhcHR1cmVSZXRyaWVzKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLmNhcHR1cmVSZXRyaWVzOyB9XG5cbiAgICBcbiAgICAvKipcbiAgICAgKiBTZW5zaWJpbGlkYWQgZGUgY2FwdHVyYSBkdXJhbnRlIGxhIGRldGVjY2nDs24gZGUgYm9yZGVzIGRlbCB3aWRnZXQuXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IGNhcHR1cmVTZW5zaWJpbGl0eSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24uY2FwdHVyZVNlbnNpYmlsaXR5ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBjYXB0dXJlU2Vuc2liaWxpdHkoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24uY2FwdHVyZVNlbnNpYmlsaXR5OyB9XG5cbiAgICAvKipcbiAgICAgKiBGb3JtYXRvIGRlIGxhcyBpbcOhZ2VuZXMgY2FwdHVyYWRhcyBwb3IgZWwgd2lkZ2V0IChNSU1FIHR5cGUpLlxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBpbWFnZUZvcm1hdCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24uaW1hZ2VGb3JtYXQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGltYWdlRm9ybWF0KCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLmltYWdlRm9ybWF0OyB9XG5cbiAgICAvKipcbiAgICAgKiBGYWN0b3IgZGUgY2FsaWRhZCBkZSBsYXMgaW3DoWdlbmVzIGRldnVlbHRhcyAocmFuZ28gMC4wIGEgMS4wKS4gw5puaWNhbWVudGUgYXBsaWNhYmxlIGN1YW5kbyBlbCBmb3JtYXRvIGRlIGltYWdlbiBzZSBoYSBlc3BlY2lmaWNhZG8gY29tbyBcImltYWdlL2pwZWdcIi5cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgaW1hZ2VRdWFsaXR5KHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi5pbWFnZVF1YWxpdHkgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGltYWdlUXVhbGl0eSgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi5pbWFnZVF1YWxpdHk7IH1cblxuICAgIC8qKlxuICAgICAqIEFjdGl2YSBlbCBtb2RvIGRlIGRlcHVyYWNpw7NuIGRlbCB3aWRnZXQsIGVuIGVsIHF1ZSBzZSBtb3N0cmFyw6FuIG1lbnNhamVzIGluZm9ybWF0aXZvcyBlbiBsYSBjb25zb2xhIGRlbCBuYXZlZ2Fkb3IuXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IGRlYnVnTW9kZSh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLmRlYnVnTW9kZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZGVidWdNb2RlKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi5kZWJ1Z01vZGU7IH1cblxuICAgIC8vICNlbmRyZWdpb25cblxuICAgIC8vICNyZWdpb24gXCJFdmVudG9zXCJcblxuICAgIC8qKlxuICAgICAqIEV2ZW50byBsYW56YWRvIGN1YW5kbyBsb3MgcmVjdXJzb3MgZGVsIHdpZGdldCBzZSBoYW4gY2FyZ2FkbyBjb3JyZWN0YW1lbnRlLlxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvbkNvbXBvbmVudExvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gICAgLyoqXG4gICAgICogRXZlbnRvIGxhbnphZG8gcG9yIGVsIHdpZGdldCBjdWFuZG8gc2UgaGEgZmluYWxpemFkbyBlbCBwcm9jZXNvIGRlIGNhcmdhIGUgaW5pY2lhbGl6YWNpw7NuLCB0YW5kbyBkZWwgd2lkZ2V0LCBjb21vIGRlIGxvcyByZWN1cnNvcyBhc29jaWFkb3MgYWwgbWlzbW8uXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uTW9kdWxlTG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgICAvKipcbiAgICAgKiBFdmVudG8gbGFuemFkbyBjdWFuZG8gZWwgcHJvY2VzbyBkZSBleHRyYWNjacOzbiBoYSBmaW5hbGl6YWRvIGNvcnJlY3RhbWVudGUuIERldnVlbHZlIGVsIHJlc3VsdGFkbyBkZSBsYSBjYXB0dXJhLlxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvbkV4dHJhY3Rpb25GaW5pc2hlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gICAgLyoqXG4gICAgICogRXZlbnRvIGxhbnphZG8gY3VhbmRvIGVsIHVzdWFyaW8gY2FuY2VsYSBlbCBwcm9jZXNvIGRlIGV4dHJhY2Npw7NuLlxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvblVzZXJDYW5jZWxsZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAgIC8qKlxuICAgICAqIEV2ZW50byBsYW56YWRvIGVuIGNhc28gZGUgcXVlIHNlIHByb2R1emNhIHVuIGVycm9yIGludGVybm8gZGVsIHdpZGdldC5cbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25FeGNlcHRpb25DYXB0dXJlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gICAgLyoqXG4gICAgICogRXZlbnRvIGxhbnphZG8gc2kgZWwgcHJvY2VzbyBkZSBjYXB0dXJhIGV4Y2VkZSBlbCB0aWVtcG8gbcOheGltbyBkaXNwb25pYmxlLlxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvbkV4dHJhY3Rpb25UaW1lb3V0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgICAvKipcbiAgICAgKiBFdmVudG8gbGFuemFkbyB0cmFzIGN1YWxxdWllciBhY2Npw7NuIHJlYWxpemFkYSBwb3IgZWwgdXN1YXJpbyBzb2JyZSBsYSBpbnRlcmZheiBncsOhZmljYSBkZWwgd2lkZ2V0IG8gYW50ZSBjdWFscXVpZXIgY2FtYmlvIGRlIGVzdGFkb1xuICAgICAqIGR1cmFudGUgZWwgcHJvY2VzbyBkZSBjYXB0dXJhLlxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvblRyYWNrU3RhdHVzID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAvLyAjcmVnaW9uIFwiQ29uc3RydWN0b3Jlc1wiXG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSB3aWRnZXRTZXJ2aWNlOiBGUGhpU2VscGhJZFdpZGdldFNlcnZpY2VcbiAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIC8vY29uc29sZS53YXJuKGA+Pj4+IFtmYWNlcGhpLXNlbHBoaWRdIG5nT25Jbml0IHsgYXV0b0xvYWRMaWJSZXNvdXJjZXM6ICR7dGhpcy5hdXRvTG9hZExpYlJlc291cmNlc30gfWAsIHRoaXMud2lkZ2V0Q29udGFpbmVyLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKGB3aWRnZXRDb250YWluZXIub2Zmc2V0V2lkdGg6ICR7KHRoaXMud2lkZ2V0Q29udGFpbmVyLm5hdGl2ZUVsZW1lbnQgYXMgYW55KS5vZmZzZXRXaWR0aH1gKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhgd2lkZ2V0Q29udGFpbmVyLm9mZnNldEhlaWdodDogJHsodGhpcy53aWRnZXRDb250YWluZXIubmF0aXZlRWxlbWVudCBhcyBhbnkpLm9mZnNldEhlaWdodH1gKTtcbiAgICAgICAgdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi53aWRnZXRDb250YWluZXIgPSB0aGlzLndpZGdldENvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLnNldHVwRXZlbnRzKCk7XG5cbiAgICAgICAgY29uc3Qgd2lkZ2V0SW5pdEZ1bmMgPSAoKSA9PiB7XG4gICAgICAgICAgICAvL2NvbnNvbGUud2FybihcIj4+Pj4gW2ZhY2VwaGktc2VscGhpZF0gIENPTlRST0wgTE9BREVEISFcIik7XG4gICAgICAgICAgICB0aGlzLm9uQ29tcG9uZW50TG9hZGVkLmVtaXQoKTtcblxuICAgICAgICAgICAgdGhpcy53aWRnZXRTZXJ2aWNlXG4gICAgICAgICAgICAgICAgLmNyZWF0ZVVzZXJDb250cm9sKHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24pXG4gICAgICAgICAgICAgICAgLnN0YXJ0VXNlckNvbnRyb2woKTtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy5hdXRvTG9hZExpYlJlc291cmNlcykge1xuICAgICAgICAgICAgdGhpcy53aWRnZXRTZXJ2aWNlXG4gICAgICAgICAgICAgICAgLmxvYWRDb250cm9sKHRoaXMud2lkZ2V0TGliUGF0aClcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKHdpZGdldEluaXRGdW5jKTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICB3aWRnZXRJbml0RnVuYygpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5hdXRvTG9hZExpYlJlc291cmNlcykge1xuICAgICAgICAgICAgdGhpcy53aWRnZXRTZXJ2aWNlXG4gICAgICAgICAgICAgICAgLnN0b3BVc2VyQ29udHJvbCgpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNvbnRyb2woKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vICNlbmRyZWdpb25cblxuICAgIC8vICNyZWdpb24gXCJNw6l0b2RvcyBwcml2YWRvc1wiXG5cbiAgICBwcml2YXRlIHNldHVwRXZlbnRzKCk6IEZhY2VQaGlTZWxwaElkQ29tcG9uZW50IHtcbiAgICAgICAgdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi5vbk1vZHVsZUxvYWRlZCA9IGV2ZW50RGF0YSA9PiB7IHRoaXMub25Nb2R1bGVMb2FkZWQuZW1pdChldmVudERhdGEpOyB9O1xuICAgICAgICB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLm9uRXh0cmFjdGlvbkZpbmlzaGVkID0gZXh0cmFjdGlvblJlc3VsdCA9PiB7IHRoaXMub25FeHRyYWN0aW9uRmluaXNoZWQuZW1pdChleHRyYWN0aW9uUmVzdWx0KTsgfTtcbiAgICAgICAgdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi5vblVzZXJDYW5jZWxsZWQgPSAoKSA9PiB7IHRoaXMub25Vc2VyQ2FuY2VsbGVkLmVtaXQoKTsgfTtcbiAgICAgICAgdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi5vbkV4Y2VwdGlvbkNhcHR1cmVkID0gZXhjZXB0aW9uUmVzdWx0ID0+IHsgdGhpcy5vbkV4Y2VwdGlvbkNhcHR1cmVkLmVtaXQoZXhjZXB0aW9uUmVzdWx0KTsgfTtcbiAgICAgICAgdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi5vbkV4dHJhY3Rpb25UaW1lb3V0ID0gKCkgPT4geyB0aGlzLm9uRXh0cmFjdGlvblRpbWVvdXQuZW1pdCgpOyB9O1xuICAgICAgICB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLm9uVHJhY2tTdGF0dXMgPSBldmVudERhdGEgPT4geyB0aGlzLm9uVHJhY2tTdGF0dXMuZW1pdChldmVudERhdGEpOyB9O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vICNlbmRyZWdpb25cblxufVxuIl19