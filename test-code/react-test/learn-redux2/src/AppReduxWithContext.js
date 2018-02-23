import React, {Component} from 'react'
import ControlPanel from './reduxWithContext/components/ControlPanel'
import Provider from './reduxWithContext/Provider'
import store from './reduxWithContext/Store'

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
