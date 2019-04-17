import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import NavbarFaculty from "./NavbarFaculty";
import jwt_decode from "jwt-decode";
import { addCourse } from "../../../actions/userHelperActions";
import PropTypes from "prop-types";
const initialState = {
  courseID: "",
  courseName: "",
  courseDept: "",
  courseRoom: "",
  courseDescription: "",
  waitListCap: "",
  courseTeam: "",
  taughtBy: "",
  errors: {}
};
class AddCourse extends Component {
  constructor() {
    super();
    this.state = initialState;
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const course = {
      courseID: this.state.courseID,
      courseName: this.state.courseName,
      courseDept: this.state.courseDept,
      courseRoom: this.state.courseRoom,
      courseDescription: this.state.courseDescription,
      waitListCap: this.state.waitListCap,
      courseTeam: this.state.courseTeam,
      taughtBy: this.state.taughtBy
    };
    this.props.addCourse(course, this.props.history);
  }
  componentWillReceiveProps(nextProps) {
    // if (nextProps.auth.isAuthenticated) {
    //   this.props.history.push("/addCourse");
    // }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
  componentDidMount() {
    // if (this.props.auth.isAuthenticated) {
    //   this.props.history.push("/addCourse");
    // }
    document.title = "Add Course";
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <NavbarFaculty />
        <div className="valign-wrapper row login-box">
          <div className="col card hoverable s12 ">
            <form noValidate onSubmit={this.onSubmit}>
              <div className="card-content">
                <span className="card-title">Add Course</span>
                <div className="row">
                  <div className="input-field col s12">
                    <label htmlFor="courseID">Course ID</label>
                    <input
                      type="text"
                      name="courseID"
                      id="courseID"
                      value={this.state.courseID}
                      onChange={this.onChange}
                    />
                    {errors.courseID && (
                      <span
                        style={{ color: "red" }}
                        className="helper-text"
                        data-error="wrong"
                        data-success="right"
                      >
                        {errors.courseID}
                      </span>
                    )}
                  </div>
                  <div className="input-field col s12">
                    <label htmlFor="courseName">Course Name</label>
                    <input
                      type="text"
                      name="courseName"
                      id="courseName"
                      value={this.state.courseName}
                      onChange={this.onChange}
                    />
                    {errors.courseName && (
                      <span
                        style={{ color: "red" }}
                        className="helper-text"
                        data-error="wrong"
                        data-success="right"
                      >
                        {errors.courseName}
                      </span>
                    )}
                  </div>
                  <div className="input-field col s12">
                    <label htmlFor="courseDept">Course Department</label>
                    <input
                      type="text"
                      name="courseDept"
                      id="courseDept"
                      value={this.state.courseDept}
                      onChange={this.onChange}
                    />
                    {errors.courseDept && (
                      <span
                        style={{ color: "red" }}
                        className="helper-text"
                        data-error="wrong"
                        data-success="right"
                      >
                        {errors.courseDept}
                      </span>
                    )}
                  </div>
                  <div className="input-field col s12">
                    <label htmlFor="courseRoom">Course Room</label>
                    <input
                      type="text"
                      name="courseRoom"
                      id="courseRoom"
                      value={this.state.courseRoom}
                      onChange={this.onChange}
                    />
                    {errors.courseRoom && (
                      <span
                        style={{ color: "red" }}
                        className="helper-text"
                        data-error="wrong"
                        data-success="right"
                      >
                        {errors.courseRoom}
                      </span>
                    )}
                  </div>
                  <div className="input-field col s12">
                    <label htmlFor="courseDescription">
                      Course Description
                    </label>
                    <input
                      type="text"
                      name="courseDescription"
                      id="courseDescription"
                      value={this.state.courseDescription}
                      onChange={this.onChange}
                    />
                    {errors.courseDescription && (
                      <span
                        style={{ color: "red" }}
                        className="helper-text"
                        data-error="wrong"
                        data-success="right"
                      >
                        {errors.courseDescription}
                      </span>
                    )}
                  </div>
                  <div className="input-field col s12">
                    <label htmlFor="waitListCap">Wait List Capacity</label>
                    <input
                      type="text"
                      name="waitListCap"
                      id="waitListCap"
                      value={this.state.waitListCap}
                      onChange={this.onChange}
                    />
                    {errors.waitListCap && (
                      <span
                        style={{ color: "red" }}
                        className="helper-text"
                        data-error="wrong"
                        data-success="right"
                      >
                        {errors.waitListCap}
                      </span>
                    )}
                  </div>
                  <div className="input-field col s12">
                    <label htmlFor="courseTeam">Course Team</label>
                    <input
                      type="text"
                      name="courseTeam"
                      id="courseTeam"
                      value={this.state.courseTeam}
                      onChange={this.onChange}
                    />
                    {errors.courseTeam && (
                      <span
                        style={{ color: "red" }}
                        className="helper-text"
                        data-error="wrong"
                        data-success="right"
                      >
                        {errors.courseTeam}
                      </span>
                    )}
                  </div>
                  <div className="input-field col s12">
                    <label htmlFor="taughtBy">Your Email</label>
                    <input
                      type="email"
                      name="taughtBy"
                      id="taughtBy"
                      value={this.state.taughtBy}
                      onChange={this.onChange}
                    />
                    {errors.taughtBy && (
                      <span
                        style={{ color: "red" }}
                        className="helper-text"
                        data-error="wrong"
                        data-success="right"
                      >
                        {errors.taughtBy}
                      </span>
                    )}
                  </div>
                </div>
                <div className="card-action right-align">
                  <input
                    type="submit"
                    style={{ backgroundColor: "#1e5abc", color: "white" }}
                    className="btn"
                    value="Add Course"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
AddCourse.propTypes = {
  auth: PropTypes.func.isRequired,
  course: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addCourse }
)(withRouter(AddCourse));
