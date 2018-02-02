import { push } from 'react-router-redux'
import API from '../../../api/client'
import {
  LOADING,
  DONE_LOADING,
  LOAD_ERROR,
} from '../loading'

const api = new API()
export const ADD_ADVISOR_PROFILE = 'ADD_ADVISOR_PROFILE'
export const UPDATE_ADVISOR_PROFILE = 'UPDATE_ADVISOR_PROFILE'

export const addAdvisorProfile = (advisorProfile) => {
  return dispatch => {

    if (!api.isAuthenticated()) {
      dispatch(push('/sign-in'))
      return
    }
    dispatch({ type: LOADING })
    api.post('/advisor', advisorProfile)
      .then((result) => {
        dispatch({ type: DONE_LOADING })
        dispatch({ type: ADD_ADVISOR_PROFILE,
                   payload: result.body })
      })
      .catch((error) => {
        dispatch({ type: DONE_LOADING })
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
      dispatch(push('/sign-in'))
      return
    }
    dispatch({ type: LOADING })
    api.put(`advisor/:id`, advisorProfile)
      .then((result) => {
        console.log(result)
        dispatch({ type: DONE_LOADING })
        dispatch({ type: UPDATE_ADVISOR_PROFILE,
                   payload: result.body })
      })
      .catch((error) => {
        dispatch({ type: DONE_LOADING })
        dispatch({
          type: LOAD_ERROR,
          payload: error.message
        })
      })
  }
}
