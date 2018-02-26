import React from 'react'
import {connect} from 'react-redux'
import * as actions from './../actions'

const TodoItem = ({text, completed, onDelete, onToggle}) => (
  <li style={{textDecoration: completed ? 'line-through' : ''}}>
    <label><input type="checkbox" readOnly onClick={onToggle} checked={completed ? 'checked' : ''}/>{text}</label>
    <button onClick={onDelete}>X</button>
  </li>
)

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDelete: () => {dispatch(actions.deleteTodo(ownProps.id))},
    onToggle: () => {dispatch(actions.toggleTodo(ownProps.id))}
  }
}

export default connect(null, mapDispatchToProps)(TodoItem)
