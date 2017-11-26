import React,{Component} from 'react'

function UserGreeting(props){
    return <h1>welcome back!</h1>
}

function GuestGreeting(props){
    return <h1>Please sign up</h1>
}

function LoginButton(props){
    return <button onClick={props.onClick}>login</button>
}

function LogoutButton(props){
    return <button onClick={props.onClick}>logout</button>
}

function Greeting(props){
    if(props.isLoggin){
        return <UserGreeting></UserGreeting>
    }

    return <GuestGreeting></GuestGreeting>
}

export default class LoginControl extends Component{
    constructor(props){
        super(props)
        this.state={
            isLoggin: true
        }
        this.handleLogoutClick = this.handleLogoutClick.bind(this)
        this.handleLoginClick = this.handleLoginClick.bind(this)
    }

    handleLogoutClick(){
        this.setState({
            isLoggin: false
        })
    }

    handleLoginClick(){
        this.setState({
            isLoggin: true
        })
    }
    render(){
        let button = this.state.isLoggin ? <LogoutButton onClick={this.handleLogoutClick}></LogoutButton> : <LoginButton onClick={this.handleLoginClick}></LoginButton>
        return (
            <div>
                <Greeting isLoggin={this.state.isLoggin}></Greeting>
                {button}
            </div>
        )
    }
}
