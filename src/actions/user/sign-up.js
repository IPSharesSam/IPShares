import ApiClient from '../../api/client'
import { push } from 'react-router-redux'
import { loadError } from '../loading'

export const SIGN_UP = 'SIGN_UP'

const api = new ApiClient()

export default function signUp (user) {
  return dispatch => {
    api.post('users', user)
    .then(
      dispatch(push('/'))
    )
    .catch(err => dispatch(loadError(err)))
  }
}