import { FETCHED_ADVISOR } from '../actions/user/advisor/fetch'
import { UPDATE_ADVISOR_PROFILE } from '../actions/user/advisor/add'
import { UPDATE_RATING, NEW_RATING } from '../actions/user/advisor/rating'
import { USER_SIGNED_OUT } from '../actions/user/signout'

export default function(state = {}, { type, payload } = {}) {
  switch (type) {
    case USER_SIGNED_OUT:
      return {}
    case FETCHED_ADVISOR:
    case UPDATE_ADVISOR_PROFILE:
      return payload
    case UPDATE_RATING:
      const ratings = state.ratings.map(rating => {
        if (rating._id === payload._id) {
          return payload
        }
        return rating
      })
      return { ...state, ratings: ratings }

    case NEW_RATING:
      if (state.ratings.indexOf(payload) < 0) {
        return { ...state, ratings: state.ratings.concat(payload) }
      }

      return state
    default:
      return state
  }
}
