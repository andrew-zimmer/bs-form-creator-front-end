import React from "react";

import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

class HiddenForm extends React.Component {
  renderForm = () => {
    return this.props.form.map((x) => {
      if (x.input) {
        if (x.input.required) {
          return (
            <div key={x.input.id}>
              <Form.Group controlId={x.input.id}>
                <Form.Label>{x.input.label}</Form.Label>

                <Form.Control
                  type={x.input.type}
                  placeholder={x.input.placeholder}
                  required
                />
              </Form.Group>
            </div>
          );
        } else {
          return (
            <div key={x.input.id}>
              <Form.Group controlId={x.input.id}>
                <Form.Label>{x.input.label}</Form.Label>
                <Form.Control
                  type={x.input.type}
                  placeholder={x.input.placeholder}
                />
              </Form.Group>
            </div>
          );
        }
      } else if (x.select) {
        if (x.select.selectType === "select") {
          return (
            <div key={x.select.id}>
              <Form.Group controlId={x.select.id}>
                <Form.Label>{x.select.label}</Form.Label>
                <Form.Control as="select">
                  {x.select.options.map((option) => (
                    <option className={option}>{option}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </div>
          );
        } else {
          return (
            <div key={x.select.id}>
              <Form.Group controlId={x.select.id}>
                <Form.Label>{x.select.label}</Form.Label>
                <Form.Control as="select" multiple>
                  {x.select.options.map((option) => (
                    <option className={option}>{option}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </div>
          );
        }
      } else if (x.button) {
        if (x.button.style === "stacked") {
          return (
            <div key={x.button.id}>
              <Form.Group>
                <Form.Label as="legend">{x.button.label}</Form.Label>
                {x.button.options.map((option) => {
                  return (
                    <Form.Check
                      type={x.button.type}
                      label={option}
                      name={x.button.label}
                      id={option}
                    />
                  );
                })}
              </Form.Group>
            </div>
          );
        }
      } else if (x.button.style === "inline") {
        return (
          <div key={x.button.id}>
            <Form.Group>
              <Form.Label as="legend">{x.button.label}</Form.Label>
              {x.button.options.map((option) => {
                return (
                  <Form.Check
                    inline
                    type={x.button.type}
                    label={option}
                    name={x.button.label}
                    id={option}
                  />
                );
              })}
            </Form.Group>
          </div>
        );
      }
    });
  };
  render() {
    return (
      <div hidden={true} id="hiddenForm">
        <Form>
          {this.renderForm()}

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default HiddenForm;
