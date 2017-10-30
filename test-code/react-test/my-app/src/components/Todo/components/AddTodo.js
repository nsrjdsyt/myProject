import React,{Component} from 'react'

export default class addTodo extends Component{
    constructor(){
        super()
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e){
        const node = this.refs.input
        const text = node.value.trim()
        this.props.onAddClick(text)
        node.value = ''
    }
    render(){
        return (
            <div>
                <input type="text" ref='input'></input>
                <button onClick={this.handleClick}>Add</button>
            </div>
        )
    }
}
