import React, { Component } from "react";
import CreateAssignment from "../Helpers/CreateAssigment";
import axios from "axios";
import { log } from "util";
export default class Submissions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assignemnts: [],
      grade: ""
    };
    this.handleGrade = this.handleGrade.bind(this);
  }
  componentDidMount() {
    axios
      .get("/course/submissions", {
        params: {
          id: this.props.class.courseID
        }
      })
      .then(res => {
        this.setState({
          assignemnts: res.data.users
        });
      });
  }
  handleChange(e) {
    this.setState({
      grade: { [e.target.name]: e.target.value }
    });
  }
  handleGrade(e) {
    e.preventDefault();
    axios
      .delete("/course/deleteAssignemnt", {
        params: {
          id: this.props.class.courseID
        }
      })
      .then(res => {
        console.log(res);
      });
  }
  render() {
    const assignemnt = this.state.assignemnts.map(singleAssignemnt => {
      return (
        <tr key={singleAssignemnt.id}>
          <td>{singleAssignemnt.first_name}</td>
          <td>{singleAssignemnt.last_name}</td>

          <td>
            <form onSubmit={this.handleGrade}>
              <input name="grade" type="text" onChange={this.handleChange} />
            </form>
            <button type="submit" className="btn btn-small red">
              Grade
            </button>
          </td>
        </tr>
      );
    });
    return (
      <div className="container">
        <div className="col s12">
          <h3 className="center"> Submissions </h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>{assignemnt}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
