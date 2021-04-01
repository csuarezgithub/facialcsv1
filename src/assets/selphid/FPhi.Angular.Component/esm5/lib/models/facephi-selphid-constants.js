/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FPhiSelphIdConstants = /** @class */ (function () {
    function FPhiSelphIdConstants() {
    }
    /**
     * Modo de funcionamiento del widget a la hora de realizar la captura del documento.
     */
    FPhiSelphIdConstants.CaptureMode = {
        /**
         * Captura únicamente el frente del documento.
         */
        Front: 0,
        /**
         * Captura únicamente el dorso del documento.
         */
        Back: 1,
        /**
         * Realiza una captura de ambas partes del documento.
         */
        Full: 2
    };
    /**
     * Tipo de excepción producida durante la ejecución del widget.
     */
    FPhiSelphIdConstants.ExceptionType = {
        CameraError: 0,
        ExtractorError: 1,
        ControlNotInitializedError: 2,
        ImageCropResizeError: 3,
        UnexpectedCaptureError: 4
    };
    /**
     * Niveles de sensibilidad de captura en las capacidades de detección de bordes del widget.
     */
    FPhiSelphIdConstants.CaptureSensibility = {
        Low: 0,
        Normal: 1,
        High: 2,
        Auto: 3
    };
    /**
     * Tipo de acción que se produce en la interacción del usuario con el widget.
     */
    FPhiSelphIdConstants.TrackStatus = {
        ChangeState: 0,
        Tap: 1
    };
    return FPhiSelphIdConstants;
}());
export { FPhiSelphIdConstants };
if (false) {
    /**
     * Modo de funcionamiento del widget a la hora de realizar la captura del documento.
     * @type {?}
     */
    FPhiSelphIdConstants.CaptureMode;
    /**
     * Tipo de excepción producida durante la ejecución del widget.
     * @type {?}
     */
    FPhiSelphIdConstants.ExceptionType;
    /**
     * Niveles de sensibilidad de captura en las capacidades de detección de bordes del widget.
     * @type {?}
     */
    FPhiSelphIdConstants.CaptureSensibility;
    /**
     * Tipo de acción que se produce en la interacción del usuario con el widget.
     * @type {?}
     */
    FPhiSelphIdConstants.TrackStatus;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXBoaS1zZWxwaGlkLWNvbnN0YW50cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZhY2VwaGktc2VscGhpZC8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvZmFjZXBoaS1zZWxwaGlkLWNvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7SUFBQTtJQWlEQSxDQUFDOzs7O0lBN0MwQixnQ0FBVyxHQUFHOzs7O1FBSWpDLEtBQUssRUFBRSxDQUFDOzs7O1FBS1IsSUFBSSxFQUFFLENBQUM7Ozs7UUFLUCxJQUFJLEVBQUUsQ0FBQztLQUNWLENBQUE7Ozs7SUFLc0Isa0NBQWEsR0FBRztRQUNuQyxXQUFXLEVBQUUsQ0FBQztRQUNkLGNBQWMsRUFBRSxDQUFDO1FBQ2pCLDBCQUEwQixFQUFFLENBQUM7UUFDN0Isb0JBQW9CLEVBQUUsQ0FBQztRQUN2QixzQkFBc0IsRUFBRSxDQUFDO0tBQzVCLENBQUE7Ozs7SUFLc0IsdUNBQWtCLEdBQUc7UUFDeEMsR0FBRyxFQUFFLENBQUM7UUFDTixNQUFNLEVBQUUsQ0FBQztRQUNULElBQUksRUFBRSxDQUFDO1FBQ1AsSUFBSSxFQUFFLENBQUM7S0FDVixDQUFBOzs7O0lBS3NCLGdDQUFXLEdBQUc7UUFDakMsV0FBVyxFQUFFLENBQUM7UUFDZCxHQUFHLEVBQUUsQ0FBQztLQUNULENBQUE7SUFDTCwyQkFBQztDQUFBLEFBakRELElBaURDO1NBakRZLG9CQUFvQjs7Ozs7O0lBSTdCLGlDQWVDOzs7OztJQUtELG1DQU1DOzs7OztJQUtELHdDQUtDOzs7OztJQUtELGlDQUdDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEZQaGlTZWxwaElkQ29uc3RhbnRzIHtcbiAgICAvKipcbiAgICAgKiBNb2RvIGRlIGZ1bmNpb25hbWllbnRvIGRlbCB3aWRnZXQgYSBsYSBob3JhIGRlIHJlYWxpemFyIGxhIGNhcHR1cmEgZGVsIGRvY3VtZW50by5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IENhcHR1cmVNb2RlID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQ2FwdHVyYSDDum5pY2FtZW50ZSBlbCBmcmVudGUgZGVsIGRvY3VtZW50by5cbiAgICAgICAgICovXG4gICAgICAgIEZyb250OiAwLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYXB0dXJhIMO6bmljYW1lbnRlIGVsIGRvcnNvIGRlbCBkb2N1bWVudG8uXG4gICAgICAgICAqL1xuICAgICAgICBCYWNrOiAxLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWFsaXphIHVuYSBjYXB0dXJhIGRlIGFtYmFzIHBhcnRlcyBkZWwgZG9jdW1lbnRvLlxuICAgICAgICAgKi9cbiAgICAgICAgRnVsbDogMlxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRpcG8gZGUgZXhjZXBjacOzbiBwcm9kdWNpZGEgZHVyYW50ZSBsYSBlamVjdWNpw7NuIGRlbCB3aWRnZXQuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFeGNlcHRpb25UeXBlID0ge1xuICAgICAgICBDYW1lcmFFcnJvcjogMCxcbiAgICAgICAgRXh0cmFjdG9yRXJyb3I6IDEsXG4gICAgICAgIENvbnRyb2xOb3RJbml0aWFsaXplZEVycm9yOiAyLFxuICAgICAgICBJbWFnZUNyb3BSZXNpemVFcnJvcjogMyxcbiAgICAgICAgVW5leHBlY3RlZENhcHR1cmVFcnJvcjogNFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE5pdmVsZXMgZGUgc2Vuc2liaWxpZGFkIGRlIGNhcHR1cmEgZW4gbGFzIGNhcGFjaWRhZGVzIGRlIGRldGVjY2nDs24gZGUgYm9yZGVzIGRlbCB3aWRnZXQuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBDYXB0dXJlU2Vuc2liaWxpdHkgPSB7XG4gICAgICAgIExvdzogMCxcbiAgICAgICAgTm9ybWFsOiAxLFxuICAgICAgICBIaWdoOiAyLFxuICAgICAgICBBdXRvOiAzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGlwbyBkZSBhY2Npw7NuIHF1ZSBzZSBwcm9kdWNlIGVuIGxhIGludGVyYWNjacOzbiBkZWwgdXN1YXJpbyBjb24gZWwgd2lkZ2V0LlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVHJhY2tTdGF0dXMgPSB7XG4gICAgICAgIENoYW5nZVN0YXRlOiAwLFxuICAgICAgICBUYXA6IDFcbiAgICB9XG59XG4iXX0=