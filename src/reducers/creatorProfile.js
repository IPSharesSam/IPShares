import { FETCHED_CREATOR } from '../actions/user/creator/fetch'
import { UPDATE_CREATOR_PROFILE } from '../actions/user/creator/update'
import { USER_SIGNED_OUT } from '../actions/user/signout'

export default function(state = {}, { type, payload } = {}) {
  switch (type) {
    case USER_SIGNED_OUT:
      return {}
    case FETCHED_CREATOR:
      return payload
    case UPDATE_CREATOR_PROFILE:
      return { ...state, payload }
    default:
      return state
  }
}
