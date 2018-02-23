import React, {Component} from 'react'

export default(props) => {
  const {decrement, counterCaption, value, increment} = props

  return (<div>
    <button onClick={decrement}>-</button>
    <span>{counterCaption} count: {value}</span>
    <button onClick={increment}>+</button>
  </div>)
}
