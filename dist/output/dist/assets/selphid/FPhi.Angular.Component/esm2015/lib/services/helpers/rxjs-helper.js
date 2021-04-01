/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { timer } from "rxjs/index";
export class RxjsHelper {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnhqcy1oZWxwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mYWNlcGhpLXNlbHBoaWQvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvaGVscGVycy9yeGpzLWhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFlBQVksQ0FBQztBQUVuQyxNQUFNLE9BQU8sVUFBVTs7Ozs7Ozs7O0lBU1osTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFnQixFQUNoQixRQUFhLEVBQ2IsV0FBZ0IsRUFDaEIsWUFBb0IsQ0FBQzs7Y0FDOUIsWUFBWSxHQUFHLEtBQUssQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDO2FBQzFDLFNBQVM7OztRQUNOLEdBQUcsRUFBRTtZQUNELElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ1gsT0FBTztZQUVYLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUMzQixXQUFXLEVBQUUsQ0FBQztRQUNsQixDQUFDLEVBQ0o7SUFDVCxDQUFDO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0aW1lciB9IGZyb20gXCJyeGpzL2luZGV4XCI7XG5cbmV4cG9ydCBjbGFzcyBSeGpzSGVscGVyIHtcblxuICAgIC8qKlxuICAgICAqIEVuY2Fwc3VsYSB1bmEgcnV0aW5hIGRlIGNoZXF1ZW8gZGUgdW5hIGNvbmRpY2nDs24gaGFzdGEgcXVlIMOpc3RhIHNlIGN1bXBsYS5cbiAgICAgKiBAcGFyYW0gcG9sbFRpbWUgSW50ZXJ2YWxvIGRlIGNoZXF1ZW8gKGVuIG1zKS5cbiAgICAgKiBAcGFyYW0gZXZhbEZ1bmMgRnVuY2nDs24gcGFyYSBldmFsdWFyIGxhIGNvbmRpY2nDs24gZGVzZWFkYS5cbiAgICAgKiBAcGFyYW0gc3VjY2Vzc0Z1bmMgRnVuY2nDs24gYSBpbnZvY2FyIGN1YW5kbyBsYSBjb25kaWNpw7NuIHNlIGN1bXBsYS5cbiAgICAgKiBAcGFyYW0gZGVsYXlUaW1lIFRpZW1wbyBkZSByZXRhcmRvIHBhcmEgaW5pY2lhciBlbCBwcm9jZXNvIGRlIGNoZXF1ZW8uIFBvciBkZWZlY3RvIDBtcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHBvbGwocG9sbFRpbWU6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgZXZhbEZ1bmM6IGFueSxcbiAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc0Z1bmM6IGFueSxcbiAgICAgICAgICAgICAgICAgICAgICAgZGVsYXlUaW1lOiBudW1iZXIgPSAwKSB7XG4gICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IHRpbWVyKGRlbGF5VGltZSwgcG9sbFRpbWUpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFldmFsRnVuYygpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzRnVuYygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgfVxufVxuIl19