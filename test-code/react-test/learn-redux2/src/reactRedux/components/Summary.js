import React, {Component} from 'react'
import {connect} from 'react-redux'

class Summary extends Component{
  render(){
    return (<div>
      <span>summary count: {this.props.sum}</span>
    </div>)
  }
}

function mapStateToProps(state){
  let sum = 0

  for (let key in state) {
    if (state.hasOwnProperty(key)) {
      sum += state[key]
    }
  }

  return {
    sum
  }
}


export default connect(mapStateToProps)(Summary)
