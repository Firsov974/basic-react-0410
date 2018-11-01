import { ADD_COMMENT, LOAD_ALL_COMMENTS, SUCCESS, START } from '../constants'
import { arrToMap } from './utils'
import { Record } from 'immutable'

const CommentRecord = Record({
  id: null,
  user: null,
  text: null
})

const ReducerRecord = Record({
  entities: arrToMap([], CommentRecord),
  loading: false,
  error: null
})

export default (state = new ReducerRecord(), action) => {
  const { type, payload, randomId, response } = action

  switch (type) {
    case ADD_COMMENT: {
      return state.updateIn(['entities'], (comments) =>
        comments.set(
          randomId,
          new CommentRecord({
            id: randomId,
            user: payload.comment.user,
            text: payload.comment.text
          })
        )
      )
    }
    case LOAD_ALL_COMMENTS + START:
      return state.set('loading', true)

    case LOAD_ALL_COMMENTS + SUCCESS:
      return state
        .set('entities', arrToMap(response, CommentRecord))
        .set('loading', false)

    default:
      return state
  }
}
