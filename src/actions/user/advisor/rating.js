import API from '../../../api/client'
import {
  LOADING,
  DONE_LOADING,
  LOAD_ERROR
} from '../loading'

export const FETCH_RATING = 'FETCH_RATING'

const api = new API()

export default (userId) => {
  return dispatch => {
    dispatch({ type: LOADING })
    api.get(`rating/${userId}`)
      .then((result) => {
        dispatch({ type: DONE_LOADING })
        dispatch({
          type: FETCHED_ADVISOR,
          payload: result.body
        })
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
