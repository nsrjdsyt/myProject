import React, {Component} from "react";

export default class Toggle extends Component{
    constructor(){
        super();
        this.state = {
            isToggle: false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.setState((prevState) => ({
            isToggle:!prevState.isToggle
        }));
    }
    render(){
        return (<button onClick={this.handleClick}>{this.state.isToggle ? 'ON':'OFF'}</button>)
    }
}
