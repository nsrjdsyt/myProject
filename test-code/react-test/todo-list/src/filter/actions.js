import {SET_Filter} from './actionTypes'

export const setFilter = (filter) => {
  return {
    type: SET_Filter,
    filter
  }
}

export const testLogMiddleware = (filter) => {    //异步action
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch(setFilter(filter))
    }, 500)
  }
}
