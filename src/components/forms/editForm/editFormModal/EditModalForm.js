import React from "react";

import EditModal from "./EditModal";

import Button from "react-bootstrap/Button";

class EditModalForm extends React.Component {
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

                <EditModal
                    show={this.state.modalShow}
                    onHide={() => this.setState({ modalShow: false })}
                    form={this.props.form}
                    clearState={this.props.clearState}
                    id={this.props.id}
                />
            </>
        );
    }
}

export default EditModalForm;
