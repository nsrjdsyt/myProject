import React, {Component} from 'react'
import ControlPanel from './reactRedux/components/ControlPanel'
import {Provider} from 'react-redux' //提供包含store的context
import store from './reactRedux/Store'

class AppRedux extends Component {
  render() {
    return (
      <Provider store={store}>
        <ControlPanel/>
      </Provider>
    )
  }
}

export default AppRedux
