import React, { Component } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { Link, withRouter } from "react-router-dom";
import logo from "../User/Faculty/imagess.jpeg";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class EachCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class: []
    };
  }
  componentDidMount() {
    axios
      .get("users/classregistration", {
        params: {
          id: this.props.auth.user.id
        }
      })
      .then(res => {
        if (res.status === 200) {
          console.log("from search helper", res.data);
          this.setState({
            class: res.data
          });
        }
      });
  }

  render() {
    let classesResult = null;

    console.log("mounted", this.state.class);
    if (this.state.class != null) {
      classesResult = this.state.class.map(singleClass => {
        return (
          <div
            style={{
              width: "300px",
              height: "350px"
            }}
            className="col s12 m7"
            key={singleClass._id}
          >
            <div className="card">
              <div className="card-image">
                <img src={logo} />{" "}
              </div>{" "}
              <div className="card-content">
                <span
                  style={{
                    color: "black"
                  }}
                  className="card-title"
                >
                  {" "}
                  <Link to={`course/singlecourse/${singleClass._id}`}>
                    {singleClass.courseName}{" "}
                  </Link>
                </span>{" "}
                <p> {singleClass.course_description} </p>{" "}
              </div>{" "}
              <div className="card-action">
                <Link to="/eachCourseView" />
              </div>{" "}
            </div>{" "}
          </div>
        );
      });

      return (
        <div className="contianer">
          <div> {classesResult} </div>{" "}
        </div>
      );
    }
  }
}

EachCourse.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps)(EachCourse);
