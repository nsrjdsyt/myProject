import React from 'react'

export default ({text, completed, onDelete, onToggle}) => (
  <li style={{textDecoration: completed ? 'line-through' : ''}}>
    <label><input type="checkbox" readOnly onClick={onToggle} checked={completed ? 'checked' : ''}/>{text}</label>
    <button onClick={onDelete}>X</button>
  </li>
)
