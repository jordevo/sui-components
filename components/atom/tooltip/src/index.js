import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {withOpenToggle, withIntersectionObserver} from '@s-ui/hoc'

import Tooltip from './components/Tooltip'
import Popover from './components/Popover'

const PLACEMENTS = {
  TOP: 'top',
  TOP_START: 'top-start',
  TOP_END: 'top-end',
  RIGHT: 'right',
  RIGHT_START: 'right-start',
  RIGHT_END: 'right-end',
  BOTTOM: 'bottom',
  BOTTOM_START: 'bottom-start',
  BOTTOM_END: 'bottom-end',
  LEFT: 'left',
  LEFT_START: 'left-start',
  LEFT_END: 'left-end'
}

class AtomTooltip extends Component {
  render() {
    const {popover, children, ...props} = this.props // eslint-disable-line
    // console.log(this.props)
    return popover ? (
      <Popover {...props}>{children}</Popover>
    ) : (
      <Tooltip {...props}>{children}</Tooltip>
    )
  }
}

AtomTooltip.displayName = 'AtomTooltip'

AtomTooltip.defaultProps = {
  isVisible: true,
  longPressTime: 1000
}

AtomTooltip.propTypes = {
  /** Wether to show arrow or not. */
  hideArrow: PropTypes.bool,

  /** Optionally override show/hide delays. Default  → { show: 0, hide: 250 } */
  delay: PropTypes.oneOfType([
    PropTypes.shape({
      show: PropTypes.number,
      hide: PropTypes.number
    }),
    PropTypes.number
  ]),

  /** optionally hide tooltip when hovering over tooltip content. Default → true */
  autohide: PropTypes.bool,

  /** Tooltip and arrow position */
  placement: PropTypes.oneOf(Object.values(PLACEMENTS)),

  /** True if the target is inside the viewport */
  isVisible: PropTypes.bool,

  /** True if the tooltip is displayed or not */
  isOpen: PropTypes.bool,

  /** Handler to set the value of isOpen  */
  onToggle: PropTypes.func,

  /** HTML (component) to be displayed on the Tooltip */
  content: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),

  /** If Tooltip is in "popover" mode (appears on click instead of hover) */
  popover: PropTypes.bool,

  /** Custom ref handler that will be assigned to the "target" element */
  innerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object
  ]),

  /** Time in miliseconds for longpress duration */
  longPressTime: PropTypes.number
}

export default withIntersectionObserver(withOpenToggle(AtomTooltip))
export {PLACEMENTS as atomTooltipPlacements}
