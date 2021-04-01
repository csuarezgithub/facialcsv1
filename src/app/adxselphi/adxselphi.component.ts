import { Component, OnInit } from '@angular/core';
import { FPhiSelphiConstants } from "facephi-selphi";

@Component({
  selector: 'app-adxselphi',
  templateUrl: './adxselphi.component.html',
  styleUrls: ['./adxselphi.component.scss']
})
export class ADXSelphiComponent implements OnInit {

  FPhiSelphiConstants = FPhiSelphiConstants;
  objectEntriesFunc = Object.entries;

  readonly FPhiCameraResolutions = {
    res480p: { title: "640x480", width: 640, height: 480 },
    res600p: { title: "800x600", width: 800, height: 600 },
    res768p: { title: "1024x768", width: 1024, height: 768 },
    res720p: { title: "1280x720 (720p)", width: 1280, height: 720 },
    res1080p: { title: "1920x1080 (1080p)", width: 1920, height: 1080 },
  };

  isWidgetCaptureStarted: boolean = false;

  widgetExtractionMode: number = FPhiSelphiConstants.ExtractionMode.Authenticate;
  widgetLivenessMode: number = FPhiSelphiConstants.LivenessMode.Blink;
  widgetInteractible: boolean = true;
  widgetTutorial: boolean = false;
  widgetStabilizationStage: boolean = false;
  widgetVideoRecord: boolean = false;
  widgetDebugMode: boolean = false;

  widgetCameraResolution: string = "res720p";
  widgetCameraType: number = FPhiSelphiConstants.CameraType.Front;

  get widgetCameraWidth(): number { return this.FPhiCameraResolutions[this.widgetCameraResolution].width; }
  get widgetCameraHeight(): number { return this.FPhiCameraResolutions[this.widgetCameraResolution].height; }

  onStartCapture() { this.isWidgetCaptureStarted = true; }
  onStopCapture() { this.isWidgetCaptureStarted = false; }

  // Widget event handlers
  public onModuleLoaded(eventData) {
    console.warn("[Selphi] onModuleLoaded");
    console.log(eventData);
  }

  public onStabilizing(stabilizingResult) {
    console.warn("[Selphi] onStabilizing");
    console.log(stabilizingResult);
  }

  public onExtractionFinish(extractionResult) {
    console.warn("[Selphi] onExtractionFinish");
    console.log(extractionResult);

    console.log("Images returned: ", extractionResult.detail.images);
    for (let i = 0; i < extractionResult.detail.images.length; i++) {
      const img = extractionResult.detail.images[i];
      console.log(`Image ${i}: ${img.src}`);
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
  }

  public onUserCancel() {
    console.warn("[Selphi] onUserCancel");
    this.isWidgetCaptureStarted = false;
  }

  public onExceptionCaptured(exceptionResult) {
    console.warn("[Selphi] onExceptionCaptured");
    console.log(`exceptionType: ${exceptionResult.detail.exceptionType}`);
    console.log(`exceptionMessage: ${exceptionResult.detail.message}`);
    console.log(exceptionResult);

    this.isWidgetCaptureStarted = false;
  }

  public onLivenessError(livenessErrorResult) {
    console.warn("[Selphi] onLivenessError");
    console.log(livenessErrorResult);

    switch (livenessErrorResult.detail.livenessErrorType) {
      case FPhiSelphiConstants.LivenessDiagnostic.Unsuccess:
        console.log("[Selphi] Liveness error: Blink or movement not detected");
        break;
      case FPhiSelphiConstants.LivenessDiagnostic.UnsuccessLowPerformance:
        console.log("[Selphi] Liveness error: Low performance");
        break;
      case FPhiSelphiConstants.LivenessDiagnostic.UnsuccessGlasses:
        console.log("[Selphi] Liveness error: Glasses detected");
        break;
      case FPhiSelphiConstants.LivenessDiagnostic.UnsuccessLight:
        console.log("[Selphi] Liveness error: Bad lighting conditions");
        break;
      case FPhiSelphiConstants.LivenessDiagnostic.UnsuccessNoMovement:
        console.log("[Selphi] Liveness error: No movement");
        break;
      case FPhiSelphiConstants.LivenessDiagnostic.UnsuccessWrongDirection:
        console.log("[Selphi] Liveness error: Wrong direction");
        break;
      case FPhiSelphiConstants.LivenessDiagnostic.UnsuccessTooFar:
        console.log("[Selphi] Liveness error: Face too far");
        break;
    }
  }

  public onLivenessErrorButtonClick() {
    console.warn("[Selphi] onLivenessErrorButtonClick");
    this.isWidgetCaptureStarted = false;
  }

  public onExtractionTimeout(extractionTimeoutResult) {
    console.warn("[Selphi] onExtractionTimeout");
    console.log(extractionTimeoutResult);
  }

  public onTimeoutErrorButtonClick() {
    console.warn("[Selphi] onTimeoutErrorButtonClick");
    this.isWidgetCaptureStarted = false;
  }

  public onTrackStatus(eventData) {
      let trackStatusCode = Object.entries(FPhiSelphiConstants.TrackStatus).find(e => e[1] == eventData.detail.code);
      console.warn(`[Selphi] onTrackStatus (Code: ${trackStatusCode[1]} - ${trackStatusCode[0]}, Timestamp: ${eventData.detail.timeStamp}`);
      console.log(eventData);
  }

  ngOnInit() {
  }

}
