import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import story from '@/redux/reducers/story'

export default combineReducers({
  story,
  router: routerReducer
})
