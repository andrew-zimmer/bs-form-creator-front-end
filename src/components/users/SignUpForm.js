import React from "react";

import { connect } from 'react-redux'

import { userSignUp } from '../../actions/userAction'

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class SignUpForm extends React.Component {
  state = {
    email: "",
    username: "",
    password: "",
    passwordConfirmation: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.userSignUp(this.state)
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  render() {
    return (
      <Container className="border border-solid rounded mt-4">
        <h2 className="text-center mb-4">Sign Up</h2>

        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col m={6} lg={6}>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  onChange={this.handleChange}
                  value={this.state.email}
                  required
                />
              </Form.Group>
            </Col>
            <Col m={6} lg={6}>
              <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  onChange={this.handleChange}
                  value={this.state.username}
                  required
                />
              </Form.Group>
            </Col>
            <Col m={6} lg={6}>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                  value={this.state.password}
                  required
                />
              </Form.Group>
            </Col>
            <Col m={6} lg={6}>
              <Form.Group controlId="passwordConfirmation">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password Confirmation"
                  onChange={this.handleChange}
                  value={this.state.passwordConfirmation}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Button
                variant="primary"
                type="submit"
                size="lg"
                className="mb-4"
                block
              >
                Sign Up
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default connect(null, { userSignUp })(SignUpForm)
