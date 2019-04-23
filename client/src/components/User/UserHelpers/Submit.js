import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { log } from "util";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
class Submit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseID: "",
      studentID: "",
      assignmentID: ""
    };
    this.handlesubmit = this.handlesubmit.bind(this);
  }
  componentDidMount() {
    this.setState({
      courseID: this.props.class.courseID,
      studentID: this.props.auth.user.id,
      assignmentID: this.props.assignemnt
    });
  }
  handlesubmit() {
    const data = {
      courseID: this.state.courseID,
      studentID: this.state.studentID,
      assignmentID: this.state.assignmentID
    };
    axios.post("/course/submissions", data).then(res => {
      console.log(res);
    });
  }

  render() {
    return (
      <div>
        <div className="row">
          <button
            style={{ color: "white", backgroundColor: "#1e5abc" }}
            type="button"
            className="btn btn-small"
            onClick={this.handlesubmit}
          >
            Submit Assignment
          </button>
        </div>
      </div>
    );
  }
}

Submit.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps)(Submit);
