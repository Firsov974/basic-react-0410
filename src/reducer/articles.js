import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'

const defaultArticles = normalizedArticles.reduce(
  (acc, article) => ({
    ...acc,
    [article.id]: article
  }),
  {}
)

export default (articlesState = defaultArticles, action) => {
  const { type, payload } = action

  let result
  switch (type) {
    case DELETE_ARTICLE:
      result = { ...articlesState }
      delete result[payload.id]
      return result

    case ADD_COMMENT:
      result = { ...articlesState }
      // создали поверхностную копию всех записей
      result[payload.comment.articleId] = {
        ...result[payload.comment.articleId]
      }
      // создали поверхностную копию
      result[payload.comment.articleId].comments.push(payload.comment.id)
      console.log('ADD_COMMENT reducer result: ', result)
      return result

    default:
      return articlesState
  }
}
