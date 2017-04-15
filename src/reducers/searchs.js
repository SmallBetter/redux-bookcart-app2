import { initialStore } from '../store'
import TYPE from '../actions/types'

export default (searchs = initialStore.searchs, action) => {
  switch (action.type) {
    case TYPE.BOOK.SEACH: {
      return { text: action.payload.text }
    }
    default: {
      return searchs
    }
  }
}