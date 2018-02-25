import React from 'react'
import TodoItem from './todoItem'
import {connect} from 'react-redux'
import * as actions from './../actions'
import {FilterTypes} from './../../constant'

const TodoList = ({todos, onAdd, onDelete, onToggle}) => {
  return (
    <ul>
      {todos.map(item => (
        <TodoItem
          key={item.id}
          text={item.text}
          completed={item.completed}
          onDelete={() => {onDelete(item.id)}}
          onToggle={() => {onToggle(item.id)}}
        />
      ))}
    </ul>
  )
}

const selectVisibleTodos = (todos, filter) => {
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
}

const mapStateToProps = (state) => {
  return {
    todos: selectVisibleTodos(state.todos, state.filter)
  }
}

const mapDispatchToProps = {
  onDelete: actions.deleteTodo,
  onToggle: actions.toggleTodo
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
