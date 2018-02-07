import ApiClient from '../../api/client'
import { push } from 'react-router-redux'
import { LOAD_ERROR, DONE_LOADING } from './loading'

export const SIGN_UP = 'SIGN_UP'
export const USER_SIGNED_IN = 'USER_SIGNED_IN'

const api = new ApiClient()

export default function signUp(user) {
  return dispatch => {
    const { email, firstName, lastName, password, companyName, type } = user
    if (type !== 'advisor' && type !== 'creator') return
    api
      .post('users', { email, firstName, lastName, password, type })
      .then(newUser => {
        api
          .post('sessions', user)
          .then(res => {
            api.storeToken(res.body.token)
            return res
          })
          .then(res => {
            const profilebody = companyName ? { companyName } : {}
            api.post(type, profilebody).then(res => {
              api.get('users/me').then(res => {
                dispatch({ type: USER_SIGNED_IN, payload: res.body })
              })
            })
          })
        dispatch(push('/account'))
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: DONE_LOADING })
        dispatch({
          type: LOAD_ERROR,
          payload: error
        })
      })
  }
}
