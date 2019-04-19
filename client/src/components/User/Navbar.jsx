import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authentication";

class Navbar extends Component {
  onLogout(e) {
    e.preventDefault();
    this.props.logoutUser(this.props.history);
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;
    return (
      <ul
        style={navBarStyle}
        id="sidenav-1"
        className="sidenav sidenav-fixed slide-out"
      >
        <Link to="/homepage">
          <li
            className="center-align avatar"
            style={{ color: "gold", fontSize: "30px" }}
          >
            SJSU
          </li>
        </Link>

        <li>
          <Link to="/profile">
            <i style={linkStyle} className="material-icons ">
              person
            </i>
          </Link>
        </li>
        {/* <li>
          <Link to="/courseHome">
            <i style={linkStyle} className="material-icons">
              book
            </i>
 
          </Link>
        </li> */}
        <li>
          <Link to="/searchcourse">
            <i style={linkStyle} className="material-icons">
              search
            </i>
          </Link>
        </li>
        <li>
          <Link to="/sendmessage">
            <i style={linkStyle} className="material-icons">
              inbox
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
  width: "300px",
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

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(withRouter(Navbar));
