import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchWeather} from './../actions'

class Weather extends Component {
  componentDidMount() {
    this.props.fetchWeather()
  }

  render() {
    const {city, weather, temp1, temp2} = this.props

    return (
      <div>{city}: {weather} {temp1}℃ 至 {temp2}℃</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

const mapDispatchToProps = {
  fetchWeather
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)
