import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import BasicExample from './modules/BasicExample'
import ParamsExample from './modules/ParamsExample'
import AuthExample from './modules/AuthExample'

ReactDOM.render(
  // <BasicExample></BasicExample>
  // <ParamsExample></ParamsExample>
  <AuthExample></AuthExample>
  , document.getElementById('root'))

registerServiceWorker();
