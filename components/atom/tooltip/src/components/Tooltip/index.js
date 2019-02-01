import React, {Component, Fragment} from 'react'

const BASE_CLASS = 'sui-AtomTooltip'
const CLASS_INNER = `${BASE_CLASS}-inner`
const CLASS_ARROW = `${BASE_CLASS}-arrow`
const PREFIX_PLACEMENT = `${BASE_CLASS}-`
const CLASS_TARGET = `${BASE_CLASS}-target`

class Tooltip extends Component {
  state = {Tooltip: null}
  preventNonTouchEvents = false
  hasTouchEnded = false
  touchTimer = null
  onClickTarget = null
  title = null
  refTooltip = React.createRef()
  refTarget = React.createRef()

  loadAsyncReacstrap = ev => {
    if (!this.state.Tooltip) {
      require.ensure(
        [],
        require => {
          const Tooltip = require('reactstrap/lib/Tooltip.js').default
          this.setState({Tooltip})
          this.handleToggle(ev)
        },
        'reactstrap-Tooltip'
      )
    }
  }

  extendChildren() {
    const {children} = this.props // eslint-disable-line react/prop-types

    const ref = this.refTarget
    const className = CLASS_TARGET
    const onTouchEnd = this.handleToggle

    const childrenOnly = React.Children.only(children)

    return React.Children.map(childrenOnly, child => {
      this.onClickTarget = child.props.onClick
      this.title = child.props.title
      return React.cloneElement(child, {
        ref,
        className,
        onTouchEnd
      })
    })
  }

  componentDidMount() {
    const target = this.refTarget.current
    this.props.innerRef(target) // eslint-disable-line react/prop-types
    ;['touchstart', 'mouseover'].forEach(event =>
      target.addEventListener(event, this.loadAsyncReacstrap)
    )
    ;['click', 'touchend'].forEach(event =>
      window.addEventListener(event, this.handleClickOutsideElement)
    )
    target.oncontextmenu = this.handleContextMenu
    target.addEventListener('mouseover', this.disableTitle)
    target.addEventListener('mouseout', this.restoreTitle)
  }

  componentWillUnmount() {
    const target = this.refTarget.current
    clearTimeout(this.touchTimer)
    ;['click', 'touchend'].forEach(event =>
      window.removeEventListener(event, this.handleClickOutsideElement)
    )
    target.removeEventListener('mouseover', this.disableTitle)
    target.removeEventListener('mouseout', this.restoreTitle)
  }

  disableTitle(e) {
    this.dataset.title = this.title
    this.title = ''
  }

  restoreTitle(e) {
    this.title = this.dataset.title
  }

  handleContextMenu = e => {
    e.preventDefault()
    e.stopPropagation()
    return false
  }

  handleClickOutsideElement = e => {
    const {isOpen, onToggle} = this.props // eslint-disable-line react/prop-types
    const target = this.refTarget.current
    if (isOpen) {
      const tooltipDom = this.refTooltip.current
      const isOutside = tooltipDom && !tooltipDom.contains(e.target)
      const isNotTarget = target && !target.contains(e.target)
      if (isOutside && isNotTarget) onToggle(e, {isOpen: false})
    }
  }

  handleTouchStart = e => {
    const {longPressTime, onToggle} = this.props // eslint-disable-line react/prop-types
    this.preventNonTouchEvents = true
    this.hasTouchEnded = false
    clearTimeout(this.touchTimer)
    this.touchTimer = setTimeout(() => {
      if (!this.hasTouchEnded) onToggle(e)
      this.preventNonTouchEvents = false
      this.hasTouchEnded = false
    }, longPressTime)
    return false
  }

  handleTouchEnd = e => {
    if (!this.preventNonTouchEvents) this.handleStopPropagation(e)
    this.hasTouchEnded = true
    clearTimeout(this.touchTimer)
  }

  handleStopPropagation = e => {
    e.preventDefault()
    e.stopPropagation()
    return false
  }

  /**
   * This function is executed when target doesn't have an `onClick` prop (normal targets)
   * this logic assures that only the proper events triggers the tooltip
   */
  handleToggleOnNormalTarget = e => {
    const {type} = e
    const {onToggle} = this.props
    const isValidTrigger = [
      'click',
      'focusin',
      'mouseover',
      'mouseout'
    ].includes(type)
    if (type === 'touchstart') this.hasTouchEnded = false
    if (type === 'touchend') this.hasTouchEnded = true
    if (this.hasTouchEnded && ['focusin', 'mouseover'].includes(type)) {
      this.handleStopPropagation(e)
    }
    if (isValidTrigger) onToggle(e)
  }

  /**
   * This function is executed when target DOES have an `onClick` prop ('call-to-action' targets)
   * this logic assures that only the proper events triggers the tooltip
   */
  handleToggleOnCallToActionTarget = e => {
    const {type} = e
    const {onToggle} = this.props
    if (type === 'touchstart') this.handleTouchStart(e)
    if (type === 'touchend') this.handleTouchEnd(e)
    if (!this.preventNonTouchEvents) onToggle(e)
  }

  handleToggle = e => {
    if (this.onClickTarget) this.handleToggleOnCallToActionTarget(e)
    else this.handleToggleOnNormalTarget(e)
  }

  render() {
    /* eslint-disable react/prop-types */
    const {
      hideArrow,
      content: HtmlContent,
      delay,
      autohide,
      placement
    } = this.props

    const {Tooltip} = this.state
    const target = this.refTarget.current
    const restrictedProps = {
      hideArrow,
      target,
      delay,
      autohide,
      placement
    }
    let {isVisible, isOpen} = this.props
    if (!isVisible && isOpen) isOpen = false

    return (
      <Fragment>
        {this.extendChildren()}
        {target &&
          Tooltip && (
            <Tooltip
              {...restrictedProps}
              isOpen={isOpen}
              toggle={this.handleToggle}
              className={BASE_CLASS}
              innerClassName={CLASS_INNER}
              arrowClassName={CLASS_ARROW}
              placementPrefix={PREFIX_PLACEMENT}
              innerRef={this.refTooltip}
              offset="auto,4px"
            >
              {HtmlContent || this.title}
            </Tooltip>
          )}
      </Fragment>
    )
  }
}

Tooltip.displayName = 'Tooltip'

export default Tooltip
