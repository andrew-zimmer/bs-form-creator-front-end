import React from "react";
import { Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "../components/NavBar";
import Home from "../components/Home";
import FormsContainer from "./FormsContainer";
import UserContainer from "./UserContainer";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/forms" component={FormsContainer} />
        <Route path="/users" component={UserContainer} />
      </Switch>
    </div>
  );
}

export default App;
