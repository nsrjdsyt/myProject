import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import FilterableProductTable from './components/FilterableProductTable'
import FormatName from './components/FormatName'
import Toggle from './components/Toggle'
import LoginControl from './components/LoginControl'
import Warning from './components/Warning'
import Form from './components/Form'
import ReWriteForm from './components/ReWriteForm'
import Couter from './components/Couter'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import todoApp from './components/Todo/reducer'
import App from './components/Todo/containers/App'

import increment from './components/Counter/reducers'
import CounterApp from './components/Counter/containers/CounterApp'

let store = createStore(todoApp)
let counterStore = createStore(increment)

class App2 extends Component {
    render() {
        return (
            <div className="App">
                <Todo></Todo>
                <hr></hr>
                <FilterableProductTable></FilterableProductTable>
                <hr></hr>
                <FormatName firstName="Tim" lastName="Ducon"></FormatName>
                <Toggle></Toggle>
                <hr></hr>
                <LoginControl></LoginControl>
                <hr></hr>
                <Warning></Warning>
                <hr></hr>
                <Form></Form>
                <hr></hr>
                <ReWriteForm></ReWriteForm>
                <hr></hr>
                <Couter></Couter>
                <hr></hr>
                <Provider store={store}>
                    <App></App>
                </Provider>
                <hr></hr>
                <Provider store={counterStore}>
                    <CounterApp></CounterApp>
                </Provider>
            </div>
        );
    }
}

export default App2;
