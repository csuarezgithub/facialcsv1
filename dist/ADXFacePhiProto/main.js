(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/adxselphi-id/adxselphi-id.component.html":
/*!**********************************************************!*\
  !*** ./src/app/adxselphi-id/adxselphi-id.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<p>\n  adxselphi-id works!\n</p>-->\n\n<div class=\"container p-3\">\n  <div class=\"row h-100\">\n      <!-- Widget web SelphID -->\n      <div class=\"col-12 col-md-9\" style=\"min-height: 350px;\">\n          <facephi-selphid *ngIf=\"isWidgetCaptureStarted\"\n                           widgetLibPath=\"assets/selphid\"\n                           class=\"h-100\"\n                           containerCssClass=\"bg-dark\"\n\n                           language=\"es\"\n                           [documentDimensions]=\"{ x: 0, y: 0, width: 85.60, height: 53.98 }\"\n\n                           [captureMode]=\"widgetCaptureMode\"\n                           [previewCapture]=\"widgetPreviewCapture\"\n                           [forceLandscape]=\"widgetForceLandscape\"\n                           [initialTip]=\"widgetInitialTip\"\n                           \n                           [cameraWidth]=\"widgetCameraWidth\"\n                           [cameraHeight]=\"widgetCameraHeight\"\n                           \n                           [captureSensibility]=\"widgetCaptureSensibility\"\n\n                           [debugMode]=\"widgetDebugMode\"\n\n                           (onModuleLoaded)=\"onModuleLoaded($event)\"\n                           (onExtractionFinished)=\"onExtractionFinished($event)\"\n                           (onUserCancelled)=\"onUserCancelled()\"\n                           (onExceptionCaptured)=\"onExceptionCaptured($event)\"\n                           (onExtractionTimeout)=\"onExtractionTimeout()\"\n                           (onTrackStatus)=\"onTrackStatus($event)\">\n          </facephi-selphid>\n      </div>\n\n      <!-- Elementos de configuración del widget -->\n      <div class=\"col-12 col-md-3 mt-3 mt-md-0\">\n          <div class=\"form-group\">\n              <label for=\"captureMode\">Capture mode</label>\n              <select id=\"captureMode\" class=\"form-control\" [disabled]=\"isWidgetCaptureStarted ? 'disabled' : null\" [(ngModel)]=\"widgetCaptureMode\">\n                  <option *ngFor=\"let mode of fPhiSelphIdConstants.CaptureMode | keyvalue\" [value]=\"mode.value\">{{ mode.key }}</option>\n              </select>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"widgetCameraResolution\">Camera resolution</label>\n              <select id=\"widgetCameraResolution\" class=\"form-control\" [disabled]=\"isWidgetCaptureStarted ? 'disabled' : null\" [(ngModel)]=\"widgetCameraResolution\">\n                  <option *ngFor=\"let res of objectEntriesFunc(FPhiCameraResolutions)\" [value]=\"res[0]\">{{ res[1].title }}</option>\n              </select>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"captureSensibility\">Capture sensibility</label>\n              <select id=\"captureSensibility\" class=\"form-control\" [disabled]=\"isWidgetCaptureStarted ? 'disabled' : null\" [(ngModel)]=\"widgetCaptureSensibility\">\n                  <option *ngFor=\"let sensibility of fPhiSelphIdConstants.CaptureSensibility | keyvalue\" [value]=\"sensibility.value\">{{ sensibility.key }}</option>\n              </select>\n          </div>\n          <div class=\"form-group form-check m-0\">\n              <input type=\"checkbox\" id=\"previewCapture\" class=\"form-check-input\" [disabled]=\"isWidgetCaptureStarted ? 'disabled' : null\" [(ngModel)]=\"widgetPreviewCapture\" />\n              <label for=\"previewCapture\" class=\"form-check-label\">Preview capture</label>\n          </div>\n          <div class=\"form-group form-check m-0\">\n              <input type=\"checkbox\" id=\"forceLandscape\" class=\"form-check-input\" [disabled]=\"isWidgetCaptureStarted ? 'disabled' : null\" [(ngModel)]=\"widgetForceLandscape\" />\n              <label for=\"forceLandscape\" class=\"form-check-label\">Force landscape</label>\n          </div>\n          <div class=\"form-group form-check m-0\">\n              <input type=\"checkbox\" id=\"initialTip\" class=\"form-check-input\" [disabled]=\"isWidgetCaptureStarted ? 'disabled' : null\" [(ngModel)]=\"widgetInitialTip\" />\n              <label for=\"initialTip\" class=\"form-check-label\">Initial tip</label>\n          </div>\n          <!--<div class=\"form-group form-check\">\n              <input type=\"checkbox\" id=\"debugMode\" class=\"form-check-input\" [disabled]=\"isWidgetCaptureStarted ? 'disabled' : null\" [(ngModel)]=\"widgetDebugMode\" />\n              <label for=\"debugMode\" class=\"form-check-label\">Debug</label>\n          </div>-->\n\n          <button type=\"button\" id=\"btnStartCapture\" class=\"btn btn-primary btn-block\" (click)=\"onStartCapture()\" [disabled]=\"isWidgetCaptureStarted ? 'disabled' : null\">Start capture</button>\n          <button type=\"button\" id=\"btnStopCapture\" class=\"btn btn-danger btn-block\" (click)=\"onStopCapture()\" [disabled]=\"!isWidgetCaptureStarted ? 'disabled' : null\">Stop capture</button>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/adxselphi-id/adxselphi-id.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/adxselphi-id/adxselphi-id.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1;\n  align-items: stretch; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NzdWFyZXovQURYRmFjZVBoaVByb3RvL3NyYy9hcHAvYWR4c2VscGhpLWlkL2FkeHNlbHBoaS1pZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYixZQUFZO0VBQ1osb0JBQW9CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hZHhzZWxwaGktaWQvYWR4c2VscGhpLWlkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgeyBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/adxselphi-id/adxselphi-id.component.ts":
/*!********************************************************!*\
  !*** ./src/app/adxselphi-id/adxselphi-id.component.ts ***!
  \********************************************************/
/*! exports provided: ADXSelphiIdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADXSelphiIdComponent", function() { return ADXSelphiIdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var facephi_selphid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! facephi-selphid */ "./src/assets/selphid/FPhi.Angular.Component/fesm5/facephi-selphid.js");



var ADXSelphiIdComponent = /** @class */ (function () {
    function ADXSelphiIdComponent(selphidWidgetService) {
        this.selphidWidgetService = selphidWidgetService;
        this.fPhiSelphIdConstants = facephi_selphid__WEBPACK_IMPORTED_MODULE_2__["FPhiSelphIdConstants"];
        this.objectEntriesFunc = Object.entries;
        this.FPhiCameraResolutions = {
            res480p: { title: "640x480", width: 640, height: 480 },
            res600p: { title: "800x600", width: 800, height: 600 },
            res768p: { title: "1024x768", width: 1024, height: 768 },
            res720p: { title: "1280x720 (720p)", width: 1280, height: 720 },
            res1080p: { title: "1920x1080 (1080p)", width: 1920, height: 1080 },
        };
        this.isWidgetCaptureStarted = false;
        this.widgetCaptureMode = facephi_selphid__WEBPACK_IMPORTED_MODULE_2__["FPhiSelphIdConstants"].CaptureMode.Full;
        this.widgetCameraResolution = "res720p";
        this.widgetCaptureSensibility = facephi_selphid__WEBPACK_IMPORTED_MODULE_2__["FPhiSelphIdConstants"].CaptureSensibility.Auto;
        this.widgetPreviewCapture = true;
        this.widgetForceLandscape = false;
        this.widgetInitialTip = false;
        this.widgetDebugMode = false;
    }
    ADXSelphiIdComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ADXSelphiIdComponent.prototype, "widgetCameraWidth", {
        get: function () { return this.FPhiCameraResolutions[this.widgetCameraResolution].width; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ADXSelphiIdComponent.prototype, "widgetCameraHeight", {
        get: function () { return this.FPhiCameraResolutions[this.widgetCameraResolution].height; },
        enumerable: true,
        configurable: true
    });
    ADXSelphiIdComponent.prototype.onStartCapture = function () {
        var _this = this;
        this.selphidWidgetService.isWidgetLicensed()
            .subscribe(function (licensingResult) {
            if (licensingResult) {
                console.warn("[SelphID] Widget license OK");
                _this.isWidgetCaptureStarted = true;
            }
            else
                alert("SelphID widget is not correctly licensed.");
        });
    };
    ADXSelphiIdComponent.prototype.onStopCapture = function () {
        this.isWidgetCaptureStarted = false;
    };
    // Widget event handlers
    ADXSelphiIdComponent.prototype.onModuleLoaded = function (eventData) {
        console.warn("[SelphID] onModuleLoaded");
        console.log(eventData);
    };
    ADXSelphiIdComponent.prototype.onExtractionFinished = function (extractionResult) {
        console.warn("[SelphID] onExtractionFinished");
        console.log(extractionResult);
        console.log("Images returned: ", extractionResult.detail.images);
        for (var i = 0; i < extractionResult.detail.images.length; i++) {
            var img = extractionResult.detail.images[i];
            console.log("Image " + i + ": " + img.src);
        }
        this.isWidgetCaptureStarted = false;
    };
    ADXSelphiIdComponent.prototype.onUserCancelled = function () {
        console.warn("[SelphID] onUserCancelled");
        this.isWidgetCaptureStarted = false;
    };
    ADXSelphiIdComponent.prototype.onExceptionCaptured = function (exceptionResult) {
        console.warn("[SelphID] onExceptionCaptured");
        console.log("exceptionType: " + exceptionResult.detail.exceptionType);
        console.log("exceptionMessage: " + exceptionResult.detail.message);
        console.log(exceptionResult);
        this.isWidgetCaptureStarted = false;
    };
    ADXSelphiIdComponent.prototype.onExtractionTimeout = function (eventInfo) {
        console.warn("[SelphID] onExtractionTimeout");
        console.log(eventInfo);
        this.isWidgetCaptureStarted = false;
    };
    ADXSelphiIdComponent.prototype.onTrackStatus = function (eventData) {
        var trackStatusCode = Object.entries(facephi_selphid__WEBPACK_IMPORTED_MODULE_2__["FPhiSelphIdConstants"].TrackStatus).find(function (e) { return e[1] == eventData.detail.code; });
        console.warn("[SelphID] onTrackStatus (Code: " + trackStatusCode[1] + " - " + trackStatusCode[0] + ", Timestamp: " + eventData.detail.timeStamp);
        console.log(eventData);
    };
    ADXSelphiIdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adxselphi-id',
            template: __webpack_require__(/*! ./adxselphi-id.component.html */ "./src/app/adxselphi-id/adxselphi-id.component.html"),
            styles: [__webpack_require__(/*! ./adxselphi-id.component.scss */ "./src/app/adxselphi-id/adxselphi-id.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [facephi_selphid__WEBPACK_IMPORTED_MODULE_2__["FPhiSelphIdWidgetService"]])
    ], ADXSelphiIdComponent);
    return ADXSelphiIdComponent;
}());



/***/ }),

/***/ "./src/app/adxselphi/adxselphi.component.html":
/*!****************************************************!*\
  !*** ./src/app/adxselphi/adxselphi.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<p>\n  adxselphi works!\n</p>-->\n<div class=\"container p-3\">\n  <div class=\"row h-100\">\n      <!-- Widget web SelphID -->\n      <div class=\"col-12 col-md-9\" style=\"min-height: 550px;\">\n          <facephi-selphi *ngIf=\"isWidgetCaptureStarted\"\n                           widgetLibPath=\"assets/selphi\"\n                           class=\"h-100\"\n                           \n                           language=\"es\"\n                           [extractionMode]=\"widgetExtractionMode\"\n                           [livenessMode]=\"widgetLivenessMode\"\n                           \n                           [cameraWidth]=\"widgetCameraWidth\"\n                           [cameraHeight]=\"widgetCameraHeight\"\n                           [cameraType]=\"widgetCameraType\"\n\n                           [interactible]=\"widgetInteractible\"\n                           [tutorial]=\"widgetTutorial\"\n                           [stabilizationStage]=\"widgetStabilizationStage\"\n                           \n                           [logImages]=\"true\"\n                           [cropFactor]=\"1.7\"\n\n                           [videoRecord]=\"widgetVideoRecord\"\n                           [videoRecordType]=\"FPhiSelphiConstants.RecorderType.Remote\"\n                           [videoRecordScale]=\"widgetCameraWidth < 1280 ? 1 : 0.5\"\n\n                           [debugMode]=\"widgetDebugMode\"\n\n                           (onModuleLoaded)=\"onModuleLoaded($event)\"\n                           (onStabilizing)=\"onStabilizing($event)\"\n                           (onExtractionFinish)=\"onExtractionFinish($event)\"\n                           (onUserCancel)=\"onUserCancel()\"\n                           (onExceptionCaptured)=\"onExceptionCaptured($event)\"\n                           (onLivenessError)=\"onLivenessError($event)\"\n                           (onLivenessErrorButtonClick)=\"onLivenessErrorButtonClick()\"\n                           (onExtractionTimeout)=\"onExtractionTimeout($event)\"\n                           (onTimeoutErrorButtonClick)=\"onTimeoutErrorButtonClick()\"\n                           (onTrackStatus)=\"onTrackStatus($event)\">\n          </facephi-selphi>\n      </div>\n\n      <!-- Elementos de configuraciÃ³n del widget -->\n      <div class=\"col-12 col-md-3 mt-3 mt-md-0\">\n          <div class=\"form-group\">\n              <label for=\"widgetExtractionMode\">Extraction mode</label>\n              <select id=\"widgetExtractionMode\" class=\"form-control\" [disabled]=\"isWidgetCaptureStarted ? 'disabled' : null\" [(ngModel)]=\"widgetExtractionMode\">\n                  <option *ngFor=\"let mode of objectEntriesFunc(FPhiSelphiConstants.ExtractionMode)\" [value]=\"mode[1]\">{{ mode[0] }}</option>\n              </select>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"widgetLivenessMode\">Liveness mode</label>\n              <select id=\"widgetLivenessMode\" class=\"form-control\" [disabled]=\"isWidgetCaptureStarted ? 'disabled' : null\" [(ngModel)]=\"widgetLivenessMode\">\n                  <option *ngFor=\"let mode of objectEntriesFunc(FPhiSelphiConstants.LivenessMode)\" [value]=\"mode[1]\">{{ mode[0] }}</option>\n              </select>\n          </div>\n          <div class=\"form-group form-check m-0\">\n              <input type=\"checkbox\" id=\"widgetInteractible\" class=\"form-check-input\" [disabled]=\"isWidgetCaptureStarted ? 'disabled' : null\" [(ngModel)]=\"widgetInteractible\" />\n              <label for=\"widgetInteractible\" class=\"form-check-label\">Interactible</label>\n          </div>\n          <div class=\"form-group form-check m-0\">\n              <input type=\"checkbox\" id=\"widgetTutorial\" class=\"form-check-input\" [disabled]=\"isWidgetCaptureStarted ? 'disabled' : null\" [(ngModel)]=\"widgetTutorial\" />\n              <label for=\"widgetTutorial\" class=\"form-check-label\">Tutorial</label>\n          </div>\n          <div class=\"form-group form-check m-0\">\n              <input type=\"checkbox\" id=\"widgetStabilizationStage\" class=\"form-check-input\" [disabled]=\"isWidgetCaptureStarted ? 'disabled' : null\" [(ngModel)]=\"widgetStabilizationStage\" />\n              <label for=\"widgetStabilizationStage\" class=\"form-check-label\">Stabilization stage</label>\n          </div>\n          <div class=\"form-group form-check m-0\">\n              <input type=\"checkbox\" id=\"widgetVideoRecord\" class=\"form-check-input\" [disabled]=\"isWidgetCaptureStarted ? 'disabled' : null\" [(ngModel)]=\"widgetVideoRecord\" />\n              <label for=\"widgetVideoRecord\" class=\"form-check-label\">Record video session</label>\n          </div>\n          <div class=\"form-group form-check\">\n              <input type=\"checkbox\" id=\"widgetDebugMode\" class=\"form-check-input\" [disabled]=\"isWidgetCaptureStarted ? 'disabled' : null\" [(ngModel)]=\"widgetDebugMode\" />\n              <label for=\"widgetDebugMode\" class=\"form-check-label\">Debug</label>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"widgetCameraResolution\">Camera resolution</label>\n              <select id=\"widgetCameraResolution\" class=\"form-control\" [disabled]=\"isWidgetCaptureStarted ? 'disabled' : null\" [(ngModel)]=\"widgetCameraResolution\">\n                  <option *ngFor=\"let res of objectEntriesFunc(FPhiCameraResolutions)\" [value]=\"res[0]\">{{ res[1].title }}</option>\n              </select>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"widgetCameraType\">Camera type</label>\n              <select id=\"widgetCameraType\" class=\"form-control\" [disabled]=\"isWidgetCaptureStarted ? 'disabled' : null\" [(ngModel)]=\"widgetCameraType\">\n                  <option *ngFor=\"let mode of objectEntriesFunc(FPhiSelphiConstants.CameraType)\" [value]=\"mode[1]\">{{ mode[0] }}</option>\n              </select>\n          </div>\n\n          <button type=\"button\" id=\"btnStartCapture\" class=\"btn btn-primary btn-block\" (click)=\"onStartCapture()\" [disabled]=\"isWidgetCaptureStarted ? 'disabled' : null\">Start capture</button>\n          <button type=\"button\" id=\"btnStopCapture\" class=\"btn btn-danger btn-block\" (click)=\"onStopCapture()\" [disabled]=\"!isWidgetCaptureStarted ? 'disabled' : null\">Stop capture</button>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/adxselphi/adxselphi.component.scss":
/*!****************************************************!*\
  !*** ./src/app/adxselphi/adxselphi.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1;\n  align-items: stretch; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NzdWFyZXovQURYRmFjZVBoaVByb3RvL3NyYy9hcHAvYWR4c2VscGhpL2FkeHNlbHBoaS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYixZQUFZO0VBQ1osb0JBQW9CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hZHhzZWxwaGkvYWR4c2VscGhpLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgeyBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/adxselphi/adxselphi.component.ts":
/*!**************************************************!*\
  !*** ./src/app/adxselphi/adxselphi.component.ts ***!
  \**************************************************/
/*! exports provided: ADXSelphiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADXSelphiComponent", function() { return ADXSelphiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var facephi_selphi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! facephi-selphi */ "./src/assets/selphi/FPhi.Angular.Component/fesm5/facephi-selphi.js");



var ADXSelphiComponent = /** @class */ (function () {
    function ADXSelphiComponent() {
        this.FPhiSelphiConstants = facephi_selphi__WEBPACK_IMPORTED_MODULE_2__["FPhiSelphiConstants"];
        this.objectEntriesFunc = Object.entries;
        this.FPhiCameraResolutions = {
            res480p: { title: "640x480", width: 640, height: 480 },
            res600p: { title: "800x600", width: 800, height: 600 },
            res768p: { title: "1024x768", width: 1024, height: 768 },
            res720p: { title: "1280x720 (720p)", width: 1280, height: 720 },
            res1080p: { title: "1920x1080 (1080p)", width: 1920, height: 1080 },
        };
        this.isWidgetCaptureStarted = false;
        this.widgetExtractionMode = facephi_selphi__WEBPACK_IMPORTED_MODULE_2__["FPhiSelphiConstants"].ExtractionMode.Authenticate;
        this.widgetLivenessMode = facephi_selphi__WEBPACK_IMPORTED_MODULE_2__["FPhiSelphiConstants"].LivenessMode.Blink;
        this.widgetInteractible = true;
        this.widgetTutorial = false;
        this.widgetStabilizationStage = false;
        this.widgetVideoRecord = false;
        this.widgetDebugMode = false;
        this.widgetCameraResolution = "res720p";
        this.widgetCameraType = facephi_selphi__WEBPACK_IMPORTED_MODULE_2__["FPhiSelphiConstants"].CameraType.Front;
    }
    Object.defineProperty(ADXSelphiComponent.prototype, "widgetCameraWidth", {
        get: function () { return this.FPhiCameraResolutions[this.widgetCameraResolution].width; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ADXSelphiComponent.prototype, "widgetCameraHeight", {
        get: function () { return this.FPhiCameraResolutions[this.widgetCameraResolution].height; },
        enumerable: true,
        configurable: true
    });
    ADXSelphiComponent.prototype.onStartCapture = function () { this.isWidgetCaptureStarted = true; };
    ADXSelphiComponent.prototype.onStopCapture = function () { this.isWidgetCaptureStarted = false; };
    // Widget event handlers
    ADXSelphiComponent.prototype.onModuleLoaded = function (eventData) {
        console.warn("[Selphi] onModuleLoaded");
        console.log(eventData);
    };
    ADXSelphiComponent.prototype.onStabilizing = function (stabilizingResult) {
        console.warn("[Selphi] onStabilizing");
        console.log(stabilizingResult);
    };
    ADXSelphiComponent.prototype.onExtractionFinish = function (extractionResult) {
        console.warn("[Selphi] onExtractionFinish");
        console.log(extractionResult);
        console.log("Images returned: ", extractionResult.detail.images);
        for (var i = 0; i < extractionResult.detail.images.length; i++) {
            var img = extractionResult.detail.images[i];
            console.log("Image " + i + ": " + img.src);
        }
        if (extractionResult.detail.bestImage)
            console.log("BestImage: ", extractionResult.detail.bestImage.src);
        if (extractionResult.detail.bestImageCropped)
            console.log("BestImageCropped: ", extractionResult.detail.bestImageCropped.src);
        console.log("Template: ", extractionResult.detail.template);
        console.log("TemplateRaw: ", extractionResult.detail.templateRaw);
        console.log("TimeStamp: ", extractionResult.detail.timeStamp);
        console.log("LivenessMoveFails: ", extractionResult.detail.livenessMoveFails);
        console.log("SunGlassesScore: ", extractionResult.detail.sunGlassesScore);
        console.log("LivenessMoveHistory: ", extractionResult.detail.livenessMoveHistory);
        console.log("LivenessMoveStabilizedStatusHistory: ", extractionResult.detail.livenessMoveStabilizedStatusHistory);
        console.log("LivenessMoveLastStabilizedStatus: ", extractionResult.detail.livenessMoveLastStabilizedStatus);
        this.isWidgetCaptureStarted = false;
    };
    ADXSelphiComponent.prototype.onUserCancel = function () {
        console.warn("[Selphi] onUserCancel");
        this.isWidgetCaptureStarted = false;
    };
    ADXSelphiComponent.prototype.onExceptionCaptured = function (exceptionResult) {
        console.warn("[Selphi] onExceptionCaptured");
        console.log("exceptionType: " + exceptionResult.detail.exceptionType);
        console.log("exceptionMessage: " + exceptionResult.detail.message);
        console.log(exceptionResult);
        this.isWidgetCaptureStarted = false;
    };
    ADXSelphiComponent.prototype.onLivenessError = function (livenessErrorResult) {
        console.warn("[Selphi] onLivenessError");
        console.log(livenessErrorResult);
        switch (livenessErrorResult.detail.livenessErrorType) {
            case facephi_selphi__WEBPACK_IMPORTED_MODULE_2__["FPhiSelphiConstants"].LivenessDiagnostic.Unsuccess:
                console.log("[Selphi] Liveness error: Blink or movement not detected");
                break;
            case facephi_selphi__WEBPACK_IMPORTED_MODULE_2__["FPhiSelphiConstants"].LivenessDiagnostic.UnsuccessLowPerformance:
                console.log("[Selphi] Liveness error: Low performance");
                break;
            case facephi_selphi__WEBPACK_IMPORTED_MODULE_2__["FPhiSelphiConstants"].LivenessDiagnostic.UnsuccessGlasses:
                console.log("[Selphi] Liveness error: Glasses detected");
                break;
            case facephi_selphi__WEBPACK_IMPORTED_MODULE_2__["FPhiSelphiConstants"].LivenessDiagnostic.UnsuccessLight:
                console.log("[Selphi] Liveness error: Bad lighting conditions");
                break;
            case facephi_selphi__WEBPACK_IMPORTED_MODULE_2__["FPhiSelphiConstants"].LivenessDiagnostic.UnsuccessNoMovement:
                console.log("[Selphi] Liveness error: No movement");
                break;
            case facephi_selphi__WEBPACK_IMPORTED_MODULE_2__["FPhiSelphiConstants"].LivenessDiagnostic.UnsuccessWrongDirection:
                console.log("[Selphi] Liveness error: Wrong direction");
                break;
            case facephi_selphi__WEBPACK_IMPORTED_MODULE_2__["FPhiSelphiConstants"].LivenessDiagnostic.UnsuccessTooFar:
                console.log("[Selphi] Liveness error: Face too far");
                break;
        }
    };
    ADXSelphiComponent.prototype.onLivenessErrorButtonClick = function () {
        console.warn("[Selphi] onLivenessErrorButtonClick");
        this.isWidgetCaptureStarted = false;
    };
    ADXSelphiComponent.prototype.onExtractionTimeout = function (extractionTimeoutResult) {
        console.warn("[Selphi] onExtractionTimeout");
        console.log(extractionTimeoutResult);
    };
    ADXSelphiComponent.prototype.onTimeoutErrorButtonClick = function () {
        console.warn("[Selphi] onTimeoutErrorButtonClick");
        this.isWidgetCaptureStarted = false;
    };
    ADXSelphiComponent.prototype.onTrackStatus = function (eventData) {
        var trackStatusCode = Object.entries(facephi_selphi__WEBPACK_IMPORTED_MODULE_2__["FPhiSelphiConstants"].TrackStatus).find(function (e) { return e[1] == eventData.detail.code; });
        console.warn("[Selphi] onTrackStatus (Code: " + trackStatusCode[1] + " - " + trackStatusCode[0] + ", Timestamp: " + eventData.detail.timeStamp);
        console.log(eventData);
    };
    ADXSelphiComponent.prototype.ngOnInit = function () {
    };
    ADXSelphiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adxselphi',
            template: __webpack_require__(/*! ./adxselphi.component.html */ "./src/app/adxselphi/adxselphi.component.html"),
            styles: [__webpack_require__(/*! ./adxselphi.component.scss */ "./src/app/adxselphi/adxselphi.component.scss")]
        })
    ], ADXSelphiComponent);
    return ADXSelphiComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");



//add



//const routes: Routes = [];
//add
var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'sign-up', component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!--<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul>-->\n\n<!--\n\n<mat-tab-group class=\"container\">\n  <mat-tab label=\"SelphiID\">\n    <app-adxselphi-id></app-adxselphi-id>\n  </mat-tab>\n  <mat-tab label=\"Selphi\">\n    <app-adxselphi></app-adxselphi>\n  </mat-tab>\n</mat-tab-group>\n\n\n\n<router-outlet></router-outlet>\n\n-->\n\n\n\n\n  <router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1;\n  align-items: stretch; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NzdWFyZXovQURYRmFjZVBoaVByb3RvL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLFlBQVk7RUFDWixvQkFBb0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHsgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ADXFacePhiProto';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aws-amplify */ "./node_modules/aws-amplify/lib-esm/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _adxselphi_id_adxselphi_id_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./adxselphi-id/adxselphi-id.component */ "./src/app/adxselphi-id/adxselphi-id.component.ts");
/* harmony import */ var facephi_selphid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! facephi-selphid */ "./src/assets/selphid/FPhi.Angular.Component/fesm5/facephi-selphid.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _adxselphi_adxselphi_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./adxselphi/adxselphi.component */ "./src/app/adxselphi/adxselphi.component.ts");
/* harmony import */ var facephi_selphi__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! facephi-selphi */ "./src/assets/selphi/FPhi.Angular.Component/fesm5/facephi-selphi.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");




//add












//add
aws_amplify__WEBPACK_IMPORTED_MODULE_4__["default"].configure({
    Auth: {
        mandatorySignIn: true,
        region: 'us-east-1',
        userPoolId: 'us-east-1_wthuzBNrg',
        userPoolWebClientId: '583b9198ll3q9b36qf1cjcoil5',
        authenticationFlowType: 'USER_PASSWORD_AUTH'
    }
});
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _adxselphi_id_adxselphi_id_component__WEBPACK_IMPORTED_MODULE_7__["ADXSelphiIdComponent"],
                _adxselphi_adxselphi_component__WEBPACK_IMPORTED_MODULE_11__["ADXSelphiComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_14__["SignUpComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                facephi_selphid__WEBPACK_IMPORTED_MODULE_8__["FacePhiSelphIdModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
                facephi_selphi__WEBPACK_IMPORTED_MODULE_12__["FacePhiSelphiModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group class=\"container\">\n  <mat-tab label=\"SelphiID\">\n    <app-adxselphi-id></app-adxselphi-id>\n  </mat-tab>\n  <mat-tab label=\"Selphi\">\n    <app-adxselphi></app-adxselphi>\n  </mat-tab>\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1;\n  align-items: stretch; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NzdWFyZXovQURYRmFjZVBoaVByb3RvL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLFlBQVk7RUFDWixvQkFBb0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHsgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n  <div>\n      <label for=\"email\">Email address</label>\n      <input type=\"email\" name=\"email\" [(ngModel)]=\"email\" required placeholder=\"Enter your email\">\n  </div>\n  <div>\n      <label for=\"password\">Password</label>\n      <input type=\"password\" name=\"password\" [(ngModel)]=\"password\" required id=\"password\"\n          placeholder=\"Enter your password\">\n  </div>\n\n  <div>\n      <br />\n      <button (click)=\"loginWithCognito()\" class=\"btn btn-primary btn-block\" type=\"submit\"> Log In </button>\n  </div>\n</form>\n<p class=\"text-dark mb-0\">Not a member?<a href=\"/sign-up\" class=\"text-primary ml-1\">Sign Up now</a></p>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aws-amplify */ "./node_modules/aws-amplify/lib-esm/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
        this.email = '';
        this.password = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginWithCognito = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var user, tokens, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, aws_amplify__WEBPACK_IMPORTED_MODULE_2__["Auth"].signIn(this.email.toString(), this.password.toString())];
                    case 1:
                        user = _a.sent();
                        console.log('Authentication performed for user=' + this.email + 'password=' + this.password + ' login result==' + user);
                        tokens = user.signInUserSession;
                        if (tokens != null) {
                            console.log('User authenticated');
                            this.router.navigate(['home']);
                            alert('You are logged in successfully !');
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        alert('User Authentication failed');
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/sign-up/sign-up.component.html":
/*!************************************************!*\
  !*** ./src/app/sign-up/sign-up.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n  <div>\n      <h1 style=\"color: blue;\">Registrar</h1>\n  </div>\n  <div>\n      <label for=\"givenName\">First Name</label>\n      <input type=\"text\" name=\"givenName\" [(ngModel)]=\"givenName\" required placeholder=\"Enter your first name\">\n  </div>\n  <div>\n      <label for=\"familyName\">Last Name</label>\n      <input type=\"text\" name=\"familyName\" [(ngModel)]=\"familyName\" required placeholder=\"Enter your last name\">\n  </div>\n  <div>\n      <label for=\"email\">Email address</label>\n      <input type=\"email\" name=\"email\" [(ngModel)]=\"email\" required placeholder=\"Enter your email\">\n  </div>\n  <div>\n      <label for=\"password\">Password</label>\n      <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" required placeholder=\"Enter your password\">\n  </div>\n\n  <div>\n      <br />\n      <button (click)=\"register()\" class=\"btn btn-primary btn-block\" type=\"button\"> Register </button>\n  </div>\n</form>\n<p class=\"text-dark mb-0\">Already a member?<a href=\"/login\" class=\"text-primary ml-1\">Login</a></p>"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.scss":
/*!************************************************!*\
  !*** ./src/app/sign-up/sign-up.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.ts ***!
  \**********************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aws-amplify */ "./node_modules/aws-amplify/lib-esm/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(router) {
        this.router = router;
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent.prototype.register = function () {
        try {
            var user = aws_amplify__WEBPACK_IMPORTED_MODULE_2__["Auth"].signUp({
                username: this.email,
                password: this.password,
                attributes: {
                    email: this.email,
                    given_name: this.givenName,
                    family_name: this.familyName
                }
            });
            console.log({ user: user });
            alert('User signup completed , please check verify your email.');
            this.router.navigate(['login']);
        }
        catch (error) {
            console.log('error signing up:', error);
        }
    };
    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.scss */ "./src/app/sign-up/sign-up.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/assets/selphi/FPhi.Angular.Component/fesm5/facephi-selphi.js":
/*!**************************************************************************!*\
  !*** ./src/assets/selphi/FPhi.Angular.Component/fesm5/facephi-selphi.js ***!
  \**************************************************************************/
/*! exports provided: FacePhiSelphiComponent, FPhiSelphiConfiguration, FPhiSelphiConstants, FacePhiSelphiModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacePhiSelphiComponent", function() { return FacePhiSelphiComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FPhiSelphiConfiguration", function() { return FPhiSelphiConfiguration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FPhiSelphiConstants", function() { return FPhiSelphiConstants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacePhiSelphiModule", function() { return FacePhiSelphiModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return FPhiSelphiWidgetService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Modelo con la información de configuración del widget Selphi.
 */
var  /**
 * Modelo con la información de configuración del widget Selphi.
 */
FPhiSelphiConfiguration = /** @class */ (function () {
    function FPhiSelphiConfiguration() {
    }
    // #endregion
    // #region "Métodos públicos"
    /**
     * Genera una instancia de "FPhi.Selphi.ConfigurationManager" con los datos de configuración de la instancia actual para inicializar el widget.
     */
    // #endregion
    // #region "Métodos públicos"
    /**
     * Genera una instancia de "FPhi.Selphi.ConfigurationManager" con los datos de configuración de la instancia actual para inicializar el widget.
     * @return {?}
     */
    FPhiSelphiConfiguration.prototype.getNativeConfiguration = 
    // #endregion
    // #region "Métodos públicos"
    /**
     * Genera una instancia de "FPhi.Selphi.ConfigurationManager" con los datos de configuración de la instancia actual para inicializar el widget.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var configurationManager = new window["FPhi"].Selphi.ConfigurationManager();
        // Propiedades de configuración
        this.setNativeConfiguration(this.widgetContainer, configurationManager.setContainer, configurationManager);
        this.setNativeConfiguration(this.resourcesPath, configurationManager.setResourcesPath, configurationManager);
        this.setNativeConfiguration(this.graphPath, configurationManager.setGraphPath, configurationManager);
        this.setNativeConfiguration(this.language, configurationManager.setLanguage, configurationManager);
        this.setNativeConfiguration(this.dpiList, configurationManager.setDpiList, configurationManager);
        this.setNativeConfiguration(this.tryParseInt(this.cameraWidth), configurationManager.setCameraWidth, configurationManager);
        this.setNativeConfiguration(this.tryParseInt(this.cameraHeight), configurationManager.setCameraHeight, configurationManager);
        this.setNativeConfiguration(this.tryParseInt(this.cameraRotation), configurationManager.setCameraRotation, configurationManager);
        this.setNativeConfiguration(this.tryParseInt(this.cameraType), configurationManager.setCameraType, configurationManager);
        this.setNativeConfiguration(this.tutorial, configurationManager.setTutorial, configurationManager);
        this.setNativeConfiguration(this.tryParseInt(this.extractionMode), configurationManager.setMode, configurationManager);
        this.setNativeConfiguration(this.tryParseInt(this.livenessMode), configurationManager.setLivenessMode, configurationManager);
        this.setNativeConfiguration(this.tryParseInt(this.livenessPrecision), configurationManager.setLivenessPrecision, configurationManager);
        this.setNativeConfiguration(this.tryParseInt(this.livenessMoveInitialError), configurationManager.setLivenessMoveInitialError, configurationManager);
        this.setNativeConfiguration(this.tryParseFloat(this.livenessMoveInfoTime), configurationManager.setLivenessMoveInfoTime, configurationManager);
        this.setNativeConfiguration(this.interactible, configurationManager.setInteractible, configurationManager);
        this.setNativeConfiguration(this.tryParseFloat(this.registerTime), configurationManager.setRegisterTime, configurationManager);
        this.setNativeConfiguration(this.tryParseFloat(this.authenticateTime), configurationManager.setAuthenticateTime, configurationManager);
        this.setNativeConfiguration(this.imageFormat, configurationManager.setImageFormat, configurationManager);
        this.setNativeConfiguration(this.tryParseFloat(this.imageQuality), configurationManager.setImageQuality, configurationManager);
        this.setNativeConfiguration(this.logImages, configurationManager.setLogImages, configurationManager);
        this.setNativeConfiguration(this.tryParseFloat(this.cropFactor), configurationManager.setCropFactor, configurationManager);
        this.setNativeConfiguration(this.cropImage, configurationManager.setCropImage, configurationManager);
        this.setNativeConfiguration(this.tryParseInt(this.templateFormat), configurationManager.setTemplateFormat, configurationManager);
        this.setNativeConfiguration(this.stabilizationStage, configurationManager.setStabilizationStage, configurationManager);
        this.setNativeConfiguration(this.videoRecord, configurationManager.setVideoRecord, configurationManager);
        this.setNativeConfiguration(this.tryParseInt(this.videoRecordRate), configurationManager.setVideoRecordRate, configurationManager);
        this.setNativeConfiguration(this.tryParseFloat(this.videoRecordScale), configurationManager.setVideoRecordScale, configurationManager);
        this.setNativeConfiguration(this.tryParseInt(this.videoRecordType), configurationManager.setVideoRecordType, configurationManager);
        // Eventos
        this.setNativeConfiguration(this.onModuleLoaded, configurationManager.setOnModuleLoaded, configurationManager);
        this.setNativeConfiguration(this.onStabilizing, configurationManager.setOnStabilizing, configurationManager);
        this.setNativeConfiguration(this.onExtractionFinish, configurationManager.setOnExtractionFinish, configurationManager);
        this.setNativeConfiguration(this.onUserCancel, configurationManager.setOnUserCancel, configurationManager);
        this.setNativeConfiguration(this.onExceptionCaptured, configurationManager.setOnExceptionCaptured, configurationManager);
        this.setNativeConfiguration(this.onLivenessError, configurationManager.setOnLivenessError, configurationManager);
        this.setNativeConfiguration(this.onLivenessErrorButtonClick, configurationManager.setOnLivenessErrorButtonClick, configurationManager);
        this.setNativeConfiguration(this.onExtractionTimeout, configurationManager.setOnExtractionTimeout, configurationManager);
        this.setNativeConfiguration(this.onTimeoutErrorButtonClick, configurationManager.setOnTimeoutErrorButtonClick, configurationManager);
        this.setNativeConfiguration(this.onTrackStatus, configurationManager.setOnTrackStatus, configurationManager);
        return configurationManager;
    };
    // #endregion
    // #region "Métodos privados"
    // #endregion
    // #region "Métodos privados"
    /**
     * @private
     * @param {?} property
     * @param {?} configurationSetterFunc
     * @param {?=} context
     * @return {?}
     */
    FPhiSelphiConfiguration.prototype.setNativeConfiguration = 
    // #endregion
    // #region "Métodos privados"
    /**
     * @private
     * @param {?} property
     * @param {?} configurationSetterFunc
     * @param {?=} context
     * @return {?}
     */
    function (property, configurationSetterFunc, context) {
        if (context === void 0) { context = null; }
        if (property === null || property === undefined)
            return;
        /** @type {?} */
        var setterFunc = context ? configurationSetterFunc.bind(context) : configurationSetterFunc;
        setterFunc(property);
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    FPhiSelphiConfiguration.prototype.tryParseInt = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var intValue = parseInt(value);
        return !isNaN(intValue) ? intValue : value;
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    FPhiSelphiConfiguration.prototype.tryParseFloat = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var floatValue = parseFloat(value);
        return !isNaN(floatValue) ? floatValue : value;
    };
    return FPhiSelphiConfiguration;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        var subscription = Object(rxjs_index__WEBPACK_IMPORTED_MODULE_1__["timer"])(delayTime, pollTime)
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FPhiSelphiWidgetService = /** @class */ (function () {
    // #endregion
    // #region "Constructores"
    function FPhiSelphiWidgetService(document, rendererFactory) {
        this.document = document;
        this.rendererFactory = rendererFactory;
        this._renderer = this.rendererFactory.createRenderer(null, null);
    }
    Object.defineProperty(FPhiSelphiWidgetService.prototype, "fPhiSelphiNamespace", {
        // #endregion
        // #region "Propiedades"
        get: 
        // #endregion
        // #region "Propiedades"
        /**
         * @private
         * @return {?}
         */
        function () { return window["FPhi"] && window["FPhi"].Selphi ? window["FPhi"].Selphi : undefined; },
        set: /**
         * @private
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (window["FPhi"])
                window["FPhi"].Selphi = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FPhiSelphiWidgetService.prototype, "fPhiWidgetScriptPath", {
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
    FPhiSelphiWidgetService.prototype.loadControl = 
    // #endregion
    // #region "Métodos públicos"
    /**
     * Realiza la carga dinámica del recurso javascript del widget web.
     * @param {?} basePath Ruta base de la carpeta de los ficheros del widget.
     * @return {?}
     */
    function (basePath) {
        var _this = this;
        //console.log(`>>>> FPhiSelphiWidgetService :: loadControl --> basePath: ${basePath}`);
        this._assetsBasePath = basePath;
        /** @type {?} */
        var fPhiWidgetScript = this._renderer.createElement("script");
        this._renderer.setAttribute(fPhiWidgetScript, "src", this.fPhiWidgetScriptPath);
        this._renderer.setAttribute(fPhiWidgetScript, "type", "text/javascript");
        this._renderer.appendChild(this.document.body, fPhiWidgetScript);
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((/**
         * @param {?} subscriber
         * @return {?}
         */
        function (subscriber) {
            RxjsHelper.poll(5, (/**
             * @return {?}
             */
            function () { return _this.fPhiSelphiNamespace !== null && _this.fPhiSelphiNamespace !== undefined && _this.fPhiSelphiNamespace.Widget !== null && _this.fPhiSelphiNamespace.Widget !== undefined; }), (/**
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
    FPhiSelphiWidgetService.prototype.removeControl = /**
     * Elimina los recursos javascript del widget incluidos en el DOM de la página.
     * @return {?}
     */
    function () {
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
        //console.warn(`>>>> FPhiSelphiWidgetService :: Control removed`);
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
    FPhiSelphiWidgetService.prototype.createUserControl = /**
     * Crea una instancia del widget web nativo con los datos de configuración indicados.
     * @param {?} config Datos de configuración del widget.
     * @return {?}
     */
    function (config) {
        //console.warn(">>>> FPhiSelphiWidgetService :: createUserControl", config, config.getNativeConfiguration());
        this._fPhiWidgetConfiguration = config;
        this._fPhiWidget = new this.fPhiSelphiNamespace.Widget(config.getNativeConfiguration());
        //console.log(this._fPhiWidget);
        if (this._fPhiWidgetConfiguration.debugMode !== null && this._fPhiWidgetConfiguration.debugMode !== undefined)
            this._fPhiWidget.debug = this._fPhiWidgetConfiguration.debugMode;
        //console.log(this._fPhiWidget);
        return this;
    };
    /**
     * Inicia el widget.
     */
    /**
     * Inicia el widget.
     * @return {?}
     */
    FPhiSelphiWidgetService.prototype.startUserControl = /**
     * Inicia el widget.
     * @return {?}
     */
    function () {
        if (this._fPhiWidget)
            this._fPhiWidget.Start();
        return this;
    };
    /**
     * Detiene la ejecución del widget.
     */
    /**
     * Detiene la ejecución del widget.
     * @return {?}
     */
    FPhiSelphiWidgetService.prototype.stopUserControl = /**
     * Detiene la ejecución del widget.
     * @return {?}
     */
    function () {
        if (this._fPhiWidget)
            this._fPhiWidget.Stop();
        return this;
    };
    FPhiSelphiWidgetService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"], args: [{
                    providedIn: "root"
                },] }
    ];
    /** @nocollapse */
    FPhiSelphiWidgetService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["RendererFactory2"] }
    ]; };
    /** @nocollapse */ FPhiSelphiWidgetService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["defineInjectable"])({ factory: function FPhiSelphiWidgetService_Factory() { return new FPhiSelphiWidgetService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["RendererFactory2"])); }, token: FPhiSelphiWidgetService, providedIn: "root" });
    return FPhiSelphiWidgetService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FacePhiSelphiComponent = /** @class */ (function () {
    // #endregion
    // #endregion
    // #region "Constructores"
    function FacePhiSelphiComponent(widgetService) {
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
        this.onComponentLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Evento lanzado por el widget cuando se ha finalizado el proceso de carga e inicialización, tando del widget, como de los recursos asociados al mismo.
         */
        this.onModuleLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Evento lanzado durante los ciclos de estabilización de la imagen para la correcta realización de la captura.
         */
        this.onStabilizing = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Evento lanzado cuando el proceso de extracción ha finalizado correctamente. Devuelve el resultado de la captura.
         */
        this.onExtractionFinish = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Evento lanzado cuando el usuario cancela el proceso de extracción.
         */
        this.onUserCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Evento lanzado en caso de que se produzca un error interno del widget.
         */
        this.onExceptionCaptured = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Evento lanzado cuando el proceso de verificación de autenticidad por prueba de vida falla.
         */
        this.onLivenessError = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Evento lanzado cuando el proceso de verificación de autenticidad por prueba de vida falla y el usuario pulsa el botón de la pantalla de error mostrada.
         */
        this.onLivenessErrorButtonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Evento lanzado si el proceso de captura excede el tiempo máximo disponible.
         */
        this.onExtractionTimeout = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Evento lanzado cuando el proceso de captura excede el tiempo máximo disponible y el usuario pulsa el botón de la pantalla de error mostrada.
         */
        this.onTimeoutErrorButtonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Evento lanzado tras cualquier acción realizada por el usuario sobre la interfaz gráfica del widget o ante cualquier cambio de estado
         * durante el proceso de captura.
         */
        this.onTrackStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    Object.defineProperty(FacePhiSelphiComponent.prototype, "cssClass", {
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
    Object.defineProperty(FacePhiSelphiComponent.prototype, "widgetWidth", {
        get: /**
         * @return {?}
         */
        function () {
            return this.componentWidth
                ? typeof this.componentWidth === "string" && this.componentWidth.endsWith("%")
                    ? this.componentWidth
                    : parseFloat(this.componentWidth) !== NaN
                        ? parseFloat(this.componentWidth) + "px"
                        : this.componentWidth
                : "100%";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphiComponent.prototype, "widgetHeight", {
        get: /**
         * @return {?}
         */
        function () {
            return this.componentHeight
                ? typeof this.componentHeight === "string" && this.componentHeight.endsWith("%")
                    ? this.componentHeight
                    : parseFloat(this.componentHeight) !== NaN
                        ? parseFloat(this.componentHeight) + "px"
                        : this.componentHeight
                : "100%";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphiComponent.prototype, "resourcesPath", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.resourcesPath; },
        /**
         * Ruta donde está ubicado el fichero widget.xml y el resto de recursos personalizables del widget.
         */
        set: /**
         * Ruta donde está ubicado el fichero widget.xml y el resto de recursos personalizables del widget.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.resourcesPath = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphiComponent.prototype, "graphPath", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.graphPath; },
        /**
         * Ruta donde está ubicado el fichero graph.xml.
         */
        set: /**
         * Ruta donde está ubicado el fichero graph.xml.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.graphPath = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphiComponent.prototype, "language", {
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
    Object.defineProperty(FacePhiSelphiComponent.prototype, "dpiList", {
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
    Object.defineProperty(FacePhiSelphiComponent.prototype, "cameraWidth", {
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
    Object.defineProperty(FacePhiSelphiComponent.prototype, "cameraHeight", {
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
    Object.defineProperty(FacePhiSelphiComponent.prototype, "cameraRotation", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.cameraRotation; },
        /**
         * Rotación de la cámara.
         */
        set: /**
         * Rotación de la cámara.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.cameraRotation = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphiComponent.prototype, "cameraType", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.cameraType; },
        /**
         * Selector de tipo de cámara a utilizar para realizar la captura (frontal o trasera).
         */
        set: /**
         * Selector de tipo de cámara a utilizar para realizar la captura (frontal o trasera).
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.cameraType = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphiComponent.prototype, "tutorial", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.tutorial; },
        /**
         * Indica si el tutorial está disponible en el widget.
         */
        set: /**
         * Indica si el tutorial está disponible en el widget.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.tutorial = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphiComponent.prototype, "extractionMode", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.extractionMode; },
        /**
         * Modo de extracción o flujo de ejecución utilizado por el widget.
         */
        set: /**
         * Modo de extracción o flujo de ejecución utilizado por el widget.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.extractionMode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphiComponent.prototype, "livenessMode", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.livenessMode; },
        /**
         * Modos de verificación de prueba de vida utilizado por el widget.
         */
        set: /**
         * Modos de verificación de prueba de vida utilizado por el widget.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.livenessMode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphiComponent.prototype, "livenessPrecision", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.livenessPrecision; },
        /**
         *
         */
        set: /**
         *
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.livenessPrecision = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphiComponent.prototype, "livenessMoveInitialError", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.livenessMoveInitialError; },
        /**
         *
         */
        set: /**
         *
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.livenessMoveInitialError = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphiComponent.prototype, "livenessMoveInfoTime", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.livenessMoveInfoTime; },
        /**
         *
         */
        set: /**
         *
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.livenessMoveInfoTime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphiComponent.prototype, "interactible", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.interactible; },
        /**
         * Indica si el widget permite la interacción con el usuario.
         */
        set: /**
         * Indica si el widget permite la interacción con el usuario.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.interactible = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphiComponent.prototype, "registerTime", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.registerTime; },
        /**
         * Tiempo de registro en segundos.
         */
        set: /**
         * Tiempo de registro en segundos.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.registerTime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphiComponent.prototype, "authenticateTime", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.authenticateTime; },
        /**
         * Tiempo de autenticación en segundos.
         */
        set: /**
         * Tiempo de autenticación en segundos.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.authenticateTime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphiComponent.prototype, "imageFormat", {
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
    Object.defineProperty(FacePhiSelphiComponent.prototype, "imageQuality", {
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
    Object.defineProperty(FacePhiSelphiComponent.prototype, "logImages", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.logImages; },
        /**
         *
         */
        set: /**
         *
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.logImages = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphiComponent.prototype, "cropFactor", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.cropFactor; },
        /**
         * Factor de recorte de las imágenes devueltas por el widget.
         */
        set: /**
         * Factor de recorte de las imágenes devueltas por el widget.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.cropFactor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphiComponent.prototype, "cropImage", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.cropImage; },
        /**
         * Indica si el widget debe recortar las imágenes capturadas, o no.
         */
        set: /**
         * Indica si el widget debe recortar las imágenes capturadas, o no.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.cropImage = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphiComponent.prototype, "templateFormat", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.templateFormat; },
        /**
         * Formato de salida de la información de template generada por el widget.
         */
        set: /**
         * Formato de salida de la información de template generada por el widget.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.templateFormat = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphiComponent.prototype, "stabilizationStage", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.stabilizationStage; },
        /**
         * Activa la fase de estabilización previa a la captura. Por defecto, la estabilización estará desactivada.
         * En caso de haber seleccionado LivenessMode==Move, este parámetro no se tendrá en cuenta y siempre se realizará fase de estabilizado.
         */
        set: /**
         * Activa la fase de estabilización previa a la captura. Por defecto, la estabilización estará desactivada.
         * En caso de haber seleccionado LivenessMode==Move, este parámetro no se tendrá en cuenta y siempre se realizará fase de estabilizado.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.stabilizationStage = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphiComponent.prototype, "videoRecord", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.videoRecord; },
        /**
         * Indica si el widget debe grabar la sesión del usuario en video.
         */
        set: /**
         * Indica si el widget debe grabar la sesión del usuario en video.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.videoRecord = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphiComponent.prototype, "videoRecordRate", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.videoRecordRate; },
        /**
         * Frecuencia de grabación (en frames por segundo).
         */
        set: /**
         * Frecuencia de grabación (en frames por segundo).
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.videoRecordRate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphiComponent.prototype, "videoRecordScale", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.videoRecordScale; },
        /**
         * Factor de escalado aplicado sobre las capturas realizadas para la generación del video.
         * Toma valores porcentuales de 0.0 a 1.0 (que equivaldría a una escala del 100% de resolución de cámara seleccionada).
         */
        set: /**
         * Factor de escalado aplicado sobre las capturas realizadas para la generación del video.
         * Toma valores porcentuales de 0.0 a 1.0 (que equivaldría a una escala del 100% de resolución de cámara seleccionada).
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.videoRecordScale = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphiComponent.prototype, "videoRecordType", {
        get: /**
         * @return {?}
         */
        function () { return this._widgetConfiguration.videoRecordType; },
        /**
         * Tipo de salida del video generado. Los posibles valores se tomarán del enumerado "FPhi.Selphi.RecordType".
         */
        set: /**
         * Tipo de salida del video generado. Los posibles valores se tomarán del enumerado "FPhi.Selphi.RecordType".
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widgetConfiguration.videoRecordType = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacePhiSelphiComponent.prototype, "debugMode", {
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
    FacePhiSelphiComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        //console.warn(`>>>> [facephi-selphi] ngOnInit { autoLoadLibResources: ${this.autoLoadLibResources} }`, this.widgetContainer.nativeElement);
        //console.log(`widgetContainer.offsetWidth: ${(this.widgetContainer.nativeElement as any).offsetWidth}`);
        //console.log(`widgetContainer.offsetHeight: ${(this.widgetContainer.nativeElement as any).offsetHeight}`);
        var _this = this;
        this._widgetConfiguration.widgetContainer = this.widgetContainer.nativeElement;
        this.setupEvents();
        /** @type {?} */
        var widgetInitFunc = (/**
         * @return {?}
         */
        function () {
            //console.warn(">>>> [facephi-selphi]  CONTROL LOADED!!");
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
    FacePhiSelphiComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        //console.warn(">>>> [facephi-selphi] ngOnDestroy");
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
    FacePhiSelphiComponent.prototype.setupEvents = 
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
        this._widgetConfiguration.onStabilizing = (/**
         * @param {?} stabilizingResult
         * @return {?}
         */
        function (stabilizingResult) { _this.onStabilizing.emit(stabilizingResult); });
        this._widgetConfiguration.onExtractionFinish = (/**
         * @param {?} extractionResult
         * @return {?}
         */
        function (extractionResult) { _this.onExtractionFinish.emit(extractionResult); });
        this._widgetConfiguration.onUserCancel = (/**
         * @return {?}
         */
        function () { _this.onUserCancel.emit(); });
        this._widgetConfiguration.onExceptionCaptured = (/**
         * @param {?} exceptionResult
         * @return {?}
         */
        function (exceptionResult) { _this.onExceptionCaptured.emit(exceptionResult); });
        this._widgetConfiguration.onLivenessError = (/**
         * @param {?} livenessErrorResult
         * @return {?}
         */
        function (livenessErrorResult) { _this.onLivenessError.emit(livenessErrorResult); });
        this._widgetConfiguration.onLivenessErrorButtonClick = (/**
         * @return {?}
         */
        function () { _this.onLivenessErrorButtonClick.emit(); });
        this._widgetConfiguration.onExtractionTimeout = (/**
         * @param {?} extractionTimeoutResult
         * @return {?}
         */
        function (extractionTimeoutResult) { _this.onExtractionTimeout.emit(extractionTimeoutResult); });
        this._widgetConfiguration.onTimeoutErrorButtonClick = (/**
         * @return {?}
         */
        function () { _this.onTimeoutErrorButtonClick.emit(); });
        this._widgetConfiguration.onTrackStatus = (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onTrackStatus.emit(eventData); });
        return this;
    };
    FacePhiSelphiComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                    selector: "facephi-selphi",
                    template: "<div #widgetContainer\n     [style.width]=\"widgetWidth\"\n     [style.height]=\"widgetHeight\"\n     [ngClass]=\"containerCssClass\">\n</div>\n\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    FacePhiSelphiComponent.ctorParameters = function () { return [
        { type: FPhiSelphiWidgetService }
    ]; };
    FacePhiSelphiComponent.propDecorators = {
        cssClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ["class",] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"], args: ["class",] }],
        componentWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ["width",] }],
        componentHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ["height",] }],
        widgetContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["widgetContainer",] }],
        containerCssClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        widgetLibPath: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        autoLoadLibResources: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        resourcesPath: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        graphPath: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        language: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        dpiList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        cameraWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        cameraHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        cameraRotation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        cameraType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        tutorial: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        extractionMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        livenessMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        livenessPrecision: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        livenessMoveInitialError: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        livenessMoveInfoTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        interactible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        registerTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        authenticateTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        imageFormat: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        imageQuality: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        logImages: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        cropFactor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        cropImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        templateFormat: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        stabilizationStage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        videoRecord: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        videoRecordRate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        videoRecordScale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        videoRecordType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        debugMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        onComponentLoaded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        onModuleLoaded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        onStabilizing: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        onExtractionFinish: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        onUserCancel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        onExceptionCaptured: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        onLivenessError: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        onLivenessErrorButtonClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        onExtractionTimeout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        onTimeoutErrorButtonClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        onTrackStatus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
    };
    return FacePhiSelphiComponent;
}());

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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FacePhiSelphiModule = /** @class */ (function () {
    function FacePhiSelphiModule() {
    }
    FacePhiSelphiModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                    declarations: [
                        FacePhiSelphiComponent
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
                    ],
                    exports: [
                        FacePhiSelphiComponent
                    ]
                },] }
    ];
    return FacePhiSelphiModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=facephi-selphi.js.map

/***/ }),

/***/ "./src/assets/selphid/FPhi.Angular.Component/fesm5/facephi-selphid.js":
/*!****************************************************************************!*\
  !*** ./src/assets/selphid/FPhi.Angular.Component/fesm5/facephi-selphid.js ***!
  \****************************************************************************/
/*! exports provided: FacePhiSelphIdComponent, FPhiSelphIdConfiguration, FPhiSelphIdDocumentDimensions, FPhiSelphIdConstants, FPhiSelphIdWidgetService, FacePhiSelphIdModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacePhiSelphIdComponent", function() { return FacePhiSelphIdComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FPhiSelphIdConfiguration", function() { return FPhiSelphIdConfiguration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FPhiSelphIdDocumentDimensions", function() { return FPhiSelphIdDocumentDimensions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FPhiSelphIdConstants", function() { return FPhiSelphIdConstants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FPhiSelphIdWidgetService", function() { return FPhiSelphIdWidgetService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacePhiSelphIdModule", function() { return FacePhiSelphIdModule; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        var subscription = Object(rxjs_index__WEBPACK_IMPORTED_MODULE_2__["timer"])(delayTime, pollTime)
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((/**
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((/**
         * @param {?} response
         * @return {?}
         */
        function (response) { return response.status !== 403; })));
    };
    // #region "Atributos"
    FPhiSelphIdWidgetService.licenseCheckUrl = "https://ecertic.idcapture.es/auth";
    FPhiSelphIdWidgetService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: "root"
                },] }
    ];
    /** @nocollapse */
    FPhiSelphIdWidgetService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["RendererFactory2"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
    ]; };
    /** @nocollapse */ FPhiSelphIdWidgetService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function FPhiSelphIdWidgetService_Factory() { return new FPhiSelphIdWidgetService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_3__["RendererFactory2"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); }, token: FPhiSelphIdWidgetService, providedIn: "root" });
    return FPhiSelphIdWidgetService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Modelo con la información de configuración del widget Selphi.
 */
var  /**
 * Modelo con la información de configuración del widget Selphi.
 */
FPhiSelphIdConfiguration = /** @class */ (function () {
    function FPhiSelphIdConfiguration() {
        // #region "Propiedades"
        /**
         * Activa el modo de depuración del widget, en el que se mostrarán mensajes informativos en la consola del navegador.
         */
        this.debugMode = false;
        // #endregion
    }
    // #endregion
    // #region "Métodos públicos"
    /**
     * Genera una instancia de "FPhi.SelphID.ConfigurationManager" con los datos de configuración de la instancia actual para inicializar el widget.
     */
    // #endregion
    // #region "Métodos públicos"
    /**
     * Genera una instancia de "FPhi.SelphID.ConfigurationManager" con los datos de configuración de la instancia actual para inicializar el widget.
     * @return {?}
     */
    FPhiSelphIdConfiguration.prototype.getNativeConfiguration = 
    // #endregion
    // #region "Métodos públicos"
    /**
     * Genera una instancia de "FPhi.SelphID.ConfigurationManager" con los datos de configuración de la instancia actual para inicializar el widget.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var configurationManager = new window["FPhi"].SelphID.ConfigurationManager();
        // Propiedades de configuración
        this.setNativeConfiguration(this.widgetContainer, configurationManager.setContainer, configurationManager);
        this.setNativeConfiguration(this.language, configurationManager.setLanguage, configurationManager);
        this.setNativeConfiguration(this.dpiList, configurationManager.setDpiList, configurationManager);
        this.setNativeConfiguration(this.captureMode, configurationManager.setMode, configurationManager);
        this.setNativeConfiguration(this.previewCapture, configurationManager.setPreview, configurationManager);
        this.setNativeConfiguration(this.documentDimensions, configurationManager.setDocumentDimensions, configurationManager);
        this.setNativeConfiguration(this.qualityThreshold, configurationManager.setQualityThreshold, configurationManager);
        this.setNativeConfiguration(this.cropFactor, configurationManager.setCropFactor, configurationManager);
        this.setNativeConfiguration(this.forceLandscape, configurationManager.setForceLandscape, configurationManager);
        this.setNativeConfiguration(this.canvasHD, configurationManager.setCanvasHD, configurationManager);
        this.setNativeConfiguration(this.initialTip, configurationManager.setInitialTip, configurationManager);
        this.setNativeConfiguration(this.cameraWidth, configurationManager.setCameraWidth, configurationManager);
        this.setNativeConfiguration(this.cameraHeight, configurationManager.setCameraHeight, configurationManager);
        this.setNativeConfiguration(this.cameraId, configurationManager.setCameraId, configurationManager);
        this.setNativeConfiguration(this.captureTimeout, configurationManager.setCaptureTimeout, configurationManager);
        this.setNativeConfiguration(this.captureRetries, configurationManager.setCaptureRetries, configurationManager);
        this.setNativeConfiguration(this.captureSensibility, configurationManager.setCaptureSensibility, configurationManager);
        this.setNativeConfiguration(this.imageFormat, configurationManager.setImageFormat, configurationManager);
        this.setNativeConfiguration(this.imageQuality, configurationManager.setImageQuality, configurationManager);
        // Eventos
        this.setNativeConfiguration(this.onModuleLoaded, configurationManager.setOnModuleLoaded, configurationManager);
        this.setNativeConfiguration(this.onExtractionFinished, configurationManager.setOnExtractionFinish, configurationManager);
        this.setNativeConfiguration(this.onUserCancelled, configurationManager.setOnUserCancel, configurationManager);
        this.setNativeConfiguration(this.onExceptionCaptured, configurationManager.setOnExceptionCaptured, configurationManager);
        this.setNativeConfiguration(this.onExtractionTimeout, configurationManager.setOnExtractionTimeout, configurationManager);
        this.setNativeConfiguration(this.onTrackStatus, configurationManager.setOnTrackStatus, configurationManager);
        return configurationManager;
    };
    // #endregion
    // #region "Métodos privados"
    // #endregion
    // #region "Métodos privados"
    /**
     * @private
     * @param {?} property
     * @param {?} configurationSetterFunc
     * @param {?=} context
     * @return {?}
     */
    FPhiSelphIdConfiguration.prototype.setNativeConfiguration = 
    // #endregion
    // #region "Métodos privados"
    /**
     * @private
     * @param {?} property
     * @param {?} configurationSetterFunc
     * @param {?=} context
     * @return {?}
     */
    function (property, configurationSetterFunc, context) {
        if (context === void 0) { context = null; }
        if (property === null || property === undefined)
            return;
        /** @type {?} */
        var setterFunc = context ? configurationSetterFunc.bind(context) : configurationSetterFunc;
        setterFunc(property);
    };
    return FPhiSelphIdConfiguration;
}());
/**
 * Datos de dimensiones del documento capturado por el widget.
 */
var  /**
 * Datos de dimensiones del documento capturado por el widget.
 */
FPhiSelphIdDocumentDimensions = /** @class */ (function () {
    function FPhiSelphIdDocumentDimensions() {
    }
    return FPhiSelphIdDocumentDimensions;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        this.onComponentLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Evento lanzado por el widget cuando se ha finalizado el proceso de carga e inicialización, tando del widget, como de los recursos asociados al mismo.
         */
        this.onModuleLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Evento lanzado cuando el proceso de extracción ha finalizado correctamente. Devuelve el resultado de la captura.
         */
        this.onExtractionFinished = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Evento lanzado cuando el usuario cancela el proceso de extracción.
         */
        this.onUserCancelled = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Evento lanzado en caso de que se produzca un error interno del widget.
         */
        this.onExceptionCaptured = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Evento lanzado si el proceso de captura excede el tiempo máximo disponible.
         */
        this.onExtractionTimeout = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Evento lanzado tras cualquier acción realizada por el usuario sobre la interfaz gráfica del widget o ante cualquier cambio de estado
         * durante el proceso de captura.
         */
        this.onTrackStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
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
        cssClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ["class",] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ["class",] }],
        componentWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ["width",] }],
        componentHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ["height",] }],
        widgetContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["widgetContainer",] }],
        containerCssClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        widgetLibPath: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        autoLoadLibResources: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        language: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        dpiList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        captureMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        previewCapture: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        documentDimensions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        qualityThreshold: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        cropFactor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        forceLandscape: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        canvasHD: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        initialTip: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        cameraWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        cameraHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        cameraId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        captureTimeout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        captureRetries: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        captureSensibility: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        imageFormat: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        imageQuality: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        debugMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        onComponentLoaded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        onModuleLoaded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        onExtractionFinished: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        onUserCancelled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        onExceptionCaptured: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        onExtractionTimeout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        onTrackStatus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
    };
    return FacePhiSelphIdComponent;
}());

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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FacePhiSelphIdModule = /** @class */ (function () {
    function FacePhiSelphIdModule() {
    }
    FacePhiSelphIdModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                    declarations: [
                        FacePhiSelphIdComponent
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
                    ],
                    exports: [
                        FacePhiSelphIdComponent
                    ]
                },] }
    ];
    return FacePhiSelphIdModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=facephi-selphid.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/csuarez/ADXFacePhiProto/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map