import {createSelector} from 'reselect'
import {FilterTypes} from './../constant'

const getTodos = (state) => state.todos
const getFilter = (state) => state.filter

export const selectVisibleTodos = createSelector([getTodos, getFilter], (todos, filter) => {
  console.log("selectVisibleTodos");
  switch(filter){
    case FilterTypes.ALL:
      return todos
    case FilterTypes.COMPLETED:
      return todos.filter(item => item.completed)
    case FilterTypes.UNCOMPLETED:
      return todos.filter(item => !item.completed)
    default:
      return todos
  }
})
