import {ADD_TODO, DELETE_TODO, TOGGLE_TODO} from './actionTypes'

let nextTodoId = 0

export const addTodo = (text) => ({
  type: ADD_TODO,
  id: nextTodoId ++,
  completed: false,
  text
})

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id
})

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id
})
