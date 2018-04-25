import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import Hammer from 'react-hammerjs'
import styles from './style.css'

class HammerBack extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      deltaX: 0 // 位移距离
    }
  }
  static defaultProps = {
    distance: 100
  }
  static propTypes = {
    children: PropTypes.node,
    distance: PropTypes.number,
    history: PropTypes.object // history
  }

  // 滑动
  onPan(e) {
    const deltaX = e.deltaX
    this.setState({ deltaX })
  }
  onPanEnd(e) {
    const { distance, history } = this.props
    // 滑动超过距离则返回
    if (e.deltaX >= distance) {
      history.goBack()
    } else {
      this.setState({ deltaX: 0 }) // 还原deltaX
    }
  }

  render() {
    const { children } = this.props
    const childStyle = {
      transform: `translateX(${this.state.deltaX}px)`
    }
    return (
      <Hammer
        onPan={e => {
          this.onPan(e)
        }}
        onPanEnd={e => {
          this.onPanEnd(e)
        }}
        direction='DIRECTION_RIGHT'
      >
        <div className={styles.hammerChild} style={childStyle}>{children}</div>
      </Hammer>
    )
  }
}

export default withRouter(HammerBack)
