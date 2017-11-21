import { push } from 'react-router-redux'
import API from '../api/client'
import { AUTH_ERROR } from './loading'

const api = new API()

export default () => {

  return (dispatch) => {

    if (!api.isAuthenticated()) {
      dispatch({ type: AUTH_ERROR })
      dispatch(push('/sign-in'))
      return
    }

    // dispatch({ type: APP_LOADING })

    // api.get('/batches')
    //   .then((result) => {
    //     dispatch({ type: APP_DONE_LOADING })
    //     dispatch({ type: LOAD_SUCCESS })
    //     dispatch({
    //       type: FETCHED_BATCHES,
    //       payload: result.body
    //     })
    //   })
    //   .catch((error) => {
    //     dispatch({ type: APP_DONE_LOADING })
    //     dispatch({
    //       type: LOAD_ERROR,
    //       payload: error.message
    //     })
    //   })
  }
}

