import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App2 from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App2 />, document.getElementById('root'));// 将APP元素传入一个名为 ReactDOM.render() 的方法来将其渲染到页面上（成为document.getElementById('root')的子元素）
registerServiceWorker();
