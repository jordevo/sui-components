(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{KYBS:function(e,t,n){var l;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var l=arguments[t];if(l){var i=typeof l;if("string"===i||"number"===i)e.push(l);else if(Array.isArray(l))e.push(o.apply(null,l));else if("object"===i)for(var a in l)n.call(l,a)&&l[a]&&e.push(a)}}return e.join(" ")}e.exports?e.exports=o:void 0===(l=function(){return o}.apply(t,[]))||(e.exports=l)}()},d3MM:function(e,t,n){"use strict";n.r(t);var l=n("8CKo"),o=n("pEjj"),i=n.n(o),a=(n("XdOY"),n("KYBS")),s=n.n(a),r="sui-MoleculeCollapsible",c=100,p=function(e){function t(t){var n;return(n=e.call(this,t)||this).toggleCollapse=function(){var e=n.state,t=e.collapsed,l=e.showButton,o=n.props,i=o.onClose,a=o.onOpen;l&&(n.setState({collapsed:!t}),t&&a()||i())},n.childrenContainer=i.a.createRef(),n.state={collapsed:!0,showButton:!0,maxHeight:c},n}Object(l.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this.childrenContainer.current.offsetHeight;this.setState({showButton:e>=this.props.height,maxHeight:e})},n.render=function(){var e,t,n,l,o=this.state,a=o.collapsed,c=o.showButton,p=o.maxHeight,u=this.props,h=u.children,d=u.height,f=u.icon,m=u.showText,b=u.hideText,w=u.withGradient,C=u.withTransition,v=s()(""+r,((e={})[r+"--withGradient"]=w,e["is-collapsed"]=a,e)),g=s()("sui-MoleculeCollapsible-icon",((t={})["is-collapsed"]=a,t)),x=s()("sui-MoleculeCollapsible-container",((n={})["sui-MoleculeCollapsible-container--withGradient"]=w,n["is-collapsed"]=a,n)),M=s()("sui-MoleculeCollapsible-content",((l={})["sui-MoleculeCollapsible-content--withTransition"]=C,l)),y=c&&a?d+"px":p+"px";return i.a.createElement("div",{className:v},i.a.createElement("div",{className:M,style:{maxHeight:""+y}},i.a.createElement("div",{ref:this.childrenContainer},h)),c&&i.a.createElement("div",{className:x},i.a.createElement("button",{type:"button",className:"sui-MoleculeCollapsible-btn",onClick:this.toggleCollapse},i.a.createElement("span",{className:"sui-MoleculeCollapsible-btn-content",tabIndex:"-1"},a?m:b,i.a.createElement("span",{className:g},f)))))},t}(o.Component);p.displayName="MoleculeCollapsible",p.defaultProps={height:c,withGradient:!0,withTransition:!0,onOpen:function(){},onClose:function(){}},t.default=p}}]);