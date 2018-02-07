import API from '../../../api/client'
import { LOADING, DONE_LOADING, LOAD_ERROR } from '../loading'

export const FETCH_RATINGS = 'FETCH_RATINGS'
export const UPDATE_RATING = 'UPDATE_RATING'
export const NEW_RATING = 'NEW_RATING'

const api = new API()

export default () => {
  return dispatch => {
    dispatch({ type: LOADING })
    api
      .get(`ratings`)
      .then(result => {
        dispatch({ type: DONE_LOADING })
        dispatch({
          type: FETCH_RATINGS,
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

export const newRating = rating => {
  return dispatch => {
    dispatch({ type: LOADING })
    api
      .post(`ratings`, rating)
      .then(result => {
        dispatch({ type: DONE_LOADING })
        dispatch({
          type: NEW_RATING,
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

export const updateRating = (rating, ratingId) => {
  return dispatch => {
    dispatch({ type: LOADING })
    api
      .put(`ratings/${ratingId}`, rating)
      .then(result => {
        dispatch({ type: DONE_LOADING })
        dispatch({
          type: UPDATE_RATING,
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
