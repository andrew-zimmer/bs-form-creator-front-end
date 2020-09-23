import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import SignInForm from "../components/users/SignInForm";
import SignUpForm from "../components/users/SignUpForm";

class UserContainer extends React.Component {
  render() {
    return (
      <Switch>
        <div>
          <Route exact path="/users/new">
            {this.props.login ? <Redirect to='/' /> : <SignUpForm />}
          </Route>
          <Route exact path="/users/login" >
            {this.props.login ? <Redirect to='/' /> : <SignInForm />}
          </Route>
        </div>
      </Switch>
    );
  }
}

export default UserContainer;
