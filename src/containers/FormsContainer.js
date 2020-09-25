import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { connect } from 'react-redux'

import EditFormForm from '../components/forms/editForm/EditFormForm'

import CreateFormForm from "../components/forms/CreateFormForm";
import Forms from "../components/forms/Forms";

class FormsContainer extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/forms/new" component={CreateFormForm} />

        <Route exact path='/forms/:id/edit' component={({ match }) => {
          return (this.props.login ? <EditFormForm id={match.params.id} /> : <Redirect to='/' />)
        }} />

        <Route exact path="/forms" >
          {this.props.login ? <Forms /> : <Redirect to='/' />}
        </Route>
      </Switch>
    );
  }
}

const mapStateToProps = state => {
  return {
    login: state.user.login
  }
}

export default connect(mapStateToProps)(FormsContainer)
