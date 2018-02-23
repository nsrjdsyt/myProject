import React, {Component} from 'react'
import * as Actions from './../Actions'
import {connect} from 'react-redux'  //connect 链接容器组件和傻瓜组件

class Counter extends Component{
  render(){
    const {decrement, counterCaption, value, increment} = this.props

    return (<div>
      <button onClick={decrement}>-</button>
      <span>{counterCaption} count: {value}</span>
      <button onClick={increment}>+</button>
    </div>)
  }
}

function mapStateToProps(state, ownProps){
  return {
    value: state[ownProps.counterCaption]
  }
}

function mapDispatchToProps(dispatch, ownProps){
  return {
    increment: () => {
      dispatch(Actions.increment(ownProps.counterCaption))
    },
    decrement: () => {
      dispatch(Actions.decrement(ownProps.counterCaption))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
