import { FETCHED_USER } from '../actions/authenticate'

export default (state = {}, { type, payload } = {}) => {
  switch (type) {
      
    case FETCHED_USER :
      return { ...payload }
      
    default :
      return state
  }
}

