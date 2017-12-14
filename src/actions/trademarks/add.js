import { push } from 'react-router-redux'
import API from '../../api/client'
import { AUTH_ERROR } from '../loading'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'

const api = new API()

export const ADD_TRADEMARKS = 'ADD_TRADEMARKS'

export default (trademarks) => {
  return (dispatch) => {

    if (!api.isAuthenticated()) {
      dispatch({ type: AUTH_ERROR })
      dispatch(push('/sign-in'))
      return
    }

    dispatch({ type: APP_LOADING })

    api
      .post('/trademarks', trademarks)
      .then((result) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({ type: LOAD_SUCCESS })
        dispatch({ type: ADD_TRADEMARKS,
                   payload: result.body })
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