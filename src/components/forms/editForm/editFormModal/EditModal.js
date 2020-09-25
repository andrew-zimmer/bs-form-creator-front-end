import React from "react";
import { patchForm } from "../../../../actions/formAction";

import { connect } from "react-redux";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const EditModal = (props) => {
    const [formTitle, setFormTitle] = React.useState("");

    const handleChange = (e) => {
        setFormTitle(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            authenticationToken: props.authenticationToken,
            email: props.email,
            formId: props.id,
            form: { title: formTitle, form: props.form },
            userId: props.userId
        }
        setFormTitle('')
        props.onHide()
        props.patchForm(userData);
        props.clearState()


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
                        Submit
          </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

const mapStateToProps = state => {
    return {
        authenticationToken: state.user.data.authenticationToken,
        email: state.user.data.email,
        userId: state.user.data.id,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        patchForm: (form) => dispatch(patchForm(form)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditModal);
