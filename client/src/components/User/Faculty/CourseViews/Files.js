import React, { Component } from "react";
import CreateAssignment from "../Helpers/CreateAssigment";
import axios from "axios";
import { log } from "util";
export default class Files extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assignemnts: []
    };
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    axios
      .get("/course/getassignments", {
        params: {
          id: this.props.class.courseID
        }
      })
      .then(res => {
        this.setState({
          assignemnts: res.data
        });
      });
  }
  handleDelete(e) {
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
          <td>{singleAssignemnt.name}</td>
          <td>{singleAssignemnt.description}</td>
          <td>
            <button onClick={this.handleDelete} className="btn btn-small red">
              Delete
            </button>
          </td>
        </tr>
      );
    });
    return (
      <div className="container">
        <br />

        <div className="row">
          <div className="col s12 ">
            <CreateAssignment id={this.props.class.courseID} />
          </div>
          <div className="col s12">
            <h3 className="center">My Assignemnts </h3>
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
      </div>
    );
  }
}
