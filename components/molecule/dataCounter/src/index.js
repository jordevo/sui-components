import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import AtomButton from '@schibstedspain/sui-atom-button'
import AtomInput, {inputSizes} from '@s-ui/react-atom-input'
import MoleculeField from '@s-ui/react-molecule-field'

const BUTTON_TYPE = 'secondary'

const BASE_CLASS = `sui-MoleculeDataCounter`
const CLASS_INPUT_CONTAINER = `${BASE_CLASS}-container`

const isCharDigit = char => /[0-9]/.test(char)

class MoleculeDataCounter extends Component {
  state = {
    internalValue: this.props.value || this.props.min || '0'
  }

  incrementValue = e => {
    const {internalValue} = this.state
    const {min, max, onChange} = this.props
    const numInternalValue = Number(internalValue)
    const numMax = Number(max)
    const isBelowMaxValue = numInternalValue < numMax

    if (isBelowMaxValue) {
      const newValue = internalValue === '' ? min : parseInt(internalValue) + 1
      const strNewValue = String(newValue)
      this.setState({
        internalValue: strNewValue
      })
      onChange(e, {value: newValue})
    }
  }

  decrementValue = e => {
    const {internalValue} = this.state
    const {min, onChange} = this.props
    const numInternalValue = Number(internalValue)
    const numMin = Number(min)
    const isOverMinValue = numInternalValue > numMin

    if (isOverMinValue) {
      const newValue = internalValue === '' ? min : parseInt(internalValue) - 1
      const strNewValue = String(newValue)
      this.setState({
        internalValue: strNewValue
      })
      onChange(e, {value: newValue})
    }
  }

  removeDigit = e => {
    const {internalValue} = this.state
    const {onChange} = this.props
    if (internalValue.length) {
      const newValue = internalValue.slice(0, -1)
      const strNewValue = String(newValue)
      this.setState({
        internalValue: strNewValue
      })
      onChange(e, {value: newValue})
    }
  }

  addDigit = (e, {key: digit}) => {
    const {internalValue} = this.state
    const {onChange} = this.props
    const newValue = internalValue + digit
    if (newValue.length <= 2) {
      const strNewValue = String(newValue)
      this.setState({
        internalValue: strNewValue
      })
      onChange(e, {value: newValue})
    }
  }

  handleKeyDown = e => {
    const {incrementValue, decrementValue, removeDigit, addDigit} = this
    const {key} = e
    if (key === 'ArrowUp') incrementValue(e)
    if (key === 'ArrowDown') decrementValue(e)
    if (key === 'Backspace') removeDigit(e)
    if (isCharDigit(key)) addDigit(e, {key})
  }

  render() {
    const {
      id,
      label,
      errorText: errorTextProps,
      size,
      charsSize,
      max,
      min,
      minValueHelpText,
      minValueErrorText,
      maxValueHelpText,
      maxValueErrorText,
      disabled
    } = this.props

    const {internalValue} = this.state
    const {incrementValue, decrementValue, handleKeyDown} = this

    const numInternalValue = Number(internalValue)
    const numMin = Number(min)
    const numMax = Number(max)

    const isMaxValue = numInternalValue === numMax
    const isMinValue = numInternalValue === numMin
    const isLowerThanMinValue = numInternalValue < numMin
    const isHigherThanMaxValue = numInternalValue > numMax

    const decrementDisabled = disabled || numInternalValue <= numMin
    const incrementDisabled = disabled || numInternalValue >= numMax

    const inputValue = String(internalValue)

    let helpText, errorText
    if (!disabled) {
      if (isMaxValue) helpText = maxValueHelpText
      else if (isMinValue) helpText = minValueHelpText
      else helpText = null

      if (isLowerThanMinValue) errorText = minValueErrorText
      else if (isHigherThanMaxValue) errorText = maxValueErrorText
      else if (errorTextProps) errorText = errorTextProps
      else errorText = null
    }

    return (
      <div className={BASE_CLASS}>
        <MoleculeField
          name={id}
          label={label}
          helpText={helpText}
          errorText={errorText}
        >
          <div
            className={cx(
              CLASS_INPUT_CONTAINER,
              `${CLASS_INPUT_CONTAINER}--${size}`
            )}
          >
            <AtomButton
              disabled={decrementDisabled}
              onClick={decrementValue}
              type={BUTTON_TYPE}
            >
              -
            </AtomButton>
            <AtomInput
              id={id}
              disabled={disabled}
              size={size}
              charsSize={charsSize}
              value={inputValue}
              onKeyDown={handleKeyDown}
              onChange={handleKeyDown}
            />
            <AtomButton
              disabled={incrementDisabled}
              onClick={incrementValue}
              type="secondary"
            >
              +
            </AtomButton>
          </div>
        </MoleculeField>
      </div>
    )
  }
}

MoleculeDataCounter.displayName = 'MoleculeDataCounter'

MoleculeDataCounter.propTypes = {
  /** Text to be displayed as label */
  label: PropTypes.string.isRequired,

  /** used as label for attribute and input element id */
  id: PropTypes.string.isRequired,

  /** width of input based in number of characters (native "size" attribute) */
  charsSize: PropTypes.number,

  /** text to display in case of error */
  errorText: PropTypes.string,

  /** value of the control */
  value: PropTypes.number.isRequired,

  /** max value allowed */
  max: PropTypes.number,

  /** min value allowed */
  min: PropTypes.number,

  /* callback to be called with every update of the input value */
  onChange: PropTypes.func,

  /* HelpText to be displayed when value reaches minimun value */
  minValueHelpText: PropTypes.string.isRequired,

  // /* ErrorText to be displayed when value is lower than minimun value */
  minValueErrorText: PropTypes.string.isRequired,

  // /* HelpText to be displayed when value reaches maximum value */
  maxValueHelpText: PropTypes.string.isRequired,

  // /* ErrorText to be displayed when value is lower than maximun value */
  maxValueErrorText: PropTypes.string.isRequired,

  /* component disabled or not */
  disabled: PropTypes.bool,

  /** 's' or 'm', default: 'm' */
  size: PropTypes.oneOf(Object.values(inputSizes))
}

MoleculeDataCounter.defaultProps = {
  size: inputSizes.MEDIUM,
  charsSize: 2,
  max: 99,
  min: 1
}

export default MoleculeDataCounter
export {inputSizes as moleculeDataCounterSizes}
