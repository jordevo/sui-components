(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{jHdF:function(n,e){n.exports="import React, {lazy, useState, useEffect, Suspense} from 'react'\nimport PropTypes from 'prop-types'\nimport cx from 'classnames'\n\nconst BASE_CLASS = `sui-AtomSlider`\nconst CLASS_DISABLED = `${BASE_CLASS}--disabled`\n\nconst Range = lazy(() => import('rc-slider/lib/Range'))\nconst Slider = lazy(() => import('rc-slider/lib/Slider'))\nconst Tooltip = lazy(() => import('rc-tooltip'))\n\nconst createHandler = (refAtomSlider, handleComponent) => props => {\n  const {value, index, dragging, ...restProps} = props // eslint-disable-line\n  const {component: Handle} = handleComponent\n\n  return (\n    <Tooltip\n      getTooltipContainer={() => refAtomSlider.current}\n      key={index}\n      overlay={value}\n      placement=\"top\"\n      prefixCls=\"rc-slider-tooltip\"\n      visible\n    >\n      <Handle value={value} {...restProps} dragging={dragging.toString()} />\n    </Tooltip>\n  )\n}\n\nconst AtomSlider = ({onChange, value, min, max, step, range, disabled}) => {\n  const [ready, setReady] = useState(false)\n  const [handleComponent, setHandle] = useState({component: null})\n  const refAtomSlider = React.createRef()\n\n  useEffect(() => {\n    // import Handle here and set it in the state as tooltip need this to be loaded\n    // before trying to be shown, otherwise, the reference is wrong\n    // and the tooltip is not positioned correctly\n    import('rc-slider/lib/Handle').then(({default: Handle}) => {\n      setHandle({component: Handle})\n      setReady(true)\n    })\n  }, [])\n\n  const handleChange = value => {\n    const e = {}\n    onChange(e, {value})\n  }\n\n  const numTicks = Math.round((max - min) / step) + 1\n  const steps = Array.from(Array(numTicks), (x, index) => index * step)\n\n  const marks =\n    step === 1\n      ? {[min]: min, [max]: max}\n      : steps.reduce((marksConfig, step) => {\n          marksConfig[step] = step\n          return marksConfig\n        }, {})\n\n  const customProps = {\n    defaultValue: range ? [min, max] : value,\n    handle: createHandler(refAtomSlider, handleComponent),\n    onChange: handleChange,\n    disabled,\n    marks,\n    max,\n    min,\n    step\n  }\n\n  // Determine the type of the slider according to the range prop\n  const Type = range ? Range : Slider\n\n  return (\n    <div\n      ref={refAtomSlider}\n      className={cx(BASE_CLASS, {[CLASS_DISABLED]: disabled})}\n    >\n      {ready && (\n        <Suspense fallback={null}>\n          <Type {...customProps} />\n        </Suspense>\n      )}\n    </div>\n  )\n}\n\nAtomSlider.displayName = 'AtomSlider'\n\nAtomSlider.propTypes = {\n  /** minimal value in range */\n  min: PropTypes.number,\n\n  /** minimal value in range */\n  max: PropTypes.number,\n\n  /** steps for range */\n  step: PropTypes.number,\n\n  /** range mode */\n  range: PropTypes.bool,\n\n  /** slider disabled */\n  disabled: PropTypes.bool,\n\n  /** value  */\n  value: PropTypes.number,\n\n  /* callback to be called with every update of the input value */\n  onChange: PropTypes.func\n}\n\nAtomSlider.defaultProps = {\n  min: 0,\n  max: 100,\n  step: 1,\n  onChange: () => {}\n}\n\nexport default AtomSlider\n"}}]);