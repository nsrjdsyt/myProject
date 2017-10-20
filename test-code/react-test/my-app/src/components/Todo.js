import React, {Component} from "react"

export default class Todo extends Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            text:"",
            items:[]
        }
    }

    handleChange(e){
        this.setState({
            text:e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();

        this.setState((prestate) => ({
            items: prestate.items.concat({
                text: this.state.text,
                id: +new Date()
            }),
            text: ''
        }))
    }

    render(){
        return (
            <div>
                <h2>todo list</h2>
                <List items={this.state.items}></List>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.text} onChange={this.handleChange}/>
                    <button>add {this.state.items.length+1}</button>
                </form>
            </div>
        )
    }
}

class List extends Component{
    render(){
        return (
            <ul>
                {
                    this.props.items.map(item => (<li key={item.id}>{item.text}</li>))
                }
            </ul>
        )
    }
}
