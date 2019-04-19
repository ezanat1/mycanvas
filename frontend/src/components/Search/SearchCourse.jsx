import React, { Component } from "react";
import Navbar from "../User/Navbar";
import axios from "axios";

export default class SearchCourse extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    // this.state = {
    //   class: []
    // };
    // this.searchClass = this.searchClass.bind(this);
  }
  // searchClass = e => {
  //   e.preventDefault();
  //   // const value = event.target.classSearch.value;
  //   // var data = {
  //   //   classSearch: value
  //   // };
  //   // console.log(value);

  //   axios.get("/course").then(res => {
  //       console.log(res.data);
  //       this.setState({
  //         class: res.data
  //       });

  //   });
  // };
  render() {
    return (
      <div>
        <Navbar />
        <form onSubmit={this.props.searchClass}>
          <input
            type="text"
            // value={this.props.searchInput}
            name="classSearch"
            placeholder="Search by Course ID,Course Number"
          />
          <button type="submit" style={btnColor} className="btn-large">
            Search
          </button>
        </form>
      </div>
    );
  }
}

const btnColor = {
  background: "#1e5abc"
};
