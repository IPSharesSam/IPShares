import { FETCHED_ME } from '../actions/authenticate'

export default (state = {}, { type, payload } = {}) => {
  switch (type) {
      
    case FETCHED_ME :
      return { ...payload }
      
    default :
      return state
  }
}

