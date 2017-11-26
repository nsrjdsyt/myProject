import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import RaisedButton from 'material-ui/RaisedButton'

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {cyan500} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';

import DeepDownTheTree from './components/DeepDownTheTree'
import StylesOverridingInlineExample from './components/StylesOverridingInlineExample'
import AutoCompleteExampleSimple from './components/AutoCompleteExampleSimple'

const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
  appBar: {
    height: 50,
  },
});

class App extends Component {
  render() {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <div>
                  <AppBar title="My AppBar" />
                  <RaisedButton label="Default2"></RaisedButton>
                  <DeepDownTheTree></DeepDownTheTree>
                  <StylesOverridingInlineExample></StylesOverridingInlineExample>
                  <AutoCompleteExampleSimple></AutoCompleteExampleSimple>
            </div>

        </MuiThemeProvider>
    );
  }
}

export default App;
