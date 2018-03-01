import React,{Component} from 'react'

class Weather extends Component {
  state = {
    weather: null
  }

  componentDidMount() {
    const apiUrl = '/weatherInfo.json'

    fetch(apiUrl).then((response) => {
      if(response.status !== 200){
        throw new Error(response.status)
      }else{
        response.json().then((data) => {
          this.setState({
            weather: data
          })
        }).catch(() => {
          this.setState({
            weather: null
          })
        })
      }
    }).catch(() => {
      this.setState({
        weather: null
      })
    })
  }

  render() {
    if(!this.state.weather){
      return <div>暂无数据</div>
    }

    const {city, weather, temp1, temp2} = this.state.weather

    return <div>
      {city}: {weather} {temp1}℃ 至 {temp2}℃
    </div>
  }
}

export default Weather
