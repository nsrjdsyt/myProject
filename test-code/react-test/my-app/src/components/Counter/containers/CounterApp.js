import React, {Component} from 'react'
import {connect} from 'react-redux'
import Counter from '../components/Counter'

class CounterApp extends Component {
    render() {
        const {dispatch, count} = this.props;

        return (
            <div>
                <Counter count={count} onIncrement={() => dispatch({type: 'INCREMENT'})} onDecrement={() => dispatch({type: 'DECREMENT'})}></Counter>
            </div>
        )
    }
}

function select(state) {
    return {count: state}
}

export default connect(select)(CounterApp)
