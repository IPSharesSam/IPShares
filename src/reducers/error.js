import { LOAD_ERROR, CLEAR_ERROR } from '../actions/user/loading'

export default function (state = null, { type, payload } = {}) {
  switch (type) {
    case LOAD_ERROR:
      console.log(payload);
      if (payload instanceof Error) {
        return payload.response.body.message
      }
      if (payload instanceof String) {
        return payload
      }
      return null

    case CLEAR_ERROR:
      return null
    default:
      return state
  }
}
