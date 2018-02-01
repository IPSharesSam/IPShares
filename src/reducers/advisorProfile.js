import { FETCHED_ADVISOR } from '../actions/user/advisor/fetch'


export default function(state = {}, { type, payload } = {}) {
  switch(type) {
    case FETCHED_ADVISOR:
      return payload
  default:
    return state
  }
}
