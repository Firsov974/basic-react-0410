import {
  ADD_COMMENT,
  LOAD_ARTICLE_COMMENTS,
  LOAD_PAGE_COMMENTS,
  CHANGE_CURRENT_PAGE,
  INCREMENT_PAGE,
  DECREMENT_PAGE,
  START,
  SUCCESS
} from '../constants'
import { Record, OrderedMap } from 'immutable'
import { arrToMap } from './utils'

const CommentRecord = Record({
  id: null,
  text: null,
  user: null
})

const PageStateRecord = Record({
  number: null,
  commentIds: [],
  loading: true,
  loaded: false
})

const ReducerRecord = Record({
  entities: new OrderedMap({}),
  pagination: {
    curPage: 1,
    step: 5,
    count: null,
    pagesState: new OrderedMap({})
  }
})

export default (state = new ReducerRecord(), action) => {
  const { type, payload, randomId, response } = action

  switch (type) {
    case ADD_COMMENT:
      return state.setIn(
        ['entities', randomId],
        new CommentRecord({
          ...payload.comment,
          id: randomId
        })
      )

    case LOAD_ARTICLE_COMMENTS + SUCCESS:
      return state.mergeIn(['entities'], arrToMap(response, CommentRecord))

    case LOAD_PAGE_COMMENTS + START:
      return state
        .setIn(['pagination', 'curPage'], payload.curPage)
        .setIn(
          ['pagination', 'pagesState', payload.curPage],
          new PageStateRecord()
        )

    case LOAD_PAGE_COMMENTS + SUCCESS:
      //      return state
      //        .mergeIn(['entities'], arrToMap(response.records, CommentRecord))
      return state
        .setIn(['entities'], arrToMap(response.records, CommentRecord))
        .setIn(['pagination', 'count'], response.total)
        .setIn(
          ['pagination', 'pagesState', payload.curPage, 'commentIds'],
          response.records.map((comment) => comment.id)
        )
        .setIn(['pagination', 'pagesState', payload.curPage, 'loading'], false)
        .setIn(['pagination', 'pagesState', payload.curPage, 'loaded'], true)

    case INCREMENT_PAGE:
      const count = state.getIn(['pagination', 'count'])
      const step = state.getIn(['pagination', 'step'])
      const pagesCount = (count && Math.ceil(count / step)) || 0
      return state.setIn(
        ['pagination', 'curPage'],
        payload.curPage < pagesCount ? +payload.curPage + 1 : +pagesCount
      )

    case DECREMENT_PAGE:
      return state.setIn(
        ['pagination', 'curPage'],
        payload.curPage > 1 ? +payload.curPage - 1 : 1
      )

    case CHANGE_CURRENT_PAGE:
      return state.setIn(['pagination', 'curPage'], payload.curPage)

    default:
      return state
  }
}
