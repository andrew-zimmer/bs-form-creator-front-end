import React, { Component } from 'react'
import uuid from 'uuid'

import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class TextareaForm extends Component {
    state = {
        label: '',
        rows: ''
    }

    handleSubmitButton = (e) => {
        e.preventDefault()
        const textarea = {
            textarea: {
                label: this.state.label,
                rows: this.state.rows,
                id: uuid()
            }
        }
        this.props.addToForm(textarea)
        this.setState({
            label: '',
            rows: ''
        })
    }

    handleChange = (e) => {
        if (e.target.name === 'rows' && e.target.value < 0) {
            return
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }

    }


    render() {
        return (
            <div>
                <Accordion.Toggle as={Card.Header} eventKey="3">
                    Textarea
                  </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                    <Card.Body>
                        <Form onSubmit={this.handleSubmitButton}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Label</Form.Label>
                                <Form.Control onChange={this.handleChange} name='label' value={this.state.label} type="text" placeholder="Label" required />

                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Rows</Form.Label>
                                <Form.Control onChange={this.handleChange} name='rows' value={this.state.rows} type="number" placeholder="Rows" min={1} required />
                                <Form.Text className="text-muted">
                                    How many text lines do you want exposed?
                                </Form.Text>
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Add To Form
                            </Button>
                        </Form>
                    </Card.Body>
                </Accordion.Collapse>
            </div>
        )
    }
}
