import API from '../../../api/client'
import { LOADING, DONE_LOADING, LOAD_ERROR } from '../loading'

export const FETCHED_ADVISOR = 'FETCHED_ADVISOR'

const api = new API()

export function fetchOwnProfile() {
  return dispatch => {
    dispatch({ type: LOADING })
    api
      .get('account/advisor')
      .then(result => {
        console.log(result)
        dispatch({ type: DONE_LOADING })
        dispatch({
          type: FETCHED_ADVISOR,
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

export default advisorId => {
  return dispatch => {
    dispatch({ type: LOADING })
    api
      .get(`advisor/${advisorId}`)
      .then(result => {
        dispatch({ type: DONE_LOADING })
        dispatch({
          type: FETCHED_ADVISOR,
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
