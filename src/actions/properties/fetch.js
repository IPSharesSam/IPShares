import { push } from 'react-router-redux'
import API from '../../api/client'
import { AUTH_ERROR } from '../loading'
import {
    APP_LOADING,
    APP_DONE_LOADING,
    LOAD_ERROR,
    LOAD_SUCCESS
  } from '../loading'

export const FETCHED_PROPERTIES = 'FETCHED_PROPERTIES'

const api = new API()

export default () => {

  return (dispatch) => {

    if (!api.isAuthenticated()) {
      dispatch({ type: AUTH_ERROR })
      dispatch(push('/sign-in'))
      return
    }

    dispatch({ type: APP_LOADING })

    api.get('/properties')
      .then((result) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({ type: LOAD_SUCCESS })
        dispatch({
          type: FETCHED_PROPERTIES,
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