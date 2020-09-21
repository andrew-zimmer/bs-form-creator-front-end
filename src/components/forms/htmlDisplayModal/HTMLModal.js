import React from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class HTMLModal extends React.Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Your Form's HTML
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <code>{this.props.html}</code>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default HTMLModal;
