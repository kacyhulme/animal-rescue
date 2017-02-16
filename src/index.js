import React from 'react';
import App from './App';
import { render } from 'react-dom'
import './index.css';
import Calendar from './modules/Calendar'

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
    
  </Router>
), document.getElementById('root'))
