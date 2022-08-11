import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const links = {
  "color": "#777"
}

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between p-2 mb-2">
        <Link to="/" className="navbar-brand">ExcerTracker</Link>
        <ul className="nav">
          <li className="nav-item">
            <Link to="/" className="nav-link" style={links}>Exercises</Link>
          </li>
          <li className="nav-item">
            <Link to="/create" className="nav-link" style={links}>Create Exercise Log</Link>
          </li>
          <li className="nav-item">
            <Link to="/user" className="nav-link" style={links}>Create User</Link>
          </li>
        </ul>
      </nav>
    );
  }
}