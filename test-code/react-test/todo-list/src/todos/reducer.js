import {ADD_TODO, DELETE_TODO, TOGGLE_TODO} from './actionTypes'

export default (state = [], action = {}) => {
  switch(action.type){
    case ADD_TODO:
      return [{id: action.id, completed: action.completed, text: action.text}, ...state]
    case DELETE_TODO:
      return state.filter(item => item.id !== action.id)
    case TOGGLE_TODO:
      return state.map(item => {
        if(item.id === action.id){
          return {...item, completed: !item.completed}
        }else{
          return item
        }
      })
    default:
      return state
  }
}
