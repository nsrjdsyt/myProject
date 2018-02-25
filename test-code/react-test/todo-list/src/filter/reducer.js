import {SET_Filter} from './actionTypes'
import {FilterTypes} from './../constant'

export default (state = FilterTypes.ALL, action) => {
  switch(action.type){
    case SET_Filter:
      return action.filter
    default:
      return state
  }
}
