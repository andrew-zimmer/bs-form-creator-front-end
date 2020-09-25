import React from "react";

import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
// import Col from "react-bootstrap/Col";

class HiddenForm extends React.Component {

  renderForm = () => {
    return this.props.form.map((x) => {
      if (x.input) {
        if (x.input.required) {
          return (
            <Form.Group controlId={x.input.id} key={x.input.id}>
              <Form.Label>{x.input.label}</Form.Label>

              <Form.Control
                type={x.input.type}
                placeholder={x.input.placeholder}
                required
              />
            </Form.Group>
          );
        } else {
          return (
            <Form.Group controlId={x.input.id} key={x.input.id}>
              <Form.Label>{x.input.label}</Form.Label>
              <Form.Control
                type={x.input.type}
                placeholder={x.input.placeholder}
              />
            </Form.Group>
          );
        }
      } else if (x.select) {
        if (x.select.selectType === "select") {
          return (
            <Form.Group controlId={x.select.id} key={x.select.id}>
              <Form.Label>{x.select.label}</Form.Label>
              <Form.Control as="select">
                {x.select.options.map((option) => (
                  <option name={option} key={option}>
                    {option}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          );
        } else {
          return (
            <Form.Group controlId={x.select.id} key={x.select.id}>
              <Form.Label>{x.select.label}</Form.Label>
              <Form.Control as="select" multiple>
                {x.select.options.map((option) => (
                  <option className={option} key={option}>
                    {option}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          );
        }
      } else if (x.button) {
        if (x.button.style === "stacked") {
          return (
            <Form.Group key={x.button.id}>
              <Form.Label as="legend">{x.button.label}</Form.Label>
              {x.button.options.map((option) => {
                return (
                  <Form.Check
                    type={x.button.type}
                    label={option}
                    name={x.button.label}
                    id={option}
                    key={option}
                  />
                );
              })}
            </Form.Group>
          );

        } else if (x.button.style === "inline") {
          return (
            <Form.Group key={x.button.id}>
              <Form.Label as="legend">{x.button.label}</Form.Label>
              {x.button.options.map((option) => {
                return (
                  <Form.Check
                    inline
                    type={x.button.type}
                    label={option}
                    name={x.button.label}
                    id={option}
                    key={option}
                  />
                );
              })}
            </Form.Group>
          );
        }
      } else if (x.textarea) {
        return (
          <Form.Group key={x.textarea.id} controlId="exampleForm.ControlTextarea1">
            <Form.Label>{x.textarea.label}</Form.Label>
            <Form.Control as="textarea" id={x.textarea.id} rows={x.textarea.rows} />
          </Form.Group>
        )
      }
    });
  };
  render() {
    return (
      <div hidden={true} id={this.props.id}>
        <Container className="border border-solid rounded mt-4">
          <Form>
            {this.renderForm()}

            <Button variant="primary" type="submit" size="lg" block>
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default HiddenForm;
