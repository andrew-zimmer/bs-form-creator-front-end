import React from "react";
import { Switch, Route } from "react-router-dom";

import CreateFormForm from "../components/forms/CreateFormForm";
import Forms from "../components/forms/Forms";

class FormsContainer extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/forms/new" component={CreateFormForm} />
        <Route exact path="/forms" component={Forms} />
      </Switch>
    );
  }
}

export default FormsContainer;
