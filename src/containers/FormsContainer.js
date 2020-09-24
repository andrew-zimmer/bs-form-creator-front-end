import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import CreateFormForm from "../components/forms/CreateFormForm";
import Forms from "../components/forms/Forms";

class FormsContainer extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/forms/new" component={CreateFormForm} />
        <Route exact path="/forms" >
          {this.props.login ? <Forms /> : <Redirect to='/' />}
        </Route>
      </Switch>
    );
  }
}

export default FormsContainer;
