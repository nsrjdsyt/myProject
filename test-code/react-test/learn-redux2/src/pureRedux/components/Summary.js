import React, {Component} from 'react'
import store from './../Store.js'
import * as Actions from './../Actions'

class Summary extends Component {
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

  render() {
    return (<div>
      <span>summary count: {this.state.sum}</span>
    </div>)
  }

  componentWillUnmount() {
    store.unsubscribe(this.onChange)
  }

  getOwnState() {
    const state = store.getState()
    let sum = 0

    for (let key in state) {
      if (state.hasOwnProperty(key)) {
        sum += state[key]
      }
    }

    return {sum}
  }
}

export default Summary
