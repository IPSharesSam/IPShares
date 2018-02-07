import { USER_SIGNED_IN } from '../actions/user/sign-in'
import { USER_SIGNED_OUT } from '../actions/user/signout'

const cu = JSON.parse(window.localStorage.getItem('cu' || null))

export default function(state = cu, { type, payload } = {}) {
  switch (type) {
    case USER_SIGNED_IN:
      window.localStorage.setItem('cu', JSON.stringify({ ...payload }))
      return payload
    case USER_SIGNED_OUT:
      window.localStorage.removeItem('cu')
      return null
    default:
      return state
  }
}
