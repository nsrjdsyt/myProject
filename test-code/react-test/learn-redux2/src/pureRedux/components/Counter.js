import React, {Component} from 'react'
import store from './../Store'
import * as Actions from './../Actions'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = this.getOwnState()
  }

  onChange = () => {
    this.setState(this.getOwnState())
  }

  componentDidMount() {
    store.subscribe(this.onChange)
  }

  increment = () => {
    store.dispatch(Actions.increment(this.props.counterCaption))
  }

  decrement = () => {
    store.dispatch(Actions.decrement(this.props.counterCaption))
  }

  render() {
    return (<div>
      <button onClick={this.decrement}>-</button>
      <span>{this.props.counterCaption}
        count: {this.state.value}</span>
      <button onClick={this.increment}>+</button>
    </div>)
  }

  componentWillUnmount() {
    store.unsubscribe(this.onChange)
  }

  getOwnState() {
    return {
      value: store.getState()[this.props.counterCaption]
    }
  }
}

export default Counter
