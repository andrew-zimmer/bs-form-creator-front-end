import React from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class SignInForm extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <Container className="border border-solid rounded mt-4">
        <h2 className="text-center mb-4">Sign In</h2>

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
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="password"
                  onChange={this.handleChange}
                  value={this.state.password}
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
                Login
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default SignInForm;
