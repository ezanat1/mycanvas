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
      courseID: ""
    };
    this.registerClass = this.registerClass.bind(this);
    this.handleCourse = this.handleCourse.bind(this);
  }

  componentDidMount() {
    this.setState({
      studentID: this.props.auth.user.id
    });
  }
  handleCourse = e => {
    e.preventDefault();
    this.setState({
      courseID: e.target.value
    });
  };
  registerClass = e => {
    this.setState({
      courseID: e.target.value
    });
    e.preventDefault();
    var data = {
      studentID: this.state.studentID,
      courseID: this.state.courseID
    };
    console.log("from register function", data);

    // axios.post("course/registerclass", data).then(res => {
    //   if (res.status === 200) {
    //     console.log(res.data);
    //   }
    // });
  };

  render() {
    console.log("from render", this.state.courseID);
    let classesResult = null;
    if (this.props.class != null) {
      classesResult = this.props.class.map(singleClass => {
        return (
          <ul className="collection with-header" key={singleClass.id}>
            <li className="collection-item">
              <div>
                <p>{singleClass.courseID}</p>
                <span>{singleClass.courseName}</span>
                <div className="secondary-content">
                  <button
                    style={btnColor}
                    value={this.state.courseID}
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
