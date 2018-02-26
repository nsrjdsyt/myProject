import React from 'react'
import TodoItem from './todoItem'
import {connect} from 'react-redux'
import {selectVisibleTodos} from './../selector'

const TodoList = ({todos, onAdd, onDelete, onToggle}) => {
  return (
    <ul>
      {todos.map(item => (
        <TodoItem
          key={item.id}
          id={item.id}
          text={item.text}
          completed={item.completed}
        />
      ))}
    </ul>
  )
}

const mapStateToProps = (state) => {
  console.log("mapStateToProps");
  return {
    todos: selectVisibleTodos(state)
  }
}

export default connect(mapStateToProps)(TodoList)
