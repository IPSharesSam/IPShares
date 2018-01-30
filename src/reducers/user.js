import { USER_SIGNED_IN } from '../actions/user/sign-in'
import { USER_SIGNED_OUT } from '../actions/user/signout';

export const user = {
  loading: false,
  loadingError: null,
  recipes: [],
  currentUser: null,
}

export default function(state = user, { type, payload } = {}) {
  switch(type) {
    case USER_SIGNED_IN:
      return { ...state, currentUser: payload }
    case USER_SIGNED_OUT:
      return { ...state, currentUser: null }
  default:
    return state
  }
}
