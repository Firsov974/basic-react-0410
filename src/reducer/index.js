import { combineReducers } from 'redux'
import counterReducer from './couter'
import articles from './articles'
import filters from './filters'

export default combineReducers({
  counter: counterReducer,
  articles,
  filters
})
