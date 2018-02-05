import ApiClient from '../../api/client'
import { push } from 'react-router-redux'
// import { loadError } from '../loading'

export const SIGN_UP = 'SIGN_UP'
export const USER_SIGNED_IN = 'USER_SIGNED_IN'

const api = new ApiClient()

export default function signUp(user) {
  return dispatch => {
    const { email, firstName, lastName, password, companyName } = user
    api
      .post('users', { email, firstName, lastName, password })
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
            const profilebody = companyName ? { companyName } : {}
            console.log(profilebody)
            api.post('advisor', profilebody).then(res => console.info(res))
          })
        dispatch(push('/account'))
      })
      .catch(err => dispatch(console.error(err)))
  }
}
