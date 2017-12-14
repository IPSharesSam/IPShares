import { SELECTED_TRADEMARKS } from '../actions/trademarks'
import { ADD_TRADEMARKS } from '../actions/trademarks'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case SELECTED_TRADEMARKS:
      return [...payload]
      case ADD_TRADEMARKS:
      return []
    default:
      return state
  }
}