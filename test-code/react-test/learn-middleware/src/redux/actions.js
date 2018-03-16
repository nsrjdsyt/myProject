import {INCREMENT, DECREMENT} from './actionType'

export const increment = () => ({
  type: INCREMENT
})

export const decrement = () => ({
  type: DECREMENT
})

export const asyncIncrement = () => (dispatch) => {
  setTimeout(() => {
    dispatch(increment())
  }, 1000)
}
