import FETCHED_TRADEMARKS from '../actions/trademarks/fetch'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCHED_TRADEMARKS:
      return [...payload]

    default:
      return [payload]
  }
}