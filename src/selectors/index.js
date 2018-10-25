import { createSelector } from 'reselect'

export const selectionSelector = (state) => state.filters.selected
export const dateRangeSelector = (state) => state.filters.dateRange
export const articleListSelector = (state) => state.articles
export const commentsSelector = (state) => state.comments
export const idSelector = (_, props) => props.id

export const filtratedArticlesSelector = createSelector(
  selectionSelector,
  dateRangeSelector,
  articleListSelector,
  (selected, dateRange, articles) => {
    const { from, to } = dateRange
    const ids = selected.length
      ? selected.map((item) => item.value)
      : Object.keys(articles)
    console.log('article list selector: ', ids)

    //    return Object.values(articles).filter((article) => {
    //      const published = Date.parse(article.date)
    //      return (
    //        (!selected.length ||
    //          selected.find((selected) => selected.value === article.id)) &&
    //        (!from || !to || (published > from && published < to))
    //      )
    //    })
    return ids.reduce((acc, id) => {
      const article = articles[id]
      const published = Date.parse(article.date)
      return !from || !to || (published > from && published < to)
        ? {
            ...acc,
            [id]: article
          }
        : { ...acc }
    }, {})
  }
)

export const createCommentSelector = () =>
  createSelector(commentsSelector, idSelector, (comments, id) => {
    return comments[id]
  })
