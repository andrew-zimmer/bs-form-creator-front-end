import React from "react";
import { Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import { connect } from 'react-redux'

import NavBar from "../components/NavBar";
import Home from "../components/Home";
import FormsContainer from "./FormsContainer";
import UserContainer from "./UserContainer";

function App(props) {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/forms" component={FormsContainer} />
        <Route path="/users">
          <UserContainer login={props.login} />
        </Route>
      </Switch>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    login: state.user.login
  }
}

export default connect(mapStateToProps)(App)
