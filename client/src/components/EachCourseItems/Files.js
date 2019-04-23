import React, { Component } from "react";
import axios from "axios";

import Upload from "../User/UserHelpers/Upload";
import Submit from "../User/UserHelpers/Submit";

export default class Assignments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assignemnts: []
    };
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
  render() {
    console.log(this.props.class.courseID);
    const assignemnt = this.state.assignemnts.map(singleAssignemnt => {
      return (
        <tr key={singleAssignemnt._id}>
          <td>{singleAssignemnt.name}</td>
          <td>{singleAssignemnt.description}</td>
          <td>
            <Upload />
          </td>
          <td>
            <Submit
              assignemnt={singleAssignemnt._id}
              class={this.props.class}
            />
          </td>
        </tr>
      );
    });
    return (
      <div className="container">
        <br />

        <div className="row">
          {/* <div className="col s12 ">
            <CreateAssignment id={this.props.class.courseID} />
          </div> */}
          <div className="col s12">
            <h3 className="center">My Assignemnts </h3>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Actions</th>
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
