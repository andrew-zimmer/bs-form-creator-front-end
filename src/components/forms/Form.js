import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

import { Draggable } from "react-beautiful-dnd";

class FormDisplay extends React.Component {
  renderForm = () => {
    return this.props.form.map((x, index) => {
      if (x.input) {
        if (x.input.required) {
          return (
            <Draggable key={index} draggableId={index + ""} index={index}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <Form.Group controlId={x.input.id}>
                    <Form.Label>{x.input.label}</Form.Label>
                    <Form.Control
                      type={x.input.type}
                      placeholder={x.input.placeholder}
                      required
                    />
                  </Form.Group>
                </div>
              )}
            </Draggable>
          );
        } else {
          return (
            <Draggable key={index} draggableId={index + ""} index={index}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <Form.Group controlId={x.input.id}>
                    <Form.Label>{x.input.label}</Form.Label>
                    <Form.Control
                      type={x.input.type}
                      placeholder={x.input.placeholder}
                    />
                  </Form.Group>
                </div>
              )}
            </Draggable>
          );
        }
      } else if (x.select) {
        if (x.select.selectType === "select") {
          return (
            <Draggable key={index} draggableId={index + ""} index={index}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <Form.Group controlId={x.select.id}>
                    <Form.Label>{x.select.label}</Form.Label>
                    <Form.Control as="select">
                      {x.select.options.map((option) => (
                        <option className={option}>{option}</option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </div>
              )}
            </Draggable>
          );
        } else {
          return (
            <Draggable key={index} draggableId={index + ""} index={index}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <Form.Group controlId={x.select.id}>
                    <Form.Label>{x.select.label}</Form.Label>
                    <Form.Control as="select" multiple>
                      {x.select.options.map((option) => (
                        <option className={option}>{option}</option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </div>
              )}
            </Draggable>
          );
        }
      } else if (x.button) {
        if (x.button.style === "stacked") {
          return (
            <Draggable key={index} draggableId={index + ""} index={index}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
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
                </div>
              )}
            </Draggable>
          );
        } else if (x.button.style === "inline") {
          return (
            <Draggable key={index} draggableId={index + ""} index={index}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
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
                </div>
              )}
            </Draggable>
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
