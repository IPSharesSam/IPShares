import { LOAD_ERROR, CLEAR_ERROR } from '../actions/user/loading'

export default function(state = null, { type, payload } = {}) {
  switch (type) {
    case LOAD_ERROR:
      return payload
    case CLEAR_ERROR:
      return null
    default:
      return state
  }
}
