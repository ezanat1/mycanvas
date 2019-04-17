import React, { Component } from "react";
import Navbar from "./Navbar"
import CourseNavbar from "./Navbar"
import jwt_decode from "jwt-decode";
const initialState = {
  recipient: "",
  message: "",
 
};
class Message extends Component {
  constructor() {
    super();
    this.state = initialState;
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  componentDidMount() {
    document.title = "Send Message";
  }
  onSubmit(e) {
    e.preventDefault();
    const msg = {
      recipient: this.state.recipient,
      message: this.state.message,
     

    };
    // addCourse(course).then(res => {
    //   if (res) {
    //     this.props.history.push("/facultyDashboard");
    //   }
    // });
  }

  render() {
    return (
      <div className="container">
      <CourseNavbar />
        <div className="valign-wrapper row">
          <div className="col card hoverable s12">
            <form noValidate onSubmit={this.onSubmit}>
              <div className="card-content">
                <span className="card-title">Compose Message</span>
                <div className="row">
                  <div className="input-field col s12">
                    <label htmlFor="recipient">Recipient</label>
                    <input
                      type="text"
                      name="recipient"
                      id="recipient"
                      value={this.state.recipient}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="input-field col s12">
                  <label for="textarea1">Message</label>
                  <textarea id="textarea1" class="materialize-textarea"></textarea>
                  </div>
                </div>
                <div className="card-action right-align">
                  <input
                    type="submit"
                    style={{ backgroundColor: "#1e5abc", color: "white" }}
                    className="btn"
                    value="Send"
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
export default Message;
