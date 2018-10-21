import { INCREMENT, DELETE_ARTICLE, FILTER_ID, FILTER_DATE } from '../constants'

export function increment() {
  return {
    type: INCREMENT
  }
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: { id }
  }
}

export function filterByIds(values) {
  return {
    type: FILTER_ID,
    payload: { values }
  }
}

export function filterByDates(range) {
  return {
    type: FILTER_DATE,
    payload: { range: { ...range } }
  }
}
