import React, { Component } from 'react';
import { Link } from 'react-router'

class Navigation extends React.Component {
  render (){
    return(
      <div>
      <Link to={"/calendar"}>Calendar</Link>     
      </div>
      )
  }
}
export default Navigation;
