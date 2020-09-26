import React, { Component } from 'react'
import uuid from 'uuid'

import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class RangeForm extends Component {
    state = {
        label: '',
        min: 0,
        max: 100,
        tooltip: 'off'
    }

    // componentDidMount() {
    //     document.getElementById('off').checked = true
    // }

    handleSubmit = (e) => {
        e.preventDefault()
        const range = {
            range: {
                label: this.state.label,
                min: this.state.min,
                max: this.state.max,
                tooltip: this.state.tooltip,
                id: uuid()
            }
        }
        this.props.addToForm(range)
        this.setState({
            label: '',
            min: 0,
            max: 100,
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleChangeRadio = (e) => {
        this.setState({
            tooltip: e.target.id
        })
    }

    render() {
        return (
            <div>
                <Accordion.Toggle as={Card.Header} eventKey="4">
                    Range
                  </Accordion.Toggle>
                <Accordion.Collapse eventKey="4">
                    <Card.Body>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label as='legend'>Label</Form.Label>
                                <Form.Control required type="text" placeholder="Label" name='label' onChange={this.handleChange} value={this.state.label} />

                            </Form.Group>
                            <Row>
                                <Col xs={6}>
                                    <Form.Group controlId="formBasicMin">
                                        <Form.Label>Min</Form.Label>
                                        <Form.Control required type="number" placeholder="Min Input" name='min' onChange={this.handleChange} value={this.state.min} />

                                    </Form.Group>
                                </Col>
                                <Col xs={6}>
                                    <Form.Group controlId="formBasicMax">
                                        <Form.Label>Max</Form.Label>
                                        <Form.Control required type="number" placeholder="Max Input" name='max' onChange={this.handleChange} value={this.state.max} />

                                    </Form.Group>
                                </Col>
                            </Row>

                            {/* <fieldset >
                                <Form.Group onChange={this.handleChangeRadio} >
                                    <Form.Label as="legend" >
                                        Tooltip
      </Form.Label>
                                    <Col sm={10}>
                                        <Form.Check
                                            type="radio"
                                            label="On"
                                            name="formHorizontalRadios"
                                            id="on"

                                        />
                                        <Form.Check
                                            type="radio"
                                            label="Off"
                                            name="formHorizontalRadios"
                                            id="off"

                                        />
                                        <Form.Check
                                            type="radio"
                                            label="Auto"
                                            name="formHorizontalRadios"
                                            id="auto"

                                        />
                                    </Col>
                                </Form.Group>
                            </fieldset> */}

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
