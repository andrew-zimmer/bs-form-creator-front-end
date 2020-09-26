import React, { Component } from 'react'
import uuid from 'uuid'

import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'

export default class SwitchForm extends Component {
    state = {
        label: '',
        inline: false
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const switchHash = {
            switch: {
                label: this.state.label,
                inline: this.state.inline,
                id: uuid()
            }
        }
        this.props.addToForm(switchHash)
        this.setState({
            label: ''
        })
    }

    handleChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    handleChangeSwitch = (e) => {
        this.setState({
            switch: this.state.inline ? false : true
        })
    }

    render() {
        return (
            <div>
                <Accordion.Toggle as={Card.Header} eventKey="5">
                    Switch
                  </Accordion.Toggle>
                <Accordion.Collapse eventKey="5">
                    <Card.Body>
                        <Form onSubmit={this.handleSubmit}>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Label</Form.Label>
                                    <Form.Control type="text" placeholder="Label" onChange={this.handleChange} value={this.state.label} name='label' required />

                                </Form.Group>
                                {/* <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    label="Inline"
                                    onChange={this.handleChangeSwitch}
                                    inline
                                /> */}


                                <Button variant="primary" type="submit">
                                    Submit
  </Button>
                            </Form>
                        </Form>
                    </Card.Body>
                </Accordion.Collapse>
            </div>
        )
    }
}
