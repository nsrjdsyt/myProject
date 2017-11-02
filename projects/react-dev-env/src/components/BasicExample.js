import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Bundle from '../utils/Bundle'

import LoadHome from 'bundle-loader?lazy&name=home!./Home/'     //使用分片懒加载例子, 每个组件单独一个文件夹，包含js css
import LoadAbout from 'bundle-loader?lazy&name=about!./About'
import LoadTopics from 'bundle-loader?lazy&name=topics!./Topics'
import LoadRecursivePaths from 'bundle-loader?lazy&name=resursive!./RecursivePaths'

import AmbiguousExample from './AmbiguousExample'              //不使用分片懒加载例子

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

const RecursivePaths = (props) => (
  <Bundle load={LoadRecursivePaths}>
    {(LoadRecursivePaths) => <LoadRecursivePaths {...props}/>}
  </Bundle>
)

class BasicExample extends Component {

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
            <li>
              <Link to="/recursive_path">recursive_path</Link>
            </li>
            <li>
              <Link to="/AmbiguousExample">AmbiguousExample</Link>
            </li>
          </ul>

          <hr/>

          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/topics" component={Topics}/>
          <Route path="/recursive_path" component={RecursivePaths}/>
          <Route path="/AmbiguousExample" component={AmbiguousExample}></Route>
        </div>
      </Router>
    )
  }
}

export default BasicExample
