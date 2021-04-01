import { Component, OnInit } from '@angular/core';
import { FPhiSelphIdConstants, FPhiSelphIdWidgetService } from "facephi-selphid";

@Component({
  selector: 'app-adxselphi-id',
  templateUrl: './adxselphi-id.component.html',
  styleUrls: ['./adxselphi-id.component.scss']
})
export class ADXSelphiIdComponent implements OnInit {

  ngOnInit() {
  }

  fPhiSelphIdConstants = FPhiSelphIdConstants;
  objectEntriesFunc = Object.entries;

  readonly FPhiCameraResolutions = {
    res480p: { title: "640x480", width: 640, height: 480 },
    res600p: { title: "800x600", width: 800, height: 600 },
    res768p: { title: "1024x768", width: 1024, height: 768 },
    res720p: { title: "1280x720 (720p)", width: 1280, height: 720 },
    res1080p: { title: "1920x1080 (1080p)", width: 1920, height: 1080 },
  };

  isWidgetCaptureStarted: boolean = false;

  widgetCaptureMode: number = FPhiSelphIdConstants.CaptureMode.Full;
  widgetCameraResolution: string = "res720p";
  widgetCaptureSensibility: number = FPhiSelphIdConstants.CaptureSensibility.Auto;
  widgetPreviewCapture: boolean = true;
  widgetForceLandscape: boolean = false;
  widgetInitialTip: boolean = false;
  widgetDebugMode: boolean = false;

  get widgetCameraWidth(): number { return this.FPhiCameraResolutions[this.widgetCameraResolution].width; }
  get widgetCameraHeight(): number { return this.FPhiCameraResolutions[this.widgetCameraResolution].height; }

  constructor(
    private selphidWidgetService: FPhiSelphIdWidgetService
  ) { }

  onStartCapture() {
    this.selphidWidgetService.isWidgetLicensed()
      .subscribe(licensingResult => {
        if (licensingResult) {
          console.warn("[SelphID] Widget license OK");
          this.isWidgetCaptureStarted = true;
        }
        else alert("SelphID widget is not correctly licensed.");
      })
  }

  onStopCapture() {
    this.isWidgetCaptureStarted = false;
  }

  // Widget event handlers
  onModuleLoaded(eventData) {
    console.warn("[SelphID] onModuleLoaded");
    console.log(eventData);
  }

  onExtractionFinished(extractionResult) {
    console.warn("[SelphID] onExtractionFinished");
    console.log(extractionResult);

    console.log("Images returned: ", extractionResult.detail.images);
    for (let i = 0; i < extractionResult.detail.images.length; i++) {
      const img = extractionResult.detail.images[i];
      console.log(`Image ${i}: ${img.src}`);
    }

    this.isWidgetCaptureStarted = false;
  }

  onUserCancelled() {
    console.warn("[SelphID] onUserCancelled");
    this.isWidgetCaptureStarted = false;
  }

  onExceptionCaptured(exceptionResult) {
    console.warn("[SelphID] onExceptionCaptured");
    console.log(`exceptionType: ${exceptionResult.detail.exceptionType}`);
    console.log(`exceptionMessage: ${exceptionResult.detail.message}`);
    console.log(exceptionResult);

    this.isWidgetCaptureStarted = false;
  }

  onExtractionTimeout(eventInfo) {
    console.warn("[SelphID] onExtractionTimeout");
    console.log(eventInfo);
    this.isWidgetCaptureStarted = false;
  }

  public onTrackStatus(eventData) {
      let trackStatusCode = Object.entries(FPhiSelphIdConstants.TrackStatus).find(e => e[1] == eventData.detail.code);
      console.warn(`[SelphID] onTrackStatus (Code: ${trackStatusCode[1]} - ${trackStatusCode[0]}, Timestamp: ${eventData.detail.timeStamp}`);
      console.log(eventData);
  }

}
