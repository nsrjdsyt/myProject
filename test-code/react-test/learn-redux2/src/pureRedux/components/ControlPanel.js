import React, {Component} from 'react'
import Counter from './Counter'
import Summary from './Summary'

class ControlPanel extends Component {
  render() {
    return (
      <div>
        <Counter counterCaption="First"/>
        <Counter counterCaption="Second"/>
        <Counter counterCaption="Third"/>
        <hr/>
        <Summary/>
      </div>
    )
  }
}

export default ControlPanel
