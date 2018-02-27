import React, { Component } from 'react'
import CountDown from './components/CountDown'
import Bomb from './components/Bomb'
import CountDownHOC from './components/CountDownHOC'

const WrappedComponent = ({count}) => (<div>{count}</div>)

const NewComponent = CountDownHOC(WrappedComponent, 10)

class App extends Component {
  render() {
    return (
      <div className="App">
        <CountDown startCount={10}>
          {(count) => <div>{count}</div> }
        </CountDown>

        <CountDown startCount={10}>
          {(count) => <div>{count > 0 ? count : '新年快乐！'}</div> }
        </CountDown>

        <CountDown startCount={10}>
          {(count) => <Bomb countdown={count} /> }
        </CountDown>

        <hr/>

        <NewComponent />

      </div>
    )
  }
}

export default App
