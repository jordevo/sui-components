/* global IntersectionObserver */
import React, {Component} from 'react'

if (typeof window !== 'undefined' && window.document) {
  require('intersection-observer')
}

export default BaseComponent => {
  const displayName = BaseComponent.displayName

  return class WithIntersectionObserver extends Component {
    static displayName = `withIntersectionObserver(${displayName})`
    static contextTypes = BaseComponent.contextTypes

    state = {
      isIntersecting: true
    }

    handleChange = ([{isIntersecting}]) => {
      this.setState({isIntersecting})
    }

    innerRef = elem => {
      this.refTarget = elem
    }

    componentDidMount() {
      const target = this.refTarget
      // check we support IntersectionObserver
      if (!('IntersectionObserver' in window)) {
        this.setState({isIntersecting: true})
        return
      }
      new IntersectionObserver(this.handleChange).observe(target)
    }

    render() {
      let {isOpen} = this.props // eslint-disable-line
      const {isVisible} = this.state.isIntersecting
      if (!isVisible && isOpen) {
        isOpen = false
      }
      console.log({isVisible})
      return (
        <BaseComponent
          {...this.props}
          isVisible={isVisible}
          isOpen={isOpen}
          innerRef={this.innerRef}
        />
      )
    }
  }
}
