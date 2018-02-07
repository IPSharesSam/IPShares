import { push } from 'react-router-redux'
import API from '../../../api/client'
import { LOADING, DONE_LOADING, LOAD_ERROR } from '../loading'

const api = new API()
export const FETCHED_ADVISOR = 'FETCHED_ADVISOR'
export const UPDATE_ADVISOR_PROFILE = 'UPDATE_ADVISOR_PROFILE'

export const updateAdvisor = advisorProfile => {
  return dispatch => {
    const { AdvisorProfileId } = advisorProfile
    if (!api.isAuthenticated()) {
      dispatch(push('/sign-in'))
      return
    }
    dispatch({ type: LOADING })
    api
      .patch(`advisor/${AdvisorProfileId}`, advisorProfile)
      .then(result => {
        dispatch({ type: DONE_LOADING })
        dispatch({
          type: UPDATE_ADVISOR_PROFILE,
          payload: result.body
        })
      })
      .catch(error => {
        dispatch({ type: DONE_LOADING })
        dispatch({
          type: LOAD_ERROR,
          payload: error
        })
      })
  }
}
