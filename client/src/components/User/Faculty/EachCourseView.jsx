import React, { Component } from "react";
import { Link, withRouter, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import NavbarFaculty from "./NavbarFaculty";
import Students from "../Faculty/CourseViews/Students";
import Files from "../Faculty/CourseViews/Files";
import Home from "../Faculty/CourseViews/Home";
import Annoucements from "../Faculty/CourseViews/Annoucements";
import axios from "axios";
import Submissions from "./CourseViews/Submission";
class EachCourseView extends Component {
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
        return <Files class={this.state.class} />;
      case "People":
        return <Students class={this.state.class} />;
      case "Submissions":
        return <Submissions class={this.state.class} />;
      case "Annoucements":
        return <Annoucements />;
    }
  }

  render() {
    return (
      <div>
        <NavbarFaculty />
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
                  {/* <li onClick={this.handleClick.bind(this, "Home")}>
                    <a href="#">Home</a>
                  </li> */}
                  <li onClick={this.handleClick.bind(this, "Files")}>
                    <a href="#">Assignments</a>
                  </li>
                  <li onClick={this.handleClick.bind(this, "People")}>
                    <a href="#">Students</a>
                  </li>
                  <li onClick={this.handleClick.bind(this, "Submissions")}>
                    <a href="#">Submissions</a>
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

export default EachCourseView;
