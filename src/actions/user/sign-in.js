import ApiClient from '../../api/client'
import { push } from 'react-router-redux'
import { LOAD_ERROR, DONE_LOADING } from './loading'

export const USER_SIGNED_IN = 'USER_SIGNED_IN'

const api = new ApiClient()

export default function signIn(user) {
  return dispatch => {
    api
      .post('sessions', user)
      .then(res => {
        api.storeToken(res.body.token)
        return res
      })
      .then(res => {
        api.get('users/me', res).then(res => {
          console.log(res)
          dispatch({ type: USER_SIGNED_IN, payload: res.body })
          dispatch(push('/'))
        })
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
