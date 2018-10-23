import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducer'
import logger from '../middlewares/logger'
import genCommentId from '../middlewares/genCommentId'

const enhancer = applyMiddleware(logger, genCommentId)

const store = createStore(reducer, enhancer)

//dev only, no need in prod!
window.store = store

export default store
