import React from "react";

import SaveModal from "./SaveModal";

import Button from "react-bootstrap/Button";

class SaveForm extends React.Component {
  state = {
    modalShow: false,
  };

  render() {
    return (
      <>
        <Button
          variant="primary"
          onClick={() => this.setState({ modalShow: true })}
        >
          Save Form
        </Button>

        <SaveModal
          show={this.state.modalShow}
          onHide={() => this.setState({ modalShow: false })}
          form={this.props.form}
        />
      </>
    );
  }
}

export default SaveForm;
