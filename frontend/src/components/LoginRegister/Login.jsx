import React, { Component } from "react";
import { login } from "../HelperFunctions";
import { Link, withRouter } from "react-router-dom";
import { loginUser } from "../../actions/authentication";
import { connect } from "react-redux";
import PropTypes from "prop-types";
const initialState = {
  email: "",
  password: "",
  errors:{}
};
class Login extends Component {
  constructor() {
    super();
    this.state = initialState;
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
 onSubmit(e){
  e.preventDefault();
  const user = {
      email: this.state.email,
      password: this.state.password,
  }
  this.props.loginUser(user);
  console.log(user);
 }

 componentDidMount() {
  if(this.props.auth.isAuthenticated) {
      this.props.history.push('/');
  }
}
 componentWillReceiveProps(nextProps) {
  if(nextProps.auth.isAuthenticated) {
      this.props.history.push('/homepage')
  }
  if(nextProps.errors) {
      this.setState({
          errors: nextProps.errors
      });
  }
}

  render() {
    const {errors} = this.state;
    return (
      <div className="container">
        <div className="valign-wrapper row login-box">
          <div className="col card hoverable s10 pull-s1 m6 pull-m3 l4 pull-l4">
            <form noValidate onSubmit={this.onSubmit}>
              <div className="card-content">
                <span className="card-title">Student Login</span>
                <div className="row">
                  <div className="input-field col s12">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={this.state.email}
                      onChange={this.onChange}
                    />

                  {errors.email && (<span style={{ color: "red" }} className="helper-text" data-error="wrong">{errors.email}</span>)} 
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
                   {errors.password && (<span style={{ color: "red" }} className="helper-text" data-error="wrong">{errors.password}</span>)} 
                  </div>
                </div>
                <div>
                  <div>
                    <small>
                      Faculty <Link to="/facultyLogin">Login</Link>
                    </small>
                  </div>

                  <small>
                    Don't Have an Account{" "}
                    <Link to="/register">Sign up Here</Link>
                  </small>
                </div>
              </div>
              <div className="card-action right-align">
                <input
                  style={{ backgroundColor: "#1e5abc", color: "white" }}
                  type="submit"
                  className="btn"
                  value='Login'

                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
