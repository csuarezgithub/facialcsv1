for(var Module={onRuntimeInitialized:function(){self.livenessTimer=new Module.LivenessTimer,self.postMessage({cmd:"ready"})}},extractorLoaded=!1;0==extractorLoaded;)try{importScripts("FPhiExtractor.js"),extractorLoaded=!0}catch(e){extractorLoaded=!1,console.log("Try catch fired..............."),console.log(e)}var extractor=void 0,extractorLiveness=void 0,extractorLivenessMove=void 0,livenessTimer=void 0,lastExtractionResult=void 0;self.onmessage=function(e){if("detect"==e.data.cmd){var t={cmd:"detect"},a=Module.Image.getFPhiImage(e.data.data,e.data.height,e.data.width,Module.ImageFormat.RGBA_32bpp),s=self.extractor.detect(a);if(s){var i=s.get(0);if(t.sampleDiagnostic=i.getSampleDiagnostic().value,i.getSampleDiagnostic()==Module.SampleDiagnostic.Ok){var l=i.getFace(),o=i.getLeftEye(),n=i.getRightEye();null!=l&&(t.face={x:l.X,y:l.Y,width:l.Width,height:l.Height}),null!=o&&(t.leftEye={x:o.X,y:o.Y}),null!=n&&(t.rightEye={x:n.X,y:n.Y})}i.delete()}a.delete(),s.delete(),postMessage(t)}else if("extractNextSmart"==e.data.cmd){t={cmd:"extractNextSmart"},a=Module.Image.getFPhiImage(e.data.data,e.data.height,e.data.width,Module.ImageFormat.RGBA_32bpp),i=self.extractor.extractNextSmart(a);if(void 0!=self.lastExtractionResult&&self.lastExtractionResult.delete(),self.lastExtractionResult=i,t.sampleDiagnostic=i.getSampleDiagnostic().value,i.getSampleDiagnostic()==Module.SampleDiagnostic.Ok){l=i.getFace(),o=i.getLeftEye(),n=i.getRightEye();null!=l&&(t.face={x:l.X,y:l.Y,width:l.Width,height:l.Height}),null!=o&&(t.leftEye={x:o.X,y:o.Y}),null!=n&&(t.rightEye={x:n.X,y:n.Y});var r=i.getTemplate(),d=Module.getBytes(r);t.template=new Uint8Array(d),r.delete();var c=i.getTemplateRaw(),g=Module.getBytes(c);t.templateRaw=new Uint8Array(g),c.delete();var m=i.getTemplateInfo();t.templateScore=m.getTemplateScore(),t.facialScore=i.getFacialScore(),t.sunGlassesScore=m.getSunGlassesScore(),m.delete()}a.delete(),postMessage(t)}else if("initStreamExtraction"==e.data.cmd){if(self.extractor.stopStreamExtraction(),1==e.data.extractionMode){var v=Module.ExtractionMode.Register;(S=new Module.ExtractionOptions).setExtractionMode(v),S.setRawTemplates(1),self.extractor.initStreamExtractionSmartWithExtractionOptions(S),S.delete()}else{v=Module.ExtractionMode.Authenticate;(S=new Module.ExtractionOptions).setExtractionMode(v),S.setRawTemplates(1),0==e.data.livenessMode?S.setLivenessTag(0):S.setLivenessTag(1),self.extractor.initStreamExtractionSmartWithExtractionOptions(S),S.delete()}t={cmd:"initStreamExtraction"};postMessage(t)}else if("evaluateLiveness"==e.data.cmd){t={cmd:"evaluateLiveness"};for(var u=new Module.VectorImages,M=0;M<e.data.images.length;M++){a=Module.Image.getFPhiImage(e.data.images[M].pixels.data,e.data.images[M].height,e.data.images[M].width,Module.ImageFormat.RGBA_32bpp);u.push_back(a)}var f=self.livenessTimer.evaluate(),x=(r=self.lastExtractionResult.getTemplate(),self.extractorLiveness.evaluateLiveness(u,f,r));for(M=0;M<e.data.images.length;M++)u.get(M).delete();u.delete(),r.delete(),f.delete(),t.livenessDiagnostic=x.getLivenessDiagnostic().value,t.penalty=x.getPenalty(),x.delete(),postMessage(t)}else if("livenessTimerReset"==e.data.cmd)self.livenessTimer.reset(),postMessage({cmd:"livenessTimerReset"});else if("livenessTimerSetValues"==e.data.cmd)self.livenessTimer.setValues(e.data.timeLapse,e.data.fps,0),postMessage({cmd:"livenessTimerSetValues"});else if("livenessTimerAdd"==e.data.cmd){var p=self.livenessTimer.add(e.data.milliseconds);(E=self.livenessTimer.isFull())&&self.livenessTimer.evaluate();t={cmd:"livenessTimerAdd",status:p,isFull:E};postMessage(t)}else if("initLivenessMoveStabilization"==e.data.cmd)self.extractorLivenessMove.initLivenessHMCCStabilization(),this.postMessage({cmd:"initLivenessMoveStabilization"});else if("initLivenessMoveSequence"==e.data.cmd){v=Module.ExtractionMode.Authenticate;var S,h=Module.LivenessDetectionPrecision.Low;1==e.data.livenessPrecision&&(h=Module.LivenessDetectionPrecision.Medium),2==e.data.livenessPrecision&&(h=Module.LivenessDetectionPrecision.High),(S=new Module.ExtractionOptions).setExtractionMode(v),S.setRawTemplates(1),S.setLivenessTag(2),S.setLivenessDetectionPrecision(h),self.extractorLivenessMove.initLivenessHMCCSequence(S),this.postMessage({cmd:"initLivenessMoveSequence",livenessPrecision:h})}else if("nextLivenessMoveSequence"==e.data.cmd){var L=self.extractorLivenessMove.nextLivenessHMCCSequence(),y=0;switch(L.getLivenessHeadMovement()){case Module.LivenessHeadMovement.CenterLeft:y=1;break;case Module.LivenessHeadMovement.CenterDown:y=2;break;case Module.LivenessHeadMovement.CenterRight:y=3}L.delete(),this.postMessage({cmd:"nextLivenessMoveSequence",direction:y})}else if("nextLivenessMoveStabilization"==e.data.cmd){t={cmd:"nextLivenessMoveStabilization"},a=Module.Image.getFPhiImage(e.data.data,e.data.height,e.data.width,Module.ImageFormat.RGBA_32bpp),i=self.extractorLivenessMove.nextLivenessHMCCStabilization(a,performance.now());if(void 0!=self.lastExtractionResult&&self.lastExtractionResult.delete(),self.lastExtractionResult=i,t.sampleDiagnostic=i.getSampleDiagnostic().value,i.getSampleDiagnostic()==Module.SampleDiagnostic.Ok){r=i.getTemplate(),d=Module.getBytes(r);t.template=new Uint8Array(d),r.delete();c=i.getTemplateRaw(),g=Module.getBytes(c);t.templateRaw=new Uint8Array(g),c.delete();m=i.getTemplateInfo();t.templateScore=m.getTemplateScore(),t.facialScore=i.getFacialScore(),t.sunGlassesScore=m.getSunGlassesScore(),m.delete()}l=i.getFace(),o=i.getLeftEye(),n=i.getRightEye();1==i.getFaceAvailable()&&(t.face={x:l.X,y:l.Y,width:l.Width,height:l.Height}),1==i.getLeftEyeAvailable()&&(t.leftEye={x:o.X,y:o.Y}),1==i.getRightEyeAvailable()&&(t.rightEye={x:n.X,y:n.Y}),t.faceStabilized=i.getFaceStabilizedStatus(),a.delete(),postMessage(t)}else if("nextLivenessMoveImage"==e.data.cmd){t={cmd:"nextLivenessMoveImage"},a=Module.Image.getFPhiImage(e.data.data,e.data.height,e.data.width,Module.ImageFormat.RGBA_32bpp),i=self.extractorLivenessMove.nextLivenessHMCCImage(a);if(void 0!=self.lastExtractionResult&&self.lastExtractionResult.delete(),self.lastExtractionResult=i,t.sampleDiagnostic=i.getSampleDiagnostic().value,i.getSampleDiagnostic()==Module.SampleDiagnostic.Ok){l=i.getFace(),o=i.getLeftEye(),n=i.getRightEye();null!=l&&(t.face={x:l.X,y:l.Y,width:l.Width,height:l.Height}),null!=o&&(t.leftEye={x:o.X,y:o.Y}),null!=n&&(t.rightEye={x:n.X,y:n.Y});r=i.getTemplate(),d=Module.getBytes(r);t.template=new Uint8Array(d),r.delete();c=i.getTemplateRaw(),g=Module.getBytes(c);t.templateRaw=new Uint8Array(g),c.delete();m=i.getTemplateInfo();t.templateScore=m.getTemplateScore(),t.facialScore=i.getFacialScore(),t.sunGlassesScore=m.getSunGlassesScore(),m.delete()}a.delete(),postMessage(t)}else if("evaluateLivenessMove"==e.data.cmd){t={cmd:"evaluateLivenessMove"};var E,w=e.data.timer;self.livenessTimer.setValues(w.timeLapse,w.desiredFPS,w.initialOffset),self.livenessTimer.reset();for(M=0;M<w.timeCodes.length;M++)self.livenessTimer.add(w.timeCodes[M]);(E=self.livenessTimer.isFull())&&self.livenessTimer.evaluate();i=self.extractorLivenessMove.evaluateLivenessHMCChallenge(self.livenessTimer);void 0!=self.lastExtractionResult&&self.lastExtractionResult.delete(),self.lastExtractionResult=i,console.log(i);var T=i.getLivenessDiagnostic();if(console.log(T),t.livenessDiagnostic=T.value,t.sampleDiagnostic=i.getSampleDiagnostic().value,T==Module.LivenessDiagnostic.LivenessDetected){r=i.getTemplate(),d=Module.getBytes(r);t.template=new Uint8Array(d),r.delete();c=i.getTemplateRaw(),g=Module.getBytes(c);t.templateRaw=new Uint8Array(g),c.delete();m=i.getTemplateInfo();t.templateScore=m.getTemplateScore(),t.facialScore=i.getFacialScore(),t.sunGlassesScore=m.getSunGlassesScore(),m.delete()}postMessage(t)}else if("init"==e.data.cmd){var D=e.data.minIOD,R=e.data.maxIOD,I=e.data.cameraWidth,F=e.data.cameraHeight,A=(v=e.data.extractionMode,e.data.livenessMode),C=e.data.stabilizationStage;if(2!=A||0==v){var P=new Module.ExtractorConfigurationManager;P.setMinimumDistanceBetweenEyesAllowed(D),P.setImageQualityFilter(Module.ImageQualityFilter.Medium),P.setPatternQualityFilter(Module.PatternQualityFilter.Medium),P.setMinimumDistanceBetweenEyesAllowed(D),self.extractor=new Module.Extractor(P),P.delete()}1==A&&((P=new Module.ExtractorConfigurationManager).setMinimumDistanceBetweenEyesAllowed(D),P.setImageQualityFilter(Module.ImageQualityFilter.Medium),P.setLivenessDetectionPrecision(Module.LivenessDetectionPrecision.Low),P.setPatternQualityFilter(Module.PatternQualityFilter.Medium),self.extractorLiveness=new Module.Extractor(P),P.delete()),2!=A&&1!=C||(P=Module.ExtractorConfigurationManager.getSuggestedExtractorConfigurationManager(I,F),console.log("worker init minIOD="+P.getMinimumDistanceBetweenEyesAllowed()+" maxIOD="+P.getMaximumDistanceBetweenEyesAllowed()),P.setImageQualityFilter(Module.ImageQualityFilter.Low),self.extractorLivenessMove=new Module.Extractor(P),P.delete()),console.log("worker init minIOD="+D+" maxIOD="+R),postMessage({cmd:"init"})}else"destroy"==e.data.cmd?(console.log("destroy worker"),void 0!=self.extractor&&self.extractor.delete(),void 0!=self.extractorLiveness&&self.extractorLiveness.delete(),void 0!=self.extractorLivenessMove&&self.extractorLivenessMove.delete(),self.livenessTimer.delete(),void 0!=self.lastExtractionResult&&self.lastExtractionResult.delete(),Module=null,close()):postMessage({cmd:"unknownMessage"})};