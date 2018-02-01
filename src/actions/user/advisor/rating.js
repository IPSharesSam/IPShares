import API from '../../../api/client'
import {
  LOADING,
  DONE_LOADING,
  LOAD_ERROR
} from '../loading'

export const FETCH_RATING = 'FETCH_RATING'
export const UPDATE_RATING = 'UPDATE_RATING'
export const NEW_RATING = 'NEW_RATING'

const api = new API()

export default () => {
  return dispatch => {
    dispatch({ type: LOADING })
    api.get(`ratings`)
      .then((result) => {
        dispatch({ type: DONE_LOADING })
        dispatch({
          type: FETCH_RATING,
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

export const newRating = (rating) => {
  return dispatch => {
    dispatch({ type: LOADING })
    api.post(`ratings`, rating)
      .then((result) => {
        dispatch({ type: DONE_LOADING })
        dispatch({
          type: NEW_RATING,
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

export const updateRating = (rating, ratingId) => {
  return dispatch => {
    dispatch({ type: LOADING })
    api.put(`ratings/${ratingId}`, rating)
      .then((result) => {
        dispatch({ type: DONE_LOADING })
        dispatch({
          type: UPDATE_RATING,
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
