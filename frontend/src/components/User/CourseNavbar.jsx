import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import { Link, withRouter } from "react-router-dom";

class CourseNavbar extends Component {
  constructor() {
    super();
  }
  logOut(event) {
    event.preventDefault();
    localStorage.removeItem("usertoken");
    this.props.history.push("/login");
  }
  render() {
    return (
      <ul
        style={navBarStyle}
        id="sidenav-1"
        className="sidenav sidenav-fixed slide-out"
      >
        <li>
          <h1 className="center-align" style={{ fontSize: "30px" }}>
            SJSU
          </h1>
        </li>
        <li>
          <Link to="/profile">
            <i style={linkStyle} className="material-icons ">
              person
            </i>
          </Link>
        </li>
        <li>
          <Link to="/courseHome">
            <i style={linkStyle} className="material-icons">
              book
            </i>
          </Link>
        </li>
        
       
      </ul>
    );
  }
}
const navBarStyle = {
  paddingTop: "100px",
  backgroundColor: "blue",
  color: "black",
  width: "200px",
  fontSize: "20px",
  hover: ""
};
const imageStyle = {
  width: "100px",
  heigh: "80px",
  borderRadius: "50%"
};
const linkStyle = {
  color: "#1e5abc"
};
const linkStyles = {
  fontSize: "20px",
  color: "white"
};
const smalStyle = {
  fontSize: "10px",
  color: "white"
};

export default withRouter(CourseNavbar);
