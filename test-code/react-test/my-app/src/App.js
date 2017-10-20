import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import FilterableProductTable from './components/FilterableProductTable'

class App extends Component {
    render() {
        return (
            <div className="App">
                {/* <Todo></Todo> */}
                <FilterableProductTable></FilterableProductTable>
            </div>

        );
    }
}

export default App;
