(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{SROk:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var s=typeof n;if("string"===s||"number"===s)e.push(n);else if(Array.isArray(n))e.push(r.apply(null,n));else if("object"===s)for(var i in n)a.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?e.exports=r:void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},YbSJ:function(e,t,a){"use strict";a.r(t),a.d(t,"atomBadgeTypes",function(){return l}),a.d(t,"atomBadgeSizes",function(){return c});var n=a("XYiX"),r=a("cdKh"),s=a("pEjj"),i=a.n(s),o=(a("XdOY"),a("SROk")),u=a.n(o),c={LARGE:"large",SMALL:"small"},l={SUCCESS:"success",ERROR:"error",INFO:"info",ALERT:"alert"},p=function(e){var t=e.icon,a=e.label,s=Object(r.a)(e,["icon","label"]),o=function(e){return e.length<100?e:e.substr(0,100)}(a),l=function(e){var t=e.className,a=e.size,n=e.transparent,r=e.type,s=n?"--transparent":"";return u()("sui-AtomBadge","sui-AtomBadge-"+a,"sui-AtomBadge-"+r+s,t)}(s);return i.a.createElement("div",{className:l},function(e){var t=e.icon,a=e.size,n=e.transparent;return t&&(a!==c.SMALL||n)}(Object(n.a)({icon:t},s))&&i.a.createElement("span",{className:"sui-AtomBadge-icon"},t),i.a.createElement("span",{className:"sui-AtomBadge-text",title:o},a))};p.displayName="AtomBadge",p.defaultProps={size:c.SMALL,type:l.SUCCESS},t.default=p}}]);