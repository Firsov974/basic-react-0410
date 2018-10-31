import { createSelector } from 'reselect'

export const selectionSelector = (state) => state.filters.selected
export const dateRangeSelector = (state) => state.filters.dateRange
export const articlesLoadingSelector = (state) => state.articles.loading
export const articlesMapSelector = (state) => state.articles.entities
export const articleListSelector = createSelector(
  articlesMapSelector,
  (articlesMap) => articlesMap.valueSeq().toArray()
)
export const commentsLoadingSelector = (state) => state.comments.loading
export const commentsMapSelector = (state, props) => {
  const commentsIdsList = props.article && props.article.get('comments')
  return commentsIdsList
    ? state.comments.entities.filter((comment) =>
        commentsIdsList.includes(comment.id)
      )
    : state.comments.entities
}
export const commentsSelector = createSelector(
  commentsMapSelector,
  (commentsMap) => commentsMap.valueSeq().toArray()
)

export const idSelector = (_, props) => props.id

export const filtratedArticlesSelector = createSelector(
  selectionSelector,
  dateRangeSelector,
  articleListSelector,
  (selected, dateRange, articles) => {
    console.log('---', 'article list selector')
    const { from, to } = dateRange

    return articles.filter((article) => {
      const published = Date.parse(article.date)
      return (
        (!selected.length ||
          selected.find((selected) => selected.value === article.id)) &&
        (!from || !to || (published > from && published < to))
      )
    })
  }
)

export const createCommentSelector = () =>
  createSelector(commentsSelector, idSelector, (comments, id) => {
    return comments[id]
  })
