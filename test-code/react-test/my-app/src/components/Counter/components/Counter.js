import React, {Component} from 'react'

export default class extends Component {
    constructor() {
        super()
        this.onIncrementIfOdd = this.onIncrementIfOdd.bind(this)
        this.onIncrementAsync = this.onIncrementAsync.bind(this)
    }
    onIncrementIfOdd() {
        if (this.props.count % 2 !== 0) {
            this.props.onIncrement();
        }
    }
    onIncrementAsync() {
        setTimeout(this.props.onIncrement, 1000)
    }
    render() {
        return (
            <div>
                Clicked:{this.props.count}
                times
                <button onClick={this.props.onIncrement}>+</button>
                <button onClick={this.props.onDecrement}>-</button>
                <button onClick={this.onIncrementIfOdd}>increment if odd</button>
                <button onClick={this.onIncrementAsync}>increment async</button>
            </div>
        )
    }
}
