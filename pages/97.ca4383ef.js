(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{ijqK:function(e,a,n){"use strict";n.r(a);var r=n("Liqq"),t=n("pEjj"),l=n.n(t),i=(n("XdOY"),n("lf1d")),u=n.n(i),o=n("Re7l"),c=n("aJoV");n.d(a,"moleculeDataCounterSizes",function(){return c.b});var s=n("Nm5X"),d=n.n(s),m=function(e){var a=e.id,n=e.label,i=e.value,s=e.errorText,m=e.size,v=void 0===m?c.b.MEDIUM:m,p=e.charsSize,b=void 0===p?2:p,f=e.max,w=void 0===f?99:f,x=e.min,E=void 0===x?1:x,C=e.minValueHelpText,N=e.minValueErrorText,V=e.maxValueHelpText,D=e.maxValueErrorText,h=e.onChange,y=e.disabled;i=i?String(i):E?String(E):"0";var S,T,g=Object(t.useState)(i),M=Object(r.a)(g,2),j=M[0],k=M[1],z=Number(j),I=Number(w),q=Number(E),J=z<I,O=z>q,A=y||z<=q,H=y||z>=I,K=function(e,a){var n=a.nValue,r=String(n);k(r),h(e,{value:r})},U=function(e){if(J){var a=""===j?E:parseInt(j)+1;K(e,{nValue:a})}},X=function(e){if(O){var a=""===j?E:parseInt(j)-1;K(e,{nValue:a})}};return y||(S=z===I?V:z===q?C:null,T=z<q?N:z>I?D:s||null),l.a.createElement("div",{className:"sui-MoleculeDataCounter"},l.a.createElement(d.a,{name:a,label:n,helpText:S,errorText:T},l.a.createElement("div",{className:u()("sui-MoleculeDataCounter-container","sui-MoleculeDataCounter-container--"+v)},l.a.createElement(o.a,{disabled:A,onClick:X,type:"secondary"},"-"),l.a.createElement(c.a,{id:a,disabled:y,size:v,charsSize:b,value:j,onKeyDown:function(e,a){a.value;var n=e.key;"ArrowUp"===n&&U(e),"ArrowDown"===n&&X(e)},onChange:function(e,a){var n=a.value,r=parseInt(n,10);n.length<=2&&!isNaN(r)&&K(e,{nValue:r})}}),l.a.createElement(o.a,{disabled:H,onClick:U,type:"secondary"},"+"))))};m.displayName="MoleculeDataCounter",a.default=m}}]);