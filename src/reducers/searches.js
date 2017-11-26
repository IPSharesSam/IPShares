import { FETCHED_SEARCHES } from '../actions/trademarks/search'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCHED_SEARCHES:
      return [...payload]

    default:
      return state
  }
}