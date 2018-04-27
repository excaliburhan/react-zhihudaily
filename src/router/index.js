import React from 'react'
import ConnectedRouter from '@/components/PersistedRouter/PersistedRouter'
import { Route, Switch } from 'react-router-dom'
import createHistory from 'history/createHashHistory'
import Loadable from 'react-loadable'
import Loading from '@/components/Loading/Loading'

const history = createHistory()

const createComponent = path => Loadable({
  loader: () => import(`@/pages/${path}`), // 必须使用字符串变量
  loading: Loading
})

// 路由配置
class RouteMap extends React.Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <Switch>
          <Route path='/' exact component={createComponent('Home/Home')} />
          <Route path='/story/:id' component={createComponent('Contents/Contents')} />
          <Route component={createComponent('NotFound/NotFound')} />
        </Switch>
      </ConnectedRouter>
    )
  }
}

export const hashHistory = history
export default RouteMap
