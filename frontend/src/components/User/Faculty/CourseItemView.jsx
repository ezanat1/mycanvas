import React, { Component } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import logo from "./imagess.jpeg";
import { Link, withRouter } from "react-router-dom";
export default class CourseItemView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class: []
    };
  }

  render() {
    let classesResult = null;

    if (this.props.class != null) {
      classesResult = this.props.class.map(course => {
        return (
          <div
            style={{ width: "300px", height: "350px" }}
            className="col s12 m7"
            key={course.id}
          >
            <div className="card">
              <div className="card-image">
                <img src={logo} />
              </div>
              <div className="card-content">
                <span style={{ color: "black" }} className="card-title">
                  {course.course_name}
                </span>
                <p>{course.course_description}</p>
              </div>
              <div className="card-action">
                <Link to="/eachCourseView" />
              </div>
            </div>
          </div>
        );
      });

      return (
        <div className="contianer">
          <div>{classesResult}</div>
        </div>
      );
    }
  }
}
const btnColor = {
  background: "#1e5abc",
  color: "white"
};
