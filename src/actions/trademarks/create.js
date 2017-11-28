import { push } from 'react-router-redux'
import API from '../../api/client'
import { AUTH_ERROR } from '../loading'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'
const request = require('superagent')
const api = new API()

const createUrl = (path) => {
  return `${process.env.HOST || `http://localhost:${process.env.PORT || 3030}`}${path}`
}

export const createTrademarks = (trademarks) => {
  const token = api.getToken()
  return (dispatch) => {

    if (!api.isAuthenticated()) {
      dispatch({ type: AUTH_ERROR })
      dispatch(push('/sign-in'))
      return
    }

    dispatch({ type: APP_LOADING })

    request
      .post(createUrl('/trademarks'))
      .set('Authorization', `Bearer ${token}`)
      .send(trademarks)
      .then(() => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({ type: LOAD_SUCCESS })
        dispatch(push('/'))
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