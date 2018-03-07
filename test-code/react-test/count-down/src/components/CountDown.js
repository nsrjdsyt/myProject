import React, {Component} from 'react'

class CountDown extends Component {
  constructor(){
    super(...arguments)
    this.state = {
      count: this.props.startCount
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
      <div>
        {/*  子元素未函数 */}
        {this.props.children(this.state.count)} 
      </div>
    )
  }
}

export default CountDown
