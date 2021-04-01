/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class FPhiSelphiConstants {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXBoaS1zZWxwaGktY29uc3RhbnRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmFjZXBoaS1zZWxwaGkvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL2ZhY2VwaGktc2VscGhpLWNvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7QUFLTCxrQ0FBYyxHQUFHO0lBQ3BDLElBQUksRUFBRSxDQUFDO0lBQ1AsS0FBSyxFQUFFLENBQUM7SUFDUixNQUFNLEVBQUUsQ0FBQztJQUNULE1BQU0sRUFBRSxDQUFDO0NBQ1osQ0FBQTs7OztBQUtzQixrQ0FBYyxHQUFHOzs7O0lBSXBDLFFBQVEsRUFBRSxDQUFDOzs7O0lBS1gsWUFBWSxFQUFFLENBQUM7Q0FDbEIsQ0FBQTs7OztBQUtzQixnQ0FBWSxHQUFHOzs7O0lBSWxDLElBQUksRUFBRSxDQUFDOzs7O0lBS1AsS0FBSyxFQUFFLENBQUM7Ozs7SUFLUixJQUFJLEVBQUUsQ0FBQzs7OztJQUtQLE9BQU8sRUFBRSxDQUFDO0NBQ2IsQ0FBQTs7OztBQUtzQixpQ0FBYSxHQUFHO0lBQ25DLFdBQVcsRUFBRSxDQUFDO0lBQ2QsY0FBYyxFQUFFLENBQUM7SUFDakIsMEJBQTBCLEVBQUUsQ0FBQztJQUM3QixvQkFBb0IsRUFBRSxDQUFDO0lBQ3ZCLHNCQUFzQixFQUFFLENBQUM7Q0FDNUIsQ0FBQTtBQUVzQixvQ0FBZ0IsR0FBRztJQUN0QyxFQUFFLEVBQUUsQ0FBQztJQUNMLFlBQVksRUFBRSxDQUFDO0lBQ2YsZ0JBQWdCLEVBQUUsQ0FBQztJQUNuQixlQUFlLEVBQUUsQ0FBQztJQUNsQixZQUFZLEVBQUUsQ0FBQztJQUNmLFVBQVUsRUFBRSxDQUFDO0lBQ2IsWUFBWSxFQUFFLENBQUM7SUFDZixvQkFBb0IsRUFBRSxDQUFDO0lBQ3ZCLGFBQWEsRUFBRSxDQUFDO0lBQ2hCLGtCQUFrQixFQUFFLENBQUM7SUFDckIsUUFBUSxFQUFFLEVBQUU7Q0FDZixDQUFBO0FBRXNCLG1DQUFlLEdBQUc7SUFDckMsd0JBQXdCLEVBQUUsQ0FBQztJQUMzQiwwQkFBMEIsRUFBRSxDQUFDO0lBQzdCLGVBQWUsRUFBRSxDQUFDO0NBQ3JCLENBQUE7QUFFc0Isc0NBQWtCLEdBQUc7SUFDeEMsUUFBUSxFQUFFLENBQUM7SUFDWCxhQUFhLEVBQUUsQ0FBQztJQUNoQixnQkFBZ0IsRUFBRSxDQUFDO0lBQ25CLFNBQVMsRUFBRSxDQUFDO0lBQ1osdUJBQXVCLEVBQUUsQ0FBQztJQUMxQixnQkFBZ0IsRUFBRSxDQUFDO0lBQ25CLGNBQWMsRUFBRSxDQUFDO0lBQ2pCLG1CQUFtQixFQUFFLENBQUM7SUFDdEIsdUJBQXVCLEVBQUUsQ0FBQztJQUMxQixlQUFlLEVBQUUsQ0FBQztDQUNyQixDQUFBOzs7O0FBS3NCLGtDQUFjLEdBQUc7SUFDcEMsU0FBUyxFQUFFLENBQUM7SUFDWixNQUFNLEVBQUUsQ0FBQztDQUNaLENBQUE7Ozs7QUFLc0IsZ0NBQVksR0FBRztJQUNsQyxHQUFHLEVBQUUsQ0FBQztJQUNOLE1BQU0sRUFBRSxDQUFDO0NBQ1osQ0FBQTs7OztBQUtzQiw4QkFBVSxHQUFHO0lBQ2hDLEtBQUssRUFBRSxDQUFDO0lBQ1IsSUFBSSxFQUFFLENBQUM7Q0FDVixDQUFBOzs7O0FBS3NCLCtCQUFXLEdBQUc7SUFDakMsV0FBVyxFQUFFLENBQUM7SUFDZCxHQUFHLEVBQUUsQ0FBQztDQUNULENBQUE7Ozs7OztJQXpIRCxtQ0FLQzs7Ozs7SUFLRCxtQ0FVQzs7Ozs7SUFLRCxpQ0FvQkM7Ozs7O0lBS0Qsa0NBTUM7O0lBRUQscUNBWUM7O0lBRUQsb0NBSUM7O0lBRUQsdUNBV0M7Ozs7O0lBS0QsbUNBR0M7Ozs7O0lBS0QsaUNBR0M7Ozs7O0lBS0QsK0JBR0M7Ozs7O0lBS0QsZ0NBR0MiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRlBoaVNlbHBoaUNvbnN0YW50cyB7XG5cbiAgICAvKipcbiAgICAgKiBNb2RvcyBkZSByb3RhY2nDs24gZGUgbGEgY8OhbWFyYSBwYXJhIGxhIHJlYWxpemFjacOzbiBkZSBsYSBjYXB0dXJhLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ2FtZXJhUm90YXRpb24gPSB7XG4gICAgICAgIE5vbmU6IDAsXG4gICAgICAgIERlZzkwOiAxLFxuICAgICAgICBEZWcxODA6IDIsXG4gICAgICAgIERlZzI3MDogM1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1vZG9zIGRlIGV4dHJhY2Npw7NuIG8gZmx1am9zIGRlIGVqZWN1Y2nDs24gZGlzcG9uaWJsZXMgZW4gZWwgd2lkZ2V0LlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRXh0cmFjdGlvbk1vZGUgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWdpc3RybyBkZSB1c3Vhcmlvcy5cbiAgICAgICAgICovXG4gICAgICAgIFJlZ2lzdGVyOiAwLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBdXRlbnRpY2FjacOzbiBkZSB1c3Vhcmlvcy5cbiAgICAgICAgICovXG4gICAgICAgIEF1dGhlbnRpY2F0ZTogMVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1vZG9zIGRlIHZlcmlmaWNhY2nDs24gZGUgcHJ1ZWJhIGRlIHZpZGEgZGlzcG9uaWJsZXMuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBMaXZlbmVzc01vZGUgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWZXJpZmljYWNpw7NuIGRlIHBydWViYSBkZSB2aWRhIGRlc2FjdGl2YWRhLlxuICAgICAgICAgKi9cbiAgICAgICAgTm9uZTogMCxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUHJ1ZWJhIGRlIHZpZGEgbWVkaWFudGUgcGFycGFkZW8uXG4gICAgICAgICAqL1xuICAgICAgICBCbGluazogMSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUHJ1ZWJhIGRlIHZpZGEgbWVkaWFudGUgbW92aW1pZW50by5cbiAgICAgICAgICovXG4gICAgICAgIE1vdmU6IDIsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBydWViYSBkZSB2aWRhIHBhc2l2by5cbiAgICAgICAgICovXG4gICAgICAgIFBhc3NpdmU6IDNcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaXBvIGRlIGV4Y2VwY2nDs24gcHJvZHVjaWRhIGR1cmFudGUgbGEgZWplY3VjacOzbiBkZWwgd2lkZ2V0LlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRXhjZXB0aW9uVHlwZSA9IHtcbiAgICAgICAgQ2FtZXJhRXJyb3I6IDAsXG4gICAgICAgIEV4dHJhY3RvckVycm9yOiAxLFxuICAgICAgICBDb250cm9sTm90SW5pdGlhbGl6ZWRFcnJvcjogMixcbiAgICAgICAgSW1hZ2VDcm9wUmVzaXplRXJyb3I6IDMsXG4gICAgICAgIFVuZXhwZWN0ZWRDYXB0dXJlRXJyb3I6IDRcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNhbXBsZURpYWdub3N0aWMgPSB7XG4gICAgICAgIE9rOiAwLFxuICAgICAgICBGYWNlTm90Rm91bmQ6IDEsXG4gICAgICAgIFJpZ2h0RXllTm90Rm91bmQ6IDIsXG4gICAgICAgIExlZnRFeWVOb3RGb3VuZDogMyxcbiAgICAgICAgRXllc05vdEZvdW5kOiA0LFxuICAgICAgICBGYWNlVG9vRmFyOiA1LFxuICAgICAgICBGYWNlVG9vQ2xvc2U6IDYsXG4gICAgICAgIFRvb0Nsb3NlVG9XaW5kb3dTaWRlOiA3LFxuICAgICAgICBBbmdsZUV4Y2VlZGVkOiA4LFxuICAgICAgICBRdWFsaXR5Q2hlY2tGYWlsZWQ6IDksXG4gICAgICAgIE5vdFJhdGVkOiAxMFxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRmluYWxEaWFnbm9zdGljID0ge1xuICAgICAgICBJbnN1ZmZpY2llbnRWYWxpZFNhbXBsZXM6IDAsXG4gICAgICAgIFRlbXBsYXRlQ3JlYXRpb25JblByb2dyZXNzOiAxLFxuICAgICAgICBUZW1wbGF0ZUNyZWF0ZWQ6IDJcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IExpdmVuZXNzRGlhZ25vc3RpYyA9IHtcbiAgICAgICAgTm90UmF0ZWQ6IDAsXG4gICAgICAgIFBob3RvRGV0ZWN0ZWQ6IDEsXG4gICAgICAgIExpdmVuZXNzRGV0ZWN0ZWQ6IDIsXG4gICAgICAgIFVuc3VjY2VzczogMyxcbiAgICAgICAgVW5zdWNjZXNzTG93UGVyZm9ybWFuY2U6IDQsXG4gICAgICAgIFVuc3VjY2Vzc0dsYXNzZXM6IDUsXG4gICAgICAgIFVuc3VjY2Vzc0xpZ2h0OiA2LFxuICAgICAgICBVbnN1Y2Nlc3NOb01vdmVtZW50OiA3LFxuICAgICAgICBVbnN1Y2Nlc3NXcm9uZ0RpcmVjdGlvbjogOCxcbiAgICAgICAgVW5zdWNjZXNzVG9vRmFyOiA5XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRm9ybWF0byBkZSBzYWxpZGEgZGUgbGEgaW5mb3JtYWNpw7NuIGRlIHRlbXBsYXRlIGdlbmVyYWRhIHBvciBlbCB3aWRnZXQuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBUZW1wbGF0ZUZvcm1hdCA9IHtcbiAgICAgICAgQnl0ZUFycmF5OiAwLFxuICAgICAgICBCYXNlNjQ6IDFcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGb3JtYXRvIGRlIHNhbGlkYSBkZSBsYSBncmFiYWNpw7NuIGRlbCB2aWRlbyBkZSBzZXNpw7NuIGRlbCB1c3VhcmlvLiBUaXBvIGRlIHByb2Nlc28gdXRpbGl6YWRvIHBhcmEgbGEgZ2VuZXJhY2nDs24gZGVsIHZpZGVvLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUmVjb3JkZXJUeXBlID0ge1xuICAgICAgICBHaWY6IDAsXG4gICAgICAgIFJlbW90ZTogMVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRpcG8gZGUgY8OhbWFyYSBhIHV0aWxpemFyIHBhcmEgbGEgY2FwdHVyYSBkZWwgc2VsZmllLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ2FtZXJhVHlwZSA9IHtcbiAgICAgICAgRnJvbnQ6IDAsXG4gICAgICAgIEJhY2s6IDFcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaXBvIGRlIGFjY2nDs24gcXVlIHNlIHByb2R1Y2UgZW4gbGEgaW50ZXJhY2Npw7NuIGRlbCB1c3VhcmlvIGNvbiBlbCB3aWRnZXQuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBUcmFja1N0YXR1cyA9IHtcbiAgICAgICAgQ2hhbmdlU3RhdGU6IDAsXG4gICAgICAgIFRhcDogMVxuICAgIH1cblxufVxuIl19