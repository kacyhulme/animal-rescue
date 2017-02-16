import React, { Component } from 'react';
import { Link } from 'react-router'

class Navigation extends React.Component {
  render (){
    return(
      <div className="Navigation">
      <span><Link to={"/calendar"}>Calendar</Link></span>     
      <span><Link to={"/about"}>About</Link></span>     
      <span><Link to={"/staff"}>Staff</Link></span>     
      <span><Link to={"/store"}>Store</Link></span>     
      </div>
      )
  }
}
export default Navigation;
