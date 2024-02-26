/*
* ============================================================================
*   
*   ID SW DEVELOPMENT , LG ELECTRONICS INC., PYEONGTAEK, KOREA
*   Copyright(c) 2019 by LG Electronics Inc.. All rights reserved.
*   
*   Harmony API, for handling external device on webOS Signage platform
*   
*   Author          : signagesupport@lge.com
*   Homepage        : http://webossignage.developer.lge.com
*   Modified Date   : 2019-05-21
*   Release Version : 1.41.2019-05-21
*   
* ============================================================================
*/
"use strict";var Temperature=function(){function e(){if(!window.PalmServiceBridge)throw": This platform is not webOS Signage."}var n,o,a,i={HARMONY_0000:"This external device is not supported on current platform (or firmware).",TEMPERATURE_0000:"Unknown event.",TEMPERATURE_0001:"Unable to get status.",TEMPERATURE_0100:"Unknown event.",TEMPERATURE_0101:"Unable to get value.",TEMPERATURE_0102:"Event handler is already set. Before set event handler, please remove current event handler.",TEMPERATURE_0103:"Callback as used for parameter is not a function.",TEMPERATURE_0200:"Temperature event handler is not registered yet."};function u(e,r){e&&"function"==typeof e&&(r.returnValue&&delete r.returnValue,r.subscribed&&delete r.subscribed,e(r))}function l(e,r,t){e&&"function"==typeof e&&(void 0===i[r]?e({errorCode:"UNKNOWN_ERROR",errorText:"Unknown error."}):"string"==typeof errorText?e({errorCode:r,errorText:i[r]+": "+t}):e({errorCode:r,errorText:i[r]}))}function c(e){return!(-1===e.errorCode&&-1<e.errorText.indexOf("Unknown method")&&-1<e.errorText.indexOf("for category"))}return e.prototype.setEventHandler=function(e,r){if(n&&"undefined"!=n)l(a,"TEMPERATURE_0102");else{if("function"==typeof e&&"function"==typeof r){o=e,a=r;var t="luna://com.webos.service.externaldevice/temperature/read";return(n=new PalmServiceBridge).url=t,n.onservicecallback=function(e){if("string"==typeof e){var r=JSON.parse(e);if(!1!==c(r))return!0===r.returnValue?void u(o,{value:r.value}):void l(a,"TEMPERATURE_0101");l(a,"HARMONY_0000")}else l(a,"TEMPERATURE_0100")},n.call(t,'{"subscribe":true}')}l(r,"TEMPERATURE_0103")}},e.prototype.removeEventHandler=function(e,r){return n&&"undefined"!=n?(n.cancel(),n=null,void u(e)):void l(r,"TEMPERATURE_0200")},e.prototype.getValue=function(t,n){var e=new PalmServiceBridge,r="luna://com.webos.service.externaldevice/temperature/read";return e.url=r,e.onservicecallback=function(e){if("string"==typeof e){var r=JSON.parse(e);if(!1!==c(r))return!0===r.returnValue?void u(t,{value:r.value}):void l(n,"TEMPERATURE_0101");l(n,"HARMONY_0000")}else l(n,"TEMPERATURE_0100")},e.call(r,"{}")},e.prototype.getStatus=function(t,n){var e=new PalmServiceBridge,r="luna://com.webos.service.externaldevice/temperature/getStatus";return e.url=r,e.onservicecallback=function(e){if("string"==typeof e){var r=JSON.parse(e);if(!1!==c(r))return!0===r.returnValue?void u(t,{attached:r.attached}):void l(n,"TEMPERATURE_0001");l(n,"HARMONY_0000")}else l(n,"TEMPERATURE_0000")},e.call(r,"{}")},e}();