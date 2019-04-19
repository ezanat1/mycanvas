import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <h1>{this.props.class.courseName}</h1>
      </div>
    );
  }
}
