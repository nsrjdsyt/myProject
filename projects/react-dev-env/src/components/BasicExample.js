import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Bundle from '../utils/Bundle'

import Home from 'bundle-loader?lazy&name=home!./Home'
import About from 'bundle-loader?lazy&name=about!./About'
import Topics from 'bundle-loader?lazy&name=topics!./Topics'


const HomeComponent = (props) => (
    <Bundle load={Home}>
        {(Home) => <Home {...props}/>}
    </Bundle>
)

const AboutComponent = (props) => (
    <Bundle load={About}>
        {(About) => <About {...props}/>}
    </Bundle>
)

const TopicsComponent = (props) => (
    <Bundle load={Topics}>
        {(Topics) => <Topics {...props}/>}
    </Bundle>
)

class BasicExample extends Component{

    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li >
                            <Link to="/">Home</Link>
                        </li>
                        <li >
                            <Link to="/about">About</Link>
                        </li>
                        <li >
                            <Link to="/topics">Topics</Link>
                        </li>
                    </ul>

                    <hr/>

                    <Route exact path="/" component={HomeComponent}/>
                    <Route path="/about" component={AboutComponent}/>
                    <Route path="/topics" component={TopicsComponent}/>
                </div>
            </Router>
        )
    }
}


export default BasicExample
