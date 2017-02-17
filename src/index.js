import React from 'react';
import App from './App';
import { render } from 'react-dom'
import './index.css';
import Calendar from './Calendar'
import About from './About'
import Staff from './Staff'
import Store from './Store'

import { Router, Route, hashHistory } from 'react-router'

// used this prior to adding routes
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    {/* add the routes here */}
    <Route path="/calendar" component={Calendar}/>  
    <Route path="/about" component={About}/>  
    <Route path="/staff" component={Staff}/>  
    <Route path="/store" component={Store}/>  
  </Router>
), document.getElementById('root'))
