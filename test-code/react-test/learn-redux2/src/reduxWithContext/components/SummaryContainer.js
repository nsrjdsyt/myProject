import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Summary from './Summary'

class SummaryContainer extends Component {
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

  render() {
    return (<Summary sum={this.state.sum} />)
  }

  componentWillUnmount() {
    this.context.store.unsubscribe(this.onChange)
  }

  getOwnState() {
    const state = this.context.store.getState()
    let sum = 0

    for (let key in state) {
      if (state.hasOwnProperty(key)) {
        sum += state[key]
      }
    }

    return {sum}
  }
}

SummaryContainer.contextTypes = {
  store: PropTypes.object
}

export default SummaryContainer
