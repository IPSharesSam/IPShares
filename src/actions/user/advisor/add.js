import { push } from 'react-router-redux'
import API from '../../../api/client'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS,
  AUTH_ERROR
} from '../../loading'

const api = new API()
export const ADD_ADVISOR_PROFILE = 'ADD_ADVISOR_PROFILE'
export const UPDATE_ADVISOR_PROFILE = 'UPDATE_ADVISOR_PROFILE'

export default (advisorProfile) => {
  return dispatch => {

    if (!api.isAuthenticated()) {
      dispatch({ type: AUTH_ERROR })
      dispatch(push('/sign-in'))
      return
    }
    dispatch({ type: APP_LOADING })
    api.post('/advisor', advisorProfile)
      .then((result) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({ type: LOAD_SUCCESS })
        dispatch({ type: ADD_ADVISOR_PROFILE,
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

export const updateAdvisor = (advisorProfile) => {
  return dispatch => {

    if (!api.isAuthenticated()) {
      dispatch({ type: AUTH_ERROR })
      dispatch(push('/sign-in'))
      return
    }
    dispatch({ type: APP_LOADING })
    api.put(`/advisor/${advisorProfile._id}`, advisorProfile)
      .then((result) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({ type: LOAD_SUCCESS })
        dispatch({ type: UPDATE_ADVISOR_PROFILE,
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
