(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{"5qCh":function(a,e,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function t(){for(var a=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var o=typeof n;if("string"===o||"number"===o)a.push(n);else if(Array.isArray(n))a.push(t.apply(null,n));else if("object"===o)for(var l in n)r.call(n,l)&&n[l]&&a.push(l)}}return a.join(" ")}a.exports?a.exports=t:void 0===(n=function(){return t}.apply(e,[]))||(a.exports=n)}()},"9mf/":function(a,e,r){"use strict";r.r(e);var n=r("pEjj"),t=r.n(n),o=(r("XdOY"),r("cdKh")),l=r("5qCh"),i=r.n(l),c={ACCENT:"accent",BASE:"base",DARK:"dark",CONTRAST:"contrast",CORPORATE:"corporate",DEFAULT:"default",HIGHLIGHT:"highlight"},u={CONTRAST:"100",OVERLAY_D4:"75",OVERLAY_D3:"50",OVERLAY_D2:"25",OVERLAY_D1:"15"},s=function(a){var e=a.color,r=a.alpha;return i()("sui-atom-panel-color--"+e+"-"+r)},p=function(a){var e=a.children,r=Object(o.a)(a,["children"]);return t.a.createElement("div",{className:s(r)},e)};p.displayName="ColorPanel",p.defaultProps={alpha:u.CONTRAST,color:c.DEFAULT};var f=p,m={LEFT:"left",CENTER:"center",RIGHT:"right"},A={TOP:"top",CENTER:"center",BOTTOM:"bottom"},d=function(a){var e=a.verticalAlign,r=a.horizontalAlign,n=a.resized,t=a.overlayColor,o=a.overlayAlpha,l=a.color,c=u[o]||"CONTRAST";return i()("sui-atom-panel-image--vertical-"+e,"sui-atom-panel-image--horizontal-"+r,t&&"sui-atom-panel--"+t+"-overlay-"+c,"sui-atom-panel-color--"+l,n&&"sui-atom-panel-image--resized")},h=function(a){var e,r=a.children,n=Object(o.a)(a,["children"]);return t.a.createElement("div",{className:d(n),style:(e=n,{backgroundImage:"url("+e.src+")"})},r)};h.displayName="ImagePanel",h.defaultProps={overlayAlpha:"CONTRAST",color:c.DEFAULT};var T=h;r.d(e,"atomPanelHorizontalAlign",function(){return m}),r.d(e,"atomPanelVerticalAlign",function(){return A}),r.d(e,"atomPanelColors",function(){return c}),r.d(e,"atomPanelAlpha",function(){return u});var v=function(a){return a.src?t.a.createElement(T,a):t.a.createElement(f,a)};v.displayName="AtomPanel",v.defaultProps={horizontalAlign:m.CENTER,verticalAlign:A.CENTER};e.default=v}}]);