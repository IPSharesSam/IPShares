import { FETCHED_PROPERTIES } from '../actions/properties/fetch'

export default (state = [], { type, payload } = {}) => {
    switch(type) {

    case FETCHED_PROPERTIES:
      return [...payload]

    default:
      return state
    }
}