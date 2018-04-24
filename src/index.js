import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import initReactFastclick from 'react-fastclick'
import store from '@/redux/store'
import RouterMap from '@/router'
import 'xp-reset.css'
import '@/assets/css/app.css'

initReactFastclick() // 解决移动端click事件

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <RouterMap />
    </Provider>
  </AppContainer>,
  document.getElementById('app')
)
