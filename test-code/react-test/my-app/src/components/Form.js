import React,{Component} from 'react'

export default class Form extends Component{
    constructor(props){
        super(props)
        this.state={
            value: '',
            like: 'bananer',
            sex: 'male',
            description: ''
        }

        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleLickChange = this.handleLickChange.bind(this)
        this.handleSexChange = this.handleSexChange.bind(this)
        this.handleDescChange = this.handleDescChange.bind(this)

        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleNameChange(e){
        this.setState({
            value:e.target.value
        })
    }
    handleLickChange(e){
        this.setState({
            like: e.target.value
        })
    }
    handleSexChange(e){
        this.setState({
            sex: e.target.value
        })
    }
    handleDescChange(e){
        this.setState({
            description:e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        alert('A name was submitted: ' + this.state.value + ' like:' + this.state.like + ' sex:'+this.state.sex + ',description:' + this.state.description)
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                name:<input type="text" value={this.state.value} onChange={this.handleNameChange}></input>
                <br/>
                like:<select value={this.state.like} onChange={this.handleLickChange}>
                    <option value="apple">apple</option>
                    <option value="bananer">bananer</option>
                    <option value="orange">orange</option>
                </select>
                <br/>
                sex:
                <label>男：<input type="radio" value="male" name="sex" checked={this.state.sex==='male'} onChange={this.handleSexChange}></input></label>
                <label>女：<input type="radio" value="female" name="sex" checked={this.state.sex==='female'} onChange={this.handleSexChange}></input></label>
                <br></br>
                description:<textarea value={this.state.description} onChange={this.handleDescChange}></textarea>
                <br/>
                <input type="submit" value="submit"></input>
            </form>
        )
    }
}
