import React, {Component} from 'react'

export default (WrappedComponent, count) => {
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
