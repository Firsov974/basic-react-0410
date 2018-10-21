import { FILTER_ID, FILTER_DATE } from '../constants'

const defFilterState = {
  ids: [],
  dates: {
    from: null,
    to: null
  }
}

export default (filtersState = defFilterState, action) => {
  const { type, payload } = action

  switch (type) {
    case FILTER_ID:
      return {
        ...filtersState,
        ids: payload.values ? payload.values : defFilterState.ids
      }

    case FILTER_DATE:
      const range = payload.range || {}
      return {
        ...filtersState,
        dates: {
          from: range.from ? range.from : defFilterState.dates.from,
          to: range.to ? range.to : defFilterState.dates.to
        }
      }

    default:
      //      return articlesState
      return filtersState
  }
}
