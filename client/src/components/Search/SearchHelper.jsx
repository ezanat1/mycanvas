import React, { Component } from "react";
import axios from "axios";
import SearchCourse from "./SearchCourse";
import CourseItem from "./CourseItem";

class SearchHelper extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      class: []
    };
    this.searchClass = this.searchClass.bind(this);
  }
  // componentDidMount() {
  //   console.log("Component Did Mount of Class Main");
  //   axios
  //     .get("/course")
  //     .then(res => {
  //       this.setState({
  //         class: res.data
  //       });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  //   console.log("data", this.state.class);
  // }

  componentWillMount() {
    console.log("Component Will Mount of Products Main");
  }
  searchClass = e => {
    e.preventDefault();
    // const value = event.target.classSearch.value;
    // var data = {
    //   classSearch: value
    // };
    // console.log(value);

    axios.get("/course").then(res => {
      if (res.status === 200) {
        // console.log('from search helper',res.data);
        this.setState({
          class: res.data.course
        });
      }
    });
  };

  render() {
    return (
      <div className="col s12">
        <div className="card">
          <div className="card-content black-text">
            <h4 className="align-center">Search Class</h4>
            <SearchCourse searchClass={this.searchClass} />
          </div>
          <div className="col s12">
            <div className="card">
              <div className="card-content">
                <CourseItem class={this.state.class} />
                <div style={ulColor}>
                  <ul className="pagination">
                    <li className="disabled">
                      <a href="#!">
                        <i className="material-icons">chevron_left</i>
                      </a>
                    </li>
                    <li className="active">
                      <a href="#!">1</a>
                    </li>
                    <li className="waves-effect">
                      <a href="#!">2</a>
                    </li>
                    <li className="waves-effect">
                      <a href="#!">3</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const ulColor = {
  color: "#1e5abc"
};
export default SearchHelper;
