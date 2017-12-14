import API from '../../api/client'
import { push } from 'react-router-redux'

import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS,
  AUTH_ERROR
} from '../loading'

export const FETCHED_SEARCHES = 'FETCHED_SEARCHES'

const api = new API()

export default (search) => {
  const token = api.getToken()
  return dispatch => {

    if (!api.isAuthenticated()) {
      dispatch({ type: AUTH_ERROR })
      dispatch(push('/sign-in'))
      return
    }
    dispatch({ type: APP_LOADING })

    api.post('/trademarks/search', )
    .set('Authorization', `Bearer ${token}`)
    .send(search)
      .then((result) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({ type: LOAD_SUCCESS })
        dispatch( {
          type: FETCHED_SEARCHES,
          payload: result.body
        })
      })
      .catch((error) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({
          type: LOAD_ERROR,
          payload: error.message
        })
      })
  }
}
