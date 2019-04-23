import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Navbar from "./components/LoginRegister/Navbar";
import Login from "./components/LoginRegister/Login";
import Register from "./components/LoginRegister/Register";
import Homepage from "./components/User/Homepage";
import Message from "./components/User/Message";
import Profile from "./components/User/Profile";
import FacultyProfile from "./components/User/Faculty/FacultyProfile";
import SearchHelper from "./components/Search/SearchHelper";
import FacultyHomepage from "./components/User/Faculty/HomepageFaculty";
import FacultyLogin from "./components/User/Faculty/FacultyLogin";
import FacultyRegister from "./components/User/Faculty/FacultyRegister";
import AddCourse from "./components/User/Faculty/AddCourse";
import CourseHome from "./components/CourseHome";
import SingleCourseItem from "./components/User/SingleCourseItem";
import EachCourseView from "./components/User/Faculty/EachCourseView";
import People from "./components/EachCourseItems/People";
import UploadFiles from "./components/User/UserHelpers/Upload";
import Error from "./components/Error";
import { Provider } from "react-redux";
import setAuthToken from "./setAuthToken";
import store from "./store/store";

import { setCurrentUser, logoutUser } from "./actions/authentication";
import jwt_decode from "jwt-decode";

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={UploadFiles} />{" "}
            <Route exact path="/login" component={Login} />{" "}
            <Route path="/register" component={Register} />{" "}
            <Route path="/homepage" component={Homepage} />{" "}
            <div className="container">
              <Route exact path="/sendmessage" component={Message} />{" "}
              <Route exact path="/courseHome/" component={CourseHome} />{" "}
              <Route
                exact
                path="/course/singlecourse/:id"
                component={SingleCourseItem}
              />{" "}
              <Route
                exact
                path="/faculty/singlecourse/:id"
                component={EachCourseView}
              />{" "}
              <Route path="/profile" component={Profile} />{" "}
              <Route path="/searchcourse" component={SearchHelper} />{" "}
              <Route exact path="/people" component={People} />{" "}
            </div>{" "}
            <Route exact path="/facultyLogin" component={FacultyLogin} />{" "}
            <Route exact path="/facultyProfile" component={FacultyProfile} />{" "}
            <Route exact path="/facultyRegister" component={FacultyRegister} />{" "}
            <Route path="/facultyDashboard" component={FacultyHomepage} />
            <Route path="/addCourse" component={AddCourse} />{" "}
            <Route path="/courseHome" component={CourseHome} />{" "}
            <Route path="/error" component={Error} />{" "}
          </div>
        </Router>{" "}
      </Provider>
    );
  }
}

export default App;
