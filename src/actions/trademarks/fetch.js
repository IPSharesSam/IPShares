import API from '../../api/client'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'

export const FETCHED_TRADEMARKS = 'FETCHED_TRADEMARKS'

const api = new API()

export default () => {

  return dispatch => {
    dispatch({ type: APP_LOADING })
    
    api.post('/trademarks/user')
      .then((result) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({ type: LOAD_SUCCESS })
        dispatch({ 
          type: FETCHED_TRADEMARKS,
          payload: result.body
        })
        
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
