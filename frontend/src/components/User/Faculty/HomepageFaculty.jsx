import React, { Component } from "react";
import { Link, withRouter, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
// import Profile from "./Profile";
import NavbarFaculty from "./NavbarFaculty";
import CourseItem from "../../Search/CourseItem";
import SearchCourse from "../../Search/SearchCourse";

class FacultyHomepage extends Component {
  componentDidMount() {
    document.title = "Dashboard";
  }
  render() {
    return (
      <div>
        <NavbarFaculty />
        <div className="container">
          <div>
            <h3>Dashboard</h3>
            <hr />
          </div>
          <div className="col" />
        </div>
      </div>
    );
  }
}
export default FacultyHomepage;
