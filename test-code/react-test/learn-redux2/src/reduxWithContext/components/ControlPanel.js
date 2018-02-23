import React, {Component} from 'react'
import CounterContainer from './CounterContainer'
import SummaryContainer from './SummaryContainer'

class ControlPanel extends Component {
  render() {
    return (
      <div>
        <CounterContainer counterCaption="First"/>
        <CounterContainer counterCaption="Second"/>
        <CounterContainer counterCaption="Third"/>
        <hr/>
        <SummaryContainer/>
      </div>
    )
  }
}

export default ControlPanel
