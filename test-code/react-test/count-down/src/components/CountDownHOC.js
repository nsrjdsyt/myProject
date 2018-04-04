import React, {Component} from 'react'

//高阶组件通过包裹（wrapped）被传入的React组件，经过一系列处理，最终返回一个相对增强（enhanced）的React组件，供其他组件调用
export default count => {
  return WrappedComponent => {
    return class CountDownHOC extends Component {

      constructor(){
        super(...arguments)
        this.state = {
          count
        }
      }

      shouldComponentUpdate(nextProps, nextState) {
        return nextState.count !== this.state.count
      }

      componentDidMount() {
        this.interval = setInterval(() => {
          let count = this.state.count - 1

          if(count >= 0){
            this.setState({
              count
            })
          }else{
            this.interval && clearInterval(this.interval)
          }

        }, 1000)
      }

      componentWillUnmount() {
        this.interval && clearInterval(this.interval)
      }

      render() {
        return (
          <WrappedComponent count={this.state.count}/> //必须知道嵌套组件的props
        )
      }
    }
  }
}
