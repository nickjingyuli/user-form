import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WrappedRegistrationForm from "./User/components/UserSignUp";
import WrappedLoginForm from "./User/components/UserLogin";
import WrappedRecoveryForm from "./User/components/UserRecovery";
import Particles from "react-particles-js";
import "./App.css";

const particleOpt = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Router>
            <Switch>
              <Route exact path="/" component={WrappedLoginForm} />
              <Route exact path="/signup" component={WrappedRegistrationForm} />
              <Route exact path="/recovery" component={WrappedRecoveryForm} />
            </Switch>
          </Router>
        </div>
        <div className="particle-container">
          <Particles params={particleOpt} />
        </div>
      </div>
    );
  }
}

export default App;
