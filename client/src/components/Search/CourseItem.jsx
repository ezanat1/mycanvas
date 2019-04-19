import React, { Component } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
class CourseItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentID: "",
      courseID: "",
      errors: ""
    };
    this.registerClass = this.registerClass.bind(this);
    // this.handleCourse = this.handleCourse.bind(this);
  }

  componentDidMount() {
    this.setState({
      studentID: this.props.auth.user.id
    });
  }
  registerClass = e => {
    this.setState({
      courseID: e.target.value
    });
    e.preventDefault();
    var data = {
      studentID: this.state.studentID,
      courseID: this.state.courseID
    };
    axios
      .post("users/registerClass", data)
      .then(res => {
        if (res.status === 201) {
          console.log("its 201");
        }
        if (res.status === 400) {
          console.log("400 request");
        }
      })
      .catch(err => {
        console.log("from catch", err.res);
      });
  };

  render() {
    let classesResult = null;
    if (this.props.class != null) {
      classesResult = this.props.class.map(singleClass => {
        return (
          <ul className="collection with-header" key={singleClass.id}>
            <div className="result">{this.state.errors}</div>
            <li className="collection-item">
              <div>
                <p>{singleClass.courseID}</p>
                <span>{singleClass.courseName}</span>
                <div className="secondary-content">
                  <button
                    style={btnColor}
                    value={singleClass.id}
                    onClick={this.registerClass}
                    className="btn btn-flat"
                    type="button"
                  >
                    Enroll
                  </button>
                </div>
              </div>
            </li>
          </ul>
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
  color: "white",
  height: "30px",
  padding: "1"
};
CourseItem.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps)(CourseItem);
