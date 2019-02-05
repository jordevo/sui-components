import React, {Component, Fragment} from 'react'
import cx from 'classnames'

const BASE_CLASS = 'sui-AtomTooltip'
const CLASS_POPOVER = `${BASE_CLASS}-popover`
const CLASS_INNER = `${BASE_CLASS}-inner`
const CLASS_ARROW = `${BASE_CLASS}-arrow`
const PREFIX_PLACEMENT = `${BASE_CLASS}-`
const CLASS_TARGET = `${BASE_CLASS}-target`

class Popover extends Component {
  state = {UncontrolledPopover: null, PopoverHeader: null, PopoverBody: null}
  refTarget = React.createRef()
  refPopover = React.createRef()

  loadAsyncReacstrap = ev => {
    if (!this.state.Popover) {
      require.ensure(
        [],
        require => {
          const UncontrolledPopover = require('reactstrap/lib/UncontrolledPopover.js')
            .default
          const PopoverHeader = require('reactstrap/lib/PopoverHeader.js')
            .default
          const PopoverBody = require('reactstrap/lib/PopoverBody.js').default
          this.setState({UncontrolledPopover, PopoverHeader, PopoverBody})
        },
        'reactstrap-Popover'
      )
    }
  }

  get extendedChildren() {
    const {children} = this.props // eslint-disable-line react/prop-types

    const ref = this.refTarget
    const className = CLASS_TARGET

    const childrenOnly = React.Children.only(children)

    return React.Children.map(childrenOnly, child => {
      this.onClickTarget = child.props.onClick
      this.title = child.props.title
      return React.cloneElement(child, {
        ref,
        className
      })
    })
  }

  componentDidMount() {
    const target = this.refTarget.current
    this.props.innerRef(target) // eslint-disable-line react/prop-types
    ;['touchstart', 'mouseover'].forEach(event =>
      target.addEventListener(event, this.loadAsyncReacstrap)
    )
  }

  componentWillUnmount() {
    const target = this.refTarget.current
    ;['touchstart', 'mouseover'].forEach(event =>
      target.removeEventListener(event, this.loadAsyncReacstrap)
    )
  }

  handleToggle = ev => {
    /* eslint-disable */
    const {onToggle} = this.props
    console.log('Popover:handleToggle')
    //console.log(ev)
    onToggle()
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

    const {UncontrolledPopover, PopoverHeader, PopoverBody} = this.state
    const {
      extendedChildren,
      refPopover,
      refTarget: {current: target}
    } = this
    const restrictedProps = {
      hideArrow,
      target,
      delay,
      autohide,
      placement
    }
    let {isVisible, isOpen} = this.props
    if (!isVisible && isOpen) isOpen = false

    // console.log({isOpen, target, Popover, PopoverHeader, PopoverBody})
    // console.log(extendedChildren)

    /* Don't forget to add the Popover && */
    console.log({
      refPopover,
      target
    })
    return (
      <Fragment>
        {extendedChildren}
        {target &&
          UncontrolledPopover && (
            <UncontrolledPopover
              {...restrictedProps}
              isOpen={isOpen}
              toggle={this.handleToggle}
              className={cx(BASE_CLASS, CLASS_POPOVER)}
              innerClassName={CLASS_INNER}
              arrowClassName={CLASS_ARROW}
              placementPrefix={PREFIX_PLACEMENT}
              innerRef={refPopover}
              offset="auto,4px"
              trigger="click"
            >
              <PopoverHeader>
                <span>Popover Title</span> <strong onClick={this.handleToggle}>[X]</strong>
              </PopoverHeader>
              <PopoverBody>
                Sed posuere consectetur est at lobortis. Aenean eu leo quam.
                Pellentesque ornare sem lacinia quam venenatis vestibulum.
              </PopoverBody>
            </UncontrolledPopover>
          )}
      </Fragment>
    )
  }
}

Popover.displayName = 'Popover'

export default Popover
