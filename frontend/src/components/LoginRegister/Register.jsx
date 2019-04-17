import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { registerUser } from "../../actions/authentication";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      errors: {}
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
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password
    };
    this.props.registerUser(user, this.props.history);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/homepage");
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/homepage");
    }

    document.title = "Register";
  }
  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <div className="valign-wrapper row register-box">
          <div className="col card hoverable s12 pull-s1 m6 pull-m3 l4 pull-l4">
            <form noValidate onSubmit={this.onSubmit}>
              <div className="card-content">
                <span className="card-title">Register</span>
                <div className="row">
                  <div className="input-field col s12">
                    <label htmlFor="first_name">First Name</label>
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      value={this.state.firstName}
                      onChange={this.onChange}
                    />
                    {errors.first_name && (
                      <span
                        style={{ color: "red" }}
                        className="helper-text"
                        data-error="wrong"
                        data-success="right"
                      >
                        {errors.first_name}
                      </span>
                    )}
                  </div>
                  <div className="input-field col s12">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      value={this.state.lastName}
                      onChange={this.onChange}
                    />
                    {errors.last_name && (
                      <span
                        style={{ color: "red" }}
                        className="helper-text"
                        data-error="wrong"
                        data-success="right"
                      >
                        {errors.last_name}
                      </span>
                    )}
                  </div>
                  <div className="input-field col s12">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={this.state.email}
                      onChange={this.onChange}
                    />
                    {errors.email && (
                      <span
                        style={{ color: "red" }}
                        className="helper-text"
                        data-error="wrong"
                        data-success="right"
                      >
                        {errors.email}
                      </span>
                    )}
                  </div>
                  <div className="input-field col s12">
                    <label htmlFor="password"> Password </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={this.state.passsword}
                      onChange={this.onChange}
                    />
                    {errors.password && (
                      <span
                        style={{ color: "red" }}
                        className="helper-text"
                        data-error="wrong"
                        data-success="right"
                      >
                        {errors.password}
                      </span>
                    )}
                  </div>
                  <div>
                    <small>Already have an Account </small>
                    <small>
                      <Link to="/login">Sign in Here</Link>
                    </small>
                  </div>
                </div>
              </div>
              <div className="card-action right-align">
                <input
                  style={{ backgroundColor: "#1e5abc", color: "white" }}
                  type="submit"
                  className="btn"
                  value="Register"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
