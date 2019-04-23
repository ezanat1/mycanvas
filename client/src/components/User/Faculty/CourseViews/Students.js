import React, { Component } from "react";
import axios from "axios";

export default class People extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      total: "",
      currentPage: 1,
      peoplePerPage: 3
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  componentDidMount() {
    axios
      .get("/course/studentsInThatClass", {
        params: {
          id: this.props.class.id
        }
      })
      .then(res => {
        console.log(res.data.users);
        this.setState({
          people: res.data.users
        });
      });
  }

  render() {
    console.log("redener", this.state.people);
    const { people, currentPage, peoplePerPage } = this.state;
    const indexOfLastPerson = currentPage * peoplePerPage;
    const indexOfFirstPerson = indexOfLastPerson - peoplePerPage;
    const currentPerson = people.slice(indexOfFirstPerson, indexOfLastPerson);
    let eachPeople = null;
    eachPeople = currentPerson.map(singlePerson => {
      console.log(singlePerson.first_name);

      return (
        <tr key={singlePerson.id}>
          <td>{singlePerson.first_name}</td>
          <td>{singlePerson.last_name}</td>
          <td>{singlePerson.email}</td>
          <button className="btn btn-small red">Drop</button>
        </tr>
      );
    });
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(people.length / peoplePerPage); i++) {
      pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
          className={
            this.state.currentPage === number ? "active  blue darken-3" : ""
          }
        >
          <a id={number} href="#!">
            {number}
          </a>
        </li>
      );
    });

    return (
      <div className="container">
        <h4>People</h4>
        <hr />
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{eachPeople}</tbody>
        </table>
        <ul className="pagination" style={{ color: "blue" }}>
          {renderPageNumbers}
        </ul>
      </div>
    );
  }
}
