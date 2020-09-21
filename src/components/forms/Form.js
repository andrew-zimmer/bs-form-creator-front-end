import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

class FormDisplay extends React.Component {
  renderForm = () => {
    return this.props.form.map((x) => {
      if (x.input) {
        if (x.input.required) {
          return (
            <Form.Group controlId={x.input.id}>
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
            <Form.Group controlId={x.input.id}>
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
            <Form.Group controlId={x.select.id}>
              <Form.Label>{x.select.label}</Form.Label>
              <Form.Control as="select">
                {x.select.options.map((option) => (
                  <option className={option}>{option}</option>
                ))}
              </Form.Control>
            </Form.Group>
          );
        } else {
          return (
            <Form.Group controlId={x.select.id}>
              <Form.Label>{x.select.label}</Form.Label>
              <Form.Control as="select" multiple>
                {x.select.options.map((option) => (
                  <option className={option}>{option}</option>
                ))}
              </Form.Control>
            </Form.Group>
          );
        }
      } else if (x.button) {
        if (x.button.style === "stacked") {
          return (
            <div>
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
        } else if (x.button.style === "inline") {
          return (
            <div>
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
      }
    });
  };
  render() {
    return (
      <Container>
        <h2>Form Display</h2>
        <Container>
          <Form>{this.renderForm()}</Form>
        </Container>
      </Container>
    );
  }
}

export default FormDisplay;
