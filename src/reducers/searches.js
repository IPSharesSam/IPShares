import { FETCHED_SEARCHES } from '../actions/trademarks'
import { ADD_TRADEMARKS } from '../actions/trademarks'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCHED_SEARCHES:
      return [...payload]
    case ADD_TRADEMARKS:
      return []
    default:
      return state
  }
}