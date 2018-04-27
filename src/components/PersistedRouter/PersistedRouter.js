import { ConnectedRouter, push } from 'react-router-redux'
import { connect } from 'react-redux'
import storage from 'xp-storage'
import { isMobile } from '@/utils'

const mapState = state => state.router

@connect(mapState)
class PersistedRouter extends ConnectedRouter {
  componentWillMount() {
    const { history, dispatch } = this.props
    const lastRoute = storage.get('lastRoute')

    // 只在移动端做这个处理
    if (isMobile() && lastRoute && lastRoute !== history.location.pathname) {
      dispatch(push(lastRoute))
    } else {
      dispatch(push(history.location.pathname))
    }
  }
}

export default PersistedRouter
