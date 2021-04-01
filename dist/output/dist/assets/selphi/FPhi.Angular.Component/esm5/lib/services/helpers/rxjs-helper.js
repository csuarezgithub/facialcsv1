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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnhqcy1oZWxwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mYWNlcGhpLXNlbHBoaS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9oZWxwZXJzL3J4anMtaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRW5DO0lBQUE7SUF3QkEsQ0FBQztJQXRCRzs7Ozs7O09BTUc7Ozs7Ozs7OztJQUNXLGVBQUk7Ozs7Ozs7O0lBQWxCLFVBQW1CLFFBQWdCLEVBQ2hCLFFBQWEsRUFDYixXQUFnQixFQUNoQixTQUFxQjtRQUFyQiwwQkFBQSxFQUFBLGFBQXFCOztZQUM5QixZQUFZLEdBQUcsS0FBSyxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUM7YUFDMUMsU0FBUzs7O1FBQ047WUFDSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNYLE9BQU87WUFFWCxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDM0IsV0FBVyxFQUFFLENBQUM7UUFDbEIsQ0FBQyxFQUNKO0lBQ1QsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FBQyxBQXhCRCxJQXdCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRpbWVyIH0gZnJvbSBcInJ4anMvaW5kZXhcIjtcblxuZXhwb3J0IGNsYXNzIFJ4anNIZWxwZXIge1xuXG4gICAgLyoqXG4gICAgICogRW5jYXBzdWxhIHVuYSBydXRpbmEgZGUgY2hlcXVlbyBkZSB1bmEgY29uZGljacOzbiBoYXN0YSBxdWUgw6lzdGEgc2UgY3VtcGxhLlxuICAgICAqIEBwYXJhbSBwb2xsVGltZSBJbnRlcnZhbG8gZGUgY2hlcXVlbyAoZW4gbXMpLlxuICAgICAqIEBwYXJhbSBldmFsRnVuYyBGdW5jacOzbiBwYXJhIGV2YWx1YXIgbGEgY29uZGljacOzbiBkZXNlYWRhLlxuICAgICAqIEBwYXJhbSBzdWNjZXNzRnVuYyBGdW5jacOzbiBhIGludm9jYXIgY3VhbmRvIGxhIGNvbmRpY2nDs24gc2UgY3VtcGxhLlxuICAgICAqIEBwYXJhbSBkZWxheVRpbWUgVGllbXBvIGRlIHJldGFyZG8gcGFyYSBpbmljaWFyIGVsIHByb2Nlc28gZGUgY2hlcXVlby4gUG9yIGRlZmVjdG8gMG1zLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcG9sbChwb2xsVGltZTogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICBldmFsRnVuYzogYW55LFxuICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzRnVuYzogYW55LFxuICAgICAgICAgICAgICAgICAgICAgICBkZWxheVRpbWU6IG51bWJlciA9IDApIHtcbiAgICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gdGltZXIoZGVsYXlUaW1lLCBwb2xsVGltZSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWV2YWxGdW5jKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NGdW5jKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=