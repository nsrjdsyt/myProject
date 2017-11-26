import React,{Component} from 'react'

export default class ReWriteForm extends Component{
    constructor(props){
        super(props)
        this.state={
            value: '',
            like: 'bananer',
            sex: 'male',
            description: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInputChange(e){
        let target = e.target,
            name= target.name,
            value  = (target.type === 'checkbox' ? target.checked : target.value);

        this.setState({
            [name]: value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        alert('A name was submitted: ' + this.state.value + ' like:' + this.state.like + ' sex:'+this.state.sex + ',description:' + this.state.description)
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                name:<input type="text" name="value" value={this.state.value} onChange={this.handleInputChange}></input>
                <br/>
                like:<select value={this.state.like} onChange={this.handleInputChange} name="like">
                    <option value="apple">apple</option>
                    <option value="bananer">bananer</option>
                    <option value="orange">orange</option>
                </select>
                <br/>
                sex:
                <label>男：<input type="radio" value="male" name="sex" checked={this.state.sex==='male'} onChange={this.handleInputChange}></input></label>
                <label>女：<input type="radio" value="female" name="sex" checked={this.state.sex==='female'} onChange={this.handleInputChange}></input></label>
                <br></br>
                description:<textarea value={this.state.description} name="description" onChange={this.handleInputChange}></textarea>
                <br/>
                <input type="submit" value="submit"></input>
            </form>
        )
    }
}
