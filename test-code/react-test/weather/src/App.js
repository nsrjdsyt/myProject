import React, { Component } from 'react'
import Weather from './weatcher-react/Weather'
import WeatherRedux from './weather-redux/'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Weather/>
        <hr/>
        <WeatherRedux/>
      </div>
    )
  }
}

export default App
