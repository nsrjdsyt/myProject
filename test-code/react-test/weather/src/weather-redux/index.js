import React from 'react'
import {Provider} from 'react-redux'
import Weather from './view/Weather'
import store from './store'

export default () => (
  <Provider store={store}>
    <Weather/>
  </Provider>
)
