import React, {Component} from 'react'
import {connect} from 'react-redux'

class Counter extends Component{
  // increment = () => {
  //   this.props.dispatch({
  //     type: 'INCREMENT'
  //   })
  // }
  //
  // decrement = () => {
  //   this.props.dispatch({
  //     type: 'DECREMENT'
  //   })
  // }

  render() {
    console.log("dispatch", this.props.dispatch); //当connect第二参数传递mapDispatchToProps，this.props.dispatch 输出 undefined
    return <div>
      <button onClick={this.props.decrement}>-</button>
      <span>{this.props.count}</span>
      <button onClick={this.props.increment}>+</button>
    </div>
  }
}

//定义了状态到属性的映射: 从 mapStateToProps 函数中返回的状态作为属性注入到你的组件中
function mapStateToProps(state){
  return {
    count: state.count
  }
}

function mapDispatchToProps(dispatch){
  return {
    increment: () => {
      dispatch({
        type: 'INCREMENT'
      })
    },
    decrement: () => {
      dispatch({
        type: 'DECREMENT'
      })
    }
  }
}

//connect 连接整个状态到了Redux，通过你自己提供的 mapStateToProps 函数， 这需要一个自定义的函数因为只有你自己知道状态在 Redux 中的模型。
//connect 是一个高阶函数，当你调用它的时候会返回一个函数，然后用一个组件做参数调用那个函数返回一个新的包装过的组件。返回的组件另一个名字叫做高阶组件 (又叫做 “HOC”)
//除了注入 mapStateToProps 函数的返回值作为属性以外，connect 函数也把 dispatch 函数作为属性注入了组件
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
