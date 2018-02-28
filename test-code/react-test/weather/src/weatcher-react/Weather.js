import React,{Component} from 'react'

class Weather extends Component {
  state = {
    weather: null
  }

  componentDidMount() {
    const apiUrl = 'data/cityinfo/101010100.html'  //获取天气api： http://www.weather.com.cn/data/cityinfo/101010100.html

    fetch(apiUrl).then((response) => {
      console.log(response);
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
      {city} {weather} 最低气温 {temp1} 最高气温 {temp2}
    </div>
  }
}

export default Weather
