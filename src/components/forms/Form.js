import React from "react";

import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Draggable, Droppable } from "react-beautiful-dnd";

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
                    <Form.Label as="legend">{x.input.label}</Form.Label>

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
                    <Form.Label as="legend">{x.input.label}</Form.Label>
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
                    <Form.Label as="legend">{x.select.label}</Form.Label>
                    <Form.Control as="select">
                      {x.select.options.map((option) => (
                        <option name={option}>{option}</option>
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
                    <Form.Label as="legend">{x.select.label}</Form.Label>
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
      <Container className="border border-solid rounded">
        <Row>
          <Col md={6} lg={6}>
            <h2>Form Display</h2>
          </Col>
          <Col md={6} lg={6}>
            <Droppable droppableId="delete">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  <h3
                    className="text-center border-danger text-danger rounded p-2"
                    style={{ borderWidth: "5px", borderStyle: "dashed" }}
                  >
                    Drag Here To Delete
                  </h3>
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </Col>
        </Row>
        <Droppable droppableId="dp1">
          {(provided) => (
            <Container
              className="border border-solid rounded mt-3 mb-4"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <Form>{this.renderForm()}</Form>
              {provided.placeholder}
            </Container>
          )}
        </Droppable>
      </Container>
    );
  }
}

export default FormDisplay;
