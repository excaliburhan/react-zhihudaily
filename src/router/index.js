import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
import Loading from '@/components/Loading/Loading'

const createComponent = path => Loadable({
  loader: () => import(`@/pages/${path}`), // 必须使用字符串变量
  loading: Loading
})

// 路由配置
class RouteMap extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={createComponent('Home/Home')} />
          <Route path='/story/:id' component={createComponent('Contents/Contents')} />
          <Route component={createComponent('NotFound/NotFound')} />
        </Switch>
      </Router>
    )
  }
}

export default RouteMap
