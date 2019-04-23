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
        <div className="col s12 ">
          <div className="card">
            <div className="card-content black-text center">
              <h3 className="align-center">Search Class</h3>
              <form onSubmit={this.props.searchClass}>
                <div className="row">
                  <div className="input-field col s8">
                    <input
                      type="text"
                      name="classSearch"
                      placeholder="Search by Course ID,Course Number"
                    />
                  </div>
                  <div className="input-field col">
                    <button
                      type="submit"
                      style={btnColor}
                      className="btn-large"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const btnColor = {
  background: "#1e5abc"
};
