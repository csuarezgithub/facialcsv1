/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from "@angular/core";
import { RendererFactory2 } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Observable } from "rxjs";
import { RxjsHelper } from "./helpers/rxjs-helper";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class FPhiSelphiWidgetService {
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
/** @nocollapse */ FPhiSelphiWidgetService.ngInjectableDef = i0.defineInjectable({ factory: function FPhiSelphiWidgetService_Factory() { return new FPhiSelphiWidgetService(i0.inject(i1.DOCUMENT), i0.inject(i0.RendererFactory2)); }, token: FPhiSelphiWidgetService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    FPhiSelphiWidgetService.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    FPhiSelphiWidgetService.prototype._assetsBasePath;
    /**
     * @type {?}
     * @private
     */
    FPhiSelphiWidgetService.prototype._fPhiWidgetConfiguration;
    /**
     * @type {?}
     * @private
     */
    FPhiSelphiWidgetService.prototype._fPhiWidget;
    /**
     * @type {?}
     * @private
     */
    FPhiSelphiWidgetService.prototype.document;
    /**
     * @type {?}
     * @private
     */
    FPhiSelphiWidgetService.prototype.rendererFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnBoaS1zZWxwaGktd2lkZ2V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mYWNlcGhpLXNlbHBoaS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9mcGhpLXNlbHBoaS13aWRnZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFhLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7O0FBT25ELE1BQU0sT0FBTyx1QkFBdUI7Ozs7Ozs7SUEyQmhDLFlBQzhCLFFBQWEsRUFDL0IsZUFBaUM7UUFEZixhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQy9CLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtRQUV6QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNyRSxDQUFDOzs7Ozs7O0lBbEJELElBQVksbUJBQW1CLEtBQUssT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzs7Ozs7O0lBRXpILElBQVksbUJBQW1CLENBQUMsS0FBVTtRQUN0QyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDZCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QyxDQUFDOzs7OztJQUVE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UUFDaEMsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFLTSxnQkFBZ0I7UUFDbkIsSUFBSSxJQUFJLENBQUMsV0FBVztZQUNoQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRTdCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7Ozs7O0lBS00sZUFBZTtRQUNsQixJQUFJLElBQUksQ0FBQyxXQUFXO1lBQ2hCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFNUIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7O1lBOUhKLFVBQVUsU0FBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQjs7Ozs0Q0E2QlEsTUFBTSxTQUFDLFFBQVE7WUF2Q0osZ0JBQWdCOzs7Ozs7OztJQWVoQyw0Q0FBNkI7Ozs7O0lBRTdCLGtEQUFnQzs7Ozs7SUFDaEMsMkRBQTBEOzs7OztJQUMxRCw4Q0FBeUI7Ozs7O0lBb0JyQiwyQ0FBdUM7Ozs7O0lBQ3ZDLGtEQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSZW5kZXJlcjIsIFJlbmRlcmVyRmFjdG9yeTIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgUnhqc0hlbHBlciB9IGZyb20gXCIuL2hlbHBlcnMvcnhqcy1oZWxwZXJcIjtcblxuaW1wb3J0IHsgRlBoaVNlbHBoaUNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vbW9kZWxzL2ZhY2VwaGktc2VscGhpLWNvbmZpZ3VyYXRpb25cIjtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuZXhwb3J0IGNsYXNzIEZQaGlTZWxwaGlXaWRnZXRTZXJ2aWNlIHtcblxuICAgIC8vICNyZWdpb24gXCJBdHJpYnV0b3NcIlxuXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMjtcblxuICAgIHByaXZhdGUgX2Fzc2V0c0Jhc2VQYXRoOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfZlBoaVdpZGdldENvbmZpZ3VyYXRpb246IEZQaGlTZWxwaGlDb25maWd1cmF0aW9uO1xuICAgIHByaXZhdGUgX2ZQaGlXaWRnZXQ6IGFueTtcblxuICAgIC8vICNlbmRyZWdpb25cblxuICAgIC8vICNyZWdpb24gXCJQcm9waWVkYWRlc1wiXG5cbiAgICBwcml2YXRlIGdldCBmUGhpU2VscGhpTmFtZXNwYWNlKCkgeyByZXR1cm4gd2luZG93W1wiRlBoaVwiXSAmJiB3aW5kb3dbXCJGUGhpXCJdLlNlbHBoaSA/IHdpbmRvd1tcIkZQaGlcIl0uU2VscGhpIDogdW5kZWZpbmVkOyB9XG5cbiAgICBwcml2YXRlIHNldCBmUGhpU2VscGhpTmFtZXNwYWNlKHZhbHVlOiBhbnkpIHtcbiAgICAgICAgaWYgKHdpbmRvd1tcIkZQaGlcIl0pXG4gICAgICAgICAgICB3aW5kb3dbXCJGUGhpXCJdLlNlbHBoaSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0IGZQaGlXaWRnZXRTY3JpcHRQYXRoKCk6IHN0cmluZyB7IHJldHVybiBgJHt0aGlzLl9hc3NldHNCYXNlUGF0aH0vRlBoaS5XaWRnZXQud2FzbS5qc2A7IH1cblxuICAgIC8vICNlbmRyZWdpb25cblxuICAgIC8vICNyZWdpb24gXCJDb25zdHJ1Y3RvcmVzXCJcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG4gICAgICAgIHByaXZhdGUgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyXG4gICAgKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyID0gdGhpcy5yZW5kZXJlckZhY3RvcnkuY3JlYXRlUmVuZGVyZXIobnVsbCwgbnVsbCk7XG4gICAgfVxuXG4gICAgLy8gI2VuZHJlZ2lvblxuXG4gICAgLy8gI3JlZ2lvbiBcIk3DqXRvZG9zIHDDumJsaWNvc1wiXG5cbiAgICAvKipcbiAgICAgKiBSZWFsaXphIGxhIGNhcmdhIGRpbsOhbWljYSBkZWwgcmVjdXJzbyBqYXZhc2NyaXB0IGRlbCB3aWRnZXQgd2ViLlxuICAgICAqIEBwYXJhbSBiYXNlUGF0aCBSdXRhIGJhc2UgZGUgbGEgY2FycGV0YSBkZSBsb3MgZmljaGVyb3MgZGVsIHdpZGdldC5cbiAgICAgKi9cbiAgICBwdWJsaWMgbG9hZENvbnRyb2woYmFzZVBhdGg6IHN0cmluZyk6IE9ic2VydmFibGU8RlBoaVNlbHBoaVdpZGdldFNlcnZpY2U+IHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhgPj4+PiBGUGhpU2VscGhpV2lkZ2V0U2VydmljZSA6OiBsb2FkQ29udHJvbCAtLT4gYmFzZVBhdGg6ICR7YmFzZVBhdGh9YCk7XG4gICAgICAgIHRoaXMuX2Fzc2V0c0Jhc2VQYXRoID0gYmFzZVBhdGg7XG5cbiAgICAgICAgY29uc3QgZlBoaVdpZGdldFNjcmlwdCA9IHRoaXMuX3JlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShmUGhpV2lkZ2V0U2NyaXB0LCBcInNyY1wiLCB0aGlzLmZQaGlXaWRnZXRTY3JpcHRQYXRoKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKGZQaGlXaWRnZXRTY3JpcHQsIFwidHlwZVwiLCBcInRleHQvamF2YXNjcmlwdFwiKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5kb2N1bWVudC5ib2R5LCBmUGhpV2lkZ2V0U2NyaXB0KTtcblxuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8RlBoaVNlbHBoaVdpZGdldFNlcnZpY2U+KHN1YnNjcmliZXIgPT4ge1xuICAgICAgICAgICAgUnhqc0hlbHBlci5wb2xsKDUsXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5mUGhpU2VscGhpTmFtZXNwYWNlICE9PSBudWxsICYmIHRoaXMuZlBoaVNlbHBoaU5hbWVzcGFjZSAhPT0gdW5kZWZpbmVkICYmIHRoaXMuZlBoaVNlbHBoaU5hbWVzcGFjZS5XaWRnZXQgIT09IG51bGwgJiYgdGhpcy5mUGhpU2VscGhpTmFtZXNwYWNlLldpZGdldCAhPT0gdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICgpID0+IHN1YnNjcmliZXIubmV4dCh0aGlzKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRWxpbWluYSBsb3MgcmVjdXJzb3MgamF2YXNjcmlwdCBkZWwgd2lkZ2V0IGluY2x1aWRvcyBlbiBlbCBET00gZGUgbGEgcMOhZ2luYS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVtb3ZlQ29udHJvbCgpOiBGUGhpU2VscGhpV2lkZ2V0U2VydmljZSB7XG4gICAgICAgIGlmICghdGhpcy5fYXNzZXRzQmFzZVBhdGgpXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgICAvL2NvbnNvbGUud2FybihgPj4+PiBGUGhpU2VscGhpV2lkZ2V0U2VydmljZSA6OiByZW1vdmVDb250cm9sKFwiJHt0aGlzLl9hc3NldHNCYXNlUGF0aH1cIilgKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2ZQaGlXaWRnZXQ7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9mUGhpV2lkZ2V0Q29uZmlndXJhdGlvbjtcbiAgICAgICAgZGVsZXRlIHRoaXMuZlBoaVNlbHBoaU5hbWVzcGFjZTtcblxuICAgICAgICB0aGlzLl9mUGhpV2lkZ2V0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9mUGhpV2lkZ2V0Q29uZmlndXJhdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5mUGhpU2VscGhpTmFtZXNwYWNlID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIHRoaXMuZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKGBzY3JpcHRbc3JjKj1cIiR7dGhpcy5fYXNzZXRzQmFzZVBhdGh9XCJdYClcbiAgICAgICAgICAgIC5mb3JFYWNoKGVsZW1lbnQgPT4geyBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudCk7IH0pO1xuXG4gICAgICAgIHRoaXMuZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwic3R5bGUjRlBoaV9XaWRnZXRfc3R5bGVcIilcbiAgICAgICAgICAgIC5mb3JFYWNoKGVsZW1lbnQgPT4geyBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudCk7IH0pO1xuXG4gICAgICAgIC8vY29uc29sZS53YXJuKGA+Pj4+IEZQaGlTZWxwaGlXaWRnZXRTZXJ2aWNlIDo6IENvbnRyb2wgcmVtb3ZlZGApO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhIHVuYSBpbnN0YW5jaWEgZGVsIHdpZGdldCB3ZWIgbmF0aXZvIGNvbiBsb3MgZGF0b3MgZGUgY29uZmlndXJhY2nDs24gaW5kaWNhZG9zLlxuICAgICAqIEBwYXJhbSBjb25maWcgRGF0b3MgZGUgY29uZmlndXJhY2nDs24gZGVsIHdpZGdldC5cbiAgICAgKi9cbiAgICBwdWJsaWMgY3JlYXRlVXNlckNvbnRyb2woY29uZmlnOiBGUGhpU2VscGhpQ29uZmlndXJhdGlvbik6IEZQaGlTZWxwaGlXaWRnZXRTZXJ2aWNlIHtcbiAgICAgICAgLy9jb25zb2xlLndhcm4oXCI+Pj4+IEZQaGlTZWxwaGlXaWRnZXRTZXJ2aWNlIDo6IGNyZWF0ZVVzZXJDb250cm9sXCIsIGNvbmZpZywgY29uZmlnLmdldE5hdGl2ZUNvbmZpZ3VyYXRpb24oKSk7XG5cbiAgICAgICAgdGhpcy5fZlBoaVdpZGdldENvbmZpZ3VyYXRpb24gPSBjb25maWc7XG4gICAgICAgIHRoaXMuX2ZQaGlXaWRnZXQgPSBuZXcgdGhpcy5mUGhpU2VscGhpTmFtZXNwYWNlLldpZGdldChjb25maWcuZ2V0TmF0aXZlQ29uZmlndXJhdGlvbigpKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLl9mUGhpV2lkZ2V0KTtcblxuICAgICAgICBpZiAodGhpcy5fZlBoaVdpZGdldENvbmZpZ3VyYXRpb24uZGVidWdNb2RlICE9PSBudWxsICYmIHRoaXMuX2ZQaGlXaWRnZXRDb25maWd1cmF0aW9uLmRlYnVnTW9kZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgdGhpcy5fZlBoaVdpZGdldC5kZWJ1ZyA9IHRoaXMuX2ZQaGlXaWRnZXRDb25maWd1cmF0aW9uLmRlYnVnTW9kZTtcblxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuX2ZQaGlXaWRnZXQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbmljaWEgZWwgd2lkZ2V0LlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGFydFVzZXJDb250cm9sKCk6IEZQaGlTZWxwaGlXaWRnZXRTZXJ2aWNlIHtcbiAgICAgICAgaWYgKHRoaXMuX2ZQaGlXaWRnZXQpXG4gICAgICAgICAgICB0aGlzLl9mUGhpV2lkZ2V0LlN0YXJ0KCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGV0aWVuZSBsYSBlamVjdWNpw7NuIGRlbCB3aWRnZXQuXG4gICAgICovXG4gICAgcHVibGljIHN0b3BVc2VyQ29udHJvbCgpOiBGUGhpU2VscGhpV2lkZ2V0U2VydmljZSB7XG4gICAgICAgIGlmICh0aGlzLl9mUGhpV2lkZ2V0KVxuICAgICAgICAgICAgdGhpcy5fZlBoaVdpZGdldC5TdG9wKCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gI2VuZHJlZ2lvblxufVxuIl19