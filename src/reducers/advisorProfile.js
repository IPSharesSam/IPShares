import { FETCHED_ADVISOR } from '../actions/user/advisor/fetch'
import { UPDATE_ADVISOR_PROFILE } from '../actions/user/advisor/add'


export default function(state = {}, { type, payload } = {}) {
  switch(type) {
    case FETCHED_ADVISOR:
      return payload
    case UPDATE_ADVISOR_PROFILE:
      return {...state, payload}
  default:
    return state
  }
}
