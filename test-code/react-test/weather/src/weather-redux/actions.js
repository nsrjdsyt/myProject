import {FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE} from './actionTypes'

export const fetchWeatherStarted = () => ({
  type: FETCH_STARTED
})

export const fetchWeatherSuccess = (result) => ({
  type: FETCH_SUCCESS,
  result
})

export const fetchWeatherFailure = (error) => ({
  type: FETCH_FAILURE,
  error
})

export const fetchWeather = () => {
  return (dispatch) => {
    const apiUrl = 'data/cityinfo/101010100.html'  //获取天气api： http://www.weather.com.cn/data/cityinfo/101010100.html

    dispatch(fetchWeatherStarted())

    fetch(apiUrl).then((response) => {
      if(response.status !== 200){
        throw new Error(response.status)
      }else{
        response.json().then((data) => {
          dispatch(fetchWeatherSuccess(data))
        }).catch((error) => {
          dispatch(fetchWeatherFailure(error))
        })
      }
    }).catch((error) => {
      dispatch(fetchWeatherFailure(error))
    })
  }
}
