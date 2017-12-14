import { FETCHED_TRADEMARKS } from '../actions/trademarks'
import { ADD_TRADEMARKS } from '../actions/trademarks'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCHED_TRADEMARKS:
      return [...payload]
    case ADD_TRADEMARKS:
      return [...payload, ...state]
    default:
      return state
  }
}