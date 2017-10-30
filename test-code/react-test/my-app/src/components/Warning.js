import React,{Component} from 'react'

function WarningText(props){
    if(!props.warn){
        return null;
    }
    return <div style={{color:'red'}}>warning</div>
}

export default class Warning extends Component{
    constructor(props){
        super(props)
        this.state={
            show: true
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.setState((prevState)=>({
            show: !prevState.show
        }))
    }

    render(){
        return (
            <div>
                {/* {this.state.show && <WarningText></WarningText>} */}
                <WarningText warn={this.state.show}></WarningText>
                <button onClick={this.handleClick}>{this.state.show ? 'hide': 'show'}</button>
            </div>
        )
    }

}
