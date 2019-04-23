import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import { log } from "util";

const initialState = {
  assignmentName: "",
  date: "",
  description: ""
};
class CreateAssignment extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const assignment = {
      courseID: this.props.id,
      assignmentName: this.state.assignmentName,
      description: this.state.description
    };
    axios
      .post("/course/createAssignment", assignment)
      .then(res => console.log(res));
  }
  render() {
    // const { errors } = this.state
    return (
      <div className="">
        <div className="valign-wrapper row ">
          <div className="col card  s12 ">
            <form noValidate onSubmit={this.onSubmit}>
              <div className="card-content">
                <span className="card-title">Create Assignement </span>
                <div className="row">
                  <div className="input-field col s12">
                    <label htmlFor="assignmentName">Name </label>
                    <input
                      type="text"
                      name="assignmentName"
                      id="assignmentName"
                      value={this.state.courseID}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="input-field col s12">
                    <label htmlFor="date">Description</label>
                    <input
                      type="text"
                      name="description"
                      id="description"
                      value={this.state.description}
                      onChange={this.onChange}
                    />
                  </div>
                </div>
                <div className="card-action right-align">
                  <input
                    type="submit"
                    style={{ backgroundColor: "#1e5abc", color: "white" }}
                    className="btn"
                    value="Save"
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

export default CreateAssignment;
