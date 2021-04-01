/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from "@angular/core";
import { RendererFactory2 } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { RxjsHelper } from "./helpers/rxjs-helper";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/common/http";
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
    /** @nocollapse */ FPhiSelphIdWidgetService.ngInjectableDef = i0.defineInjectable({ factory: function FPhiSelphIdWidgetService_Factory() { return new FPhiSelphIdWidgetService(i0.inject(i1.DOCUMENT), i0.inject(i0.RendererFactory2), i0.inject(i2.HttpClient)); }, token: FPhiSelphIdWidgetService, providedIn: "root" });
    return FPhiSelphIdWidgetService;
}());
export { FPhiSelphIdWidgetService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FPhiSelphIdWidgetService.licenseCheckUrl;
    /**
     * @type {?}
     * @private
     */
    FPhiSelphIdWidgetService.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    FPhiSelphIdWidgetService.prototype._assetsBasePath;
    /**
     * @type {?}
     * @private
     */
    FPhiSelphIdWidgetService.prototype._fPhiWidgetConfiguration;
    /**
     * @type {?}
     * @private
     */
    FPhiSelphIdWidgetService.prototype._fPhiWidget;
    /**
     * @type {?}
     * @private
     */
    FPhiSelphIdWidgetService.prototype.document;
    /**
     * @type {?}
     * @private
     */
    FPhiSelphIdWidgetService.prototype.rendererFactory;
    /**
     * @type {?}
     * @private
     */
    FPhiSelphIdWidgetService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnBoaS1zZWxwaGlkLXdpZGdldC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmFjZXBoaS1zZWxwaGlkLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2ZwaGktc2VscGhpZC13aWRnZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFhLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFnQixNQUFNLHNCQUFzQixDQUFDO0FBRWhFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQUluRDtJQTRCSSxhQUFhO0lBRWIsMEJBQTBCO0lBRTFCLGtDQUM4QixRQUFhLEVBQy9CLGVBQWlDLEVBQ2pDLElBQWdCO1FBRkUsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUMvQixvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7UUFDakMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUV4QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBbkJELHNCQUFZLDBEQUFvQjtRQUpoQyxhQUFhO1FBRWIsd0JBQXdCOzs7Ozs7OztRQUV4QixjQUFxQyxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENB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QUF2QixDQUF1QixFQUFDLENBQUMsQ0FBQTtJQUN4RyxDQUFDOztJQTdJdUIsd0NBQWUsR0FBVyxtQ0FBbUMsQ0FBQzs7Z0JBUHpGLFVBQVUsU0FBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckI7Ozs7Z0RBK0JRLE1BQU0sU0FBQyxRQUFRO2dCQTNDSixnQkFBZ0I7Z0JBRTNCLFVBQVU7OzttQ0FIbkI7Q0FrS0MsQUF2SkQsSUF1SkM7U0FwSlksd0JBQXdCOzs7Ozs7SUFJakMseUNBQXNGOzs7OztJQUV0Riw2Q0FBNkI7Ozs7O0lBRTdCLG1EQUFnQzs7Ozs7SUFDaEMsNERBQTJEOzs7OztJQUMzRCwrQ0FBeUI7Ozs7O0lBb0JyQiw0Q0FBdUM7Ozs7O0lBQ3ZDLG1EQUF5Qzs7Ozs7SUFDekMsd0NBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJlbmRlcmVyMiwgUmVuZGVyZXJGYWN0b3J5MiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHsgUnhqc0hlbHBlciB9IGZyb20gXCIuL2hlbHBlcnMvcnhqcy1oZWxwZXJcIjtcblxuaW1wb3J0IHsgRlBoaVNlbHBoSWRDb25maWd1cmF0aW9uIH0gZnJvbSBcIi4uL21vZGVscy9mYWNlcGhpLXNlbHBoaWQtY29uZmlndXJhdGlvblwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogXCJyb290XCJcbn0pXG5leHBvcnQgY2xhc3MgRlBoaVNlbHBoSWRXaWRnZXRTZXJ2aWNlIHtcblxuICAgIC8vICNyZWdpb24gXCJBdHJpYnV0b3NcIlxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgbGljZW5zZUNoZWNrVXJsOiBzdHJpbmcgPSBcImh0dHBzOi8vZWNlcnRpYy5pZGNhcHR1cmUuZXMvYXV0aFwiO1xuXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMjtcblxuICAgIHByaXZhdGUgX2Fzc2V0c0Jhc2VQYXRoOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfZlBoaVdpZGdldENvbmZpZ3VyYXRpb246IEZQaGlTZWxwaElkQ29uZmlndXJhdGlvbjtcbiAgICBwcml2YXRlIF9mUGhpV2lkZ2V0OiBhbnk7XG5cbiAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAvLyAjcmVnaW9uIFwiUHJvcGllZGFkZXNcIlxuXG4gICAgcHJpdmF0ZSBnZXQgZlBoaVNlbHBoSWROYW1lc3BhY2UoKSB7IHJldHVybiB3aW5kb3dbXCJGUGhpXCJdICYmIHdpbmRvd1tcIkZQaGlcIl0uU2VscGhJRCA/IHdpbmRvd1tcIkZQaGlcIl0uU2VscGhJRCA6IHVuZGVmaW5lZDsgfVxuXG4gICAgcHJpdmF0ZSBzZXQgZlBoaVNlbHBoSWROYW1lc3BhY2UodmFsdWU6IGFueSkge1xuICAgICAgICBpZiAod2luZG93W1wiRlBoaVwiXSlcbiAgICAgICAgICAgIHdpbmRvd1tcIkZQaGlcIl0uU2VscGhJRCA9IHZhbHVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0IGZQaGlXaWRnZXRTY3JpcHRQYXRoKCk6IHN0cmluZyB7IHJldHVybiBgJHt0aGlzLl9hc3NldHNCYXNlUGF0aH0vRlBoaS5XaWRnZXQud2FzbS5qc2A7IH1cblxuICAgIC8vICNlbmRyZWdpb25cblxuICAgIC8vICNyZWdpb24gXCJDb25zdHJ1Y3RvcmVzXCJcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG4gICAgICAgIHByaXZhdGUgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyLFxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnRcbiAgICApIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcihudWxsLCBudWxsKTtcbiAgICB9XG5cbiAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAvLyAjcmVnaW9uIFwiTcOpdG9kb3MgcMO6YmxpY29zXCJcblxuICAgIC8qKlxuICAgICAqIFJlYWxpemEgbGEgY2FyZ2EgZGluw6FtaWNhIGRlbCByZWN1cnNvIGphdmFzY3JpcHQgZGVsIHdpZGdldCB3ZWIuXG4gICAgICogQHBhcmFtIGJhc2VQYXRoIFJ1dGEgYmFzZSBkZSBsYSBjYXJwZXRhIGRlIGxvcyBmaWNoZXJvcyBkZWwgd2lkZ2V0LlxuICAgICAqL1xuICAgIHB1YmxpYyBsb2FkQ29udHJvbChiYXNlUGF0aDogc3RyaW5nKTogT2JzZXJ2YWJsZTxGUGhpU2VscGhJZFdpZGdldFNlcnZpY2U+IHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhgPj4+PiBGUGhpU2VscGhJZFdpZGdldFNlcnZpY2UgOjogbG9hZENvbnRyb2wgLS0+IGJhc2VQYXRoOiAke2Jhc2VQYXRofWApO1xuICAgICAgICB0aGlzLl9hc3NldHNCYXNlUGF0aCA9IGJhc2VQYXRoO1xuXG4gICAgICAgIGNvbnN0IGZQaGlXaWRnZXRTY3JpcHQgPSB0aGlzLl9yZW5kZXJlci5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUoZlBoaVdpZGdldFNjcmlwdCwgXCJzcmNcIiwgdGhpcy5mUGhpV2lkZ2V0U2NyaXB0UGF0aCk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShmUGhpV2lkZ2V0U2NyaXB0LCBcInR5cGVcIiwgXCJ0ZXh0L2phdmFzY3JpcHRcIik7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuZG9jdW1lbnQuYm9keSwgZlBoaVdpZGdldFNjcmlwdCk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlPEZQaGlTZWxwaElkV2lkZ2V0U2VydmljZT4oc3Vic2NyaWJlciA9PiB7XG4gICAgICAgICAgICBSeGpzSGVscGVyLnBvbGwoNSxcbiAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLmZQaGlTZWxwaElkTmFtZXNwYWNlICE9PSBudWxsICYmIHRoaXMuZlBoaVNlbHBoSWROYW1lc3BhY2UgIT09IHVuZGVmaW5lZCAmJiB0aGlzLmZQaGlTZWxwaElkTmFtZXNwYWNlLldpZGdldCAhPT0gbnVsbCAmJiB0aGlzLmZQaGlTZWxwaElkTmFtZXNwYWNlLldpZGdldCAhPT0gdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICgpID0+IHN1YnNjcmliZXIubmV4dCh0aGlzKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRWxpbWluYSBsb3MgcmVjdXJzb3MgamF2YXNjcmlwdCBkZWwgd2lkZ2V0IGluY2x1aWRvcyBlbiBlbCBET00gZGUgbGEgcMOhZ2luYS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVtb3ZlQ29udHJvbCgpOiBGUGhpU2VscGhJZFdpZGdldFNlcnZpY2Uge1xuICAgICAgICBpZiAoIXRoaXMuX2Fzc2V0c0Jhc2VQYXRoKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgICAgLy9jb25zb2xlLndhcm4oYD4+Pj4gRlBoaVNlbHBoSWRXaWRnZXRTZXJ2aWNlIDo6IHJlbW92ZUNvbnRyb2woXCIke3RoaXMuX2Fzc2V0c0Jhc2VQYXRofVwiKWApO1xuICAgICAgICBkZWxldGUgdGhpcy5fZlBoaVdpZGdldDtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2ZQaGlXaWRnZXRDb25maWd1cmF0aW9uO1xuICAgICAgICBkZWxldGUgdGhpcy5mUGhpU2VscGhJZE5hbWVzcGFjZTtcblxuICAgICAgICB0aGlzLl9mUGhpV2lkZ2V0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9mUGhpV2lkZ2V0Q29uZmlndXJhdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5mUGhpU2VscGhJZE5hbWVzcGFjZSA9IHVuZGVmaW5lZDtcblxuICAgICAgICB0aGlzLmRvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChgc2NyaXB0W3NyYyo9XCIke3RoaXMuX2Fzc2V0c0Jhc2VQYXRofVwiXWApXG4gICAgICAgICAgICAuZm9yRWFjaChlbGVtZW50ID0+IHsgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpOyB9KTtcblxuICAgICAgICB0aGlzLmRvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcInN0eWxlI0ZQaGlfV2lkZ2V0X3N0eWxlXCIpXG4gICAgICAgICAgICAuZm9yRWFjaChlbGVtZW50ID0+IHsgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpOyB9KTtcblxuICAgICAgICAvL2NvbnNvbGUud2FybihgPj4+PiBGUGhpU2VscGhJZFdpZGdldFNlcnZpY2UgOjogQ29udHJvbCByZW1vdmVkYCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYSB1bmEgaW5zdGFuY2lhIGRlbCB3aWRnZXQgd2ViIG5hdGl2byBjb24gbG9zIGRhdG9zIGRlIGNvbmZpZ3VyYWNpw7NuIGluZGljYWRvcy5cbiAgICAgKiBAcGFyYW0gY29uZmlnIERhdG9zIGRlIGNvbmZpZ3VyYWNpw7NuIGRlbCB3aWRnZXQuXG4gICAgICovXG4gICAgcHVibGljIGNyZWF0ZVVzZXJDb250cm9sKGNvbmZpZzogRlBoaVNlbHBoSWRDb25maWd1cmF0aW9uKTogRlBoaVNlbHBoSWRXaWRnZXRTZXJ2aWNlIHtcbiAgICAgICAgLy9jb25zb2xlLndhcm4oXCI+Pj4+IEZQaGlTZWxwaElkV2lkZ2V0U2VydmljZSA6OiBjcmVhdGVVc2VyQ29udHJvbFwiLCBjb25maWcsIGNvbmZpZy5nZXROYXRpdmVDb25maWd1cmF0aW9uKCkpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKGB3aWRnZXRDb250YWluZXIuY2xpZW50V2lkdGg6ICR7Y29uZmlnLndpZGdldENvbnRhaW5lci5jbGllbnRXaWR0aH1gKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhgd2lkZ2V0Q29udGFpbmVyLmNsaWVudEhlaWdodDogJHtjb25maWcud2lkZ2V0Q29udGFpbmVyLmNsaWVudEhlaWdodH1gKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhgd2lkZ2V0Q29udGFpbmVyLm9mZnNldFdpZHRoOiAke2NvbmZpZy53aWRnZXRDb250YWluZXIub2Zmc2V0V2lkdGh9YCk7XG4gICAgICAgIC8vY29uc29sZS5sb2coYHdpZGdldENvbnRhaW5lci5vZmZzZXRIZWlnaHQ6ICR7Y29uZmlnLndpZGdldENvbnRhaW5lci5vZmZzZXRIZWlnaHR9YCk7XG4gICAgICAgIC8vY29uc29sZS5sb2coYHdpZGdldENvbnRhaW5lci5jb21wdXRlZFN0eWxlV2lkdGg6ICR7d2luZG93LmdldENvbXB1dGVkU3R5bGUoY29uZmlnLndpZGdldENvbnRhaW5lcikud2lkdGh9YCk7XG4gICAgICAgIC8vY29uc29sZS5sb2coYHdpZGdldENvbnRhaW5lci5jb21wdXRlZFN0eWxlSGVpZ2h0OiAke3dpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGNvbmZpZy53aWRnZXRDb250YWluZXIpLmhlaWdodH1gKTtcblxuICAgICAgICB0aGlzLl9mUGhpV2lkZ2V0Q29uZmlndXJhdGlvbiA9IGNvbmZpZztcbiAgICAgICAgdGhpcy5fZlBoaVdpZGdldCA9IG5ldyB0aGlzLmZQaGlTZWxwaElkTmFtZXNwYWNlLldpZGdldChjb25maWcuZ2V0TmF0aXZlQ29uZmlndXJhdGlvbigpKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLl9mUGhpU2VscGhJZFdpZGdldCk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2ZQaGlXaWRnZXRDb25maWd1cmF0aW9uLmRlYnVnTW9kZSAhPT0gbnVsbCAmJiB0aGlzLl9mUGhpV2lkZ2V0Q29uZmlndXJhdGlvbi5kZWJ1Z01vZGUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHRoaXMuX2ZQaGlXaWRnZXQuZGVidWcgPSB0aGlzLl9mUGhpV2lkZ2V0Q29uZmlndXJhdGlvbi5kZWJ1Z01vZGU7XG5cbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLl9mUGhpU2VscGhJZFdpZGdldCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaWNpYSBlbCB3aWRnZXQuXG4gICAgICovXG4gICAgcHVibGljIHN0YXJ0VXNlckNvbnRyb2woKTogRlBoaVNlbHBoSWRXaWRnZXRTZXJ2aWNlIHtcbiAgICAgICAgaWYgKHRoaXMuX2ZQaGlXaWRnZXQpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUud2FybihcIj4+Pj4gRlBoaVNlbHBoSWRXaWRnZXRTZXJ2aWNlIDo6IHN0YXJ0VXNlckNvbnRyb2xcIik7XG4gICAgICAgICAgICB0aGlzLl9mUGhpV2lkZ2V0LlN0YXJ0KCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXRpZW5lIGxhIGVqZWN1Y2nDs24gZGVsIHdpZGdldC5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RvcFVzZXJDb250cm9sKCk6IEZQaGlTZWxwaElkV2lkZ2V0U2VydmljZSB7XG4gICAgICAgIGlmICh0aGlzLl9mUGhpV2lkZ2V0KSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLndhcm4oXCI+Pj4+IEZQaGlTZWxwaElkV2lkZ2V0U2VydmljZSA6OiBzdG9wVXNlckNvbnRyb2xcIik7XG4gICAgICAgICAgICB0aGlzLl9mUGhpV2lkZ2V0LlN0b3AoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFZlcmlmaWNhIHF1ZSBlbCBlbnRvcm5vIGRlIGVqZWN1Y2nDs24gYWN0dWFsIGVzdMOhIGNvcnJlY3RhbWVudGUgbGljZW5jaWFkbyBwYXJhIGVsIHVzbyBkZSBsYXMgY2FwYWNpZGFkZXMgZGUgZGV0ZWNjacOzbiBkZWwgd2lkZ2V0LlxuICAgICAqL1xuICAgIHB1YmxpYyBpc1dpZGdldExpY2Vuc2VkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnk+KEZQaGlTZWxwaElkV2lkZ2V0U2VydmljZS5saWNlbnNlQ2hlY2tVcmwsIHsgb2JzZXJ2ZTogXCJyZXNwb25zZVwiIH0pXG4gICAgICAgICAgICAucGlwZShtYXA8SHR0cFJlc3BvbnNlPGFueT4sIGJvb2xlYW4+KChyZXNwb25zZTogSHR0cFJlc3BvbnNlPGFueT4pID0+IHJlc3BvbnNlLnN0YXR1cyAhPT0gNDAzKSlcbiAgICB9XG5cbiAgICAvLyAjZW5kcmVnaW9uXG59XG4iXX0=