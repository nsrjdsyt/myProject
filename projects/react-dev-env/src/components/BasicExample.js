import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Bundle from '../utils/Bundle'

import LoadHome from 'bundle-loader?lazy&name=home!./Home'
import LoadAbout from 'bundle-loader?lazy&name=about!./About'
import LoadTopics from 'bundle-loader?lazy&name=topics!./Topics'

const Home = (props) => (
    <Bundle load={LoadHome}>
        {(LoadHome) => <LoadHome {...props}/>}
    </Bundle>
)

const About = (props) => (
    <Bundle load={LoadAbout}>
        {(LoadAbout) => <LoadAbout {...props}/>}
    </Bundle>
)

const Topics = (props) => (
    <Bundle load={LoadTopics}>
        {(LoadTopics) => <LoadTopics {...props}/>}
    </Bundle>
)

class BasicExample extends Component {

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

                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/topics" component={Topics}/>
                </div>
            </Router>
        )
    }
}

export default BasicExample
