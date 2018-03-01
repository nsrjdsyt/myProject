import React from 'react'
import TodoItem from './todoItem'
import {connect} from 'react-redux'
import {selectVisibleTodos} from './../selector'
import TransitionGroup from 'react-transition-group/CSSTransitionGroup'
import './todoList.css'

const TodoList = ({todos, onAdd, onDelete, onToggle}) => {
  return (
    <ul>
      <TransitionGroup transitionName="fade" transitionEnterTimeout={500} transitionLeaveTimeout={200}>
        {todos.map(item => (
          <TodoItem
            key={item.id}
            id={item.id}
            text={item.text}
            completed={item.completed}
          />
        ))}
      </TransitionGroup>
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
