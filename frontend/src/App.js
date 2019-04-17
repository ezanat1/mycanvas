import React, { Component } from "react";
import { BrowserRouter as Router, Switch, NavLink } from "react-router-dom";
import { Route } from "react-router-dom";
import RouteLogReg from "./RouteLogReg";
import Login from "./components/LoginRegister/Login";
import { Provider } from "react-redux";
import store from "./store/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <RouteLogReg />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
