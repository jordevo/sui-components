(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{dxNN:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=h(a("rROK")),l=h(a("BL2/")),u=h(a("/jZc")),i=h(a("b5lW")),r=h(a("MQes")),s=h(a("pEjj")),o=h(a("6BcY")),d=h(a("Q03R")),v=h(a("9Dup")),f=h(a("HNal")),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a("XZLY"));function h(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(e){(0,l.default)(this,t);var a=(0,i.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));a.onEnd=function(e){var t=a.state.dragging;a.removeDocumentEvents(),(t||e)&&a.props.onAfterChange(a.getValue()),a.setState({dragging:!1})};var n=void 0!==e.defaultValue?e.defaultValue:e.min,u=void 0!==e.value?e.value:n;return a.state={value:a.trimAlignValue(u),dragging:!1},c.isDev()&&((0,d.default)(!("minimumTrackStyle"in e),"minimumTrackStyle will be deprecated, please use trackStyle instead."),(0,d.default)(!("maximumTrackStyle"in e),"maximumTrackStyle will be deprecated, please use railStyle instead.")),a}return(0,r.default)(t,e),(0,u.default)(t,[{key:"componentWillReceiveProps",value:function(e){if("value"in e||"min"in e||"max"in e){var t=this.state.value,a=void 0!==e.value?e.value:t,n=this.trimAlignValue(a,e);n!==t&&(this.setState({value:n}),c.isValueOutOfRange(a,e)&&this.props.onChange(n))}}},{key:"onChange",value:function(e){var t=this.props,a=!("value"in t),l=e.value>this.props.max?(0,n.default)({},e,{value:this.props.max}):e;a&&this.setState(l);var u=l.value;t.onChange(u)}},{key:"onStart",value:function(e){this.setState({dragging:!0});var t=this.props,a=this.getValue();t.onBeforeChange(a);var n=this.calcValueByPos(e);this.startValue=n,this.startPosition=e,n!==a&&(this.prevMovedHandleIndex=0,this.onChange({value:n}))}},{key:"onMove",value:function(e,t){c.pauseEvent(e);var a=this.state.value,n=this.calcValueByPos(t);n!==a&&this.onChange({value:n})}},{key:"onKeyboard",value:function(e){var t=c.getKeyboardValueMutator(e);if(t){c.pauseEvent(e);var a=this.state.value,n=t(a,this.props),l=this.trimAlignValue(n);if(l===a)return;this.onChange({value:l}),this.props.onAfterChange(l),this.onEnd()}}},{key:"getValue",value:function(){return this.state.value}},{key:"getLowerBound",value:function(){return this.props.min}},{key:"getUpperBound",value:function(){return this.state.value}},{key:"trimAlignValue",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(null===e)return null;var a=(0,n.default)({},this.props,t),l=c.ensureValueInRange(e,a);return c.ensureValuePrecision(l,a)}},{key:"render",value:function(){var e=this,t=this.props,a=t.prefixCls,l=t.vertical,u=t.included,i=t.disabled,r=t.minimumTrackStyle,o=t.trackStyle,d=t.handleStyle,f=t.tabIndex,c=t.min,h=t.max,p=t.handle,m=this.state,g=m.value,y=m.dragging,b=this.calcOffset(g),k=p({className:a+"-handle",prefixCls:a,vertical:l,offset:b,value:g,dragging:y,disabled:i,min:c,max:h,index:0,tabIndex:f,style:d[0]||d,ref:function(t){return e.saveHandle(0,t)}}),x=o[0]||o;return{tracks:s.default.createElement(v.default,{className:a+"-track",vertical:l,included:u,offset:0,length:b,style:(0,n.default)({},r,x)}),handles:k}}}]),t}(s.default.Component);p.propTypes={defaultValue:o.default.number,value:o.default.number,disabled:o.default.bool,autoFocus:o.default.bool,tabIndex:o.default.number,min:o.default.number,max:o.default.number},t.default=(0,f.default)(p),e.exports=t.default}}]);