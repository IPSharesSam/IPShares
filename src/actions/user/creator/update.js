import { push } from 'react-router-redux'
import API from '../../../api/client'
import { LOADING, DONE_LOADING, LOAD_ERROR } from '../loading'

const api = new API()
export const FETCHED_CREATOR = 'FETCHED_CREATOR'
export const UPDATE_CREATOR_PROFILE = 'UPDATE_CREATOR_PROFILE'

export const updateCreator = creatorProfile => {
  return dispatch => {
    const { CreatorProfileId } = creatorProfile
    if (!api.isAuthenticated()) {
      dispatch(push('/sign-in'))
      return
    }
    console.log(CreatorProfileId);
    dispatch({ type: LOADING })
    api
      .patch(`creator/${CreatorProfileId}`, creatorProfile)
      .then(result => {
        dispatch({ type: DONE_LOADING })
        dispatch({
          type: UPDATE_CREATOR_PROFILE,
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
