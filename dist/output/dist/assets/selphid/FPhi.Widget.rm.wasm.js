if(!FPhi)var FPhi={};if(FPhi.SelphID||(FPhi.SelphID={}),void 0===FPhi.SelphID.ResourceManager){class ResourceManager{constructor(e,t,r,a,s,i,g){var l="";this.status=0,this.logDebug=!1,this.eventStatus=a,this.caller=r,this.baseURL=e,t.length>0&&(l=t+"."),this.widgetLoaded=0,this.languageCustomLoaded=0,this.languageDefaultLoaded=0,this.urlWidget=e+"widget.xml",this.urlLanguageCustom=e+"strings/strings."+l+"xml",this.urlLanguageDefault=e+"strings/strings.xml",this.resourceDict={},this.dpiList=s,this.browserDpi=i,this.scaleFactor=g;for(var n=163*i*g,u=this.dpiList.length-1,o=0;o<this.dpiList.length;o++)if(this.dpiList[o]>n){u=o;break}this.dpi=this.dpiList[u],this.imageScale=163/this.dpi,console.log("resourceManager.dpi ="+this.dpi),console.log("resourceManager.imageScale ="+this.imageScale),this.xmlHttpWidget=new XMLHttpRequest,this.xmlHttpWidget.rm=this,this.xmlHttpWidget.onreadystatechange=this.readyEvent,this.xmlHttpWidget.open("GET",this.urlWidget),this.xmlHttpWidget.send(null),this.xmlHttpLanguageCustom=new XMLHttpRequest,this.xmlHttpLanguageCustom.rm=this,this.xmlHttpLanguageCustom.onreadystatechange=this.readyEvent,this.xmlHttpLanguageCustom.open("GET",this.urlLanguageCustom),this.xmlHttpLanguageCustom.send(null),this.xmlHttpLanguageDefault=new XMLHttpRequest,this.xmlHttpLanguageDefault.rm=this,this.xmlHttpLanguageDefault.onreadystatechange=this.readyEvent,this.xmlHttpLanguageDefault.open("GET",this.urlLanguageDefault),this.xmlHttpLanguageDefault.send(null)}readyEvent(e){if(4==e.target.readyState&&200==e.target.status){var t=new DOMParser;e.target.responseURL==e.target.rm.urlWidget?(e.target.rm.widgetLoaded=1,e.target.rm.xmlDoc=t.parseFromString(e.target.responseText,"text/xml")):e.target.responseURL==e.target.rm.urlLanguageCustom?e.target.rm.languageCustomLoaded=1:e.target.responseURL==e.target.rm.urlLanguageDefault&&(e.target.rm.languageDefaultLoaded=1)}else 4==e.target.readyState&&200!=e.target.status&&(e.target.responseURL==e.target.rm.urlWidget?e.target.rm.widgetLoaded=-1:e.target.responseURL==e.target.rm.urlLanguageCustom?e.target.rm.languageCustomLoaded=-1:e.target.responseURL==e.target.rm.urlLanguageDefault&&(e.target.rm.languageDefaultLoaded=-1));if(0!==e.target.rm.widgetLoaded&&(0!==e.target.rm.languageCustomLoaded||0!==e.target.rm.languageDefaultLoaded)){if(-1==e.target.rm.widgetLoaded)e.target.rm.status=-1;else if(1==e.target.rm.languageCustomLoaded){var r=e.target.rm.xmlHttpLanguageCustom.responseText;t=new DOMParser;e.target.rm.xmlLang=t.parseFromString(r,"text/xml"),e.target.rm.status=1}else if(1==e.target.rm.languageDefaultLoaded){r=e.target.rm.xmlHttpLanguageDefault.responseText,t=new DOMParser;e.target.rm.xmlLang=t.parseFromString(r,"text/xml"),e.target.rm.status=1}else e.target.rm.status=-1;if(1==e.target.rm.status){for(var a,s={},i=e.target.rm.xmlDoc.querySelectorAll("[font]"),g=0;g<i.length;g++)(a=i[g].getAttribute("font")).length>0&&(s[a]=a);if(e.target.rm.fontRequestVector=[],null==document.getElementById("FPhi_Widget_style")){var l,n=document.createElement("style");for(l in n.id="FPhi_Widget_style",s){var u=e.target.rm.getResourceUrlBase(s[l]),o=s[l],d=new XMLHttpRequest;d.open("GET",u,!1),d.send(),200==d.status&&n.appendChild(document.createTextNode("@font-face { font-family: '"+o+"'; src: url('"+u+"'); }"))}document.head.appendChild(n)}e.target.rm.eventStatus(e.target.rm.caller,!0)}else e.target.rm.eventStatus(e.target.rm.caller,!1)}}static httpGet(e,t){var r=new XMLHttpRequest;return r.onreadystatechange=t,r.open("GET",e),r.send(null),200!=r.status?"":r.responseText}getElement(e,t,r){if("facephi-widget-conf"==e)return this.xmlDoc.getElementsByTagName("facephi-widget-conf")[0];var a="_portrait";r&&(a="_landscape");var s=this.xmlDoc.querySelector("[id="+e+a+"]");if(void 0!=s&&null!=s||(s=this.xmlDoc.querySelector("[id="+e+"]")),this.logDebug&&console.log(s),void 0!=s){var i=s.querySelector("[id="+t+"]");return this.logDebug&&console.log(i),void 0==i?void console.log("ResourceManager::getElement Error. elementId="+t+" undefined. Please verify resource's bundle."):i}console.log("ResourceManager::getElement Error. viewId="+e+" undefined. Please verify resource's bundle.")}getElements(e,t){var r="_portrait";t&&(r="_landscape");var a=this.xmlDoc.querySelector("[id="+e+r+"]");void 0!=a&&null!=a||(a=this.xmlDoc.querySelector("[id="+e+"]"));var s=[];if(a)for(var i=0;i<a.childNodes.length;i++)if(a.childNodes[i].nodeType==Node.ELEMENT_NODE){var g=null;void 0!==a.childNodes[i].attributes.mode&&(g=a.childNodes[i].attributes.mode.value),s.push({type:a.childNodes[i].nodeName,id:a.childNodes[i].attributes.id.value,mode:g})}return 0==s.length&&console.log("FPhi.ResourceManager: No elements for view="+e),s}isAttributeAvailable(e,t,r,a){var s=null;if("facephi-widget-conf"==e){s=this.xmlDoc.getElementsByTagName("facephi-widget-conf")[0]}else{var i="_portrait";r&&(i="_landscape");var g=this.xmlDoc.querySelector("[id="+e+i+"]");if(void 0!=g&&null!=g||(g=this.xmlDoc.querySelector("[id="+e+"]")),void 0!=g){var l=g.querySelector("[id="+t+"]");void 0!=l&&(s=l)}}if(void 0==s||null==s)return!1;var n=s.getAttribute(a);return void 0!=n&&null!=n}getSetupColor(e,t,r,a){var s=this.getElement(e,t,r);if(void 0==s||null==s)return null;var i,g,l,n,u=s.getAttribute(a);if(void 0==u||null==u)return null;9==u.length&&(i=parseInt(u.substring(1,3),16),g=parseInt(u.substring(3,5),16),l=parseInt(u.substring(5,7),16),n=parseInt(u.substring(7,9),16),u="rgba("+i+", "+g+", "+l+", "+(n/=255).toFixed(3)+")");return u}getSetupColorWithAlpha(e,t,r,a,s){var i=this.getElement(e,t,r).getAttribute(a);return i="rgba("+parseInt(i.substring(1,3),16)+", "+parseInt(i.substring(3,5),16)+", "+parseInt(i.substring(5,7),16)+", "+s.toFixed(3)+")"}getSetupFloat(e,t,r,a){var s=this.getElement(e,t,r).getAttribute(a);return parseFloat(s)}getSetupAlign(e,t,r,a){return this.getElement(e,t,r).getAttribute(a)}getSetupResourceId(e,t,r,a){var s=this.getElement(e,t,r).getAttribute(a),i=s.split(",");return i&&i.length>1?i[Math.floor(Math.random()*i.length)].trim():s}getSetupTextId(e,t,r,a){return this.getElement(e,t,r).getAttribute(a)}getSetupNodeType(e,t,r){return this.getElement(e,t,r).getAttribute("content_type")}getResourceUrl(e){return this.baseURL+"resources/"+this.dpi+"dpi/"+e}getResourceUrlBase(e){return this.baseURL+"resources/"+this.dpiList[0]+"dpi/"+e}getImageScale(){return this.imageScale}getImage(e){if(!(e in this.resourceDict)){var t=this.getResourceUrl(e),r=document.createElement("img");r.src=t,this.resourceDict[e]=r}return this.resourceDict[e]}translate(e){var t=e,r=this.xmlLang.querySelector("[id="+e+"]");return this.logDebug&&console.log(r),null!=r&&(t=r.textContent),t}}FPhi.SelphID.ResourceManager=ResourceManager}