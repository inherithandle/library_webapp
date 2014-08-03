/*************************************************************************************************
 *
 * INPORTS
 *
 *************************************************************************************************/
(function(){
	var imports=[
		//'/js/lib.e/util.all.js', // -> merge : common.js
		//'/js/lib.e/ui.all.js', //  -> merge : common.js
		//'/external/location.do', // /js/contents/common/common.info.js
		//'/js/careers.info.js',
		'/rec/dear/apply/comresume/common.info.jsp',
		'/js/contents/common/common.ui.manager.js'/*,
		'/js/contents/common/common.select.js', // -> merge : common.ui.manager.js
		'/js/contents/common/common.calendar.js', // -> merge : common.ui.manager.js
		'/js/contents/common/common.header.js', // -> merge : common.ui.manager.js
		'/js/contents/common/common.header.mobile.js', // -> merge : common.ui.manager.js
		'/js/contents/common/common.footer.js', // -> merge : common.ui.manager.js
		'/js/contents/common/common.footer.mobile.js', // -> merge : common.ui.manager.js
		'/js/contents/common/common.footer.links.js', // -> merge : common.ui.manager.js
		'/js/contents/common/common.location.js', // -> merge : common.ui.manager.js
		'/js/contents/common/common.slider.js', // -> merge : common.ui.manager.js
		'/js/contents/common/common.sns.js' // -> merge : common.ui.manager.js
		*/
	];

	for(var a=0, atotal=imports.length; a<atotal; a++){
		//document.write('<script src="'+imports[a]+'?cb='+new Date().getTime()+'" charset="utf-8"></'+'script>');
		document.write('<script src="'+imports[a]+'" charset="utf-8"></'+'script>');
	}
})();


/*************************************************************************************************
 *
 * UTIL-DELEGATE
 *
 *************************************************************************************************/
var Delegate={};

Delegate.create=function (delegateInstance, pointingMethod) {
	return function (){
		return pointingMethod.apply(delegateInstance, arguments);
	};
};


/*************************************************************************************************
 *
 * JQUERY-COOKIE
 *
 *************************************************************************************************/
;(function(e,h,k){function l(c){return c}function m(c){return decodeURIComponent(c.replace(n," "))}var n=/\+/g,d=e.cookie=function(c,b,a){if(b!==k){a=e.extend({},d.defaults,a);null===b&&(a.expires=-1);if("number"===typeof a.expires){var f=a.expires,g=a.expires=new Date;g.setDate(g.getDate()+f)}b=d.json?JSON.stringify(b):String(b);return h.cookie=[encodeURIComponent(c),"=",d.raw?b:encodeURIComponent(b),a.expires?"; expires="+a.expires.toUTCString():"",a.path?"; path="+a.path:"",a.domain?"; domain="+
a.domain:"",a.secure?"; secure":""].join("")}b=d.raw?l:m;a=h.cookie.split("; ");for(f=0;g=a[f]&&a[f].split("=");f++)if(b(g.shift())===c)return c=b(g.join("=")),d.json?JSON.parse(c):c;return null};d.defaults={};e.removeCookie=function(c,b){return null!==e.cookie(c,b)?(e.cookie(c,null,b),!0):!1}})(jQuery,document);


/*************************************************************************************************
 *
* JQUERY-FORM (v20130523)
*
*************************************************************************************************/
/*
* http://jquery.malsup.com/form/
* Copyright (c) 2013 M. Alsup; Dual licensed: MIT/GPL
* https://github.com/malsup/form#copyright-and-license
*/
;(function(e){"use strict";function t(t){var r=t.data;t.isDefaultPrevented()||(t.preventDefault(),e(this).ajaxSubmit(r))}function r(t){var r=t.target,a=e(r);if(!a.is("[type=submit],[type=image]")){var n=a.closest("[type=submit]");if(0===n.length)return;r=n[0]}var i=this;if(i.clk=r,"image"==r.type)if(void 0!==t.offsetX)i.clk_x=t.offsetX,i.clk_y=t.offsetY;else if("function"==typeof e.fn.offset){var o=a.offset();i.clk_x=t.pageX-o.left,i.clk_y=t.pageY-o.top}else i.clk_x=t.pageX-r.offsetLeft,i.clk_y=t.pageY-r.offsetTop;setTimeout(function(){i.clk=i.clk_x=i.clk_y=null},100)}function a(){if(e.fn.ajaxSubmit.debug){var t="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(t):window.opera&&window.opera.postError&&window.opera.postError(t)}}var n={};n.fileapi=void 0!==e("<input type='file'/>").get(0).files,n.formdata=void 0!==window.FormData;var i=!!e.fn.prop;e.fn.attr2=function(){if(!i)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},e.fn.ajaxSubmit=function(t){function r(r){var a,n,i=e.param(r,t.traditional).split("&"),o=i.length,s=[];for(a=0;o>a;a++)i[a]=i[a].replace(/\+/g," "),n=i[a].split("="),s.push([decodeURIComponent(n[0]),decodeURIComponent(n[1])]);return s}function o(a){for(var n=new FormData,i=0;a.length>i;i++)n.append(a[i].name,a[i].value);if(t.extraData){var o=r(t.extraData);for(i=0;o.length>i;i++)o[i]&&n.append(o[i][0],o[i][1])}t.data=null;var s=e.extend(!0,{},e.ajaxSettings,t,{contentType:!1,processData:!1,cache:!1,type:u||"POST"});t.uploadProgress&&(s.xhr=function(){var e=jQuery.ajaxSettings.xhr();return e.upload&&e.upload.addEventListener("progress",function(e){var r=0,a=e.loaded||e.position,n=e.total;e.lengthComputable&&(r=Math.ceil(100*(a/n))),t.uploadProgress(e,a,n,r)},!1),e}),s.data=null;var l=s.beforeSend;return s.beforeSend=function(e,t){t.data=n,l&&l.call(this,e,t)},e.ajax(s)}function s(r){function n(e){var t=null;try{e.contentWindow&&(t=e.contentWindow.document)}catch(r){a("cannot get iframe.contentWindow document: "+r)}if(t)return t;try{t=e.contentDocument?e.contentDocument:e.document}catch(r){a("cannot get iframe.contentDocument: "+r),t=e.document}return t}function o(){function t(){try{var e=n(g).readyState;a("state = "+e),e&&"uninitialized"==e.toLowerCase()&&setTimeout(t,50)}catch(r){a("Server abort: ",r," (",r.name,")"),s(D),j&&clearTimeout(j),j=void 0}}var r=f.attr2("target"),i=f.attr2("action");w.setAttribute("target",d),u||w.setAttribute("method","POST"),i!=m.url&&w.setAttribute("action",m.url),m.skipEncodingOverride||u&&!/post/i.test(u)||f.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),m.timeout&&(j=setTimeout(function(){T=!0,s(k)},m.timeout));var o=[];try{if(m.extraData)for(var l in m.extraData)m.extraData.hasOwnProperty(l)&&(e.isPlainObject(m.extraData[l])&&m.extraData[l].hasOwnProperty("name")&&m.extraData[l].hasOwnProperty("value")?o.push(e('<input type="hidden" name="'+m.extraData[l].name+'">').val(m.extraData[l].value).appendTo(w)[0]):o.push(e('<input type="hidden" name="'+l+'">').val(m.extraData[l]).appendTo(w)[0]));m.iframeTarget||(v.appendTo("body"),g.attachEvent?g.attachEvent("onload",s):g.addEventListener("load",s,!1)),setTimeout(t,15);try{w.submit()}catch(c){var p=document.createElement("form").submit;p.apply(w)}}finally{w.setAttribute("action",i),r?w.setAttribute("target",r):f.removeAttr("target"),e(o).remove()}}function s(t){if(!x.aborted&&!F){if(M=n(g),M||(a("cannot access response document"),t=D),t===k&&x)return x.abort("timeout"),S.reject(x,"timeout"),void 0;if(t==D&&x)return x.abort("server abort"),S.reject(x,"error","server abort"),void 0;if(M&&M.location.href!=m.iframeSrc||T){g.detachEvent?g.detachEvent("onload",s):g.removeEventListener("load",s,!1);var r,i="success";try{if(T)throw"timeout";var o="xml"==m.dataType||M.XMLDocument||e.isXMLDoc(M);if(a("isXml="+o),!o&&window.opera&&(null===M.body||!M.body.innerHTML)&&--O)return a("requeing onLoad callback, DOM not available"),setTimeout(s,250),void 0;var u=M.body?M.body:M.documentElement;x.responseText=u?u.innerHTML:null,x.responseXML=M.XMLDocument?M.XMLDocument:M,o&&(m.dataType="xml"),x.getResponseHeader=function(e){var t={"content-type":m.dataType};return t[e]},u&&(x.status=Number(u.getAttribute("status"))||x.status,x.statusText=u.getAttribute("statusText")||x.statusText);var l=(m.dataType||"").toLowerCase(),c=/(json|script|text)/.test(l);if(c||m.textarea){var f=M.getElementsByTagName("textarea")[0];if(f)x.responseText=f.value,x.status=Number(f.getAttribute("status"))||x.status,x.statusText=f.getAttribute("statusText")||x.statusText;else if(c){var d=M.getElementsByTagName("pre")[0],h=M.getElementsByTagName("body")[0];d?x.responseText=d.textContent?d.textContent:d.innerText:h&&(x.responseText=h.textContent?h.textContent:h.innerText)}}else"xml"==l&&!x.responseXML&&x.responseText&&(x.responseXML=X(x.responseText));try{L=_(x,l,m)}catch(b){i="parsererror",x.error=r=b||i}}catch(b){a("error caught: ",b),i="error",x.error=r=b||i}x.aborted&&(a("upload aborted"),i=null),x.status&&(i=x.status>=200&&300>x.status||304===x.status?"success":"error"),"success"===i?(m.success&&m.success.call(m.context,L,"success",x),S.resolve(x.responseText,"success",x),p&&e.event.trigger("ajaxSuccess",[x,m])):i&&(void 0===r&&(r=x.statusText),m.error&&m.error.call(m.context,x,i,r),S.reject(x,"error",r),p&&e.event.trigger("ajaxError",[x,m,r])),p&&e.event.trigger("ajaxComplete",[x,m]),p&&!--e.active&&e.event.trigger("ajaxStop"),m.complete&&m.complete.call(m.context,x,i),F=!0,m.timeout&&clearTimeout(j),setTimeout(function(){m.iframeTarget||v.remove(),x.responseXML=null},100)}}}var l,c,m,p,d,v,g,x,b,y,T,j,w=f[0],S=e.Deferred();if(r)for(c=0;h.length>c;c++)l=e(h[c]),i?l.prop("disabled",!1):l.removeAttr("disabled");if(m=e.extend(!0,{},e.ajaxSettings,t),m.context=m.context||m,d="jqFormIO"+(new Date).getTime(),m.iframeTarget?(v=e(m.iframeTarget),y=v.attr2("name"),y?d=y:v.attr2("name",d)):(v=e('<iframe name="'+d+'" src="'+m.iframeSrc+'" />'),v.css({position:"absolute",top:"-1000px",left:"-1000px"})),g=v[0],x={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(t){var r="timeout"===t?"timeout":"aborted";a("aborting upload... "+r),this.aborted=1;try{g.contentWindow.document.execCommand&&g.contentWindow.document.execCommand("Stop")}catch(n){}v.attr("src",m.iframeSrc),x.error=r,m.error&&m.error.call(m.context,x,r,t),p&&e.event.trigger("ajaxError",[x,m,r]),m.complete&&m.complete.call(m.context,x,r)}},p=m.global,p&&0===e.active++&&e.event.trigger("ajaxStart"),p&&e.event.trigger("ajaxSend",[x,m]),m.beforeSend&&m.beforeSend.call(m.context,x,m)===!1)return m.global&&e.active--,S.reject(),S;if(x.aborted)return S.reject(),S;b=w.clk,b&&(y=b.name,y&&!b.disabled&&(m.extraData=m.extraData||{},m.extraData[y]=b.value,"image"==b.type&&(m.extraData[y+".x"]=w.clk_x,m.extraData[y+".y"]=w.clk_y)));var k=1,D=2,A=e("meta[name=csrf-token]").attr("content"),E=e("meta[name=csrf-param]").attr("content");E&&A&&(m.extraData=m.extraData||{},m.extraData[E]=A),m.forceSync?o():setTimeout(o,10);var L,M,F,O=50,X=e.parseXML||function(e,t){return window.ActiveXObject?(t=new ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!=t.documentElement.nodeName?t:null},C=e.parseJSON||function(e){return window.eval("("+e+")")},_=function(t,r,a){var n=t.getResponseHeader("content-type")||"",i="xml"===r||!r&&n.indexOf("xml")>=0,o=i?t.responseXML:t.responseText;return i&&"parsererror"===o.documentElement.nodeName&&e.error&&e.error("parsererror"),a&&a.dataFilter&&(o=a.dataFilter(o,r)),"string"==typeof o&&("json"===r||!r&&n.indexOf("json")>=0?o=C(o):("script"===r||!r&&n.indexOf("javascript")>=0)&&e.globalEval(o)),o};return S}if(!this.length)return a("ajaxSubmit: skipping submit process - no element selected"),this;var u,l,c,f=this;"function"==typeof t&&(t={success:t}),u=t.type||this.attr2("method"),l=t.url||this.attr2("action"),c="string"==typeof l?e.trim(l):"",c=c||window.location.href||"",c&&(c=(c.match(/^([^#]+)/)||[])[1]),t=e.extend(!0,{url:c,success:e.ajaxSettings.success,type:u||"GET",iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},t);var m={};if(this.trigger("form-pre-serialize",[this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(t.beforeSerialize&&t.beforeSerialize(this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var p=t.traditional;void 0===p&&(p=e.ajaxSettings.traditional);var d,h=[],v=this.formToArray(t.semantic,h);if(t.data&&(t.extraData=t.data,d=e.param(t.data,p)),t.beforeSubmit&&t.beforeSubmit(v,this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[v,this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var g=e.param(v,p);d&&(g=g?g+"&"+d:d),"GET"==t.type.toUpperCase()?(t.url+=(t.url.indexOf("?")>=0?"&":"?")+g,t.data=null):t.data=g;var x=[];if(t.resetForm&&x.push(function(){f.resetForm()}),t.clearForm&&x.push(function(){f.clearForm(t.includeHidden)}),!t.dataType&&t.target){var b=t.success||function(){};x.push(function(r){var a=t.replaceTarget?"replaceWith":"html";e(t.target)[a](r).each(b,arguments)})}else t.success&&x.push(t.success);if(t.success=function(e,r,a){for(var n=t.context||this,i=0,o=x.length;o>i;i++)x[i].apply(n,[e,r,a||f,f])},t.error){var y=t.error;t.error=function(e,r,a){var n=t.context||this;y.apply(n,[e,r,a,f])}}if(t.complete){var T=t.complete;t.complete=function(e,r){var a=t.context||this;T.apply(a,[e,r,f])}}var j=e('input[type=file]:enabled[value!=""]',this),w=j.length>0,S="multipart/form-data",k=f.attr("enctype")==S||f.attr("encoding")==S,D=n.fileapi&&n.formdata;a("fileAPI :"+D);var A,E=(w||k)&&!D;t.iframe!==!1&&(t.iframe||E)?t.closeKeepAlive?e.get(t.closeKeepAlive,function(){A=s(v)}):A=s(v):A=(w||k)&&D?o(v):e.ajax(t),f.removeData("jqxhr").data("jqxhr",A);for(var L=0;h.length>L;L++)h[L]=null;return this.trigger("form-submit-notify",[this,t]),this},e.fn.ajaxForm=function(n){if(n=n||{},n.delegation=n.delegation&&e.isFunction(e.fn.on),!n.delegation&&0===this.length){var i={s:this.selector,c:this.context};return!e.isReady&&i.s?(a("DOM not ready, queuing ajaxForm"),e(function(){e(i.s,i.c).ajaxForm(n)}),this):(a("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this)}return n.delegation?(e(document).off("submit.form-plugin",this.selector,t).off("click.form-plugin",this.selector,r).on("submit.form-plugin",this.selector,n,t).on("click.form-plugin",this.selector,n,r),this):this.ajaxFormUnbind().bind("submit.form-plugin",n,t).bind("click.form-plugin",n,r)},e.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")},e.fn.formToArray=function(t,r){var a=[];if(0===this.length)return a;var i=this[0],o=t?i.getElementsByTagName("*"):i.elements;if(!o)return a;var s,u,l,c,f,m,p;for(s=0,m=o.length;m>s;s++)if(f=o[s],l=f.name,l&&!f.disabled)if(t&&i.clk&&"image"==f.type)i.clk==f&&(a.push({name:l,value:e(f).val(),type:f.type}),a.push({name:l+".x",value:i.clk_x},{name:l+".y",value:i.clk_y}));else if(c=e.fieldValue(f,!0),c&&c.constructor==Array)for(r&&r.push(f),u=0,p=c.length;p>u;u++)a.push({name:l,value:c[u]});else if(n.fileapi&&"file"==f.type){r&&r.push(f);var d=f.files;if(d.length)for(u=0;d.length>u;u++)a.push({name:l,value:d[u],type:f.type});else a.push({name:l,value:"",type:f.type})}else null!==c&&c!==void 0&&(r&&r.push(f),a.push({name:l,value:c,type:f.type,required:f.required}));if(!t&&i.clk){var h=e(i.clk),v=h[0];l=v.name,l&&!v.disabled&&"image"==v.type&&(a.push({name:l,value:h.val()}),a.push({name:l+".x",value:i.clk_x},{name:l+".y",value:i.clk_y}))}return a},e.fn.formSerialize=function(t){return e.param(this.formToArray(t))},e.fn.fieldSerialize=function(t){var r=[];return this.each(function(){var a=this.name;if(a){var n=e.fieldValue(this,t);if(n&&n.constructor==Array)for(var i=0,o=n.length;o>i;i++)r.push({name:a,value:n[i]});else null!==n&&n!==void 0&&r.push({name:this.name,value:n})}}),e.param(r)},e.fn.fieldValue=function(t){for(var r=[],a=0,n=this.length;n>a;a++){var i=this[a],o=e.fieldValue(i,t);null===o||void 0===o||o.constructor==Array&&!o.length||(o.constructor==Array?e.merge(r,o):r.push(o))}return r},e.fieldValue=function(t,r){var a=t.name,n=t.type,i=t.tagName.toLowerCase();if(void 0===r&&(r=!0),r&&(!a||t.disabled||"reset"==n||"button"==n||("checkbox"==n||"radio"==n)&&!t.checked||("submit"==n||"image"==n)&&t.form&&t.form.clk!=t||"select"==i&&-1==t.selectedIndex))return null;if("select"==i){var o=t.selectedIndex;if(0>o)return null;for(var s=[],u=t.options,l="select-one"==n,c=l?o+1:u.length,f=l?o:0;c>f;f++){var m=u[f];if(m.selected){var p=m.value;if(p||(p=m.attributes&&m.attributes.value&&!m.attributes.value.specified?m.text:m.value),l)return p;s.push(p)}}return s}return e(t).val()},e.fn.clearForm=function(t){return this.each(function(){e("input,select,textarea",this).clearFields(t)})},e.fn.clearFields=e.fn.clearInputs=function(t){var r=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var a=this.type,n=this.tagName.toLowerCase();r.test(a)||"textarea"==n?this.value="":"checkbox"==a||"radio"==a?this.checked=!1:"select"==n?this.selectedIndex=-1:"file"==a?/MSIE/.test(navigator.userAgent)?e(this).replaceWith(e(this).clone(!0)):e(this).val(""):t&&(t===!0&&/hidden/.test(a)||"string"==typeof t&&e(this).is(t))&&(this.value="")})},e.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})},e.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},e.fn.selected=function(t){return void 0===t&&(t=!0),this.each(function(){var r=this.type;if("checkbox"==r||"radio"==r)this.checked=t;else if("option"==this.tagName.toLowerCase()){var a=e(this).parent("select");t&&a[0]&&"select-one"==a[0].type&&a.find("option").selected(!1),this.selected=t}})},e.fn.ajaxSubmit.debug=!1})(jQuery);


/*************************************************************************************************
 *
 * JQUERY-WIPE-TOUCH
 *
 *************************************************************************************************/
;(function(d){function m(a){d(this).touchSwipeLeft(a).touchSwipeRight(a)}function n(a){var b=d(this);b.data("swipeLeft")||b.data("swipeLeft",a);b.data("swipeRight")||b.unbindSwipe(!0).bind(c,g)}function o(a){var b=d(this);b.data("swipeRight")||b.data("swipeRight",a);b.data("swipeLeft")||b.unbindSwipe(!0).bind(c,g)}function g(a){var b=(new Date).getTime(),c=a.originalEvent.touches?a.originalEvent.touches[0]:a,e=d(this).bind(f,function(a){b&&(c=a.originalEvent.touches?a.originalEvent.touches[0]:a,h=
(new Date).getTime(),i=c.pageX,l=c.pageY,Math.abs(k-i)>p&&a.preventDefault())}).one(j,function(){e.unbind(f);b&&h&&h-b<q&&(Math.abs(k-i)>r&&Math.abs(g-l)<s)&&(k>i?e.data("swipeLeft")&&e.data("swipeLeft")("left"):e.data("swipeRight")&&e.data("swipeRight")("right"));b=h=null}),k=c.pageX,g=c.pageY,i,l,h;e.data("stopPropagation")&&a.stopImmediatePropagation()}var j,f,c,r=30,s=75,p=10,q=1E3;"ontouchend"in document?(j="touchend.cj_swp",f="touchmove.cj_swp",c="touchstart.cj_swp"):(j="mouseup.cj_swp",f="mousemove.cj_swp",
c="mousedown.cj_swp");d.fn.touchSwipe=function(a,b){b&&this.data("stopPropagation",true);if(a)return this.each(m,[a])};d.fn.touchSwipeLeft=function(a,b){b&&this.data("stopPropagation",true);if(a)return this.each(n,[a])};d.fn.touchSwipeRight=function(a,b){b&&this.data("stopPropagation",true);if(a)return this.each(o,[a])};d.fn.unbindSwipeLeft=function(){this.removeData("swipeLeft");this.data("swipeRight")||this.unbindSwipe(true)};d.fn.unbindSwipeRight=function(){this.removeData("swipeRight");this.data("swipeLeft")||
this.unbindSwipe(true)};d.fn.unbindSwipe=function(a){a||this.removeData("swipeLeft swipeRight stopPropagation");return this.unbind(c+" "+f+" "+j)}})(jQuery);


/*************************************************************************************************
 *
 * JQUERY-ANIMATION-EASING
 *
 *************************************************************************************************/
jQuery.extend({easing:{linear:function(a){return a},swing:function(a){return 0.5-Math.cos(a*Math.PI)/2},backEaseIn:function(a,d,b,c){return(b+c)*(a/=1)*a*(2.70158*a-1.70158)+b},backEaseOut:function(a,d,b,c){return(b+c)*((a=a/1-1)*a*(2.70158*a+1.70158)+1)+b},backEaseInOut:function(a,d,b,c){d=b+c;c=1.70158;return 1>(a/=0.5)?d/2*a*a*(((c*=1.525)+1)*a-c)+b:d/2*((a-=2)*a*(((c*=1.525)+1)*a+c)+2)+b},bounceEaseIn:function(a,d,b,c){d=b+c;a=this.bounceEaseOut(1-a,1,0,c);return d-a+b},bounceEaseOut:function(a,
d,b,c){d=b+c;return a<1/2.75?d*7.5625*a*a+b:a<2/2.75?d*(7.5625*(a-=1.5/2.75)*a+0.75)+b:a<2.5/2.75?d*(7.5625*(a-=2.25/2.75)*a+0.9375)+b:d*(7.5625*(a-=2.625/2.75)*a+0.984375)+b},circEaseIn:function(a,d,b,c){return-(b+c)*(Math.sqrt(1-(a/=1)*a)-1)+b},circEaseOut:function(a,d,b,c){return(b+c)*Math.sqrt(1-(a=a/1-1)*a)+b},circEaseInOut:function(a,d,b,c){d=b+c;return 1>(a/=0.5)?-d/2*(Math.sqrt(1-a*a)-1)+b:d/2*(Math.sqrt(1-(a-=2)*a)+1)+b},cubicEaseIn:function(a,d,b,c){return(b+c)*(a/=1)*a*a+b},cubicEaseOut:function(a,
d,b,c){return(b+c)*((a=a/1-1)*a*a+1)+b},cubicEaseInOut:function(a,d,b,c){d=b+c;return 1>(a/=0.5)?d/2*a*a*a+b:d/2*((a-=2)*a*a+2)+b},elasticEaseIn:function(a,d,b,c){c=b+c;if(0==a)return b;if(1==a)return c;d=c;d<Math.abs(c)?(d=c,c=0.0625):c=0.25/(2*Math.PI)*Math.asin(c/d);return-(d*Math.pow(2,10*(a-=1))*Math.sin((1*a-c)*2*Math.PI/0.25))+b},elasticEaseOut:function(a,d,b,c){d=b+c;if(0==a)return b;if(1==a)return d;c=d;c<Math.abs(d)?(c=d,b=0.0625):b=0.25/(2*Math.PI)*Math.asin(d/c);return-(c*Math.pow(2,-10*
a)*Math.sin((1*a-b)*2*Math.PI/0.25))+d},expoEaseIn:function(a,d,b,c){d=b+c;return 0==a?b:d*Math.pow(2,10*(a-1))+b-0.001*d},expoEaseOut:function(a,d,b,c){return 1==a?b+c:1.001*c*(-Math.pow(2,-10*a)+1)+b},expoEaseInOut:function(a,d,b,c){d=b+c;return 0==a?b:1==a?d:1>(a/=0.5)?d/2*Math.pow(2,10*(a-1))+b-5E-4*d:1.0005*(d/2)*(-Math.pow(2,-10*--a)+2)+b},quadEaseIn:function(a,d,b,c){return(b+c)*(a/=1)*a+b},quadEaseOut:function(a,d,b,c){return-(b+c)*(a/=1)*(a-2)+b},quadEaseInOut:function(a,d,b,c){d=b+c;return 1>
(a/=0.5)?d/2*a*a+b:-d/2*(--a*(a-2)-1)+b},quartEaseIn:function(a,d,b,c){return(b+c)*(a/=1)*a*a*a+b},quartEaseOut:function(a,d,b,c){return-(b+c)*((a=a/1-1)*a*a*a-1)+b},quartEaseInOut:function(a,d,b,c){d=b+c;return 1>(a/=0.5)?d/2*a*a*a*a+b:-d/2*((a-=2)*a*a*a-2)+b},quintEaseIn:function(a,d,b,c){return(b+c)*(a/=1)*a*a*a*a+b},quintEaseOut:function(a,d,b,c){return(b+c)*((a=a/1-1)*a*a*a*a+1)+b},quintEaseInOut:function(a,d,b,c){d=b+c;return 1>(a/=0.5)?d/2*a*a*a*a*a+b:d/2*((a-=2)*a*a*a*a+2)+b},sineEaseIn:function(a,
d,b,c){d=b+c;return-d*Math.cos(a*(Math.PI/2))+d+b},sineEaseOut:function(a,d,b,c){return(b+c)*Math.sin(a*(Math.PI/2))+b},sineEaseInOut:function(a,d,b,c){return-(b+c)/2*(Math.cos(Math.PI*a)-1)+b}}});


/*************************************************************************************************
 *
 * JQUERY-GET-PARAMETER
 *
 *************************************************************************************************/
/* Copyright (c) 2006 Mathias Bank (http://www.mathias-bank.de)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * Thanks to Hinnerk Ruemenapf - http://hinnerk.ruemenapf.de/ for bug reporting and fixing.
 *
 * Returns get parameters.
 * If the desired param does not exist, null will be returned
 * @example value = $.getURLParam(scope, "paramName");
 */

jQuery.extend({getURLParam:function(f,g){var c="",a=f.location.href,d=!1,e=g+"=",h=e.length;if(-1<a.indexOf("?"))for(var a=a.substr(a.indexOf("?")+1).split("&"),b=0;b<a.length;b++)if(a[b].substr(0,h)==e){c=a[b].split("=")[1];d=!0;break}return!1==d?null:c}});


/*************************************************************************************************
 *
 * INITIALIZE
 *
 *************************************************************************************************/
$(document).ready(function(e){
	_common.init();
});


function onYouTubeIframeAPIReady(){
	try{
		_common.reinitUI();
	}catch(e){_common.trace('>>> onYouTubeIframeAPIReady : ', e.message)}
}


/*************************************************************************************************
 *
 * COMMON-OPERATION
 *
 *************************************************************************************************/
var _common={
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// INITIALIZE
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	init:function(){
		var owner=this;

		// 1. init-ajax-ui
		this.initAjax();
		this.initUI();

		// 2. init-login
		if(typeof(initLogin)!='undefined') initLogin();
		// 3. init-search
		if(typeof(initSearch)!='undefined') initSearch();
		// 4. init-page
		if(typeof(initPage)!='undefined') initPage(this.is_mode());

		// 4. open-notice
		setTimeout(function(){
			owner.openNotice();
		}, 100);

		// 5. interval-for-ie-7
		setTimeout(function(){
			owner.reinit();
		}, 0);
	},


	reinit:function(){
		var owner=this;

		$(window).bind({
			'resize':function(e){
				// 0. reflow page
				if(document.documentMode<=7){
					document.body.className=document.body.className;
				}

				// 1. resize-ui-page
				owner.resizeUI(); if(typeof(resizePage)!='undefined') resizePage();

				// 2. change-mode
				var mode=owner.is_mode();
				if(owner.get_mode()!=mode){
					owner.set_mode(mode);
					owner.resetUI(mode);

					if(typeof(changedMode)!='undefined') changedMode(mode);
				}

				// 4. body-show-hide
				if(document.documentMode<=7){
					setTimeout(function(){
						$('body').hide().show();
					}, 0);
				}
			},

			'scroll':function(e){
				owner.scrollUI();
			}
		}).resize();
	},


	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:PARAMS
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	__mode:null,


	is_mode:function(){
		var mode='';
		var w=$(window).width();

		if(w<=750){
			mode='MOBILE';
		}else if(w>750 && w<=1024){
			mode='TABLET';
		}else if(w>1024){
			mode='PC';
		}
		return mode;
	},


	get_mode:function(){
		return this.__mode;
	},


	set_mode:function(mode){
		this.__mode=mode;
	},


	get_info:function(source, key, value){
		var obj=null;

		for(var a in source){
			if(typeof(source[a])=='object'){
				obj=this.get_info(source[a], key, value); if(obj!=null) break;
			}else{
				if(a==key && source[a]==value){
					return source;
				}
			}
		}
		return obj;
	},


	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:UI
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	__ui:null,

	initUI:function(){__ui=new CommonUIManager();},

	reinitUI:function(){__ui.reinit();},

	resizeUI:function(){__ui.resize();},

	resetUI:function(mode){__ui.reset(mode);},

	scrollUI:function(){__ui.scroll();},


	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:VIDEO
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build_video:function(id, videoid, width, height){
		try{
			var owner=this;
			var player=new YT.Player(id, {
				'videoId':videoid,
				'width':width,
				'height':height,
				'events':{
					'onStateChange':function(data){
						if(data.data==1){
							owner.stop_video(data.target.a.id);
						}
					}
				}
			});

			$('#'+id)
			.empty()
			.attr('data-role', 'common-video-player')
			.data('manager', player);
		}catch(e){this.trace('>>> build_video : ', e.message);}
	},

	stop_video:function(id){
		$('*[data-role=common-video-player]').each(function(a){
			//if($(this).attr('id')!=id) $(this).data('manager').stopVideo();
			if(!ValidationUtil.is_null($(this).data('manager')) && $(this).attr('id')!=id){
				$(this).data('manager').stopVideo();
			}
		});
	},


	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:AJAX
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	initAjax:function(){
		$.ajaxSetup({
			contentType:'application/x-www-form-urlencoded;charset=UTF-8',
			type:'POST'
		});
	},


	/**
	 * load-json-data
	 *
	 * @param	{Object} url
	 * @param	{Object} param
	 * @param	{Object} callback
	 * @param	{Object} method
	 */
	loadJSON:function(url, params, callback, method){
		var owner=this;
		var params=(!ValidationUtil.is_null(params))?params:new Object();
		params.cb=StringUtil.get_random('number', 5);

		var method=(ValidationUtil.is_null(method))?'GET':String(method).toUpperCase();

		var ids='form_'+StringUtil.get_random('number', 5);
		var form=document.createElement('form');
		$(form)
		.attr('id', ids)
		.attr('name', ids)
		.attr('method', (ValidationUtil.is_null(method))?'GET':String(method).toUpperCase())
		.appendTo(document.body)
		.ajaxForm({
			'url':url,
			'data':params,
			'success':function(data, textStatus, jqXHR){
				var result=(typeof(data)=='object')?data:$.parseJSON(data); owner.trace('>>> LOAD-JSON : ', result);

				if(!ValidationUtil.is_null(callback)) callback(result, textStatus, jqXHR);

				/*
				switch(String(result.error.code)){
					case '0':
						if(!ValidationUtil.is_null(callback)) callback(result, textStatus, jqXHR);
						break;

					default:
						alert(result.error.msg);
						break;
				}*/
				$(form).remove();
			}
		})
		.submit();
	},


	/**
	 * upload-json
	 *
	 * @param {Object} form
	 * @param {Object} url
	 * @param {Object} param
	 * @param {Object} callback
	 */
	uploadJSON:function(form, url, params, callback){
		var owner=this;
		var params=(!ValidationUtil.is_null(params))?params:new Object();
		params.cb=StringUtil.get_random('number', 5);

		$(form)
		.ajaxForm({
			'url':url,
			'data':params,
			'success':function(data, textStatus, jqXHR){
				var result=(typeof(data)=='object')?data:$.parseJSON(data); owner.trace('>>> UPLOAD-JSON : ', result);

				if(!ValidationUtil.is_null(callback)) callback(result, textStatus, jqXHR);

				/*
				switch(String(result.error.code)){
					case '0':
						if(!ValidationUtil.is_null(callback)) callback(result, textStatus, jqXHR);
						break;

					default:
						alert(result.error.msg);
						break;
				}*/
			}
		})
		.submit();
	},


	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:LAYER
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	__layer:null,

	openLayer:function(url){
		if(this.__layer==null) this.__layer=new LayerUI();

		var properties={
			'type':'url',
			'param':url,
			'callback':null,
			'time':'slow'
		}

		this.__layer.open(properties);
	},


	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:POPUP
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	openPopup:function(type){
		var url, w, h;

		switch(type){
			case 'web':
				url='/html/access.html';
				w=650;
				h=575;
				break

			default:
				return false;
				break;
		}

		window.open(url, 'popup', 'width='+w+', height='+h);
	},


	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:LOADING
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	__loading:null,

	openLoading:function(){
		if(this.__loading==null){
			this.__loading=$(document.createElement('div'))
			.attr('data-role', 'common-loading')
			.css({
				'position':'fixed',
				'left':'0px', 'top':'0px',
				'width':'100%',
				'height':'100%',
				'z-index':'9999'
			})
			.append($(document.createElement('div'))
				.css({
					'width':'100%',
					'height':'100%',
					'background-color':'#fff',
					'opacity':'0.5',
					'pointer-events':'none'
				})
			)
			.append($(document.createElement('img'))
				.attr('src', '/images/loading.gif')
				.css({
					'position':'absolute',
					'left':'50%',
					'top':'50%',
					'margin-top':'-30px',
					'margin-left':'-30px'
				})
			)
			.appendTo(document.body);
		}
	},


	closeLoading:function(){
		if(this.__loading!=null){
			$(this.__loading).remove(); this.__loading=null;
		}
	},


	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:NOTICE
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	openNotice:function(){
		if($('*[data-role=common-notice]').children().length>0){
			$('*[data-role=common-notice]').slideUp().removeClass('blind').slideDown({
				'duration':'slow',
				'easing':'expoEaseOut'
			});
		}
	},


	closeNotice:function(){
		$('*[data-role=common-notice]').slideUp({
			'duration':'slow',
			'easing':'expoEaseOut'
		});
	},


	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:ETC
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	/**
	 * console-log
	 */
	trace:function(){
		try{
			if(typeof(window.console)!='undefined' && window.console && window.console.log){
				console.log.apply(console, arguments);
			}
		}catch(e){}
	},

	/**
	 * do-nothing
	 */
	nothing:function(){},

	/**
	 * show-content
	 *
	 * @param	{Boolean} bool
	 */
	showContent:function(bool){
		var content=$('div#wrap');
		if(bool) $(content).show(); else $(content).hide();
	},

	scrollContent:function(y){
		$(document).scrollTop(y);
	},


	/**
	 * move-scroll-top
	 */
	moveTop:function(){
		$(document).scrollTop(0);
	},


	/**
	 * move-scroll-bottom
	 */
	moveBottom:function(){
		$(document).scrollTop(10000);
	}
};









/*************************************************************************************************
 *
 *	UI-ALL
 *
 * - CommonUI
 * - PagingUI
 * - CalendarUI
 * - LayerUI
 * - InputUI
 * - AccessibilityUI
 * - AccessibilityTableUI
 *
 *	@author	actionwolf (neoxnazis@gmail.com)
 *
 *************************************************************************************************/

/*************************************************************************************************
 *
 * COMMON-UI
 *
 *************************************************************************************************/
var CommonUI={
	/**
	 * get-ui-rectangle-info
	 *
	 * @param	{DOM} scope
	 * @return	{Object}
	 * 	{
	 * 		'ax' : offset-left
	 * 		'ay' : offset-top
	 * 		'rx' : position-left
	 * 		'ry' : position-top
	 * 		'w' : width
	 *		}
	 */
	get_rectange:function(scope){
		return{
			'ax':$(scope).offset().left || 0,
			'ay':$(scope).offset().top ||0,
			'rx':$(scope).position().left || 0,
			'ry':$(scope).position().top || 0,
			'w':$(scope).width() || 0,
			'h':$(scope).height() || 0
		};
	},


	/**
	 * get-total-height
	 *
	 * @param	{DOM} scope
	 * @return	{Number} h
	 */
	get_total_height:function(scope){
		var h=0;
		h+=$(scope).height();
		h+=Number($(scope).css('margin-top').replace('px', ''));
		h+=Number($(scope).css('margin-bottom').replace('px', ''));
		h+=Number($(scope).css('padding-top').replace('px', ''));
		h+=Number($(scope).css('padding-bottom').replace('px', ''));
		return h;
	},


	/**
	 * get-total-width
	 *
	 * @param	{DOM} scope
	 * @return	{Number} w
	 */
	get_total_width:function(scope){
		var w=0;
		w+=$(scope).width();
		w+=Number($(scope).css('margin-left').replace('px', ''));
		w+=Number($(scope).css('margin-right').replace('px', ''));
		w+=Number($(scope).css('padding-left').replace('px', ''));
		w+=Number($(scope).css('padding-right').replace('px', ''));
		return w;
	},


	/**
	 * define-collision-based-position
	 *
	 * @param	{DOM} scope
	 * @param	{Object} pos
	 * 	{
	 * 		'left' : x-position
	 * 		'top' : y-position
	 * 	}
	 * @return	{Boolean} true, false
	 */
	is_collision:function(scope, pos){
		var rect=this.get_rectange(scope);

		return (
			(pos.left>=rect.ax && pos.left<=rect.ax+rect.w) &&
			(pos.top>=rect.ay && pos.top<=rect.ay+rect.h)
		)?true:false;
	},


	/**
	 * toggle-image-src
	 *
	 * @param {DOM} img
	 * @param {String} from - 변경 대상
	 * @param {String} to - 변경 값
	 */
	toggle_img_url:function(img, from, to){
		var url=$(img).attr('src');
		url=url.replace(from, to);

		$(img).attr('src', url);
	}
}


/*************************************************************************************************
 *
 * UI-PAGING
 *
 * @author	actionwolf (neoxnazis@gmail.com)
 *
 * STYLE - UI_STYLE_PAGING (/js\ui\ui.style.js)
 *
 *
 * @param	{DOM} scope
 * @param	{Object} properties
 * 	{
 * 		'count':'전체항목 (페이지 수 X),
 * 		'step':페이징 단위,
 * 		'current':현재 페이지 번호
 * 	}
 * @param	{Function} callback
 *
 *************************************************************************************************/
var PagingUI=function(scope, properties, callback){
	this._scope=scope;

	this._properties=properties || null;
	this._callback=callback || null;

	this._total=null;
	this._step=null;
	this._current=null;

	this.init.apply(this, arguments);
};


PagingUI.prototype={
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// INITIALIZE
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	init:function(){
		var count=(!ValidationUtil.is_null(this._properties.count))?Number(this._properties.count):0;
		var step=(!ValidationUtil.is_null(this._properties.step))?Number(this._properties.step):10;
		var total=(count>0 && step>0)?Math.ceil(count/step):0;
		var current=(!ValidationUtil.is_null(this._properties.current))?Number(this._properties.current):-1;

		this._total=total;
		this._step=step;
		this._current=current;

		this.reinit();
	},


	reinit:function(){
		this.remove_ui();
		this.build_ui();
		this.build_event();
	},


	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:UI
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build_ui:function(){
		var shtml='';

		if(this._total>0){
			shtml+=UI_STYLE_PAGING.navigator.first;
			shtml+=UI_STYLE_PAGING.navigator.prev;

			var spage=Math.floor(Number(this._current)/this._step)*this._step;
			for(var a=spage, atotal=spage+10; a<atotal; a++){
				if(a<this._total){
					var ahtml='';
					// 1. append-first-tag
					ahtml+=UI_STYLE_PAGING.page.tags[0];

					// 2. append-focus-class
					if(a==this._current && !ValidationUtil.is_null(UI_STYLE_PAGING.page.focus)){
						// 현재 페이지 일 때 class 추가시 (class가 있는 경우, 없는 경우)
						if(ahtml.indexOf('class="')!=-1){
							ahtml=ahtml.replace('class="', 'class="'+UI_STYLE_PAGING.page.focus+' ');
						}else{
							ahtml=ahtml.replace('>', 'class="'+UI_STYLE_PAGING.page.focus+'">');
						}
					}

					// 3. append-page-number
					ahtml+=Number(a+1);

					// 4. append-last-tag
					ahtml+=UI_STYLE_PAGING.page.tags[1];

					// 5. append-shtml
					shtml+=ahtml;
				}
			}

			shtml+=UI_STYLE_PAGING.navigator.next;
			shtml+=UI_STYLE_PAGING.navigator.last;
		}else{
			shtml='&nbsp;';
		}

		$(this._scope).html(shtml);
	},


	remove_ui:function(){
		$(this._scope).empty();
	},


	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:EVENT
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build_event:function(){
		var owner=this;

		// button-event-first
		$(this._scope).find('*[data-role=first]').bind('click', function(e){
			owner.select(0);
		});

		//  button-event-last
		$(this._scope).find('*[data-role=last]').bind('click', function(e){
			owner.select(owner._total-1);
		});

		// button-event-prev
		$(this._scope).find('*[data-role=prev]').bind('click', function(e){
			var c=owner._current; c--; c=(c<=0)?0:c;
			owner.select(c);
		});

		// button-event-next
		$(this._scope).find('*[data-role=next]').bind('click', function(e){
			var t=owner._total;
			var c=owner._current; c++; c=(c>=t-1)?t-1:c;
			owner.select(c);
		});

		// button-event-page
		// start-page-number
		var spage=(this._total>0)?Math.floor(Number(this._current)/this._step)*this._step:0;

		$(this._scope).find('*[data-role=page]').each(function(a){
			$(this)
			.data('n', spage+a)
			.bind('click', function(e){
				var n=Number($(this).data('n'));
				owner.select(n);
			});
		});
	},


	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:OPERATION
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	reset:function(properties){
		this._properties=properties;

		this.reinit();
	},


	select:function(n){
		if(this._current!=n){
			this._current=n;

			this.reinit();

			if(!ValidationUtil.is_null(this._callback)) this._callback(n);
		}
	},


	show:function(bool){
		if(bool) $(this._scope).show(); else $(this._scope).hide();
	}
};


/*************************************************************************************************
 *
 * UI-CALENDAR (CORE)
 *
 *************************************************************************************************/
var CalendarUI=function(){
	this._restrict={'type':null, 'time':null}
	this._year={'min':1975, 'max':null, 'current':null, 'now':null, 'focus':null};
	this._month={'min':0, 'max':11, 'current':null, 'now':null, 'focus':null};
	this._date={'current':null, 'now':null, 'focus':null};

	this._cb_build=null;

	this.init.apply(this, arguments);
};


CalendarUI.prototype={
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// INITIALIZE
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	init:function(){
		var now=DateUtil.get_now();
		this.set_times('now', now.year, Number(now.month)-1, Number(now.date));
		this._year.max=Number(now.year)+1;
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:PARAMS
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	/**
	 * set time information
	 *
	 * @param	{String} type - 'current', 'now', 'focus'
	 * @param	{Number} y - 1975~
	 * @param	{Number} m - 0~11
	 * @param	{Number} d - 1~31
	 */
	set_times:function(type, y, m, d){
		this._year[type]=y;
		this._month[type]=m;
		this._date[type]=d;
	},


	/**
	 * set restrict time information
	 *
	 * @param	{String} type - 'before', 'after'
	 * @param	{String, JSON, Date} time
	 */
	set_restrict:function(type, time){
		this._restrict={'type':type, 'time':time};
	},


	/**
	 * define today
	 *
	 * @param	{Number} y - 1975~
	 * @param	{Number} m - 0~11
	 * @param	{Number} d - 1~31
	 * @return	{Boolean}
	 */
	is_today:function(y, m, d){
		return (
				this._year.now==y &&
				this._month.now==m &&
				this._date.now==d)?true:false;
	},


	/**
	 * define focusday
	 *
	 * @param	{Number} y - 1975~
	 * @param	{Number} m - 0~11
	 * @param	{Number} d - 1~31
	 * @return	{Boolean}
	 */
	is_focusday:function(y, m, d){
		return (	this._year.focus==y &&
				this._month.focus==m &&
				this._date.focus==d)?true:false;
	},


	/**
	 * define clickable date
	 *
	 * @param	{Number} y - 1975~
	 * @param	{Number} m - 0~11
	 * @param	{Number} d - 1~31
	 * @return	{Boolean}
	 */
	is_allowed:function(y, m, d){
		var bool=true;

		if(this._restrict.type!=null){
			var rtime=DateUtil.get_date(this._restrict.time).getTime(); // time-restrict
			var ctime=DateUtil.get_utc_time(y, m, d); // time-current

			switch(this._restrict.type){
				// build-after
				case 'after':
					bool=(rtime<=ctime)?true:false;
					break;

				// build-before
				case 'before':
					bool=(rtime>=ctime)?true:false;
					break;
			}
		}
		return bool;
	},

	/**
	 * get-cell-infos
	 *
	 * @param	{Number} y - year(1975~)
	 * @param	{Number} m - month(0~11)
	 * @return	{Array}
	 * 	[
	 * 		{
	 *				type: 'current' (click-able), 'restrict' (dis-click-able)
	 * 			msg: 0~31 (date-number)
	 * 			state : 'sunday', 'satuday', 'normal'
	 * 			today : true (오늘), false(오늘X)
	 * 			focusday : 입력된 '년-월-일'에 해당하는 날
	 * 		},
	 * 		...
	 * 	]
	 */
	get_cells:function(y, m){
		// 1. current
		var ctotal=DateUtil.get_total_date(y, m); // total-current
		var fpos=new Date(y, m, 1).getDay(); // position-first (0~6)

		// 2. previous
		var pdate=DateUtil.get_changed_month(y, m, -1);
		var ptotal=DateUtil.get_total_date(pdate.year, pdate.month);

		// 3. build
		var infos=new Array();
		var atotal=ctotal+fpos; atotal=Math.ceil(atotal/7)*7;
		for(var a=0; a<atotal; a++){
			var ainfo=new Object();
			var d=-1, state='none';

			// 3-1. define-basic-infomation
			if(a<fpos){ // previous-date
				ainfo={'type':'previous', 'msg':Number((ptotal-fpos)+a+1), 'state':'none'};
			}else if(a-fpos>ctotal-1){ // next-date
				ainfo={'type':'next', 'msg':Number(a-ctotal-fpos)+1, 'state':'none'};
			}else{ // current-date
				d=Number(a-fpos+1);

				switch(String(a%7)){
					case '0':
						state='sunday';
						break;

					case '6':
						state='satuday';
						break;

					default:
						state='normal';
						break;
				}

				if(this.is_allowed(y, m, d)){
					ainfo={'type':'current', 'msg':d, 'state':state};
				}else{
					ainfo={'type':'restrict', 'msg':d, 'state':'none'};
				}
			}
			// 3-2. define-today
			ainfo.today=(d!=-1 && this.is_today(y, m, d))?true:false;

			// 3-3. define-focusday
			ainfo.focusday=(d!=-1 && this.is_focusday(y, m, d))?true:false;

			// 3-4. define-position
			ainfo.x=Math.floor(a%7);
			ainfo.y=Math.floor(a/7);

			// 3-5. insert-infomation
			infos.push(ainfo);
		}
		// 4. return information
		return infos;
	}
};


/*************************************************************************************************
 *
 * UI-CALENDAR (SAMPLE)
 *
 * @usage
 *		var c=new SampleCalendar($(document.body));
 *		c.focus_date(2013, 3, 17);
 *		c.restrict_date('before', '20130417');
 *		c.restrict_date('after', '20130417');
 *		c.navigate();
 *
 *************************************************************************************************/
var SampleCalendar=function(target){
	this._core=null;
	this._target=target;
	this._scope=null;
	this._top=null;

	this._widths={'step':30, 'total':30*7};

	this.init.apply(this, arguments);
};


SampleCalendar.prototype={
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// INITIALIZE
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	init:function(){
		this.build();
		this.navigate();
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:BUILD
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build:function(){
		this.build_core();
		this.build_scope();
		this.build_top();
		this.build_bottom();
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:CORE
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build_core:function(){
		this._core=new CalendarUI();
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:SCOPE
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build_scope:function(){
		var scope=document.createElement('div'); this._scope=scope;

		$(scope)
		.css({
			'float':'left',
			'width':this._widths.total+'px',
			'height':'auto',
			'border':'4px solid #333',
			'margin':'2px'
		})
		.appendTo(this._target);
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:TOP
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build_top:function(){
		var owner=this;
		// 1. container
		var top=document.createElement('div'); this._top=top;
		var shtml='';
		shtml+='<p style="text-align:center; margin:0;">';
		shtml+='<span><select data-role="select-year"></select></span>';
		shtml+='<span><select data-role="select-month"></select></span>';
		shtml+='</p>';

		$(top)
		.html(shtml)
		.css({'line-height':this._widths.step+'px', 'background-color':'#333'})
		.appendTo($(this._scope));

		// 2. build-select-year
		var acontainer=$(top).find('select[data-role=select-year]')
		.empty().change(function(e){owner.navigate();});

		for(var a=this._core._year.max, atotal=this._core._year.min; a>=atotal; a--){
			var aoption=document.createElement('option');
			$(aoption).attr('value', a).text(a).appendTo($(acontainer));
		}

		// 3. build-select-month
		var bcontainer=$(top).find('select[data-role=select-month]')
		.empty().change(function(e){owner.navigate();});

		for(var b=this._core._month.min, btotal=this._core._month.max; b<=btotal; b++){
			var boption=document.createElement('option');
			$(boption).attr('value', b).text(StringUtil.add_zero(Number(b+1), 2)).appendTo($(bcontainer));
		}

		// 4. focus-today
		$(top).find('select[data-role=select-year]').find('option[value='+this._core._year.now+']').attr('selected', 'selected');
		$(top).find('select[data-role=select-month]').find('option[value='+this._core._month.now+']').attr('selected', 'selected');
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:BOTTOM
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build_bottom:function(){
		var bottom=document.createElement('div'); this._bottom=bottom;

		$(bottom)
		.css({'background-color':'#ff66ff', 'width':'100%'})
		.appendTo($(this._scope));
	},


	rebuild_bottom:function(y, m){
		$(this._bottom).empty();

		var infos=this._core.get_cells(y, m);
		for(var a=0, atotal=infos.length; a<atotal; a++){
			var ainfo=infos[a];
			var acell=document.createElement('div');
			var acolor;

			switch(ainfo.state){
				case 'sunday':
					acolor='#ff0000';
					break;

				case 'satuday':
					acolor='#0000ff';
					break;

				case 'normal':
					acolor='#666';
					break;

				default:
					acolor='#333';
					break;
			}

			$(acell)
			.css({
				'position':'relative',
				'float':'left',
				'width':this._widths.step+'px',
				'height':this._widths.step+'px',
				'text-align':'center',
				'background-color':((ainfo.focusday)?'#ff6600':acolor),
				'cursor':((ainfo.state=='none')?'':'pointer')
			})
			.appendTo($(this._bottom));

			var aspan=document.createElement('span');
			$(aspan)
			.css({
				'text-align':'center',
				'font-family':'tahoma',
				'font-size':'10px',
				'color':((ainfo.today)?'#ff6600':'#999'),
				'line-height':this._widths.step+'px'
			})
			.text(ainfo.msg)
			.appendTo($(acell));
		}
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:OPERATION
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	navigate:function(){
		var y=$(this._scope).find('select[data-role=select-year]').val();
		var m=Number($(this._scope).find('select[data-role=select-month]').val());

		this.rebuild_bottom(y, m);
	},


	focus_date:function(y, m, d){
		this._core.set_times('focus', y, m, d);
	},


	restrict_date:function(type, time){
		this._core.set_restrict(type, time);
		this.navigate();
	}
};


/*************************************************************************************************
 *
 * UI-LAYER
 *
 *************************************************************************************************/
var LayerUI=function(properties){
	this._scope=null;
	this._cover=null;
	this._container=null;
	this._contents=null;

	this._properties=properties;
	this._counts={'content':-1};
	this._interval={'id':null, 'sec':10};
	this._isopen=false;

	this.init.apply(this, arguments);
};


LayerUI.prototype={
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// INITIALIZE
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	init:function(){
		this.build();
	},


	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:BUILD
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build:function(){
		this.build_scope();
		this.build_cover();
		this.build_container();
		this.build_events();
	},


	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:SCOPE
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build_scope:function(){
		var scope=document.createElement('div'); this._scope=scope;

		$(scope)
		.css({
			'position':'fixed',
			'left':'0px',
			'top':'0px',
			'width':'100%',
			'height':'100%',
			'z-index':'1000'
		})
		.attr('data-name', 'ui-layer-scope')
		.appendTo(document.body);
	},


	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:COVER
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build_cover:function(){
		var cover=document.createElement('div'); this._cover=cover;

		$(cover)
		.css({
			'width':'100%',
			'height':'100%',
			'background-color':'#000',
			'opacity':'0.5',
			'pointer-events':'none'
		})
		.attr('data-name', 'ui-layer-cover')
		.appendTo(this._scope);
	},


	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:CONTAINER
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build_container:function(){
		var container=document.createElement('div'); this._container=container;

		$(container)
		.css({
			'position':'absolute',
			'left':'0px',
			'top':'0px',
			'width':'100%',
			'height':'100%',
			'z-index':'1'
		})
		.attr('data-name', 'ui-layer-container')
		.appendTo(this._scope);
	},


	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:CONTENT
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	/**
	 *	build-content
	 *
	 * @param	{Object} info
	 *
	 * @usage
	 * 	1. page-load ->
	 * 	{'type':'url', 'param':'/some.html', callback:function(){...})
	 *
	 * 	2. target-result ->
	 * 	{'type':'target', 'param':'id-name', callback:function(){...}}
	 * '
	 * 	3. draw ->
	 * 	{'type':'msg', 'param':'<dom></dom>', 'callback:null'}
	 */
	build_content:function(info){
		var owner=this;
		var type=String(info.type).toLowerCase();
		var time=info.time || 'slow';
		var shtml='';

		switch(type){
			case 'url':
				shtml=$(document.createElement('iframe'))
				.css({'opacity':'0'})
				.attr({'scrolling':'no', 'frameborder':'0', 'border':'0', 'marginwidth':'0', 'marginheight':'0'})
				.attr('src', info.param+((info.param.indexOf('?')==-1)?'?':'&')+'cb='+StringUtil.get_random('number',5));
				break;

			case 'target':
				shtml=$(document.createElement('iframe'))
				.css({'opacity':'0'})
				.attr({'scrolling':'no', 'frameborder':'0', 'border':'0', 'marginwidth':'0', 'marginheight':'0'})
				.attr('id', info.param)
				.attr('name', info.param);
				break;

			default:
				shtml=info.param;
				break;
		}

		// create-container-content
		var c=++this._counts.content;
		var content=$(document.createElement('div'))
		.attr('data-role', 'ui-layer-content-'+c)
		.css({
			'position':'absolute',
			'opacity':'0',
			'overflow':'hidden', // for-transition-effect
			'background-color':'#222'
		})
		.data('n', c)
		.data('rect', {'w':-1, 'h':-1})
		.data('info', info)
		.append(shtml)
		.appendTo($(this._container));

		if(type=='url' || type=='target'){
			$(content).find('iframe')
			.bind({
				'load':function(e){
					var cwin=$(this)[0].contentWindow;
					var cbody=$(this)[0].contentWindow.document.body;

					// public-basic
					// exit
					cwin._exit=function(){
						owner.remove_content($(content));
					};

					// callback-optional
					if(!ValidationUtil.is_null(info.callback)){
						cwin._callback=info.callback;
					}

					// private-method
					// transition-resize
					cwin.__istransition=false;
					cwin.__rect={'w':0, 'h':0}
					cwin.__resize=function(w, h){
						$(content).find('iframe').attr({'width':w, 'height':h});
					};
					cwin.__interval=setInterval(function(){
						if(!cwin.__istransition){
							var r=cwin.__rect
							var aw=$(cbody).find('div:eq(0)').outerWidth();
							var ah=$(cbody).find('div:eq(0)').outerHeight();

							if((aw!=r.w && aw>0) || (ah!=r.h && ah>0)){
								r.w=aw;
								r.h=ah;

								cwin.__istransition=true;

								$(content).stop().animate(
									{
										'width':aw+'px',
										'height':ah+'px'
									},
									{
										'duration':time,
										'easing':'expoEaseOut',
										'step':function(){
											$(content).css('opacity', '1');
											cwin.__resize($(this).width(), $(this).height());
										},
										'complete':function(){
											cwin.__resize($(this).width(), $(this).height());
											cwin.__istransition=false;
											$(content).find('iframe').css('opacity', '1');
										}
									}
								);
							}
						}
					}, 100);
				}
			});
		}else{
			var bw=$(content).find('div:eq(0)').outerWidth();
			var bh=$(content).find('div:eq(0)').outerHeight();

			$(content).css({'width':'0px', 'height':'0px'})
			.find('div:eq(0)').css({'opacity':'0'});

			setTimeout(function(){
				$(content).stop().animate(
					{
						'width':bw+'px',
						'height':bh+'px'
					},
					{
						'duration':time,
						'easing':'expoEaseOut',
						'step':function(){
							$(this).css('opacity', '1');
						},
						'complete':function(){
							$(this).find('div:eq(0)').css('opacity', '1');
						}
					}
				);
			}, 10);
		}

		// create-array
		if(this._contents===null) this._contents=new Array();
		// insert-array
		this._contents.push($(content));
	},


	/**
	 * remote-content
	 *
	 * @param	{DOM} content
	 */
	remove_content:function(content){
		if(this._contents!=null && this._contents.length>0){
			// 1. find-content
			var n=-1;
			for(var a=0, atotal=this._contents.length; a<atotal; a++){
				if($(content).data('n')===$(this._contents[a]).data('n')){
					n=a; break;
				}
			}

			// 2. delete-array
			if(n!=-1){
				var ciframe=$(this._contents[n]).find('iframe');

				if(!ValidationUtil.is_null(ciframe)){
					var cwin=$(ciframe)[0].contentWindow;
					clearInterval(cwin.__interval); cwin=null;
				}

				$(this._contents[n]).remove();
				this._contents.splice(n, 1);
			}

			// 3. defind-close
			if(this._contents.length<=0) this.close();
		}
	},


	/**
	 * clear-all-content
	 */
	clear_content:function(){
		if(this._contents!=null && this._contents.length>0){
			for(var a in this._contents){
				$(this._contents[a]).remove();
				this._contents[a]=null;
			}
			this._contents=null;
		}
	},


	/**
	 * position-content
	 *
	 * @param	{Boolean} iswindow
	 */
	position_content:function(iswindow){
		if(this._contents!=null && this._contents.length>0){
			try{
				var sw=$(window).width();
				var sh=$(window).height();

				for(var a in this._contents){
					var acontent=this._contents[a];
					var aw=$(acontent).width();
					var ah=$(acontent).height();

					$(acontent).css({
						'left':Math.floor((sw-aw)/2)+'px',
						'top':Math.floor((sh-ah)/2)+'px',
						'width':aw+'px',
						'height':ah+'px'
					});
				}
			}catch(e){
			}
		}
	},


	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:EVENT
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build_events:function(){
		var owner=this;

		$(window).bind({
			'resize':function(e){
				owner.position_content(true);
			}
		});
	},


	build_interval:function(){
		if(this._interval.id==null){
			var owner=this;
			this._interval.id=setInterval(function(){
				owner.position_content(false);
			}, this._interval.sec)
		}
	},


	remove_interval:function(){
		if(this._interval.id!=null){
			clearInterval(this._interval.id);
			this._interval.id=null;
		}
	},


	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:OPERATION
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	open:function(info){
		this._isopen=true;

		this.remove_content();
		this.build_content(info);
		this.build_interval();
		this.show(true);
	},


	close:function(){
		this._isopen=false;

		this.remove_interval();
		this.clear_content();
		this.show(false);
	},


	show:function(bool){
		if(bool) $(this._scope).show(); else $(this._scope).hide();
	}
};


/*************************************************************************************************
 *
 * UI-INPUT
 *
 * type :
 *		number
 *		pure-number
 *		date
 *		eng
 *
 *
 * ASCII-CODE : http://www.powerindex.net/U_convt/ascii/ascii.html
 * KEY-CODE : http://www.superkts.pe.kr/upload/helper/file1/keyCode.html
 *
 *************************************************************************************************/
var InputUI=function(scope, properties){
	this._scope=scope;

	this._properties=properties || new Object();
	this._type=String(properties.type).toLowerCase() || null;
	this._value='';
	this._keycode=null;
	this._interval=null;

	this.init.apply(this, arguments);
};


InputUI.prototype={
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// INITIALIZE
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	init:function(){
		this.initCSS();
		this.initEvent();
		this.reinit();
	},


	reinit:function(){
		var value=$(this._scope).val() || '';

		switch(String(this._type)){
			case 'date':
				if($.trim(value)==''){
					value=String(StringUtil.to_date(DateUtil.get_now(), this._properties.sign));
				}
				break;

			default:
				break;

		}
		$(this._scope).val(value);
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:PARAMS
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	is_allowed_keydown:function(e){
		var code=e.keyCode;
		var bool=true;

		if(code!==9 && code!==13){
			switch(String(this._type)){
				case 'number':
					if(e.shiftKey || (!ValidationUtil.is_keycode_fn(code) && !ValidationUtil.is_keycode_number(code))){
						bool=false;
					}
					break;

				case 'pure-number':
					if(e.shiftKey || (!ValidationUtil.is_keycode_fn(code) && !ValidationUtil.is_keycode_number(code))){
						bool=false;
					}
					break;

				case 'string-number':
					if(e.shiftKey || (!ValidationUtil.is_keycode_fn(code) && !ValidationUtil.is_keycode_number(code))){
						bool=false;
					}
					break;

				case 'date':
					if(e.shiftKey || (!ValidationUtil.is_keycode_fn(code) && !ValidationUtil.is_keycode_number(code))){
						bool=false;
					}
					break;

				case 'eng':
					if(!ValidationUtil.is_keycode_fn(code) && !ValidationUtil.is_keycode_eng(code) && !ValidationUtil.is_keycode_number(code)){
						bool=false;
					}
					break;
			}
		}
		return bool;
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:CSS
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	initCSS:function(){
		var cprop, aprop;

		switch(String(this._type)){
			case 'number':
				cprop={'imeMode':'disabled'};
				aprop={};
				break;

			case 'pure-number':
				cprop={'imeMode':'disabled'};
				aprop={};
				break;

			case 'string-number':
				cprop={'imeMode':'disabled'};
				aprop={};
				break;

			case 'date':
				cprop={'imeMode':'disabled'};
				aprop={'maxlength':8};
				break;

			case 'eng':
				cprop={'imeMode':'disabled'};
				aprop={};
				break;
		}
		$(this._scope).css(cprop).attr(aprop);
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:EVENT
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	initEvent:function(){
		var owner=this;

		$(this._scope).bind({
			'focusin':function(e){
				owner.focusinEvent(e);
			},

			'focusout':function(e){
				owner.focusoutEvent(e);
			},

			'keydown':function(e){
				if(!owner.is_allowed_keydown(e)){
					return false;
				}
			},

			'keyup':function(e){
				owner.keyupEvent(e);
			}
		});
	},


	focusinEvent:function(e){
		var owner=this;
		var value=$(this._scope).val() || '';

		switch(String(this._type)){
			case 'number':
				value=($.trim(value)!='')?String(StringUtil.to_pureNumber(value)):'';
				break;

			case 'pure-number':
				value=($.trim(value)!='')?String(StringUtil.to_pureNumber(value)):'';
				break;

			case 'string-number':
				value=($.trim(value)!='')?String(value):'';
				break;

			case 'date':
				value=(!ValidationUtil.is_null(value))?String(StringUtil.to_pureNumber(value)):String(value).replace(/[^0-9]/g, '');//value=String(StringUtil.to_pureNumber(value));
				break;

			default:
				break;

		}
		$(this._scope).val(value);

		this._value=value;
		this._interval=setInterval(function(){
			owner.check();
		}, 10);
	},


	focusoutEvent:function(e){
		var value=$(this._scope).val() || '';

		switch(String(this._type)){
			case 'number':
				value=($.trim(value)!='')?StringUtil.to_cash(value):'';
				break;

			case 'pure-number':
				value=($.trim(value)!='')?String(StringUtil.to_pureNumber(value)):'';
				break;

			case 'string-number':
				value=($.trim(value)!='')?String(value):'';
				break;

			case 'date':
				value=String(StringUtil.to_date(value, this._properties.sign));
				break;

			default:
				break;
		}
		$(this._scope).val(value);

		clearInterval(this._interval);
	},


	keydownEvent:function(e){
	},


	keyupEvent:function(e){

	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:OPERATION
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	check:function(){
		var value=$(this._scope).val() || '';
		if(this._value!=value){
			this._value=value;
			$(this._scope).trigger('change');
		}
	}
};


/*************************************************************************************************
 *
 * UTIL-INPUT-NUMBER
 *
 *************************************************************************************************/
var InputNumber=function(scope){
	this._scope=new InputUI(scope, {'type':'number'});
};


/*************************************************************************************************
 *
 * UTIL-INPUT-PURE-NUMBER
 *
 *************************************************************************************************/
var InputPureNumber=function(scope){
	this._scope=new InputUI(scope, {'type':'pure-number'});
};


/*************************************************************************************************
 *
 * UTIL-INPUT-STRING-NUMBER
 *
 *************************************************************************************************/
var InputStringNumber=function(scope){
	this._scope=new InputUI(scope, {'type':'string-number'});
};


/*************************************************************************************************
 *
 * UTIL-INPUT-ENGLISH
 *
 *************************************************************************************************/
var InputENG=function(scope){
	this._scope=new InputUI(scope, {'type':'eng'});
};


/*************************************************************************************************
 *
 * UTIL-INPUT-DATE
 *
 *************************************************************************************************/
var InputDate=function(scope, sign){
	var sign=(!ValidationUtil.is_null(sign))?sign:'-';
	this._scope=new InputUI(scope, {'type':'date', 'sign':sign});
};


/*************************************************************************************************
 *
 * UI-WEB-ACCESSIBILITY
 *
 * @author	actionwolf (neoxnazis@gmail.com)
 *
 * 1. init_alink : '#' -> 'javascript:nothing();' 변환
 * 2. init_table : 'summary', 'headers', 'id' 생성
 *
 *************************************************************************************************/
var AccessibilityUI={
	/**
	 * initialize-a-link
	 *
	 * '#' -> 'javascript:nothing();'
	 */
	init_alink:function(){
		$(document).find('a').each(function(a){
			if($(this).attr('href')=='#' || $(this).attr('href')=='#none'){
				$(this).attr('href', 'javascript:_common.nothing();');
			}
		});
	},


	/*
	 *  initialize-table
	 */
	init_table:function(iseng){
		var iseng=iseng || false; // define-language-english

		$(document).find('body table').each(function(a){
			if(String($(this).attr('data-restrict')).toUpperCase()!='Y'){
				// execute-create-summary
				AccessibilityTableUI.create_summary($(this), iseng);
				// execute-create-mapping
				AccessibilityTableUI.create_map($(this), 'tth-'+a);
			}
		});
	}
};


/*************************************************************************************************
 *
 * UI-WEB-ACCESSIBILITY-TABLE
 *
 * 1. create_summary
 * 2. create_map
 * 3. get_map_type
 * 4. create_map_single
 * 5. create_map_multi
 * 6. get_map_matrix
 *
 *************************************************************************************************/
var AccessibilityTableUI={
	/**
	 * create-table-summary
	 *
	 * @param	{DOM} scope : table
	 * @param	{Boolean} iseng : true, false
	 */
	create_summary:function(scope, iseng){
		if(ValidationUtil.is_null($(scope).attr('summary'))){

			// search-element-th
			var msg='';
			$(scope).find('th').each(function(b){
				var bth=$(this).text() || '';
				if($.trim(bth)!=''){
					msg+=((msg=='')?'':',')+bth;
				}
			});

			if(msg!=''){
				// search-element-caption
				var caption=$.trim($(scope).find('caption').text()) || '';

				// add-message
				if(iseng){
					msg='Table include '+msg;
					if($.trim(caption)!='') msg=caption+' '+msg;
				}else{
					msg+='(으)로 이루어진';
					if($.trim(caption)!='') msg+=' '+caption;
					msg+=' 테이블입니다.';
				}

				// add-attribute
				$(scope).attr('summary', msg);
			}
		}
	},


	/**
	 * create-map
	 * screen-reader기가 읽을 수 있는 배열 구조 생성 (headers, id)
	 */
	create_map:function(scope, name){
		var type=String(this.get_map_type(scope));

		try{
			this['create_map_'+type](scope, name);
		}catch(e){
			_common.trace('>>> OCCURED-ERROR : AccessibilityTableUI.create_map_'+type+'()');
		}
	},


	/**
	 * get-map-type
	 *
	 * @param	{DOM} scope : table
	 * @return	{String}
	 */
	get_map_type:function(scope){
		// first-tr
		var atr=$(scope).find('tr:eq(0)');
		var ath=$(atr).find('th').length;
		var atd=$(atr).find('td').length;

		// second-tr
		var btr=$(scope).find('tr:eq(1)');
		var bth=$(btr).find('th').length;
		var btd=$(btr).find('td').length;

		var type='';
		if(ath>0){
			if(ath===atd){ // 제목+내용 인 경우
				type='single';
			}else{ // thead+tbody
				type='multi';
			}
		}
		return type;
	},


	/**
	 * create-map-single-type
	 * (제목+내용)
	 *
	 * @param	{DOM} scope : table
	 * @param	{Object} name : prefix-name (id, name)
	 */
	create_map_single:function(scope, name){
		var name=(ValidationUtil.is_null(name)?'tth-':'')+(ValidationUtil.is_null(name)?'':name+'');
		var c=0;
		$(scope).find('tr').each(function(a){
			$(this).find('th').each(function(b){
				var bname=name+'-'+c;

				$(this).attr('id', bname);
				$(this).find('~td').attr('headers', bname);
				c++;
			});
		});
	},


	/**
	 * create-map-multi-type
	 * (thead+tbody)
	 *
	 * @param {DOM} scope : table
	 * @param {String} name : prefix-name (접두어)
	 */
	create_map_multi:function(scope, name){
		// 1. define-matrix
		// 1-1. 상단메뉴 배열구조
		var top=this.get_map_matrix($(scope).find('thead'), 'th', name, 0);
		// 1-2. 좌측메뉴 배열구조
		var left=this.get_map_matrix($(scope).find('tbody'), 'th', name, Number($(scope).find('thead th').length));
		// 1-3. 하단 설명 배열구조
		var bottom=this.get_map_matrix($(scope).find('tbody'), 'td', name.replace('tth-', 'ttd-'), 0);

		/*
		// 확인용
		console.log('top', top);
		console.log('left', left);
		console.log('bottom', bottom);
		*/

		// 2. add-left-th-header
		var w0=(left.length>0)?left[0].length:0;
		var h0=left.length;

		if(w0>0 && h0>0){
			for(var a=0, atotal=h0; a<atotal; a++){
				for(var b=0, btotal=w0; b<btotal; b++){
					// 2-1. 배열 id 취득
					var bid=left[a][b];
					// 2-2. 해당셀의 top 정보 취득
					//var bheader=ArrayUtil.get_value_cols(top[a][b]).join(' ');
					var bheader=ArrayUtil.get_value_unique(ArrayUtil.get_value_cols(top, b)).join(' ');
					// 2-3. 속성부여
					$('th[id='+bid+']').attr('header', bheader);
				}
			}
		}

		// 3. add-bottom-td-header
		var map=new Object();
		var w1=(bottom.length>0)?bottom[0].length:0;
		var h1=bottom.length;

		if(w1>0 && h1>0){
			for(var c=0, ctotal=h1; c<ctotal; c++){
				for(var d=0, dtotal=w1; d<dtotal; d++){
					// 3-1. 배열아이디 취득
					var did=bottom[c][d]; // data-id : ex) data-id="ttd-0-0"
					// 3-2. 해당셀의 top 정보 취득
					var dheader='';
					dheader+=ArrayUtil.get_value_cols(top, w0+d).join(',')
					dheader+=(w0>0)?(','+left[c].join(',')):'';

					if(ValidationUtil.is_null(map[did])){
						map[did]=dheader;
					}else{
						map[did]+=','+dheader;
					}
				}
			}
			// 확인용
			//console.log('map : ', map);
			// 3-3. 속성부여
			for(var m in map){
				$('td[data-id='+m+']').attr(
					'headers',
					ArrayUtil.get_value_unique(map[m].split(',')).join(' ')
				);
			}
		}
	},


	/**
	 * get-map-matrix (배열 정보 취득)
	 *
	 * @param	{DOM} scope : thead, tbody
	 * @param	{String} tag : 'th', 'td'
	 * @param	{String} name : 접두어 이름
	 * @param	{Number} count : 시작 카운트
	 * @return	{Array}
	 *
	 * @usage
	 * 	get_map_matrix($(thead), 'th', 'tth-', 0); 상단 배열 정보
	 * 	get_map_matrix($(tbody), 'th', 'tth-, 0); 좌측 배열 정보
	 * 	get_map_matrix($(tbody), 'td', 'tth-, 0); 하단 배열 정보
	 */
	get_map_matrix:function(scope, tag, name, count){
		// 1. row-length
		var rows=Number($(scope).find('tr').length);

		// 2. col-length
		var cols=0;
		$(scope).find('tr:eq(0)').find(tag).each(function(a){
			cols+=Number($(this).attr('colspan') || '1');
		});

		// 3. create-array
		var arr=new Array();

		if(cols>0 && rows>0){
			for(var b=0, btotal=rows; b<btotal; b++){
				arr[b]=new Array();

				for(var c=0, ctotal=cols; c<ctotal; c++){
					arr[b][c]='';
				}
			}

			// mapping-array
			$(scope).find('tr').each(function(d){
				$(this).find(tag).each(function(e){
					var ex=ArrayUtil.get_position(arr[d], '');
					var ey=d;
					var ew=Number($(this).attr('colspan') || '1');
					var eh=Number($(this).attr('rowspan') || '1');
					var en=name+'-'+count; count++;

					switch(tag){
						case 'th':
							// id 지정
							$(this).attr('id', en);
							break;

						case 'td':
							// data-id 지정(DOM-select 용)
							$(this).attr('data-id', en);
							break;
					}
					ArrayUtil.insert_value_matrix(arr, en, ex, ey, ew, eh);
				});
			});
		}
		return arr;
	}
};









/*************************************************************************************************
 *
 *	UTIL-ALL
 *
 * - DateUtil
 * - StringUtil
 * - ValidationUtil
 * - ArrayUtil
 * - SNSUtil
 *
 *	@author	actionwolf (neoxnazis@gmail.com)
 *
 *************************************************************************************************/

/*************************************************************************************************
 *
 * UTIL-DATE
 *
 *************************************************************************************************/
var DateUtil={
	/**
	 * get basic information
	 *
	 * @return	{Object}
	 */
	get_params:function(){
		return {
			'days_kor':['일', '월', '화', '수', '목', '금', '토'],
			'days_eng':['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			'month_kor':['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
			'month_eng':['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
			'asec':1000,
			'aminute':60*1000,
			'ahour':60*60*1000,
			'aday':24*60*60*1000
		};
	},


	/**
	 * set return information
	 * @param	{Number} y - 1975~
	 * @param	{Number} m - 0~11
	 * @param	{Number} d - 1~31
	 * @return	{Object}
	 */
	set_params:function(y, m, d){
		return {'year':y, 'month':StringUtil.add_zero(Number(m+1), 2), 'date':StringUtil.add_zero(d, 2)}
	},


	/**
	 * get now information
	 *
	 * @return	{Object}
	 */
	get_now:function(){
		var date=new Date()
		return this.set_params(date.getFullYear(), date.getMonth(), date.getDate());
	},


	/**
	 * get Date-Object
	 *
	 * @param	{String, Date, Number, Object} value
	 * @return	{Date}
	 * @usage	get_date('20120101') -> Date-Class
	 */
	get_date:function(value){
		var arr=StringUtil.to_date(value, '-').split('-');
		return new Date(Number(arr[0]), Number(arr[1])-1, Number(arr[2]));
	},


	/**
	 * get day name (korean)
	 *
	 * @param	{Number} n - 0~6
	 * @return	{String}
	 * @usage	get_name_day_kor(0) -> output : '일요일'
	 */
	get_name_day_kor:function(n){
		return this.get_params().day_kor[n];
	},


	/**
	 * get day name (english)
	 *
	 * @param	{Number} n - 0~6
	 * @return	{String}
	 * @usage	get_name_day_eng(0) -> output : 'Sunday'
	 */
	get_name_day_eng:function(n){
		return this.get_params().day_eng[n];
	},


	/**
	 * get month name (korean)
	 *
	 * @param	{Number} n - 0~11
	 * @return	{String}
	 * @usage	get_name_month_kor(0) -> output : '1월'
	 */
	get_name_month_kor:function(n){
		return this.get_params().month_kor[n];
	},


	/**
	 * get month name (english)
	 *
	 * @param	{Number} n - 0~11
	 * @return	{String}
	 * @usage	get_name_month_eng(0) -> output : 'January'
	 */
	get_name_month_eng:function(n){
		return this.get_params().month_eng[n];
	},


	/**
	 * get UTC time (milsec)
	 *
	 * @param	{Number} y - 1975~
	 * @param	{Number} m - 0~11
	 * @param	{Number} d - 1~31
	 * @return	{Number}
	 */
	get_utc_time:function(y, m, d){
		return new Date(y, m, d).getTime();
	},


	/**
	 * get UTC month (month)
	 *
	 * @param	{Number} y - 1975~
	 * @param	{Number} m - 0~11
	 * @return	{Number} total-month
	 */
	get_utc_month:function(y, m){
		return Number(Number(y)*12+(Number(m)+1));
	},


	/**
	 * get date changed month
	 *
	 * @param	{Number} y - 1975~
	 * @param	{Number} m - 0~11
	 * @return	{Number} l - 0~(+, -)
	 */
	get_changed_month:function(y, m, l){
		var total=this.get_utc_month(y, m)+l;
		var cm=total%12;
		var cy=Math.floor((total-cm)/12);

		switch(String(cm)){
			case '0':
				cy=cy-1; cm=11;
				break;

			default:
				cm=cm-1;
				break;
		}
		return {'year':cy, 'month':cm};
	},


	/**
	 * get total date
	 *
	 * @param	{Number} y - 1975~
	 * @param	{Number} m - 0~11
	 * @return	{Number} 0~31
	 */
	get_total_date:function(y, m){
		var next=this.get_changed_month(y, m, 1);
		var date=new Date(next.year, next.month);
		date.setTime(date.getTime()-this.get_params().aday);
		return date.getDate();
	},


	/**
	 * get specify date
	 *
	 * @param	{Number} y - 1975~
	 * @param	{Number} m - 0~11
	 * @param	{Number} d - 1~31
	 * @param	{Number} l - 0~(+, -)
	 * @return	{Object}
	 */
	get_distance_date:function(y, m, d, l){
		var date=new Date(Number(y), Number(m)-1, Number(d));
		date.setTime(date.getTime()+this.get_params().aday*l);
		return this.set_params(date.getFullYear(), date.getMonth(), date.getDate());
	}
};


/*************************************************************************************************
 *
 *	UTIL-STRING
 *
 *************************************************************************************************/
var StringUtil={
	/**
	 * add '0' charactor front value
	 *
	 * @param	{String, Number} value
	 * @param	{Number} len
	 * @return	{String}
	 * @usage	add_zero(1, 2) -> output : '01'
	 */
	add_zero:function(value, len){
		var value=String(value);
		while(value.length<len){
			value='0'+value;
		}
		return value;
	},


	/**
	 * convert-number-type (include ',')
	 *
	 * @param	{String, Number} value
	 * @return	{String}
	 *
	 * @usage	to_cash(1000) -> output : '1,000'
	 */
	to_cash:function(value){
		var value=String(Number(value));
		var reg=/(^[+-]?\d+)(\d{3})/;
		value+='';

		while(reg.test(value)){
		value=value.replace(reg, '$1'+','+'$2');
		}
		return value;
	},


	/**
	 * convert-pure-number-type
	 *
	 * @param	{String, Number} value
	 * @return	{Number}
	 *
	 * @usage	to_pureNumber('-1,000') -> output : -1000
	 */
	to_pureNumber:function(value){
		var isminus=(String(value).indexOf('-')==0)?true:false;
		var value=String(value).replace(/[^0-9]/g, '');
		if(isminus) value='-'+value;
		return Number(value);
	},


	/**
	 * convert-date-type
	 * (value length is less 8, default now-date)
	 *
	 * @param	{String, Number} value
	 * @param	{String} sign (default. '-')
	 * @return	{String}
	 *
	 * @usage
	 * 	to_date(new Date()) -> output : '2013-01-01'
	 * 	to_date({'year':'2013', 'month':'01', 'date':'01'}) -> output : '2013-01-01'
	 * 	to_date(20130101) -> output : '2013-01-01'
	 */
	to_date:function(value, sign){
		var msg='';
		var sign=(!ValidationUtil.is_null(sign) || sign=='')?sign:'-'; // '' 일 때 처리 추가

		switch(typeof(value)){
			// A. JSON, Date
			case 'object':
				switch(typeof(value.getFullYear)){ // define-object-type (Date-Class)
					// A-0. Date-Class
					case 'function':
						msg+=value.getFullYear()+sign;
						msg+=this.add_zero(Number(value.getMonth()+1), 2)+sign;
						msg+=this.add_zero(value.getDate(), 2);
						break;

					// A-1. JSON
					default:
						msg+=value.year+sign;
						msg+=this.add_zero(value.month, 2)+sign;
						msg+=this.add_zero(value.date, 2);
						break;
				}
				break;

			// B. Number, String
			default:
				var value=String(value).replace(/[^0-9]/g, '');

				if(value.length>=8 && !isNaN(value.slice(0, 8))){
					msg+=value.slice(0, 4)+sign;
					msg+=this.add_zero(value.slice(4, 6), 2)+sign;
					msg+=this.add_zero(value.slice(6, 8), 2);
				}else{
					var now=DateUtil.get_now();
					msg+=now.year+sign;
					msg+=this.add_zero(now.month, 2)+sign;
					msg+=this.add_zero(now.date, 2);
				}
				break;
		}
		return msg;
	},


	/**
	 * get-random-string
	 *
	 * @param	{String} type : 'eng', 'number', ' all'(default)
	 * @output	{String}
	 *
	 * @usage
	 * 	get_random('all', 10) -> output : 'avsds123e4'
	 * 	get_random('eng', 10) -> output : 'adhfzxf '
	 * 	get_random('number', 10) -> output : '6283127'
	 */
	get_random:function(type, range){
		// 1. define-range
		var range=(ValidationUtil.is_null(range))?10:range;

		// 2. define-characters
		var chars;
		switch(String(type).toLowerCase()){
			case 'eng':
				chars=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
				break;

			case 'number':
				chars=['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
				break;

			default:
				chars=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
				break;
		}

		// 3. random-sort
		var step=chars.length;
		var arr=ArrayUtil.get_random((chars.length>=range)?chars.length:range); // 전체가 썩이기 위해서 범위(range)가 문자열보다 작으면 문자열 길이로 랜덤 배열 취득
		var msg='';
		for(var a=0, atotal=range; a<atotal; a++){
			msg+=String(chars[Number(arr[a])%step]);
		}
		return msg;
	},


	/**
	 * 한글자소분리
	 *
	 * @param	{String} input
	 * @return	{Array}
	 *
	 * @usage
	 * 	StringUtil.toJaso('한글ab12', true) --> 'ㅎ,ㅏ,ㄴ,ㄱ,ㅡ,ㄹ,a,b,1,2'
	 * 	StringUtil.toJaso('한글ab12', false) --> 'ㅎ,ㄱ, a,b,1,2'
	 */
	to_jaso:function(input, isfull){
		var isfull=(ValidationUtil.is_null(isfull))?false:isfull;
		var cho_seong=[0x3131, 0x3132, 0x3134, 0x3137, 0x3138, 0x3139, 0x3141, 0x3142, 0x3143, 0x3145, 0x3146, 0x3147, 0x3148, 0x3149, 0x314a, 0x314b, 0x314c, 0x314d, 0x314e];
		var jung_seong=[0x314f, 0x3150, 0x3151, 0x3152, 0x3153, 0x3154, 0x3155, 0x3156, 0x3157, 0x3158, 0x3159, 0x315a, 0x315b,0x315c, 0x315d, 0x315e, 0x315f, 0x3160, 0x3161, 0x3162, 0x3163];
		var jong_seong=[0x0000, 0x3131, 0x3132, 0x3133, 0x3134,0x3135, 0x3136, 0x3137, 0x3139, 0x313a, 0x313b, 0x313c, 0x313d, 0x313e, 0x313f, 0x3140, 0x3141, 0x3142, 0x3144, 0x3145, 0x3146, 0x3147, 0x3148, 0x314a, 0x314b, 0x314c, 0x314d, 0x314e];

		var chars=new Array();
		var v=new Array();

		for(var a=0, atotal=input.length; a<atotal; a++){
			chars[a]=input.charCodeAt(a);

			if(chars[a]>=0xAC00 && chars[a]<=0xD7A3){
				var i1, i2, i3;
				i3=chars[a]-0xAC00;
				i1=i3/(21*28);
				i3=i3%(21*28);
				i2=i3/28;
				i3=i3%28;
				v.push(String.fromCharCode(cho_seong[parseInt(i1)]));
				if(isfull){
					v.push(String.fromCharCode(jung_seong[parseInt(i2)]));
					if(i3!=0x0000) v.push(String.fromCharCode(jong_seong[parseInt(i3)]));
				}
			}else{
				v.push(String.fromCharCode(chars[a]));
			}
		}
		//console.log('>>> StringUtil.toJaso : '+input+' : '+isfull+'\n>>> '+v);
		return v;
	}
};


/*************************************************************************************************
 *
 * UTIL-VALIDATION
 *
 *************************************************************************************************/
var ValidationUtil={
	/**
	 * define null or undefined
	 *
	 * @param	{Object} value
	 * @return	{Boolean}
	 */
	is_null:function(value){
		var bool=false;

		if(typeof(value)=='undefined' || value==null){
			bool=true;
		}else if(typeof(value)=='string' && $.trim(value)==''){
			bool=true;
		}
		return bool;
	},


	/**
	 * validation full-email
	 *
	 * @param	{String} value
	 * @return	{Boolean}
	 */
	is_email:function(value){
		return (String(value).search(/^[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[@]{1}[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[.]{1}[A-Za-z]{2,5}$/)==-1)?false:true;
	},


	/**
	 * validation half-email
	 *
	 * @param	{String} value
	 * @return	{Boolean}
	 */
	is_email_half:function(value){
		return (String(value).search(/[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[.]{1}[A-Za-z]{2,5}$/)==-1)?false:true;
	},


	/**
	 * define same-domain
	 *
	 * @param	{String} url
	 * @return	{Boolean}
	 */
	is_samedomain:function(url){
		// test that a given url is a same-origin URL
		// url could be relative or scheme relative or absolute
		var host=document.location.host; // host + port
		var protocol=document.location.protocol;
		var sr_origin='//'+host;
		var origin=protocol+sr_origin;
		// Allow absolute or scheme relative URLs to same origin
		return (	url==origin || url.slice(0, origin.length+1)==origin+'/') ||
				(url==sr_origin || url.slice(0, sr_origin.length+1)==sr_origin+'/') ||
				// or any other URL that isn't scheme relative or absolute i.e relative.
				!(/^(\/\/|http:|https:).*/.test(url));
	},


	/**
	 * define key-down-code (number)
	 * (96~105. Normal, 45~57. Num lock)
	 *
	 * @param	{Number} code
	 * @return	{Boolean}
	 */
	is_keycode_number:function(code){
		return ((code>=96 && code<=105) || (code>=45 && code<=57))?true:false;
	},


	/**
	 * define key-down-code (english)
	 * (65~90. a-zA-Z)
	 *
	 * @param	{Number} code
	 * @return	{Boolean}
	 */
	is_keycode_eng:function(code){
		return (code>=65 && code<=90)?true:false;
	},


	/**
	 * define key-down-code (function-eky)
	 *
	 * @param	{Number} code
	 * @return	{Boolean}
	 */
	is_keycode_fn:function(code){
		return (	code==8 ||	//<Backspace>
				code==9 ||	//<Tab>
				code==12 ||	//<Clear>
				code==13 ||	//<Enter>
				code==16 ||	//<Shift>
				code==17 ||	//<Ctrl>
				code==18 ||	//<Menu>
				code==19 ||	//<Pause>
				code==20 ||	//<Caps Lock>
				code==21 ||	//<한영>
				code==27 ||	//<Esc>
				code==32 ||	//<SpaceBar>
				code==33 ||	//<Page Up>
				code==34 ||	//<Page Down>
				code==35 ||	//<End>
				code==36 ||	//<Home>
				code==37 ||	//<Arrow-LEFT>
				code==38 ||	//<Arrow-UP>
				code==39 ||	//<Arrow-RIGHT>
				code==40 ||	//<Arrow-DOWN>
				code==41 ||	//<Select>
				code==42 ||	//<Print Screen>
				code==43 ||	//<Execute>
				code==44 ||	//<Snapshot>
				code==45 ||	//<Ins>
				code==46 ||	//<Del>
				code==47 ||	//<Help>
				code==144	//<Nun Lock>
				)?true:false;
	},


	/**
	 * define msie version
	 *
	 * @return	{String} version
	 * @usage	get_msie_version() -> output : '7'
	 */
	get_msie_version:function(){
		var version='';
		var ua=navigator.userAgent;
		var trident=navigator.userAgent.match(/Trident\/(\d.\d)/i);
		if(trident!=null){
			switch(trident[1]){
				case '3.0': version='7'; break;
				case '4.0': version='8'; break;
				case '5.0': version='9'; break;
				case '6.0': version='10'; break;
			}
		}else{
			var reg=new RegExp('MSIE ([0-9]{1,}[\.0-9]{0,})');
			if(reg.exec(ua)!=null) version=parseFloat(RegExp.$1);
		}
		return version;
	},


	/**
	 * define browser bander
	 * @return	{String} type-name
	 * @usage	get_browser_type() -> output : 'chrome', 'msie10'
	 */
	get_browser_type:function(){
		var type='';
		var ua=String(navigator.userAgent).toLowerCase();

		if(ua.indexOf('msie')!=-1){
			type='msie'+this.get_msie_version();
		}else if(ua.indexOf('chrome')!=-1){
			type='chrome';
		}else if(ua.indexOf('safari')!=-1 || ua.indexOf('applewebkit/5')!=-1){
			type='safari';
		}else if(ua.indexOf('firefox')!=-1){
			type='firefox';
		}else if(ua.indexOf('opera')!=-1){
			type='opera';
		}
		return type;
	},


	/**
	 * define mobile browser bander
	 * @return	Boolean
	 * @usage	is_mobile() -> output : true, false
	 */
	is_mobile:function(){
		var bool;
		var ua=navigator.userAgent;
		if(	ua.match(/iPhone|iPod|iPad|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i)!=null ||
			ua.match(/LG|SAMSUNG|Samsung/)!=null){
			bool=true;
		}else{
			bool=false;
		}
		return bool;
	},


	/**
	 * define local server
	 */
	is_local:function(){
		return (String(location.href).toLowerCase().indexOf('http://localhost')!=-1)?true:false;
	},


	/**
	 * 일본 전각 체크
	 *
	 * @param	{Object} value
	 */
	is_jp_zenkaku:function(value){
		var bool=true;

		for(var a=0, atotal=value.length; a<atotal; a++){
			var c=value.charCodeAt(a);

			if(c<256 || (c>=0xff61 && c<=0xff9f)){
				bool=false; break;
			}
		}
		return bool;
	}
};


/*************************************************************************************************
 *
 * UTIL-ARRAY
 *
 *************************************************************************************************/
var ArrayUtil={
	/**
	 * get-random-array
	 *
	 * @param	{Object} range :길이 (0~)
	 * @usage	get_random(5) -> output : [3, 1, 2, 4, 0]
	 */
	get_random:function(range){
		var output=new Array();
		var ranges=new Array();
		var c=0, r;

		while(c<range){
			do{
				r=Math.floor(Math.random()*range);
			}while(ranges[r]!=undefined)

			ranges[r]=true;
			output[c]=r; c++;
		}
		return output;
	},


	/**
	 * get-position-match-value
	 *
	 * @param {Array} source
	 * @param {Object} value
	 */
	get_position:function(source, value){
		var n=-1;

		try{
			n=source.indexOf(value);
		}catch(e){
			for(var a=0, atotal=source.length; a<atotal; a++){
				if(source[a]===value){
					n=a;
					break;
				}
			}
		}
		return n;
	},


	/**
	 * insert-value-matrix
	 *
	 * @param {Array} soruce
	 * @param {Object} value
	 * @param {Number} x : 시작점
	 * @param {Number} y :  시작점
	 * @param {Number} w : 가로 범위
	 * @param {Number} h : 세로 범위
	 */
	insert_value_matrix:function(source, value, x, y, w, h){
		for(var a=y, atotal=y+h; a<atotal; a++){
			for(var b=x, btotal=x+w; b<btotal; b++){
				source[a][b]=value;
			}
		}
	},


	/**
	 * get-cols-from-all-row
	 * 다중 배열중에 해당하는 index에 해당하는 값들만 반환
	 *
	 * @param	{Array} source
	 * @param	{Nmber} x
	 * @return	{Array}
	 */
	get_value_cols:function(source, x){
		var arr=new Array();

		for(var a=0, atotal=source.length; a<atotal; a++){
			arr.push(source[a][x]);
		}
		return arr;
	},


	/**
	 * get-unique-element (not-json)
	 * 배열안에 중복된 데이터가 존재할 때, 중복 제거한 배열 반환
	 *
	 * @param	{Array} source
	 * @return	{Array}
	 */
	get_value_unique:function(source){
		var obj=new Object();
		var arr=new Array();

		for(var a in source){
			var aname=source[a];
			if(ValidationUtil.is_null(obj[aname])){
				// marking
				obj[aname]=true;
				// insert-array
				arr.push(aname);
			}
		}
		return arr;
	}
};


/*************************************************************************************************
 *
 * UTIL-SNS-SHARE (Facebook, Twitter, me2day)
 *
 *************************************************************************************************/
var SNSUtil={
	/**
	 * registry-twitter
	 *
	 * @param	{String} url - 공유페이지 링크
	 * @param	{String} msg - 공유 메세지
	 */
	reg_twitter:function(url, msg){
		$.ajax("/external/linkLog.do", {data : {"logType" : "T", "url" : url}});	// 현재 페이지 공유 통계용
		var href='http://twitter.com/home?status='+encodeURIComponent(msg)+' '+encodeURIComponent(url);
		var a=window.open(href, 'twitter', '');
		if(a) a.focus();
	},


	/**
	 * registry-facebook
	 *
	 * @param	{String} url - 공유페이지 링크
	 * @param	{String} msg - 공유 메세지
	 */
	reg_facebook:function(url, msg){
		$.ajax("/external/linkLog.do", {data : {"logType" : "F", "url" : url}});	// 현재 페이지 공유 통계용
		var href='http://www.facebook.com/sharer.php?u='+url+'&t='+encodeURIComponent(msg);
		var a=window.open(href, 'facebook', '');
		if(a) a.focus();
	},


	/**
	 *	registry-me2day
	 *
	 * @param	{String} url - 공유페이지 링크
	 * @param	{String} msg - 공유 메세지
	 * @param	{String} tag - 연관 tag
	 */
	reg_me2day:function(url, msg, tag){
		var url='"'+url+'":'+url;
		var href='http://me2day.net/posts/new?new_post[body]='+encodeURIComponent(msg)+' '+encodeURIComponent(url)+'&new_post[tags]='+encodeURIComponent(tag);
		var a=window.open(href, 'me2Day', '');
		if(a) a.focus();
	},


	/**
	 * registry-yozm-daum
	 *
	 * @param	{String} url - 공유페이지 링크
	 * @param	{String} prefix - 공유메세지
	 * @param	{String} params - 공유메세지
	 */
	reg_yozmdaum:function(url, prefix, params){
		var href='http://yozm.daum.net/api/popup/prePost?sourceid=54&link='+encodeURIComponent(url)+'&prefix='+encodeURIComponent(prefix)+'&parameter='+encodeURIComponent(params);
		var a=window.open(href, 'yozmSend', 'width=466, height=356');
			if(a) a.focus();
	},


	/**
	 * registry-sns
	 *
	 * @param	{String} type - 'twitter', 'facebook', 'me2day', 'yozm'
	 * @param	{String} url - 공유페이지 링크
	 * @param	{String} msg - 공유메세지
	 * @param	{String} tag - 연관 tag (me2day용)
	 */
	registry:function(type, url, msg, tag){
		switch(String(type).toLowerCase()){
			case 'twitter':
				this.reg_twitter(url, msg);
				break;

			case 'facebook':
				this.reg_facebook(url, msg);
				break;

			case 'me2day':
				this.reg_me2day(url, msg, tag);
				break;

			case 'yozm':
				this.reg_yozmdaum(url, msg, msg);
				break;
		}
	}
};









