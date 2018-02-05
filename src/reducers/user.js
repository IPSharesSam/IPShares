import { USER_SIGNED_IN } from '../actions/user/sign-in'
import { USER_SIGNED_OUT } from '../actions/user/signout'

const cu = JSON.parse(window.localStorage.getItem('cu' || null))

export const user = {
  loading: false,
  loadingError: null,
  currentUser: cu
}

export default function(state = user, { type, payload } = {}) {
  switch (type) {
    case USER_SIGNED_IN:
      window.localStorage.setItem('cu', JSON.stringify({ ...payload }))
      return { ...state, currentUser: payload }
    case USER_SIGNED_OUT:
      window.localStorage.removeItem('cu')
      return { ...state, currentUser: null }
    default:
      return state
  }
}
