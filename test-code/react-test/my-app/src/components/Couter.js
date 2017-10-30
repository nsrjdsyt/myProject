import React,{Component} from 'react'

export default class Couter extends Component{
    constructor(){
        super()
        this.state={
            count: 1
        }

        this.add = this.add.bind(this)
        this.minus = this.minus.bind(this)
    }
    add(){
        this.setState((prevState)=>({
            count:prevState.count+1
        }))
    }
    minus(){
        this.setState((prevState)=>({
            count:prevState.count-1
        }))
    }
    render(){
        return (<div>
            <span>{this.state.count}</span>
            <button onClick={this.add}>+</button> <button onClick={this.minus}>-</button>
        </div>)
    }
}
