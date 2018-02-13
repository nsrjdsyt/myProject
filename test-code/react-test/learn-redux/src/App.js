import React, { Component } from 'react'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import Counter from './components/Counter'

const initialState = {
  count: 0
}

//reducer 函数应该返回一个状态，实际上它应该用利用当前状态去返回新的状态。
//它使用当前状态和一个 action 作为参数，然后返回一个新的状态
function reducer(state = initialState, action){
  switch(action.type){
    case 'INCREMENT':
      return {
        count: state.count + 1
      }
    case 'DECREMENT':
      return {
        count: state.count - 1
      }
    default:
      return state
  }
}

const store = createStore(reducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
}

export default App;
