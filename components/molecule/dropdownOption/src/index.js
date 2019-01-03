import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import AtomInput from '@s-ui/react-atom-input'

const BASE_CLASS = 'sui-MoleculeDropdownOption'
const CLASS_CHECKBOX = `${BASE_CLASS}-checkbox`
const CLASS_TEXT = `${BASE_CLASS}-text`
const CLASS_DISABLED = `${BASE_CLASS}--disabled`
const CLASS_HIGHLIGHTED = `is-highlighted`
const CLASS_HIGHLIGHTED_MARK = `${BASE_CLASS}-mark`

const MoleculeDropdownOption = ({
  children,
  selected,
  checkbox,
  disabled,
  highlightQuery,
  onEnterKey,
  onSelect,
  innerRef,
  value
}) => {
  const className = cx(BASE_CLASS, {
    [CLASS_CHECKBOX]: checkbox,
    [CLASS_DISABLED]: disabled,
    'is-selected': selected
  })

  const handleClick = ev => {
    if (!disabled) onSelect(ev, {value})
  }

  const highlightOption = option => {
    if (typeof option !== 'string') return option
    const regExpHighlight = new RegExp(highlightQuery, 'gi')
    return option.replace(
      regExpHighlight,
      `<mark class="${cx(CLASS_HIGHLIGHTED_MARK, CLASS_HIGHLIGHTED)}">$&</mark>`
    )
  }

  const handleKeyDown = ev => {
    if (ev.key === onEnterKey && !disabled) {
      ev.preventDefault()
      onSelect(ev, {value})
    }
  }

  return (
    <div
      ref={innerRef}
      tabIndex="0"
      className={className}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      {checkbox && (
        <AtomInput type="checkbox" checked={selected} disabled={disabled} />
      )}
      {highlightQuery ? (
        <span
          dangerouslySetInnerHTML={{__html: highlightOption(children)}}
          className={CLASS_TEXT}
        />
      ) : (
        <span className={CLASS_TEXT}>{children}</span>
      )}
    </div>
  )
}

MoleculeDropdownOption.displayName = 'MoleculeDropdownOption'

MoleculeDropdownOption.propTypes = {
  /** option value */
  value: PropTypes.string.isRequired,

  /** Content to be included in the option */
  children: PropTypes.node,

  /** Contains checkbox */
  checkbox: PropTypes.bool,

  /** Is disabled */
  disabled: PropTypes.bool,

  /** onSelect callback (ev, {value}) */
  onSelect: PropTypes.func,

  /** Is initial selected */
  selected: PropTypes.bool,

  /** Text to be highlighted in the option text if found */
  highlightQuery: PropTypes.string,

  /* key to provoke the onClick callback. Valid any value defined here → https://www.w3.org/TR/uievents-key/#named-key-attribute-values */
  onEnterKey: PropTypes.string,

  /** Custom ref handler that will be assigned to the "target" element */
  innerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object
  ])
}

MoleculeDropdownOption.defaultProps = {
  checkbox: false,
  disabled: false,
  onSelect: () => {},
  selected: false,
  onEnterKey: 'Enter'
}

export default MoleculeDropdownOption
