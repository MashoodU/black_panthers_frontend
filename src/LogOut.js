import React, { Component } from 'react'
export default class UserLogout extends Component {
 
 logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  }
 
  render() {
    return (
      <button className='btn btn-light' className="btn btn-outline-secondary" onClick={this.logout}>Logout</button>
    )
  }
}