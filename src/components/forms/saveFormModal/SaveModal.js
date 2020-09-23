import React from "react";
import { addForm } from "../../../actions/formAction";

import { connect } from "react-redux";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const SaveForm = (props) => {
  const [formTitle, setFormTitle] = React.useState("");

  const handleChange = (e) => {
    setFormTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addForm({ title: formTitle, form: props.form });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Save Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formTitle">
            <Form.Label as="legend">Form Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Title"
              value={formTitle}
              onChange={handleChange}
              required
            ></Form.Control>
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            size="lg"
            className="mb-4"
            block
          >
            Sign Up
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    addForm: (form) => dispatch(addForm(form)),
  };
};
export default connect(null, mapDispatchToProps)(SaveForm);
