import React, { Component } from 'react'
import Counter from './components/Counter'
import {Provider} from 'react-redux'
import store from './redux/store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Counter/>
      </Provider>
    )
  }
}

export default App
