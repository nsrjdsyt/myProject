import React, {Component} from "react";
class Clock extends Component{
    constructor(props){
        super(props)//置于this.state、事件绑定 前
        this.state={//状态是私有的，完全受控于当前组件
            time:new Date()
        }
    }
    tick(){
        this.setState({
            time:new Date()
        })
    }
    componentDidMount(){
        this.interval = setInterval(()=>this.tick(), 1000)
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
    render(){
        return(
            <div> {/*组件的返回值只能有一个根元素*/}
                {this.state.time.toLocaleTimeString()} {/*jsx里不能直接展示js对象，Objects are not valid as a React child, 如 {this.state.time} 将报错*/}
            </div>
        )
    }
}

export default class FormatName extends Component{//不能修改它自己的props
    render(){
        let name = <div><span>{this.props.firstName}</span><span>{this.props.lastName}</span></div> //jsx 表达式，多个子元素外层需要标签包裹。底层将调React.createElement() 转为js对象
        return (<div>hello, {name}, curTime：<Clock></Clock></div>) //react组件元素 在使用时 使用定义时的名称，区分大小写
    }
}
