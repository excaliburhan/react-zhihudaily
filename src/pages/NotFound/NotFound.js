import React from 'react'
import PropTypes from 'prop-types'
import { hot } from 'react-hot-loader'
import { withRouter } from 'react-router-dom'
import HammerBack from '@/components/HammerBack/HammerBack'
import styles from './style.css'

class NotFound extends React.Component {
  static propTypes = {
    history: PropTypes.object // history
  }

  onBackHome() {
    this.props.history.goBack()
  }

  render() {
    return (
      <HammerBack>
        <div className={`${styles.notFound}`}>
          <div className={`${styles['notFound-num']} animated tada`}>404</div>
          <div className={styles['notFound-back']} onClick={() => { this.onBackHome() }}>返回</div>
        </div>
      </HammerBack>
    )
  }
}

export default hot(module)(withRouter(NotFound))
