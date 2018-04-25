import React from 'react'
import PropTypes from 'prop-types'
import { ActivityIndicator } from 'antd-mobile'

class LoadingBar extends React.Component {
  static defaultProps = {
    style: { padding: '200px 0 20px' }
  }
  static propTypes = {
    style: PropTypes.object
  }

  render() {
    return (
      <div style={this.props.style}>
        <ActivityIndicator text='Loading...' />
      </div>
    )
  }
}

export default LoadingBar
