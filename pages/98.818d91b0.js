(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{vRw4:function(e,t,n){"use strict";n.r(t);var o=n("cdKh"),a=n("XYiX"),l=n("xBg+"),r=n("CfD/"),c=n("8CKo"),i=n("pEjj"),s=n.n(i),u=(n("XdOY"),n("niZo")),p=n.n(u),d=n("Nulv"),f=n("y2/m"),h="sui-MoleculeSelect-inputSelect-arrow",v=function(e){var t,n,a=e.displayName;return n=t=function(t){function n(){return t.apply(this,arguments)||this}return Object(c.a)(n,t),n.prototype.render=function(){var t=this.props,n=t.onClick,a=t.iconArrowDown,l=(t.iconArrowUp,t.isOpen,t.disabled),r=t.readOnly,c=Object(o.a)(t,["onClick","iconArrowDown","iconArrowUp","isOpen","disabled","readOnly"]),i=this.classNames;return s.a.createElement("div",{className:"sui-MoleculeSelect-inputSelect-container",onClick:l?null:n},s.a.createElement(e,Object.assign({},c,{disabled:l,readOnly:r})),s.a.createElement("span",{className:i},a))},Object(l.a)(n,[{key:"classNames",get:function(){var e,t=this.props.isOpen;return p()(h,((e={})["sui-MoleculeSelect-inputSelect-arrow--down"]=!t,e["sui-MoleculeSelect-inputSelect-arrow--up"]=t,e))}}]),n}(i.Component),t.displayName="withSelectUI("+a+")",n},S=v(f.a),m=function(e){var t=e.value,n=void 0===t?"":t,o=e.children,a=e.isOpen,l=e.onToggle,r=e.onChange,c=e.iconArrowDown,u=e.refMoleculeSelect,p=e.size,f=e.placeholder,h=e.id,v=e.disabled,m=e.optionsData,g=void 0===m?{}:m;return s.a.createElement(i.Fragment,null,s.a.createElement(S,{disabled:v,id:h,isOpen:a,value:g[n]||"",onClick:l,iconArrowDown:c,placeholder:f,autocomplete:"off"}),s.a.createElement(d.a,{size:p,visible:a,onSelect:function(e,t){var n=t.value;r(e,{value:n}),l(e,{isOpen:!1}),u.current.focus()},value:n},o))};m.displayName="MoleculeSelectSingleSelection",m.defaultProps={value:""};var g=m,O=v(n("QGCP").a),w=function(e){var t=e.children,n=e.isOpen,o=e.onToggle,a=e.onChange,l=e.iconArrowDown,r=e.iconCloseTag,c=e.refMoleculeSelect,u=e.value,p=e.placeholder,f=e.keysSelection,h=e.id,v=e.size,S=e.optionsData,m=void 0===S?{}:S,g=u.map(function(e){return m[e]});return s.a.createElement(i.Fragment,null,s.a.createElement(O,{id:h,tags:g,onClick:o,tagsCloseIcon:r,iconArrowDown:l,onChangeTags:function(e,t){var n=t.tags;a(e,{value:n}),c.current.focus()},isOpen:n,placeholder:u.length?"":p,optionsData:m,autocomplete:"off",noBorder:!0}),s.a.createElement(d.a,{checkbox:!0,size:v,visible:n,onSelect:function(e,t){var n=t.value,l=u.includes(n)?u.filter(function(e){return e!==n}):[].concat(u,[n]),r=e.key,c=f.includes(r);a(e,{value:l}),void 0===e.key||c||o(e,{isOpen:!1})},value:u},t))};w.displayName="MoleculeSelectFieldMultiSelection",w.defaultProps={value:[]};var b=w,y=n("TNQv"),D=n("4HPQ"),M=n("9sW5");n.d(t,"moleculeSelectDropdownListSizes",function(){return d.b});var C="error",k="success",j=function(e){var t={};return s.a.Children.forEach(e,function(e){var n=e.props,o=n.children,a=n.value;t[a]=o}),t},E=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))||this).refMoleculeSelect=t.props.refMoleculeSelect||s.a.createRef(),t.refsMoleculeSelectOptions=[],t.state={focus:!1,optionsData:{}},t.closeList=function(e){var n=t.props.onToggle,o=Object(r.a)(t).refMoleculeSelect.current;n(e,{isOpen:!1}),o.focus(),e.preventDefault(),e.stopPropagation()},t.focusFirstOption=function(e,t){t.options[0].focus(),e.preventDefault(),e.stopPropagation()},t.handleToggle=function(e){(0,t.props.onToggle)(e,{}),e.preventDefault(),e.stopPropagation()},t.handleKeyDown=function(e){e.persist();var n=t.props.isOpen,o=Object(r.a)(t),a=o.refMoleculeSelect,l=o.refsMoleculeSelectOptions,c=o.closeList,i=o.focusFirstOption,s=o.handleToggle,u=l.map(D.a),p=e.target,d=a.current;if(n){var f=Object(M.a)(),h=[].concat(u).includes(f);"Escape"===e.key&&c(e),"ArrowDown"!==e.key||h||i(e,{options:u})}else["Enter","ArrowDown","ArrowUp"].includes(e.key)&&(p===d?s(e):c(e))},t.handleSelect=function(){t.setState({focus:!0})},t.handleFocusIn=function(){!t.props.disabled&&t.setState({focus:!0})},t.handleFocusOut=function(e){e.persist();var n=Object(r.a)(t),o=n.refsMoleculeSelectOptions,a=n.closeList,l=t.props.isOpen,c=o.map(D.a),i=c[0];setTimeout(function(){var t=Object(M.a)(),n=[].concat(c).includes(t),o=!!i&&t.isSameNode(i.parentNode);n||o||!l||a(e)},1),t.setState({focus:!1})},t}Object(c.a)(t,e),t.getDerivedStateFromProps=function(e,t){var n=e.children,o=j(n);return Object(a.a)({},t,{optionsData:o})};var n=t.prototype;return n.componentDidMount=function(){var e=this.props.children,t=j(e);this.setState({optionsData:t})},n.render=function(){var e=this.props,t=e.multiselection,n=Object(o.a)(e,["multiselection"]),a=this.state.optionsData,l=this.className,r=this.handleKeyDown,c=this.extendedChildren,i=this.refMoleculeSelect,u=this.handleFocusIn,p=this.handleFocusOut;return s.a.createElement("div",{ref:i,tabIndex:"0",className:l,onKeyDown:r,onFocus:u,onBlur:p},t?s.a.createElement(b,Object.assign({refMoleculeSelect:i,optionsData:a},n),c):s.a.createElement(g,Object.assign({refMoleculeSelect:i,optionsData:a},n),c))},Object(l.a)(t,[{key:"extendedChildren",get:function(){var e=this.props,t=e.children,n=e.keysSelection,o=this.refsMoleculeSelectOptions;return s.a.Children.toArray(t).filter(Boolean).map(function(e,t){return o[t]=s.a.createRef(),s.a.cloneElement(e,{innerRef:o[t],onSelectKey:n})})}},{key:"className",get:function(){var e,t=this.state.focus,n=this.props.disabled,o=this.errorStateClass;return p()("sui-MoleculeSelect",((e={})["sui-MoleculeSelect--focus"]=t,e["is-disabled"]=n,e),o)}},{key:"errorStateClass",get:function(){var e=this.props.errorState;return e?"sui-MoleculeSelect--"+C:!1===e?"sui-MoleculeSelect--"+k:""}}]),t}(i.Component);E.defaultProps={disabled:!1,keysSelection:[" ","Enter"],onChange:function(){},onToggle:function(){},readOnly:!1};t.default=Object(y.a)(E)}}]);