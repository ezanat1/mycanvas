import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Route } from "react-router-dom";

import Homepage from "../components/User/Homepage";

import SearchCourse from "../components/Search/SearchCourse";
import SearchHelper from "../components/Search/SearchHelper";
import Profile from "../components/User/Profile";
import CourseItem from "../components/Search/CourseItem";
import Navbar from "../components/User/Navbar";

const HomeView = () => {
  return (
    <Router>
      <div>
        <div>
          <div>
            <Route path="/profile" component={Profile} />
            <Route path="/searchcourse" component={SearchHelper} />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default HomeView;
