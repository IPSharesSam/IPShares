import { LOAD_ERROR, CLEAR_ERROR } from '../actions/user/loading'
import { instanceOf } from '../../../../../.cache/typescript/2.6/node_modules/@types/prop-types';

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
