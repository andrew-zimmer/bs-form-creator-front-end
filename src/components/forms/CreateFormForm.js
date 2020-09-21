import React from "react";
import uuid from "uuid";

import FormDisplay from "./Form";

import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class CreateFormForm extends React.Component {
  state = {
    form: [],
    inputField: {
      label: "",
      type: "text",
      placeholder: "",
      required: false,
      id: "",
    },
    selectField: {
      selectType: "select",
      option: "",
      options: [],
      label: "",
      id: "",
    },
    buttonField: {
      type: "radio",
      style: "stacked",
      options: [],
      option: "",
      label: "",
      id: "",
    },
  };

  handleSubmitButton = (e) => {
    e.preventDefault();
    const buttonHash = {
      button: {
        type: this.state.buttonField.type,
        style: this.state.buttonField.style,
        options: this.state.buttonField.options,
        label: this.state.buttonField.label,
        id: uuid(),
      },
    };
    this.setState({
      form: [...this.state.form, buttonHash],
      buttonField: {
        type: "radio",
        style: "stacked",
        options: [],
        option: "",
        label: "",
      },
    });
    const type = document.getElementById("radio");
    const style = document.getElementById("stacked");
    style.checked = true;
    type.checked = true;
  };

  handleClickButtonAddOption = (e) => {
    e.preventDefault();
    this.setState({
      buttonField: {
        ...this.state.buttonField,
        options: [
          ...this.state.buttonField.options,
          this.state.buttonField.option,
        ],
        option: "",
      },
    });
  };

  handleChangeButtonOption = (e) => {
    this.setState({
      buttonField: { ...this.state.buttonField, option: e.target.value },
    });
  };

  handleChangeButtonLabel = (e) => {
    this.setState({
      buttonField: { ...this.state.buttonField, label: e.target.value },
    });
  };

  handleChangeButtonStyle = (e) => {
    this.setState({
      buttonField: { ...this.state.buttonField, style: e.target.id },
    });
  };

  handleChangeButtonType = (e) => {
    this.setState({
      buttonField: { ...this.state.buttonField, type: e.target.id },
    });
  };

  handleClickSelectAdd = (e) => {
    e.preventDefault();
    const selectHash = {
      select: {
        selectType: this.state.selectField.selectType,
        options: [...this.state.selectField.options],
        label: this.state.selectField.label,
        id: uuid(),
      },
    };
    this.setState({
      form: [...this.state.form, selectHash],
      selectField: {
        selectType: "select",
        option: "",
        options: [],
        label: "",
        id: "",
      },
    });
    const radio = document.getElementById("select");
    radio.checked = true;
  };

  handleChangeSelectLabel = (e) => {
    this.setState({
      selectField: { ...this.state.selectField, label: e.target.value },
    });
  };

  handleClickInput = (e) => {
    e.preventDefault();
    console.log(this.state.inputField);
    this.setState({
      form: [
        ...this.state.form,
        { input: { ...this.state.inputField, id: uuid() } },
      ],
      inputField: {
        label: "",
        type: "text",
        placeholder: "",
        required: false,
        id: "",
      },
    });
    const required = document.getElementById("inputRequired");
    required.checked = false;
  };

  handleChangeInputRequired = () => {
    this.setState({
      inputField: {
        ...this.state.inputField,
        required: this.state.inputField.required ? false : true,
      },
    });
  };

  handleChangeSelectOption = (e) => {
    console.log(this.state.inputField.type);
    this.setState({
      inputField: { ...this.state.inputField, type: e.target.value },
    });
  };

  handleChangePlaceholder = (e) => {
    this.setState({
      inputField: { ...this.state.inputField, placeholder: e.target.value },
    });
  };

  handleChangeInputList = (e) => {
    this.setState({
      inputField: { ...this.state.inputField, label: e.target.value },
    });
  };

  handleChangeRadio = (e) => {
    this.setState({
      selectField: { ...this.state.selectField, selectType: e.target.id },
    });
  };

  handleClickAdd = (e) => {
    e.preventDefault();
    console.log(this.state.selectField.option);
    this.setState({
      selectField: {
        ...this.state.selectField,
        options: [
          ...this.state.selectField.options,
          this.state.selectField.option,
        ],
        option: "",
      },
    });
  };

  handleChangeOption = (e) => {
    this.setState({
      selectField: { ...this.state.selectField, option: e.target.value },
    });
  };

  handleClickXButton = (e) => {
    e.preventDefault();

    this.setState({
      selectField: {
        ...this.state.selectField,
        options: this.state.selectField.options.filter(
          (x) => x !== e.target.id
        ),
      },
    });
  };

  handleClickButtonOptionXButton = (e) => {
    e.preventDefault();

    this.setState({
      buttonField: {
        ...this.state.buttonField,
        options: this.state.buttonField.options.filter(
          (x) => x !== e.target.id
        ),
      },
    });
  };

  renderOptions = () => {
    return this.state.selectField.options.map((option) => (
      <Row className="mt-4">
        <ul className="list-inline mx-auto">
          <li className="list-inline-item">{option}</li>
          <li className="list-inline-item">
            <Button
              variant="danger"
              type="submit"
              id={option}
              onClick={this.handleClickXButton}
            >
              X
            </Button>
          </li>
        </ul>
      </Row>
    ));
  };

  renderButtonOptions = () => {
    return this.state.buttonField.options.map((option) => (
      <Row className="mt-4">
        <ul className="list-inline mx-auto">
          <li className="list-inline-item">{option}</li>
          <li className="list-inline-item">
            <Button
              variant="danger"
              type="submit"
              id={option}
              onClick={this.handleClickButtonOptionXButton}
            >
              X
            </Button>
          </li>
        </ul>
      </Row>
    ));
  };

  render() {
    return (
      <Container className="mt-4" sticky="top">
        <Row>
          <Col md={4} lg={4}>
            <Accordion defaultActiveKey="">
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  Input Fields
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <Form>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Label</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Label your input"
                          onChange={this.handleChangeInputList}
                          value={this.state.inputField.label}
                        />
                        <Form.Text className="text-muted">
                          You'll be able to edit in field.
                        </Form.Text>
                      </Form.Group>

                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>Type</Form.Label>
                        <Form.Control
                          as="select"
                          value={this.state.inputField.type}
                          onChange={this.handleChangeSelectOption}
                        >
                          <option name="text">Text</option>
                          <option name="email">Email</option>
                          <option name="password">Password</option>
                          <option name="tel">Phone</option>
                          <option name="date">Date</option>
                          <option name="number">Number</option>
                          <option name="color">Color</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Placeholder</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Placeholder Text"
                          onChange={this.handleChangePlaceholder}
                          value={this.state.inputField.placeholder}
                        />
                      </Form.Group>
                      <Form.Group
                        controlId="inputRequired"
                        onChange={this.handleChangeInputRequired}
                      >
                        <Form.Check type="checkbox" label="Required?" />
                      </Form.Group>
                      <Button
                        variant="primary"
                        type="submit"
                        onClick={this.handleClickInput}
                      >
                        Create Input
                      </Button>
                    </Form>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  Select Fields
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <Form>
                      <fieldset>
                        <Form.Group as={Row}>
                          <Col sm={10}>
                            <Form.Check
                              type="radio"
                              label="Select Field"
                              name="formHorizontalRadios"
                              id="select"
                              onChange={this.handleChangeRadio}
                            />
                            <Form.Check
                              type="radio"
                              label="Multiple Select Field"
                              name="formHorizontalRadios"
                              id="multiple"
                              onChange={this.handleChangeRadio}
                            />
                          </Col>
                        </Form.Group>
                      </fieldset>

                      <Form.Group controlId="selectLabel">
                        <Form.Label>Label</Form.Label>
                        <Form.Control
                          onChange={this.handleChangeSelectLabel}
                          type="text"
                          placeholder="Label"
                          value={this.state.selectField.label}
                        />
                      </Form.Group>

                      <Form.Group controlId="option">
                        <Form.Label>Option</Form.Label>
                        <Form.Control
                          onChange={this.handleChangeOption}
                          type="text"
                          placeholder="Option"
                          value={this.state.selectField.option}
                        />
                      </Form.Group>

                      <Button
                        variant="primary"
                        type="submit"
                        onClick={this.handleClickAdd}
                      >
                        Add Option
                      </Button>

                      <Button
                        variant="primary"
                        type="submit"
                        onClick={this.handleClickSelectAdd}
                      >
                        Create Input
                      </Button>
                      {this.renderOptions()}
                    </Form>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  Buttons
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <Form onSubmit={this.handleSubmitButton}>
                      <fieldset>
                        <Form.Group
                          onChange={this.handleChangeButtonType}
                          required
                        >
                          <Form.Label as="legend">Button Type</Form.Label>
                          <Col sm={10}>
                            <Form.Check
                              inline
                              type="radio"
                              label="Radio"
                              name="buttonType"
                              id="radio"
                            />
                            <Form.Check
                              inline
                              type="radio"
                              label="Checkbox"
                              name="buttonType"
                              id="checkbox"
                            />
                          </Col>
                        </Form.Group>
                      </fieldset>
                      <fieldset>
                        <Form.Group onChange={this.handleChangeButtonStyle}>
                          <Form.Label as="legend">Style</Form.Label>
                          <Col sm={10}>
                            <Form.Check
                              inline
                              type="radio"
                              label="Stacked"
                              name="buttonStyle"
                              id="stacked"
                            />
                            <Form.Check
                              inline
                              type="radio"
                              label="Inline"
                              name="buttonStyle"
                              id="inline"
                            />
                          </Col>
                        </Form.Group>
                      </fieldset>

                      <Form.Group controlId="buttonLabel">
                        <Form.Label>Add Label</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Label"
                          onChange={this.handleChangeButtonLabel}
                          value={this.state.buttonField.label}
                          required
                        />
                      </Form.Group>

                      <Form.Group controlId="buttonOption">
                        <Form.Label>Add option</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Option"
                          onChange={this.handleChangeButtonOption}
                          value={this.state.buttonField.option}
                        />
                      </Form.Group>

                      <Button
                        variant="primary"
                        type="submit"
                        onClick={this.handleClickButtonAddOption}
                      >
                        Add Option
                      </Button>

                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                      {this.renderButtonOptions()}
                    </Form>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
          <Col md={8} lg={8}>
            <FormDisplay form={this.state.form} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CreateFormForm;
