import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav style={navBarStyle}>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo center">
            SJSU
            <hr />
          </a>
          {/* <ul className="left hide-on-med-and-down">
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          </ul> */}
        </div>
      </nav>
    );
  }
}

const navBarStyle = {
  backgroundColor: "#1e5abc"
};
export default Navbar;
