import React, { Component } from "react";
import { Link, withRouter, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Profile from "./Profile";
import Navbar from "./Navbar";
import CourseItem from "../Search/CourseItem";
import SearchCourse from "../Search/SearchCourse";
import EachCourse from "./EachCourse";
class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dash: true
    };
  }
  componentDidMount() {
    document.title = "Dashboard";
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div>
            <h3>Dashboard</h3>
            <hr />
          </div>
          <div className="row">
            <EachCourse />
          </div>
        </div>
      </div>
    );
  }
}
export default Homepage;
