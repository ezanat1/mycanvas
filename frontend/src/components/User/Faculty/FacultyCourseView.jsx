import React, { Component } from "react";
import axios from "axios";
import CourseItemView from "../../User/Faculty/CourseItemView";
import jwt_decode from "jwt-decode";

export default class CourseHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class: [],
      facultyEmail: ""
    };
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({
      facultyEmail: decoded.email
    });

    axios
      .get("faculty/Course", {
        params: {
          facultyEmail: this.state.facultyEmail
        }
      })
      .then(res => {
        this.setState({
          class: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
    console.log("courses", this.state.facultyEmail);
  }

  render() {
    return (
      <div className="container">
        <h3 className="center-align">My Courses</h3>
        <hr />
        <CourseItemView class={this.state.class} />
      </div>
    );
  }
}
