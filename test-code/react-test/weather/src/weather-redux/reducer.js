import {FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE} from './actionTypes'
import {LOADING, SUCCESS, FAILURE} from './constant'

export default (state = {status: LOADING}, action) => {
  switch(action.type){
    case FETCH_STARTED:
      return {status: LOADING}
    case FETCH_SUCCESS:
      return {...state, status: SUCCESS, ...action.result}
    case FETCH_FAILURE:
      return {status: FAILURE}
    default:
      return state
  }
}
