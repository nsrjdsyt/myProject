import React, {Component} from 'react'
import PropTypes from 'prop-types';
import * as Actions from './../Actions'
import Counter from './Counter'

class CounterContainer extends Component {
  constructor() {
    super(...arguments)
    this.state = this.getOwnState()
  }


  onChange = () => {
    this.setState(this.getOwnState())
  }

  componentDidMount() {
    this.context.store.subscribe(this.onChange)
  }

  increment = () => {
    this.context.store.dispatch(Actions.increment(this.props.counterCaption))
  }

  decrement = () => {
    this.context.store.dispatch(Actions.decrement(this.props.counterCaption))
  }

  render() {
    return (<Counter decrement={this.decrement} value={this.state.value} increment={this.increment} counterCaption={this.props.counterCaption}/>)
  }

  componentWillUnmount() {
    this.context.store.unsubscribe(this.onChange)
  }

  getOwnState() {
    return {
      value: this.context.store.getState()[this.props.counterCaption]
    }
  }
}

CounterContainer.contextTypes = {
  store: PropTypes.object
}

export default CounterContainer
