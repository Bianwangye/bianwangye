(function(){var f=this;var k=function(a,b){for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&b.call(null,a[e],e,a)};var l,m,n,p,q=function(){return f.navigator?f.navigator.userAgent:null};p=n=m=l=!1;var s;if(s=q()){var t=f.navigator;l=0==s.lastIndexOf("Opera",0);m=!l&&(-1!=s.indexOf("MSIE")||-1!=s.indexOf("Trident"));n=!l&&-1!=s.indexOf("WebKit");p=!l&&!n&&!m&&"Gecko"==t.product}var u=m,x=p,y=n;var z;if(l&&f.opera){var A=f.opera.version;"function"==typeof A&&A()}else x?z=/rv\:([^\);]+)(\)|;)/:u?z=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:y&&(z=/WebKit\/(\S+)/),z&&z.exec(q());var B=function(a){this.b=[];this.a={};for(var b=0,e=arguments.length;b<e;++b)this.a[arguments[b]]=""};B.prototype.c=function(a){return this.a.hasOwnProperty(a)?this.a[a]:""};B.prototype.geil=B.prototype.c;var D=function(){var a=C,b=[];k(a.a,function(a){""!=a&&b.push(a)});return 0<a.b.length&&0<b.length?a.b.join(",")+","+b.join(","):a.b.join(",")+b.join(",")};var C,E="google_conversion_id google_conversion_format google_conversion_type google_conversion_order_id google_conversion_language google_conversion_value google_conversion_currency_code google_conversion_domain google_conversion_label google_conversion_color google_disable_viewthrough google_remarketing_only google_remarketing_for_search google_conversion_items google_custom_params google_conversion_date google_conversion_time google_conversion_js_version onload_callback opt_image_generator google_is_call google_conversion_page_url".split(" ");
function F(a){return null!=a?escape(a.toString()):""}function G(a){return null!=a?a.toString().substring(0,512):""}function J(a,b){var e=F(b);if(""!=e){var c=F(a);if(""!=c)return"&".concat(c,"=",e)}return""}function K(a){var b=typeof a;return null==a||"object"==b||"function"==b?null:String(a).replace(/,/g,"\\,").replace(/;/g,"\\;").replace(/=/g,"\\=")}
function L(a){var b;if((a=a.google_custom_params)&&"object"==typeof a&&"function"!=typeof a.join){var e=[];for(b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];if(c&&"function"==typeof c.join){for(var d=[],g=0;g<c.length;++g){var h=K(c[g]);null!=h&&d.push(h)}c=0==d.length?null:d.join(",")}else c=K(c);(d=K(b))&&null!=c&&e.push(d+"="+c)}b=e.join(";")}else b="";return""==b?"":"&".concat("data=",encodeURIComponent(b))}
function M(a){return"number"!=typeof a&&"string"!=typeof a?"":F(a.toString())}function N(a){if(!a)return"";a=a.google_conversion_items;if(!a)return"";for(var b=[],e=0,c=a.length;e<c;e++){var d=a[e],g=[];d&&(g.push(M(d.value)),g.push(M(d.quantity)),g.push(M(d.item_id)),g.push(M(d.adwords_grouping)),g.push(M(d.sku)),b.push("("+g.join("*")+")"))}return 0<b.length?"&item="+b.join(""):""}
function O(a,b,e){var c=[];if(a){var d=a.screen;d&&(c.push(J("u_h",d.height)),c.push(J("u_w",d.width)),c.push(J("u_ah",d.availHeight)),c.push(J("u_aw",d.availWidth)),c.push(J("u_cd",d.colorDepth)));a.history&&c.push(J("u_his",a.history.length))}e&&"function"==typeof e.getTimezoneOffset&&c.push(J("u_tz",-e.getTimezoneOffset()));b&&("function"==typeof b.javaEnabled&&c.push(J("u_java",b.javaEnabled())),b.plugins&&c.push(J("u_nplug",b.plugins.length)),b.mimeTypes&&c.push(J("u_nmime",b.mimeTypes.length)));
return c.join("")}function P(a,b,e){var c="";if(b){var d;if(a.top==a)d=0;else{var g=a.location.ancestorOrigins;if(g)d=g[g.length-1]==a.location.origin?1:2;else{g=a.top;try{d=!!g.location.href||""===g.location.href}catch(h){d=!1}d=d?1:2}}g="";g=e?e:1==d?a.top.location.href:a.location.href;c+=J("frm",d);c+=J("url",G(g));c+=J("ref",G(b.referrer))}return c}function Q(a){return a&&a.location&&a.location.protocol&&"https:"==a.location.protocol.toString().toLowerCase()?"https:":"http:"}
function R(){return new Image}function S(a,b,e){var c=R;"function"===typeof a.opt_image_generator&&(c=a.opt_image_generator);c=c();b+=J("async","1");c.src=b;c.onload=e&&"function"===typeof a.onload_callback?a.onload_callback:function(){}}function T(a){for(var b=window,e={},c=function(c){e[c]=a&&null!=a[c]?a[c]:b[c]},d=0;d<E.length;d++)c(E[d]);c("onload_callback");return e};window.google_trackConversion=function(a){a=T(a);a.google_conversion_format=3;var b;var e=window,c=navigator,d=document,g=!1;if(a&&3==a.google_conversion_format){try{var h;"landing"==a.google_conversion_type||!a.google_conversion_id||a.google_remarketing_only&&a.google_disable_viewthrough?h=!1:(a.google_conversion_date=new Date,a.google_conversion_time=a.google_conversion_date.getTime(),a.google_conversion_snippets="number"==typeof a.google_conversion_snippets&&0<a.google_conversion_snippets?a.google_conversion_snippets+
1:1,"number"!=typeof a.google_conversion_first_time&&(a.google_conversion_first_time=a.google_conversion_time),a.google_conversion_js_version="7",0!=a.google_conversion_format&&1!=a.google_conversion_format&&2!=a.google_conversion_format&&3!=a.google_conversion_format&&(a.google_conversion_format=1),C=new B(1),h=!0);if(h){h="/?";"landing"==a.google_conversion_type&&(h="/extclk?");var H;H=Q(e)+"//"+(a.google_remarketing_only?"googleads.g.doubleclick.net":a.google_conversion_domain||"www.googleadservices.com")+
"/pagead/"+[a.google_remarketing_only?"viewthroughconversion/":"conversion/",F(a.google_conversion_id),h,"random=",F(a.google_conversion_time)].join("");var v;n:{var I=a.google_conversion_language;if(null!=I){var r=I.toString();if(2==r.length){v=J("hl",r);break n}if(5==r.length){v=J("hl",r.substring(0,2))+J("gl",r.substring(3,5));break n}}v=""}b=[J("cv",a.google_conversion_js_version),J("fst",a.google_conversion_first_time),J("num",a.google_conversion_snippets),J("fmt",a.google_conversion_format),
J("value",a.google_conversion_value),J("currency_code",a.google_conversion_currency_code),J("label",a.google_conversion_label),J("oid",a.google_conversion_order_id),J("bg",a.google_conversion_color),v,J("guid","ON"),J("disvt",a.google_disable_viewthrough),J("is_call",a.google_is_call),J("eid",D()),N(a),O(e,c,a.google_conversion_date),L(a),P(e,d,a.google_conversion_page_url),a.google_remarketing_for_search&&!a.google_conversion_domain?"&srr=n":""].join("");S(a,H+b,!0);if(a.google_remarketing_for_search&&
!a.google_conversion_domain){var w;w=Q(e)+"//www.google.com/ads/user-lists/"+[F(a.google_conversion_id),"/?random=",Math.floor(1E9*Math.random())].join("");w+=[J("label",a.google_conversion_label),J("fmt","3"),P(e,d,a.google_conversion_page_url)].join("");S(a,w,!1)}g=!0}}catch(U){}b=g}else b=!1;return b};})();
