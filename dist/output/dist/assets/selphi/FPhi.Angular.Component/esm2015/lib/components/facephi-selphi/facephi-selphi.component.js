/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, ViewChild, ElementRef, EventEmitter, HostBinding } from "@angular/core";
import { FPhiSelphiConfiguration } from "../../models/facephi-selphi-configuration";
import { FPhiSelphiWidgetService } from "../../services/fphi-selphi-widget.service";
export class FacePhiSelphiComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXBoaS1zZWxwaGkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmFjZXBoaS1zZWxwaGkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9mYWNlcGhpLXNlbHBoaS9mYWNlcGhpLXNlbHBoaS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBR1QsS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixXQUFXLEVBQ2QsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDcEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFRcEYsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7OztJQWljL0IsWUFDWSxhQUFzQztRQUF0QyxrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7O1FBOWIxQyxjQUFTLEdBQVcsRUFBRSxDQUFDO1FBQ3ZCLHlCQUFvQixHQUE0QixJQUFJLHVCQUF1QixFQUFFLENBQUM7Ozs7O1FBbUUvRSxrQkFBYSxHQUFHLDJCQUEyQixDQUFDOzs7O1FBTTVDLHlCQUFvQixHQUFZLElBQUksQ0FBQzs7Ozs7O1FBOFNyQyxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDOzs7O1FBTTVDLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQzs7OztRQU16QyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7Ozs7UUFNeEMsdUJBQWtCLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQzs7OztRQU03QyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7Ozs7UUFNdkMsd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQzs7OztRQU05QyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7Ozs7UUFNMUMsK0JBQTBCLEdBQUcsSUFBSSxZQUFZ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O2lDQVdMLEtBQUs7MEJBVUwsS0FBSzs4QkFVTCxLQUFLOytCQVdMLEtBQUs7OEJBVUwsS0FBSzt3QkFVTCxLQUFLO2dDQWNMLE1BQU07NkJBTU4sTUFBTTs0QkFNTixNQUFNO2lDQU1OLE1BQU07MkJBTU4sTUFBTTtrQ0FNTixNQUFNOzhCQU1OLE1BQU07eUNBTU4sTUFBTTtrQ0FNTixNQUFNO3dDQU1OLE1BQU07NEJBT04sTUFBTTs7Ozs7OztJQXBiUCwyQ0FBK0I7Ozs7O0lBQy9CLHNEQUFzRjs7Ozs7SUFvQnRGLGdEQUMyQjs7Ozs7SUFlM0IsaURBQzRCOzs7OztJQWU1QixpREFDNEM7Ozs7O0lBSzVDLG1EQUNpQzs7Ozs7SUFPakMsK0NBQ21EOzs7OztJQUtuRCxzREFDNEM7Ozs7O0lBNlM1QyxtREFDbUQ7Ozs7O0lBS25ELGdEQUNnRDs7Ozs7SUFLaEQsK0NBQytDOzs7OztJQUsvQyxvREFDb0Q7Ozs7O0lBS3BELDhDQUM4Qzs7Ozs7SUFLOUMscURBQ3FEOzs7OztJQUtyRCxpREFDaUQ7Ozs7O0lBS2pELDREQUM0RDs7Ozs7SUFLNUQscURBQ3FEOzs7OztJQUtyRCwyREFDMkQ7Ozs7OztJQU0zRCwrQ0FDK0M7Ozs7O0lBUzNDLCtDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIE9uSW5pdCxcbiAgICBPbkRlc3Ryb3ksXG4gICAgSW5wdXQsXG4gICAgT3V0cHV0LFxuICAgIFZpZXdDaGlsZCxcbiAgICBFbGVtZW50UmVmLFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBIb3N0QmluZGluZ1xufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBGUGhpU2VscGhpQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZmFjZXBoaS1zZWxwaGktY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHsgRlBoaVNlbHBoaVdpZGdldFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZnBoaS1zZWxwaGktd2lkZ2V0LnNlcnZpY2VcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJmYWNlcGhpLXNlbHBoaVwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vZmFjZXBoaS1zZWxwaGkuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vZmFjZXBoaS1zZWxwaGkuY29tcG9uZW50LnNjc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgRmFjZVBoaVNlbHBoaUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIC8vICNyZWdpb24gXCJBdHJpYnV0b3NcIlxuXG4gICAgcHJpdmF0ZSBfY3NzQ2xhc3M6IHN0cmluZyA9IFwiXCI7XG4gICAgcHJpdmF0ZSBfd2lkZ2V0Q29uZmlndXJhdGlvbjogRlBoaVNlbHBoaUNvbmZpZ3VyYXRpb24gPSBuZXcgRlBoaVNlbHBoaUNvbmZpZ3VyYXRpb24oKTtcblxuICAgIC8vICNlbmRyZWdpb25cblxuICAgIC8vICNyZWdpb24gXCJQcm9waWVkYWRlc1wiXG5cbiAgICBASW5wdXQoXCJjbGFzc1wiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzXCIpXG4gICAgcHVibGljIGdldCBjc3NDbGFzcygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fY3NzQ2xhc3M7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBjc3NDbGFzcyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh2YWx1ZSlcbiAgICAgICAgICAgIHRoaXMuX2Nzc0NsYXNzICs9IGAgJHt2YWx1ZX1gO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuY2h1cmEgZGVsIGNvbXBvbmVudGUuXG4gICAgICovXG4gICAgQElucHV0KFwid2lkdGhcIilcbiAgICBwdWJsaWMgY29tcG9uZW50V2lkdGg6IGFueTtcblxuICAgIHB1YmxpYyBnZXQgd2lkZ2V0V2lkdGgoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50V2lkdGhcbiAgICAgICAgICAgID8gdHlwZW9mIHRoaXMuY29tcG9uZW50V2lkdGggPT09IFwic3RyaW5nXCIgJiYgdGhpcy5jb21wb25lbnRXaWR0aC5lbmRzV2l0aChcIiVcIilcbiAgICAgICAgICAgICAgICA/IHRoaXMuY29tcG9uZW50V2lkdGhcbiAgICAgICAgICAgICAgICA6IHBhcnNlRmxvYXQodGhpcy5jb21wb25lbnRXaWR0aCkgIT09IE5hTlxuICAgICAgICAgICAgICAgICAgICA/IGAke3BhcnNlRmxvYXQodGhpcy5jb21wb25lbnRXaWR0aCl9cHhgXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5jb21wb25lbnRXaWR0aFxuICAgICAgICAgICAgOiBcIjEwMCVcIjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbHR1cmEgZGVsIGNvbXBvbmVudGUuXG4gICAgICovXG4gICAgQElucHV0KFwiaGVpZ2h0XCIpXG4gICAgcHVibGljIGNvbXBvbmVudEhlaWdodDogYW55O1xuXG4gICAgcHVibGljIGdldCB3aWRnZXRIZWlnaHQoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50SGVpZ2h0XG4gICAgICAgICAgICA/IHR5cGVvZiB0aGlzLmNvbXBvbmVudEhlaWdodCA9PT0gXCJzdHJpbmdcIiAmJiB0aGlzLmNvbXBvbmVudEhlaWdodC5lbmRzV2l0aChcIiVcIilcbiAgICAgICAgICAgICAgICA/IHRoaXMuY29tcG9uZW50SGVpZ2h0XG4gICAgICAgICAgICAgICAgOiBwYXJzZUZsb2F0KHRoaXMuY29tcG9uZW50SGVpZ2h0KSAhPT0gTmFOXG4gICAgICAgICAgICAgICAgICAgID8gYCR7cGFyc2VGbG9hdCh0aGlzLmNvbXBvbmVudEhlaWdodCl9cHhgXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5jb21wb25lbnRIZWlnaHRcbiAgICAgICAgICAgIDogXCIxMDAlXCI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVmZXJlbmNpYSBpbnRlcm5hIGFsIGNvbnRlbmVkb3Igc29icmUgZWwgcXVlIHNlIGdlbmVyYXLDoSBlbCB3aWRnZXQgd2ViLlxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGQoXCJ3aWRnZXRDb250YWluZXJcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgd2lkZ2V0Q29udGFpbmVyOiBFbGVtZW50UmVmO1xuXG4gICAgLyoqXG4gICAgICogQ2xhc2VzIENTUyBhcGxpY2FkYXMgc29icmUgZWwgY29udGVuZWRvciBkZWwgd2lkZ2V0IHdlYi5cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBjb250YWluZXJDc3NDbGFzczogc3RyaW5nO1xuXG4gICAgLy8gI3JlZ2lvbiBcIkNvbmZpZ3VyYWNpw7NuXCJcblxuICAgIC8qKlxuICAgICAqIFJ1dGEgZW4gbGEgcXVlIGVzdMOhbiBsb2NhbGl6YWRvcyBsb3MgcmVjdXJzb3MgamF2YXNjcmlwdCBuYXRpdm9zIGRlbCB3aWRnZXQgd2ViLlxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHdpZGdldExpYlBhdGggPSBcImFzc2V0cy9saWIvZmFjZXBoaS9zZWxwaGlcIjtcblxuICAgIC8qKlxuICAgICAqIEZsYWcgcGFyYSBpbmRpY2FyIHNpIHF1ZXJlbW9zIHF1ZSBzZWEgZWwgY29tcG9uZW50ZSBlbCBlbmNhcmdhZG8gZGUgY2FyZ2FyIGUgaW5pY2lhbGl6YXIgdG9kb3MgbG9zIHJlY3Vyc29zIGphdmFzY3JpcHQgZGVsIHdpZGdldCB5IGJvcnJhcmxvcyBlbiBzdSBldmVudG8gJ29uRGVzdHJveScuXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgYXV0b0xvYWRMaWJSZXNvdXJjZXM6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogUnV0YSBkb25kZSBlc3TDoSB1YmljYWRvIGVsIGZpY2hlcm8gd2lkZ2V0LnhtbCB5IGVsIHJlc3RvIGRlIHJlY3Vyc29zIHBlcnNvbmFsaXphYmxlcyBkZWwgd2lkZ2V0LlxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCByZXNvdXJjZXNQYXRoKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi5yZXNvdXJjZXNQYXRoID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCByZXNvdXJjZXNQYXRoKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLnJlc291cmNlc1BhdGg7IH1cblxuICAgIC8qKlxuICAgICAqIFJ1dGEgZG9uZGUgZXN0w6EgdWJpY2FkbyBlbCBmaWNoZXJvIGdyYXBoLnhtbC5cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgZ3JhcGhQYXRoKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi5ncmFwaFBhdGggPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGdyYXBoUGF0aCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi5ncmFwaFBhdGg7IH1cblxuICAgIC8qKlxuICAgICAqIElkaW9tYSBlbiBxdWUgc2UgbW9zdHJhcsOhIGxhIGluZm9ybWFjacOzbiBkZWwgd2lkZ2V0LlxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBsYW5ndWFnZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24ubGFuZ3VhZ2UgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGxhbmd1YWdlKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLmxhbmd1YWdlOyB9XG5cbiAgICAvKipcbiAgICAgKiBMaXN0YSBkZSBkZW5zaWRhZGVzIGRlIHDDrXhlbGVzIGVuIHBhbnRhbGxhIHNvcG9ydGFkYXMgcG9yIGVsIHdpZGdldCwgZGUgY2FyYSBhIG1vc3RyYXIgbGFzIGltw6FnZW5lcyBkZSByZWN1cnNvIGFkZWN1YWRhcyBhIGxhIHBhbnRhbGxhIGFjdHVhbC5cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgZHBpTGlzdCh2YWx1ZTogQXJyYXk8bnVtYmVyPikge1xuICAgICAgICB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLmRwaUxpc3QgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGRwaUxpc3QoKTogQXJyYXk8bnVtYmVyPiB7IHJldHVybiB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLmRwaUxpc3Q7IH1cblxuICAgIC8qKlxuICAgICAqIFJlc29sdWNpw7NuIGhvcml6b250YWwgcHJlZmVyaWRhIGRlIGxhIGPDoW1hcmEgKGVsIHdpZGdldCBpbnRlbnRhcsOhIHNlbGVjY2lvbmFyIGxhIHJlc29sdWNpw7NuIG3DoXMgY2VyY2FuYSkuXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IGNhbWVyYVdpZHRoKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi5jYW1lcmFXaWR0aCA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgY2FtZXJhV2lkdGgoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24uY2FtZXJhV2lkdGg7IH1cblxuICAgIC8qKlxuICAgICAqIFJlc29sdWNpw7NuIHZlcnRpY2FsIHByZWZlcmlkYSBkZSBsYSBjw6FtYXJhIChlbCB3aWRnZXQgaW50ZW50YXLDoSBzZWxlY2Npb25hciBsYSByZXNvbHVjacOzbiBtw6FzIGNlcmNhbmEpLlxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBjYW1lcmFIZWlnaHQodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLmNhbWVyYUhlaWdodCA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgY2FtZXJhSGVpZ2h0KCk6IG51bWJlciB7IHJldHVybiB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLmNhbWVyYUhlaWdodDsgfVxuXG4gICAgLyoqXG4gICAgICogUm90YWNpw7NuIGRlIGxhIGPDoW1hcmEuXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IGNhbWVyYVJvdGF0aW9uKHZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi5jYW1lcmFSb3RhdGlvbiA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgY2FtZXJhUm90YXRpb24oKTogYW55IHsgcmV0dXJuIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24uY2FtZXJhUm90YXRpb247IH1cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdG9yIGRlIHRpcG8gZGUgY8OhbWFyYSBhIHV0aWxpemFyIHBhcmEgcmVhbGl6YXIgbGEgY2FwdHVyYSAoZnJvbnRhbCBvIHRyYXNlcmEpLlxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBjYW1lcmFUeXBlKHZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi5jYW1lcmFUeXBlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBjYW1lcmFUeXBlKCk6IGFueSB7IHJldHVybiB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLmNhbWVyYVR5cGU7IH1cblxuICAgIC8qKlxuICAgICAqIEluZGljYSBzaSBlbCB0dXRvcmlhbCBlc3TDoSBkaXNwb25pYmxlIGVuIGVsIHdpZGdldC5cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgdHV0b3JpYWwodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi50dXRvcmlhbCA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgdHV0b3JpYWwoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLnR1dG9yaWFsOyB9XG5cbiAgICAvKipcbiAgICAgKiBNb2RvIGRlIGV4dHJhY2Npw7NuIG8gZmx1am8gZGUgZWplY3VjacOzbiB1dGlsaXphZG8gcG9yIGVsIHdpZGdldC5cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgZXh0cmFjdGlvbk1vZGUodmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLmV4dHJhY3Rpb25Nb2RlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBleHRyYWN0aW9uTW9kZSgpOiBhbnkgeyByZXR1cm4gdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi5leHRyYWN0aW9uTW9kZTsgfVxuXG4gICAgLyoqXG4gICAgICogTW9kb3MgZGUgdmVyaWZpY2FjacOzbiBkZSBwcnVlYmEgZGUgdmlkYSB1dGlsaXphZG8gcG9yIGVsIHdpZGdldC5cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgbGl2ZW5lc3NNb2RlKHZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi5saXZlbmVzc01vZGUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGxpdmVuZXNzTW9kZSgpOiBhbnkgeyByZXR1cm4gdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi5saXZlbmVzc01vZGU7IH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBsaXZlbmVzc1ByZWNpc2lvbih2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24ubGl2ZW5lc3NQcmVjaXNpb24gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGxpdmVuZXNzUHJlY2lzaW9uKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLmxpdmVuZXNzUHJlY2lzaW9uOyB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgbGl2ZW5lc3NNb3ZlSW5pdGlhbEVycm9yKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi5saXZlbmVzc01vdmVJbml0aWFsRXJyb3IgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGxpdmVuZXNzTW92ZUluaXRpYWxFcnJvcigpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi5saXZlbmVzc01vdmVJbml0aWFsRXJyb3I7IH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBsaXZlbmVzc01vdmVJbmZvVGltZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24ubGl2ZW5lc3NNb3ZlSW5mb1RpbWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGxpdmVuZXNzTW92ZUluZm9UaW1lKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLmxpdmVuZXNzTW92ZUluZm9UaW1lOyB9XG5cbiAgICAvKipcbiAgICAgKiBJbmRpY2Egc2kgZWwgd2lkZ2V0IHBlcm1pdGUgbGEgaW50ZXJhY2Npw7NuIGNvbiBlbCB1c3VhcmlvLlxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBpbnRlcmFjdGlibGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi5pbnRlcmFjdGlibGUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGludGVyYWN0aWJsZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24uaW50ZXJhY3RpYmxlOyB9XG5cbiAgICAvKipcbiAgICAgKiBUaWVtcG8gZGUgcmVnaXN0cm8gZW4gc2VndW5kb3MuXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHJlZ2lzdGVyVGltZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24ucmVnaXN0ZXJUaW1lID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCByZWdpc3RlclRpbWUoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24ucmVnaXN0ZXJUaW1lOyB9XG5cbiAgICAvKipcbiAgICAgKiBUaWVtcG8gZGUgYXV0ZW50aWNhY2nDs24gZW4gc2VndW5kb3MuXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IGF1dGhlbnRpY2F0ZVRpbWUodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLmF1dGhlbnRpY2F0ZVRpbWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGF1dGhlbnRpY2F0ZVRpbWUoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24uYXV0aGVudGljYXRlVGltZTsgfVxuXG4gICAgLyoqXG4gICAgICogRm9ybWF0byBkZSBsYXMgaW3DoWdlbmVzIGNhcHR1cmFkYXMgcG9yIGVsIHdpZGdldCAoTUlNRSB0eXBlKS5cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgaW1hZ2VGb3JtYXQodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLmltYWdlRm9ybWF0ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBpbWFnZUZvcm1hdCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi5pbWFnZUZvcm1hdDsgfVxuXG4gICAgLyoqXG4gICAgICogRmFjdG9yIGRlIGNhbGlkYWQgZGUgbGFzIGltw6FnZW5lcyBkZXZ1ZWx0YXMgKHJhbmdvIDAuMCBhIDEuMCkuIMOabmljYW1lbnRlIGFwbGljYWJsZSBjdWFuZG8gZWwgZm9ybWF0byBkZSBpbWFnZW4gc2UgaGEgZXNwZWNpZmljYWRvIGNvbW8gXCJpbWFnZS9qcGVnXCIuXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IGltYWdlUXVhbGl0eSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24uaW1hZ2VRdWFsaXR5ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBpbWFnZVF1YWxpdHkoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24uaW1hZ2VRdWFsaXR5OyB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgbG9nSW1hZ2VzKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24ubG9nSW1hZ2VzID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBsb2dJbWFnZXMoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLmxvZ0ltYWdlczsgfVxuXG4gICAgLyoqXG4gICAgICogRmFjdG9yIGRlIHJlY29ydGUgZGUgbGFzIGltw6FnZW5lcyBkZXZ1ZWx0YXMgcG9yIGVsIHdpZGdldC5cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgY3JvcEZhY3Rvcih2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24uY3JvcEZhY3RvciA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgY3JvcEZhY3RvcigpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi5jcm9wRmFjdG9yOyB9XG5cbiAgICAvKipcbiAgICAgKiBJbmRpY2Egc2kgZWwgd2lkZ2V0IGRlYmUgcmVjb3J0YXIgbGFzIGltw6FnZW5lcyBjYXB0dXJhZGFzLCBvIG5vLlxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBjcm9wSW1hZ2UodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi5jcm9wSW1hZ2UgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGNyb3BJbWFnZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24uY3JvcEltYWdlOyB9XG5cbiAgICAvKipcbiAgICAgKiBGb3JtYXRvIGRlIHNhbGlkYSBkZSBsYSBpbmZvcm1hY2nDs24gZGUgdGVtcGxhdGUgZ2VuZXJhZGEgcG9yIGVsIHdpZGdldC5cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgdGVtcGxhdGVGb3JtYXQodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLnRlbXBsYXRlRm9ybWF0ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCB0ZW1wbGF0ZUZvcm1hdCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi50ZW1wbGF0ZUZvcm1hdDsgfVxuXG4gICAgLyoqXG4gICAgICogQWN0aXZhIGxhIGZhc2UgZGUgZXN0YWJpbGl6YWNpw7NuIHByZXZpYSBhIGxhIGNhcHR1cmEuIFBvciBkZWZlY3RvLCBsYSBlc3RhYmlsaXphY2nDs24gZXN0YXLDoSBkZXNhY3RpdmFkYS5cbiAgICAgKiBFbiBjYXNvIGRlIGhhYmVyIHNlbGVjY2lvbmFkbyBMaXZlbmVzc01vZGU9PU1vdmUsIGVzdGUgcGFyw6FtZXRybyBubyBzZSB0ZW5kcsOhIGVuIGN1ZW50YSB5IHNpZW1wcmUgc2UgcmVhbGl6YXLDoSBmYXNlIGRlIGVzdGFiaWxpemFkby5cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgc3RhYmlsaXphdGlvblN0YWdlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24uc3RhYmlsaXphdGlvblN0YWdlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBzdGFiaWxpemF0aW9uU3RhZ2UoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLnN0YWJpbGl6YXRpb25TdGFnZTsgfVxuXG4gICAgLyoqXG4gICAgICogSW5kaWNhIHNpIGVsIHdpZGdldCBkZWJlIGdyYWJhciBsYSBzZXNpw7NuIGRlbCB1c3VhcmlvIGVuIHZpZGVvLlxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCB2aWRlb1JlY29yZCh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLnZpZGVvUmVjb3JkID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCB2aWRlb1JlY29yZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24udmlkZW9SZWNvcmQ7IH1cblxuICAgIC8qKlxuICAgICAqIEZyZWN1ZW5jaWEgZGUgZ3JhYmFjacOzbiAoZW4gZnJhbWVzIHBvciBzZWd1bmRvKS5cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgdmlkZW9SZWNvcmRSYXRlKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi52aWRlb1JlY29yZFJhdGUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHZpZGVvUmVjb3JkUmF0ZSgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi52aWRlb1JlY29yZFJhdGU7IH1cblxuICAgIC8qKlxuICAgICAqIEZhY3RvciBkZSBlc2NhbGFkbyBhcGxpY2FkbyBzb2JyZSBsYXMgY2FwdHVyYXMgcmVhbGl6YWRhcyBwYXJhIGxhIGdlbmVyYWNpw7NuIGRlbCB2aWRlby5cbiAgICAgKiBUb21hIHZhbG9yZXMgcG9yY2VudHVhbGVzIGRlIDAuMCBhIDEuMCAocXVlIGVxdWl2YWxkcsOtYSBhIHVuYSBlc2NhbGEgZGVsIDEwMCUgZGUgcmVzb2x1Y2nDs24gZGUgY8OhbWFyYSBzZWxlY2Npb25hZGEpLlxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCB2aWRlb1JlY29yZFNjYWxlKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi52aWRlb1JlY29yZFNjYWxlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCB2aWRlb1JlY29yZFNjYWxlKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLnZpZGVvUmVjb3JkU2NhbGU7IH1cblxuICAgIC8qKlxuICAgICAqIFRpcG8gZGUgc2FsaWRhIGRlbCB2aWRlbyBnZW5lcmFkby4gTG9zIHBvc2libGVzIHZhbG9yZXMgc2UgdG9tYXLDoW4gZGVsIGVudW1lcmFkbyBcIkZQaGkuU2VscGhpLlJlY29yZFR5cGVcIi5cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgdmlkZW9SZWNvcmRUeXBlKHZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi52aWRlb1JlY29yZFR5cGUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHZpZGVvUmVjb3JkVHlwZSgpOiBhbnkgeyByZXR1cm4gdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi52aWRlb1JlY29yZFR5cGU7IH1cblxuICAgIC8qKlxuICAgICAqIEFjdGl2YSBlbCBtb2RvIGRlIGRlcHVyYWNpw7NuIGRlbCB3aWRnZXQsIGVuIGVsIHF1ZSBzZSBtb3N0cmFyw6FuIG1lbnNhamVzIGluZm9ybWF0aXZvcyBlbiBsYSBjb25zb2xhIGRlbCBuYXZlZ2Fkb3IuXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IGRlYnVnTW9kZSh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLmRlYnVnTW9kZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZGVidWdNb2RlKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi5kZWJ1Z01vZGU7IH1cblxuICAgIC8vICNlbmRyZWdpb25cblxuICAgIC8vICNyZWdpb24gXCJFdmVudG9zXCJcblxuICAgIC8qKlxuICAgICAqIEV2ZW50byBsYW56YWRvIGN1YW5kbyBsb3MgcmVjdXJzb3MgZGVsIHdpZGdldCBzZSBoYW4gY2FyZ2FkbyBjb3JyZWN0YW1lbnRlLlxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvbkNvbXBvbmVudExvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gICAgLyoqXG4gICAgICogRXZlbnRvIGxhbnphZG8gcG9yIGVsIHdpZGdldCBjdWFuZG8gc2UgaGEgZmluYWxpemFkbyBlbCBwcm9jZXNvIGRlIGNhcmdhIGUgaW5pY2lhbGl6YWNpw7NuLCB0YW5kbyBkZWwgd2lkZ2V0LCBjb21vIGRlIGxvcyByZWN1cnNvcyBhc29jaWFkb3MgYWwgbWlzbW8uXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uTW9kdWxlTG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgICAvKipcbiAgICAgKiBFdmVudG8gbGFuemFkbyBkdXJhbnRlIGxvcyBjaWNsb3MgZGUgZXN0YWJpbGl6YWNpw7NuIGRlIGxhIGltYWdlbiBwYXJhIGxhIGNvcnJlY3RhIHJlYWxpemFjacOzbiBkZSBsYSBjYXB0dXJhLlxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvblN0YWJpbGl6aW5nID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgICAvKipcbiAgICAgKiBFdmVudG8gbGFuemFkbyBjdWFuZG8gZWwgcHJvY2VzbyBkZSBleHRyYWNjacOzbiBoYSBmaW5hbGl6YWRvIGNvcnJlY3RhbWVudGUuIERldnVlbHZlIGVsIHJlc3VsdGFkbyBkZSBsYSBjYXB0dXJhLlxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvbkV4dHJhY3Rpb25GaW5pc2ggPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAgIC8qKlxuICAgICAqIEV2ZW50byBsYW56YWRvIGN1YW5kbyBlbCB1c3VhcmlvIGNhbmNlbGEgZWwgcHJvY2VzbyBkZSBleHRyYWNjacOzbi5cbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25Vc2VyQ2FuY2VsID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgICAvKipcbiAgICAgKiBFdmVudG8gbGFuemFkbyBlbiBjYXNvIGRlIHF1ZSBzZSBwcm9kdXpjYSB1biBlcnJvciBpbnRlcm5vIGRlbCB3aWRnZXQuXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uRXhjZXB0aW9uQ2FwdHVyZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAgIC8qKlxuICAgICAqIEV2ZW50byBsYW56YWRvIGN1YW5kbyBlbCBwcm9jZXNvIGRlIHZlcmlmaWNhY2nDs24gZGUgYXV0ZW50aWNpZGFkIHBvciBwcnVlYmEgZGUgdmlkYSBmYWxsYS5cbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25MaXZlbmVzc0Vycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgICAvKipcbiAgICAgKiBFdmVudG8gbGFuemFkbyBjdWFuZG8gZWwgcHJvY2VzbyBkZSB2ZXJpZmljYWNpw7NuIGRlIGF1dGVudGljaWRhZCBwb3IgcHJ1ZWJhIGRlIHZpZGEgZmFsbGEgeSBlbCB1c3VhcmlvIHB1bHNhIGVsIGJvdMOzbiBkZSBsYSBwYW50YWxsYSBkZSBlcnJvciBtb3N0cmFkYS5cbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25MaXZlbmVzc0Vycm9yQnV0dG9uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAgIC8qKlxuICAgICAqIEV2ZW50byBsYW56YWRvIHNpIGVsIHByb2Nlc28gZGUgY2FwdHVyYSBleGNlZGUgZWwgdGllbXBvIG3DoXhpbW8gZGlzcG9uaWJsZS5cbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25FeHRyYWN0aW9uVGltZW91dCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gICAgLyoqXG4gICAgICogRXZlbnRvIGxhbnphZG8gY3VhbmRvIGVsIHByb2Nlc28gZGUgY2FwdHVyYSBleGNlZGUgZWwgdGllbXBvIG3DoXhpbW8gZGlzcG9uaWJsZSB5IGVsIHVzdWFyaW8gcHVsc2EgZWwgYm90w7NuIGRlIGxhIHBhbnRhbGxhIGRlIGVycm9yIG1vc3RyYWRhLlxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvblRpbWVvdXRFcnJvckJ1dHRvbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgICAvKipcbiAgICAgKiBFdmVudG8gbGFuemFkbyB0cmFzIGN1YWxxdWllciBhY2Npw7NuIHJlYWxpemFkYSBwb3IgZWwgdXN1YXJpbyBzb2JyZSBsYSBpbnRlcmZheiBncsOhZmljYSBkZWwgd2lkZ2V0IG8gYW50ZSBjdWFscXVpZXIgY2FtYmlvIGRlIGVzdGFkb1xuICAgICAqIGR1cmFudGUgZWwgcHJvY2VzbyBkZSBjYXB0dXJhLlxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvblRyYWNrU3RhdHVzID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAvLyAjcmVnaW9uIFwiQ29uc3RydWN0b3Jlc1wiXG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSB3aWRnZXRTZXJ2aWNlOiBGUGhpU2VscGhpV2lkZ2V0U2VydmljZVxuICAgICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgLy9jb25zb2xlLndhcm4oYD4+Pj4gW2ZhY2VwaGktc2VscGhpXSBuZ09uSW5pdCB7IGF1dG9Mb2FkTGliUmVzb3VyY2VzOiAke3RoaXMuYXV0b0xvYWRMaWJSZXNvdXJjZXN9IH1gLCB0aGlzLndpZGdldENvbnRhaW5lci5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhgd2lkZ2V0Q29udGFpbmVyLm9mZnNldFdpZHRoOiAkeyh0aGlzLndpZGdldENvbnRhaW5lci5uYXRpdmVFbGVtZW50IGFzIGFueSkub2Zmc2V0V2lkdGh9YCk7XG4gICAgICAgIC8vY29uc29sZS5sb2coYHdpZGdldENvbnRhaW5lci5vZmZzZXRIZWlnaHQ6ICR7KHRoaXMud2lkZ2V0Q29udGFpbmVyLm5hdGl2ZUVsZW1lbnQgYXMgYW55KS5vZmZzZXRIZWlnaHR9YCk7XG5cbiAgICAgICAgdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi53aWRnZXRDb250YWluZXIgPSB0aGlzLndpZGdldENvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLnNldHVwRXZlbnRzKCk7XG5cbiAgICAgICAgY29uc3Qgd2lkZ2V0SW5pdEZ1bmMgPSAoKSA9PiB7XG4gICAgICAgICAgICAvL2NvbnNvbGUud2FybihcIj4+Pj4gW2ZhY2VwaGktc2VscGhpXSAgQ09OVFJPTCBMT0FERUQhIVwiKTtcbiAgICAgICAgICAgIHRoaXMub25Db21wb25lbnRMb2FkZWQuZW1pdCgpO1xuXG4gICAgICAgICAgICB0aGlzLndpZGdldFNlcnZpY2VcbiAgICAgICAgICAgICAgICAuY3JlYXRlVXNlckNvbnRyb2wodGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbilcbiAgICAgICAgICAgICAgICAuc3RhcnRVc2VyQ29udHJvbCgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0aGlzLmF1dG9Mb2FkTGliUmVzb3VyY2VzKSB7XG4gICAgICAgICAgICB0aGlzLndpZGdldFNlcnZpY2VcbiAgICAgICAgICAgICAgICAubG9hZENvbnRyb2wodGhpcy53aWRnZXRMaWJQYXRoKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUod2lkZ2V0SW5pdEZ1bmMpO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgIHdpZGdldEluaXRGdW5jKCk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIC8vY29uc29sZS53YXJuKFwiPj4+PiBbZmFjZXBoaS1zZWxwaGldIG5nT25EZXN0cm95XCIpO1xuICAgICAgICBpZiAodGhpcy5hdXRvTG9hZExpYlJlc291cmNlcykge1xuICAgICAgICAgICAgdGhpcy53aWRnZXRTZXJ2aWNlXG4gICAgICAgICAgICAgICAgLnN0b3BVc2VyQ29udHJvbCgpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNvbnRyb2woKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vICNlbmRyZWdpb25cblxuICAgIC8vICNyZWdpb24gXCJNw6l0b2RvcyBwcml2YWRvc1wiXG5cbiAgICBwcml2YXRlIHNldHVwRXZlbnRzKCk6IEZhY2VQaGlTZWxwaGlDb21wb25lbnQge1xuICAgICAgICB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLm9uTW9kdWxlTG9hZGVkID0gZXZlbnREYXRhID0+IHsgdGhpcy5vbk1vZHVsZUxvYWRlZC5lbWl0KGV2ZW50RGF0YSk7IH07XG4gICAgICAgIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24ub25TdGFiaWxpemluZyA9IHN0YWJpbGl6aW5nUmVzdWx0ID0+IHsgdGhpcy5vblN0YWJpbGl6aW5nLmVtaXQoc3RhYmlsaXppbmdSZXN1bHQpOyB9O1xuICAgICAgICB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLm9uRXh0cmFjdGlvbkZpbmlzaCA9IGV4dHJhY3Rpb25SZXN1bHQgPT4geyB0aGlzLm9uRXh0cmFjdGlvbkZpbmlzaC5lbWl0KGV4dHJhY3Rpb25SZXN1bHQpOyB9O1xuICAgICAgICB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLm9uVXNlckNhbmNlbCA9ICgpID0+IHsgdGhpcy5vblVzZXJDYW5jZWwuZW1pdCgpOyB9O1xuICAgICAgICB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLm9uRXhjZXB0aW9uQ2FwdHVyZWQgPSBleGNlcHRpb25SZXN1bHQgPT4geyB0aGlzLm9uRXhjZXB0aW9uQ2FwdHVyZWQuZW1pdChleGNlcHRpb25SZXN1bHQpOyB9O1xuICAgICAgICB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLm9uTGl2ZW5lc3NFcnJvciA9IGxpdmVuZXNzRXJyb3JSZXN1bHQgPT4geyB0aGlzLm9uTGl2ZW5lc3NFcnJvci5lbWl0KGxpdmVuZXNzRXJyb3JSZXN1bHQpOyB9O1xuICAgICAgICB0aGlzLl93aWRnZXRDb25maWd1cmF0aW9uLm9uTGl2ZW5lc3NFcnJvckJ1dHRvbkNsaWNrID0gKCkgPT4geyB0aGlzLm9uTGl2ZW5lc3NFcnJvckJ1dHRvbkNsaWNrLmVtaXQoKTsgfTtcbiAgICAgICAgdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi5vbkV4dHJhY3Rpb25UaW1lb3V0ID0gZXh0cmFjdGlvblRpbWVvdXRSZXN1bHQgPT4geyB0aGlzLm9uRXh0cmFjdGlvblRpbWVvdXQuZW1pdChleHRyYWN0aW9uVGltZW91dFJlc3VsdCk7IH07XG4gICAgICAgIHRoaXMuX3dpZGdldENvbmZpZ3VyYXRpb24ub25UaW1lb3V0RXJyb3JCdXR0b25DbGljayA9ICgpID0+IHsgdGhpcy5vblRpbWVvdXRFcnJvckJ1dHRvbkNsaWNrLmVtaXQoKTsgfTtcbiAgICAgICAgdGhpcy5fd2lkZ2V0Q29uZmlndXJhdGlvbi5vblRyYWNrU3RhdHVzID0gZXZlbnREYXRhID0+IHsgdGhpcy5vblRyYWNrU3RhdHVzLmVtaXQoZXZlbnREYXRhKTsgfTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyAjZW5kcmVnaW9uXG5cbn1cbiJdfQ==