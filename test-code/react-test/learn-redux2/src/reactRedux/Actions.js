import {INCREMENT, DECREMENT} from './ActionTypes.js'

export const increment = (counterCaption) => {
  return {
    type: INCREMENT,
    counterCaption: counterCaption
  }
}

export const decrement = (counterCaption) => {
  return {
    type: DECREMENT,
    counterCaption: counterCaption
  }
}
