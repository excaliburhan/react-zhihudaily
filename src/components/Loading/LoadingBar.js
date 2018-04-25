import React from 'react'
import PropTypes from 'prop-types'
import { ActivityIndicator } from 'antd-mobile'

class LoadingBar extends React.Component {
  static defaultProps = {
    style: {
      padding: `30% 0 ${window.devicePixelRatio * 10}px`
    },
    text: 'Loading...'
  }
  static propTypes = {
    style: PropTypes.object,
    text: PropTypes.string
  }

  render() {
    const { style, text } = this.props
    return (
      <div style={style}>
        <ActivityIndicator text={text} />
      </div>
    )
  }
}

export default LoadingBar
