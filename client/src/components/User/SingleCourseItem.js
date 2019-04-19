import React, { Component } from "react";
import { Link, withRouter, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Profile from "./Profile";
import Navbar from "./Navbar";
// import CourseItem from "../Search/CourseItem";
// import SearchCourse from "../Search/SearchCourse";
// import EachCourse from "./EachCourse";
import Announcements from "../EachCourseItems/Annoucments";
import Home from "../EachCourseItems/Home";
import People from "../EachCourseItems/People";
import Files from "../EachCourseItems/Files";
import axios from "axios";
class CoursePage extends Component {
  constructor() {
    super();
    this.state = {
      class: [],
      render: ""
    };
    this._renderSubComp = this._renderSubComp.bind(this);
  }
  componentDidMount() {
    axios
      .get("/course/singlecourse", {
        params: {
          id: this.props.match.params.id
        }
      })
      .then(res => {
        this.setState({
          class: res.data
        });
      });

    document.title = "Home";
  }
  handleClick(compName, e) {
    console.log(compName);
    this.setState({ render: compName });
  }
  _renderSubComp() {
    switch (this.state.render) {
      case "Home":
        return <Home class={this.state.class} />;
      case "Files":
        return <Files />;
      case "People":
        return <People />;
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <div>
          <div>
            <hr />
          </div>
          <div className="container" />
          <nav style={navBarStyle}>
            <div className="nav-wrapper  ">
              <a
                href="#!"
                className="brand-logo"
                style={{ color: "gold", paddingLeft: "10px", fontSize: "25px" }}
              >
                {this.state.class.courseName}
              </a>
              <div className="center">
                <ul className="right">
                  <li onClick={this.handleClick.bind(this, "Home")}>
                    <a href="#">Home</a>
                  </li>
                  <li onClick={this.handleClick.bind(this, "Files")}>
                    <a href="#">Files</a>
                  </li>
                  <li onClick={this.handleClick.bind(this, "People")}>
                    <a href="#">People</a>
                  </li>
                  <li onClick={this.handleClick.bind(this, "Annoucements")}>
                    <a href="#">Annoucments</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {this._renderSubComp()}
        </div>
      </div>
    );
  }
}
const navBarStyle = {
  backgroundColor: "#1e5abc",
  color: "black"
};

export default CoursePage;
