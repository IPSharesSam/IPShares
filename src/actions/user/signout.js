import ApiClient from '../../api/client'
import { push } from 'react-router-redux'

export const USER_SIGNED_OUT = 'USER_SIGNED_OUT'

const api = new ApiClient()

export default function signOut () {
  return dispatch => {
    dispatch({ type: USER_SIGNED_OUT })
    api.removeToken()
    dispatch(push('/'))
  }
}