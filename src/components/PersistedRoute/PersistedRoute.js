import React from 'react'
import PropTypes from 'prop-types'
import storage from 'xp-storage'

export default function persistedRoute(WrappedComponent) {
  return class extends React.Component {
    static propTypes = {
      location: PropTypes.object
    }

    componentDidMount() {
      // lastRoute
      const path = this.props.location.pathname || '/'
      storage.set('lastRoute', path)
      // scroll
      const scrolls = storage.get('scrolls') || {}
      const scrollDOM = document.querySelector('.xp-scroll') || document.documentElement
      if (scrollDOM) {
        const scrollTop = scrolls[path] || 0
        // FIXME hack方法，强制后执行，否则高度出错
        setTimeout(() => {
          scrollDOM.scrollTop = scrollTop
        }, 0)
      }
    }
    componentWillUnmount() {
      const path = this.props.location.pathname || '/'
      const scrolls = storage.get('scrolls') || {}
      const scrollDOM = document.querySelector('.xp-scroll') || document.documentElement
      if (scrollDOM) {
        const scrollTop = scrollDOM.scrollTop || 0
        scrolls[path] = scrollTop
        storage.set('scrolls', scrolls)
      }
    }
    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return <WrappedComponent {...this.props} />
    }
  }
}
