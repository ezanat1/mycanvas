import React, { Component } from "react";
import { update } from "../HelperFunctions";
import jwt_decode from "jwt-decode";
import Navbar from "./Navbar";
class Profile extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      phoneNumber: "",
      about_me: "",
      city: "",
      country: "",
      company: "",
      school: "",
      hometown: "",
      language: "",
      gender: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      phoneNumber: this.state.phoneNumber,
      about_me: this.state.about_me,
      city: this.state.city,
      country: this.state.country,
      company: this.state.company,
      school: this.state.school,
      hometown: this.state.hometown,
      language: this.state.language,
      gender: this.state.gender
    };

    update(user).then(res => {
      if (res) {
        this.props.history.push("/homepage");
      }
    });
  }
  // componentDidMount() {
  //   const token = localStorage.usertoken;
  //   const decoded = jwt_decode(token);
  //   this.setState({
  //     name: decoded.name,
  //     email: decoded.email,
  //     phoneNumber: decoded.phoneNumber,
  //     about_me: decoded.about_me,
  //     city: decoded.city,
  //     country: decoded.country,
  //     company: decoded.company,
  //     school: decoded.school,
  //     hometown: decoded.hometown,
  //     language: decoded.language,
  //     gender: decoded.gender
  //   });
  // }

  render() {
    return (
      <div className="container">
        <Navbar />
        <div className="row">
          <div>
            <h1>Profile</h1>
          </div>
          <form noValidate className="col s12 " onSubmit={this.onSubmit}>
            <div className="row">
              <div className="input-field col s6">
                <i class="material-icons prefix">account_circle</i>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={this.state.name}
                  onChange={this.onChange}
                />
                <label htmlFor="name">Name</label>
              </div>
              <div className="input-field col s6">
                <i class="material-icons prefix">email</i>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field col s6">
                <i class="material-icons prefix">lock</i>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
                <label htmlFor="email">password</label>
              </div>
              <div className="input-field col s6">
                <i class="material-icons prefix">phone</i>
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  value={this.state.phoneNumber}
                  onChange={this.onChange}
                />
                <label htmlFor="phoneNumber">Phone Number</label>
              </div>
              <div className="input-field col s6">
                <i class="material-icons prefix">person</i>
                <textarea
                  type="text"
                  name="about_me"
                  id="about_me"
                  class="materialize-textarea"
                  value={this.state.about_me}
                  onChange={this.onChange}
                />
                <label htmlFor="about_me">About Me</label>
              </div>
              <div className="input-field col s6">
                <i class="material-icons prefix">streetview</i>
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={this.state.city}
                  onChange={this.onChange}
                />
                <label htmlFor="city">City</label>
              </div>
              <div className="input-field col s6">
                <i class="material-icons prefix">location_on</i>
                <input
                  type="text"
                  name="country"
                  id="country"
                  value={this.state.country}
                  onChange={this.onChange}
                />
                <label htmlFor="country">Country</label>
              </div>
              <div className="input-field col s6">
                <i class="material-icons prefix">school</i>
                <input
                  type="text"
                  name="school"
                  id="school"
                  value={this.state.school}
                  onChange={this.onChange}
                />
                <label htmlFor="school">School</label>
              </div>
              <div className="input-field col s6">
                <i class="material-icons prefix">work</i>
                <input
                  type="text"
                  name="company"
                  id="company"
                  value={this.state.company}
                  onChange={this.onChange}
                />
                <label htmlFor="school">Company</label>
              </div>
              <div className="input-field col s6">
                <i class="material-icons prefix">home</i>
                <input
                  type="text"
                  name="hometown"
                  id="hometown"
                  value={this.state.hometown}
                  onChange={this.onChange}
                />
                <label htmlFor="hometown">Hometown</label>
              </div>
              <div className="input-field col s6">
                <i class="material-icons prefix">language</i>
                <input
                  type="text"
                  name="language"
                  id="language"
                  value={this.state.language}
                  onChange={this.onChange}
                />
                <label htmlFor="language">Language</label>
              </div>
              <div className="input-field col s6">
                <i class="material-icons prefix">person_outline</i>
                <input
                  type="text"
                  name="gender"
                  id="gender"
                  value={this.state.gender}
                  onChange={this.onChange}
                />
                <label htmlFor="gender">Gender</label>
              </div>
            </div>

            <div className="right-align">
              <input
                style={{ backgroundColor: "#1e5abc", color: "white" }}
                type="submit"
                className="btn "
                value="Save"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Profile;
