import API from '../../../api/client'
import { LOADING, DONE_LOADING, LOAD_ERROR } from '../loading'

export const FETCHED_CREATOR = 'FETCHED_CREATOR'

const api = new API()

export function fetchOwnProfile() {
  return dispatch => {
    dispatch({ type: LOADING })
    api
      .get('account/creator')
      .then(result => {
        dispatch({ type: DONE_LOADING })
        dispatch({
          type: FETCHED_CREATOR,
          payload: result.body
        })
      })
      .catch(error => {
        dispatch({ type: DONE_LOADING })
        dispatch({
          type: LOAD_ERROR,
          payload: error.response.text
        })
      })
  }
}

export default creatorId => {
  return dispatch => {
    dispatch({ type: LOADING })
    api
      .get(`creator/${creatorId}`)
      .then(result => {
        dispatch({ type: DONE_LOADING })
        dispatch({
          type: FETCHED_CREATOR,
          payload: result.body
        })
      })
      .catch(error => {
        dispatch({ type: DONE_LOADING })
        dispatch({
          type: LOAD_ERROR,
          payload: error.response.text
        })
      })
  }
}
