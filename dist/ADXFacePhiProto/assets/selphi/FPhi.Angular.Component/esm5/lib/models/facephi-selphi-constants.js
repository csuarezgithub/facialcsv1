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
export { FPhiSelphiConstants };
if (false) {
    /**
     * Modos de rotación de la cámara para la realización de la captura.
     * @type {?}
     */
    FPhiSelphiConstants.CameraRotation;
    /**
     * Modos de extracción o flujos de ejecución disponibles en el widget.
     * @type {?}
     */
    FPhiSelphiConstants.ExtractionMode;
    /**
     * Modos de verificación de prueba de vida disponibles.
     * @type {?}
     */
    FPhiSelphiConstants.LivenessMode;
    /**
     * Tipo de excepción producida durante la ejecución del widget.
     * @type {?}
     */
    FPhiSelphiConstants.ExceptionType;
    /** @type {?} */
    FPhiSelphiConstants.SampleDiagnostic;
    /** @type {?} */
    FPhiSelphiConstants.FinalDiagnostic;
    /** @type {?} */
    FPhiSelphiConstants.LivenessDiagnostic;
    /**
     * Formato de salida de la información de template generada por el widget.
     * @type {?}
     */
    FPhiSelphiConstants.TemplateFormat;
    /**
     * Formato de salida de la grabación del video de sesión del usuario. Tipo de proceso utilizado para la generación del video.
     * @type {?}
     */
    FPhiSelphiConstants.RecorderType;
    /**
     * Tipo de cámara a utilizar para la captura del selfie.
     * @type {?}
     */
    FPhiSelphiConstants.CameraType;
    /**
     * Tipo de acción que se produce en la interacción del usuario con el widget.
     * @type {?}
     */
    FPhiSelphiConstants.TrackStatus;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXBoaS1zZWxwaGktY29uc3RhbnRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmFjZXBoaS1zZWxwaGkvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL2ZhY2VwaGktc2VscGhpLWNvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7SUFBQTtJQWdJQSxDQUFDOzs7O0lBM0gwQixrQ0FBYyxHQUFHO1FBQ3BDLElBQUksRUFBRSxDQUFDO1FBQ1AsS0FBSyxFQUFFLENBQUM7UUFDUixNQUFNLEVBQUUsQ0FBQztRQUNULE1BQU0sRUFBRSxDQUFDO0tBQ1osQ0FBQTs7OztJQUtzQixrQ0FBYyxHQUFHOzs7O1FBSXBDLFFBQVEsRUFBRSxDQUFDOzs7O1FBS1gsWUFBWSxFQUFFLENBQUM7S0FDbEIsQ0FBQTs7OztJQUtzQixnQ0FBWSxHQUFHOzs7O1FBSWxDLElBQUksRUFBRSxDQUFDOzs7O1FBS1AsS0FBSyxFQUFFLENBQUM7Ozs7UUFLUixJQUFJLEVBQUUsQ0FBQzs7OztRQUtQLE9BQU8sRUFBRSxDQUFDO0tBQ2IsQ0FBQTs7OztJQUtzQixpQ0FBYSxHQUFHO1FBQ25DLFdBQVcsRUFBRSxDQUFDO1FBQ2QsY0FBYyxFQUFFLENBQUM7UUFDakIsMEJBQTBCLEVBQUUsQ0FBQztRQUM3QixvQkFBb0IsRUFBRSxDQUFDO1FBQ3ZCLHNCQUFzQixFQUFFLENBQUM7S0FDNUIsQ0FBQTtJQUVzQixvQ0FBZ0IsR0FBRztRQUN0QyxFQUFFLEVBQUUsQ0FBQztRQUNMLFlBQVksRUFBRSxDQUFDO1FBQ2YsZ0JBQWdCLEVBQUUsQ0FBQztRQUNuQixlQUFlLEVBQUUsQ0FBQztRQUNsQixZQUFZLEVBQUUsQ0FBQztRQUNmLFVBQVUsRUFBRSxDQUFDO1FBQ2IsWUFBWSxFQUFFLENBQUM7UUFDZixvQkFBb0IsRUFBRSxDQUFDO1FBQ3ZCLGFBQWEsRUFBRSxDQUFDO1FBQ2hCLGtCQUFrQixFQUFFLENBQUM7UUFDckIsUUFBUSxFQUFFLEVBQUU7S0FDZixDQUFBO0lBRXNCLG1DQUFlLEdBQUc7UUFDckMsd0JBQXdCLEVBQUUsQ0FBQztRQUMzQiwwQkFBMEIsRUFBRSxDQUFDO1FBQzdCLGVBQWUsRUFBRSxDQUFDO0tBQ3JCLENBQUE7SUFFc0Isc0NBQWtCLEdBQUc7UUFDeEMsUUFBUSxFQUFFLENBQUM7UUFDWCxhQUFhLEVBQUUsQ0FBQztRQUNoQixnQkFBZ0IsRUFBRSxDQUFDO1FBQ25CLFNBQVMsRUFBRSxDQUFDO1FBQ1osdUJBQXVCLEVBQUUsQ0FBQztRQUMxQixnQkFBZ0IsRUFBRSxDQUFDO1FBQ25CLGNBQWMsRUFBRSxDQUFDO1FBQ2pCLG1CQUFtQixFQUFFLENBQUM7UUFDdEIsdUJBQXVCLEVBQUUsQ0FBQztRQUMxQixlQUFlLEVBQUUsQ0FBQztLQUNyQixDQUFBOzs7O0lBS3NCLGtDQUFjLEdBQUc7UUFDcEMsU0FBUyxFQUFFLENBQUM7UUFDWixNQUFNLEVBQUUsQ0FBQztLQUNaLENBQUE7Ozs7SUFLc0IsZ0NBQVksR0FBRztRQUNsQyxHQUFHLEVBQUUsQ0FBQztRQUNOLE1BQU0sRUFBRSxDQUFDO0tBQ1osQ0FBQTs7OztJQUtzQiw4QkFBVSxHQUFHO1FBQ2hDLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxFQUFFLENBQUM7S0FDVixDQUFBOzs7O0lBS3NCLCtCQUFXLEdBQUc7UUFDakMsV0FBVyxFQUFFLENBQUM7UUFDZCxHQUFHLEVBQUUsQ0FBQztLQUNULENBQUE7SUFFTCwwQkFBQztDQUFBLEFBaElELElBZ0lDO1NBaElZLG1CQUFtQjs7Ozs7O0lBSzVCLG1DQUtDOzs7OztJQUtELG1DQVVDOzs7OztJQUtELGlDQW9CQzs7Ozs7SUFLRCxrQ0FNQzs7SUFFRCxxQ0FZQzs7SUFFRCxvQ0FJQzs7SUFFRCx1Q0FXQzs7Ozs7SUFLRCxtQ0FHQzs7Ozs7SUFLRCxpQ0FHQzs7Ozs7SUFLRCwrQkFHQzs7Ozs7SUFLRCxnQ0FHQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBGUGhpU2VscGhpQ29uc3RhbnRzIHtcblxuICAgIC8qKlxuICAgICAqIE1vZG9zIGRlIHJvdGFjacOzbiBkZSBsYSBjw6FtYXJhIHBhcmEgbGEgcmVhbGl6YWNpw7NuIGRlIGxhIGNhcHR1cmEuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBDYW1lcmFSb3RhdGlvbiA9IHtcbiAgICAgICAgTm9uZTogMCxcbiAgICAgICAgRGVnOTA6IDEsXG4gICAgICAgIERlZzE4MDogMixcbiAgICAgICAgRGVnMjcwOiAzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTW9kb3MgZGUgZXh0cmFjY2nDs24gbyBmbHVqb3MgZGUgZWplY3VjacOzbiBkaXNwb25pYmxlcyBlbiBlbCB3aWRnZXQuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFeHRyYWN0aW9uTW9kZSA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlZ2lzdHJvIGRlIHVzdWFyaW9zLlxuICAgICAgICAgKi9cbiAgICAgICAgUmVnaXN0ZXI6IDAsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEF1dGVudGljYWNpw7NuIGRlIHVzdWFyaW9zLlxuICAgICAgICAgKi9cbiAgICAgICAgQXV0aGVudGljYXRlOiAxXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTW9kb3MgZGUgdmVyaWZpY2FjacOzbiBkZSBwcnVlYmEgZGUgdmlkYSBkaXNwb25pYmxlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IExpdmVuZXNzTW9kZSA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZlcmlmaWNhY2nDs24gZGUgcHJ1ZWJhIGRlIHZpZGEgZGVzYWN0aXZhZGEuXG4gICAgICAgICAqL1xuICAgICAgICBOb25lOiAwLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcnVlYmEgZGUgdmlkYSBtZWRpYW50ZSBwYXJwYWRlby5cbiAgICAgICAgICovXG4gICAgICAgIEJsaW5rOiAxLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcnVlYmEgZGUgdmlkYSBtZWRpYW50ZSBtb3ZpbWllbnRvLlxuICAgICAgICAgKi9cbiAgICAgICAgTW92ZTogMixcblxuICAgICAgICAvKipcbiAgICAgICAgICogUHJ1ZWJhIGRlIHZpZGEgcGFzaXZvLlxuICAgICAgICAgKi9cbiAgICAgICAgUGFzc2l2ZTogM1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRpcG8gZGUgZXhjZXBjacOzbiBwcm9kdWNpZGEgZHVyYW50ZSBsYSBlamVjdWNpw7NuIGRlbCB3aWRnZXQuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFeGNlcHRpb25UeXBlID0ge1xuICAgICAgICBDYW1lcmFFcnJvcjogMCxcbiAgICAgICAgRXh0cmFjdG9yRXJyb3I6IDEsXG4gICAgICAgIENvbnRyb2xOb3RJbml0aWFsaXplZEVycm9yOiAyLFxuICAgICAgICBJbWFnZUNyb3BSZXNpemVFcnJvcjogMyxcbiAgICAgICAgVW5leHBlY3RlZENhcHR1cmVFcnJvcjogNFxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgU2FtcGxlRGlhZ25vc3RpYyA9IHtcbiAgICAgICAgT2s6IDAsXG4gICAgICAgIEZhY2VOb3RGb3VuZDogMSxcbiAgICAgICAgUmlnaHRFeWVOb3RGb3VuZDogMixcbiAgICAgICAgTGVmdEV5ZU5vdEZvdW5kOiAzLFxuICAgICAgICBFeWVzTm90Rm91bmQ6IDQsXG4gICAgICAgIEZhY2VUb29GYXI6IDUsXG4gICAgICAgIEZhY2VUb29DbG9zZTogNixcbiAgICAgICAgVG9vQ2xvc2VUb1dpbmRvd1NpZGU6IDcsXG4gICAgICAgIEFuZ2xlRXhjZWVkZWQ6IDgsXG4gICAgICAgIFF1YWxpdHlDaGVja0ZhaWxlZDogOSxcbiAgICAgICAgTm90UmF0ZWQ6IDEwXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBGaW5hbERpYWdub3N0aWMgPSB7XG4gICAgICAgIEluc3VmZmljaWVudFZhbGlkU2FtcGxlczogMCxcbiAgICAgICAgVGVtcGxhdGVDcmVhdGlvbkluUHJvZ3Jlc3M6IDEsXG4gICAgICAgIFRlbXBsYXRlQ3JlYXRlZDogMlxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTGl2ZW5lc3NEaWFnbm9zdGljID0ge1xuICAgICAgICBOb3RSYXRlZDogMCxcbiAgICAgICAgUGhvdG9EZXRlY3RlZDogMSxcbiAgICAgICAgTGl2ZW5lc3NEZXRlY3RlZDogMixcbiAgICAgICAgVW5zdWNjZXNzOiAzLFxuICAgICAgICBVbnN1Y2Nlc3NMb3dQZXJmb3JtYW5jZTogNCxcbiAgICAgICAgVW5zdWNjZXNzR2xhc3NlczogNSxcbiAgICAgICAgVW5zdWNjZXNzTGlnaHQ6IDYsXG4gICAgICAgIFVuc3VjY2Vzc05vTW92ZW1lbnQ6IDcsXG4gICAgICAgIFVuc3VjY2Vzc1dyb25nRGlyZWN0aW9uOiA4LFxuICAgICAgICBVbnN1Y2Nlc3NUb29GYXI6IDlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGb3JtYXRvIGRlIHNhbGlkYSBkZSBsYSBpbmZvcm1hY2nDs24gZGUgdGVtcGxhdGUgZ2VuZXJhZGEgcG9yIGVsIHdpZGdldC5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFRlbXBsYXRlRm9ybWF0ID0ge1xuICAgICAgICBCeXRlQXJyYXk6IDAsXG4gICAgICAgIEJhc2U2NDogMVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZvcm1hdG8gZGUgc2FsaWRhIGRlIGxhIGdyYWJhY2nDs24gZGVsIHZpZGVvIGRlIHNlc2nDs24gZGVsIHVzdWFyaW8uIFRpcG8gZGUgcHJvY2VzbyB1dGlsaXphZG8gcGFyYSBsYSBnZW5lcmFjacOzbiBkZWwgdmlkZW8uXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBSZWNvcmRlclR5cGUgPSB7XG4gICAgICAgIEdpZjogMCxcbiAgICAgICAgUmVtb3RlOiAxXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGlwbyBkZSBjw6FtYXJhIGEgdXRpbGl6YXIgcGFyYSBsYSBjYXB0dXJhIGRlbCBzZWxmaWUuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBDYW1lcmFUeXBlID0ge1xuICAgICAgICBGcm9udDogMCxcbiAgICAgICAgQmFjazogMVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRpcG8gZGUgYWNjacOzbiBxdWUgc2UgcHJvZHVjZSBlbiBsYSBpbnRlcmFjY2nDs24gZGVsIHVzdWFyaW8gY29uIGVsIHdpZGdldC5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFRyYWNrU3RhdHVzID0ge1xuICAgICAgICBDaGFuZ2VTdGF0ZTogMCxcbiAgICAgICAgVGFwOiAxXG4gICAgfVxuXG59XG4iXX0=