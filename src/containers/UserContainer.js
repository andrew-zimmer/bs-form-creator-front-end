import React from "react";
import { Switch, Route } from "react-router-dom";

import SignInForm from "../components/users/SignInForm";
import SignUpForm from "../components/users/SignUpForm";

class UserContainer extends React.Component {
  render() {
    return (
      <Switch>
        <div>
          <Route exact path="/users/new" component={SignUpForm} />
          <Route exact path="/users/login" component={SignInForm} />
        </div>
      </Switch>
    );
  }
}

export default UserContainer;
