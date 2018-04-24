import React from 'react'
import PropTypes from 'prop-types'
import { hot } from 'react-hot-loader'
import { withRouter } from 'react-router-dom'
import Hammer from 'react-hammerjs'

class NotFound extends React.Component {
  static propTypes = {
    history: PropTypes.object // history
  }

  // 滑动返回
  onSwipeBack() {
    this.props.history.goBack()
  }

  render() {
    const notFoundStyle = {
      minHeight: '100vh',
      paddingTop: '200px',
      textAlign: 'center',
      fontSize: '40px'
    }
    return (
      <Hammer
        onSwipe={() => {
          this.onSwipeBack()
        }}
        direction='DIRECTION_RIGHT'
      >
        <div style={notFoundStyle}>404</div>
      </Hammer>
    )
  }
}

export default hot(module)(withRouter(NotFound))
