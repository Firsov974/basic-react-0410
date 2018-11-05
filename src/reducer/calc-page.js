import { INCREMENT_PAGE, DECREMENT_PAGE } from '../constants'

export default (pageState = 1, action) => {
  const { type } = action
  switch (type) {
    case INCREMENT_PAGE: {
      return pageState + 1
    }

    case DECREMENT_PAGE: {
      return pageState > 1 ? pageState - 1 : 1
    }

    default:
      return pageState
  }
}
