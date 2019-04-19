import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authentication";

class NavbarFaculty extends Component {
  onLogout(e) {
    e.preventDefault();
    this.props.logoutUser(this.props.history);
  }
  render() {
    return (
      <ul
        style={navBarStyle}
        id="sidenav-1"
        className="sidenav sidenav-fixed slide-out"
      >
        <Link to="/facultydashboard">
          <li
            className="center-align avatar"
            style={{ color: "gold", fontSize: "30px" }}
          >
            SJSU
          </li>
        </Link>
        <li>
          <Link to="/facultyProfile">
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
        <li>
          <Link to="/addCourse">
            <i style={linkStyle} className="material-icons">
              add
            </i>
          </Link>
        </li>
        <li style={linkStyle}>
          <a href="" onClick={this.onLogout.bind(this)}>
            <i style={linkStyles} className="fas fa-sign-out-alt" />
          </a>
        </li>
      </ul>
    );
  }
}
const navBarStyle = {
  paddingTop: "100px",
  backgroundColor: "#1e5abc",
  color: "white",
  width: "100px",
  fontSize: "20px",
  hover: ""
};
const imageStyle = {
  width: "100px",
  heigh: "80px",
  borderRadius: "50%"
};
const linkStyle = {
  color: "white"
};
const linkStyles = {
  fontSize: "20px",
  color: "white"
};
const smalStyle = {
  fontSize: "10px",
  color: "white"
};

NavbarFaculty.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(withRouter(NavbarFaculty));
