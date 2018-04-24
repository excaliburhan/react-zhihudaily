
import React from 'react'
import PropTypes from 'prop-types'
import hex2rgba from 'hex2rgba'
import styles from './style.pcss'
import { backTop } from '@/utils'

class HeaderBar extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    bgColor: PropTypes.string,
    opacity: PropTypes.number
  }

  render() {
    const { bgColor, opacity } = this.props
    const headerStyle = {
      backgroundColor: hex2rgba(bgColor || '#2591D0', opacity || 0)
    }
    return (
      <div className={styles.headerBar} onClick={() => {
        backTop(document.getElementById('pull'))
      }} style={headerStyle}>{this.props.title}</div>
    )
  }
}

export default HeaderBar
