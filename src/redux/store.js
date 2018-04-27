import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'react-router-redux'
import { hashHistory } from '@/router'
import combineReducers from '@/redux/reducers/reducers'
import rootSaga from '@/redux/sagas/sagas'

const hashMiddleware = routerMiddleware(hashHistory)
const sagaMiddleware = createSagaMiddleware()
const store = createStore(combineReducers, applyMiddleware(hashMiddleware, sagaMiddleware))

// 热加载
if (module.hot) {
  module.hot.accept('@/redux/reducers/reducers', () => {
    const nextCombineReducers = require('@/redux/reducers/reducers').default
    store.replaceReducer(nextCombineReducers)
  })
}

sagaMiddleware.run(rootSaga)

export default store
