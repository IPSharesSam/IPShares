import ApiClient from '../../api/client'
import { push } from 'react-router-redux'
// import { loadError } from '../loading'

export const SIGN_UP = 'SIGN_UP'
export const USER_SIGNED_IN = 'USER_SIGNED_IN'

const api = new ApiClient()

export default function signUp(user) {
  return dispatch => {
    api
      .post('users', user)
      .then(newUser => {
        api
          .post('sessions', user)
          .then(res => {
            api.storeToken(res.body.token)
            return res
          })
          .then(res => {
            api.get('users/me').then(res => {
              dispatch({ type: USER_SIGNED_IN, payload: res.body })
            })
          })
        dispatch(push('/account'))
      })
      .catch(err => dispatch(console.log(err)))
  }
}
