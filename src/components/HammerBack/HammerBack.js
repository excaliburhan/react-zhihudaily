import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import Hammer from 'react-hammerjs'
import styles from './style.css'

@withRouter
class HammerBack extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      deltaX: 0 // 位移距离
    }
  }
  static defaultProps = {
    minDistance: 30,
    maxDistance: 100
  }
  static propTypes = {
    children: PropTypes.node,
    minDistance: PropTypes.number,
    maxDistance: PropTypes.number,
    history: PropTypes.object
  }

  // 滑动
  onPan(e) {
    const deltaX = e.deltaX
    const { minDistance } = this.props
    if (deltaX > minDistance) { // 超过最小距离才有动效
      this.setState({ deltaX })
    }
  }
  onPanEnd(e) {
    const deltaX = e.deltaX
    const { maxDistance, history } = this.props
    // 滑动超过距离则返回
    if (deltaX >= maxDistance) {
      if (history.length <= 1) { // 首次进入
        history.push('/')
      } else {
        history.goBack()
      }
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

export default HammerBack
