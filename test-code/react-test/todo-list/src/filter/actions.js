import {SET_Filter} from './actionTypes'

export const setFilter = (filter) => {
  return {
    type: SET_Filter,
    filter
  }
}
