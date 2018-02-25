import React,{Component} from 'react'
import * as actions from './../actions'
import {connect} from 'react-redux'

class AddTodo extends Component {
  state = {
    value: ''
  }

  handleSubmit = (e) => {
    const value = this.state.value

    e.preventDefault()

    if(!value){
      return
    }

    this.props.onAdd(value)
    this.setState({
      value: ''
    })
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.value}/>
          <button>add</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = {
  onAdd: actions.addTodo
}

export default connect(null, mapDispatchToProps)(AddTodo)
