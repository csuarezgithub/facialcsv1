/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { timer } from "rxjs/index";
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
export { RxjsHelper };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnhqcy1oZWxwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mYWNlcGhpLXNlbHBoaWQvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvaGVscGVycy9yeGpzLWhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFlBQVksQ0FBQztBQUVuQztJQUFBO0lBd0JBLENBQUM7SUF0Qkc7Ozs7OztPQU1HOzs7Ozs7Ozs7SUFDVyxlQUFJOzs7Ozs7OztJQUFsQixVQUFtQixRQUFnQixFQUNoQixRQUFhLEVBQ2IsV0FBZ0IsRUFDaEIsU0FBcUI7UUFBckIsMEJBQUEsRUFBQSxhQUFxQjs7WUFDOUIsWUFBWSxHQUFHLEtBQUssQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDO2FBQzFDLFNBQVM7OztRQUNOO1lBQ0ksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDWCxPQUFPO1lBRVgsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzNCLFdBQVcsRUFBRSxDQUFDO1FBQ2xCLENBQUMsRUFDSjtJQUNULENBQUM7SUFDTCxpQkFBQztBQUFELENBQUMsQUF4QkQsSUF3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0aW1lciB9IGZyb20gXCJyeGpzL2luZGV4XCI7XG5cbmV4cG9ydCBjbGFzcyBSeGpzSGVscGVyIHtcblxuICAgIC8qKlxuICAgICAqIEVuY2Fwc3VsYSB1bmEgcnV0aW5hIGRlIGNoZXF1ZW8gZGUgdW5hIGNvbmRpY2nDs24gaGFzdGEgcXVlIMOpc3RhIHNlIGN1bXBsYS5cbiAgICAgKiBAcGFyYW0gcG9sbFRpbWUgSW50ZXJ2YWxvIGRlIGNoZXF1ZW8gKGVuIG1zKS5cbiAgICAgKiBAcGFyYW0gZXZhbEZ1bmMgRnVuY2nDs24gcGFyYSBldmFsdWFyIGxhIGNvbmRpY2nDs24gZGVzZWFkYS5cbiAgICAgKiBAcGFyYW0gc3VjY2Vzc0Z1bmMgRnVuY2nDs24gYSBpbnZvY2FyIGN1YW5kbyBsYSBjb25kaWNpw7NuIHNlIGN1bXBsYS5cbiAgICAgKiBAcGFyYW0gZGVsYXlUaW1lIFRpZW1wbyBkZSByZXRhcmRvIHBhcmEgaW5pY2lhciBlbCBwcm9jZXNvIGRlIGNoZXF1ZW8uIFBvciBkZWZlY3RvIDBtcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHBvbGwocG9sbFRpbWU6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgZXZhbEZ1bmM6IGFueSxcbiAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc0Z1bmM6IGFueSxcbiAgICAgICAgICAgICAgICAgICAgICAgZGVsYXlUaW1lOiBudW1iZXIgPSAwKSB7XG4gICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IHRpbWVyKGRlbGF5VGltZSwgcG9sbFRpbWUpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFldmFsRnVuYygpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzRnVuYygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgfVxufVxuIl19