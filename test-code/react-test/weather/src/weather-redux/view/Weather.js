import React from 'react'
import {connect} from 'react-redux'

const Weather = ({city, weather, temp1, temp2}) => (<div>
  {city} {weather} 最低气温 {temp1} 最高气温 {temp2}
</div>)

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

export default connect(mapStateToProps)(Weather)
