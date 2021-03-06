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
          className='mb-4'
        >
          Save Form
        </Button>

        <SaveModal
          show={this.state.modalShow}
          onHide={() => this.setState({ modalShow: false })}
          form={this.props.form}
          clearState={this.props.clearState}
        />
      </>
    );
  }
}

export default SaveForm;
