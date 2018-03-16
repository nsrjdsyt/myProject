import React from 'react'
import {connect} from 'react-redux'
import {increment, decrement, asyncIncrement} from './../redux/actions'

const Counter = ({increment, count, decrement, asyncIncrement}) => (
  <div>
    <button onClick={decrement}>-</button>
    <span>{count}</span>
    <button onClick={increment}>+</button>
    <button onClick={asyncIncrement}>async +</button>
  </div>
)

const mapStateToProps = (state) => {
  return {
    count: state
  }
}

const mapDispatchToProps = {
  increment,
  decrement,
  asyncIncrement
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
