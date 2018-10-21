import defaultArticles from '../fixtures'
import { FILTER_ID, FILTER_DATE } from '../constants'

const defFilterState = {
  ids: [],
  dates: {
    from: null,
    to: null
  }
}

//export default (articlesState = defaultArticles, action) => {
export default (filtersState = defFilterState, action) => {
  const { type, payload } = action

  switch (type) {
    case FILTER_ID:
      console.log(' --- ' + payload.values)
      //      return {
      //		  articlesState.filter((article) => article.id !== payload.values.id )
      //	  }
      return {
        ...filtersState,
        ids: payload.values ? payload.values : defFilterState.ids
      }
    default:
      //      return articlesState
      return filtersState
  }
}
