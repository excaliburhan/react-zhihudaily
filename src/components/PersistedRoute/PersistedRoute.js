import React from 'react'
import PropTypes from 'prop-types'
import storage from 'xp-storage'

export default function persistedRoute(WrappedComponent) {
  return class extends React.Component {
    static propTypes = {
      location: PropTypes.object
    }

    componentDidMount() {
      const path = this.props.location.pathname || '/'
      storage.set('lastRoute', path)
    }
    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return <WrappedComponent {...this.props} />
    }
  }
}
