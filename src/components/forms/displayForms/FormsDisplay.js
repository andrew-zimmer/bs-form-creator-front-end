import React, { Component } from 'react'

import { connect } from 'react-redux'

import { Link } from 'react-router-dom'

import { deleteForm } from '../../../actions/formAction'
import HiddenForm from '../HiddenForm'
import DisplayHTML from "../htmlDisplayModal/DisplayHTML"



import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class FormsDisplay extends Component {

    renderForm = (form) => {
        return form.map((x) => {
            if (x.input) {
                if (x.input.required) {
                    return (
                        <Form.Group controlId={x.input.id} key={x.input.id}>
                            <Form.Label>{x.input.label}</Form.Label>

                            <Form.Control
                                type={x.input.type}
                                placeholder={x.input.placeholder}
                                required
                            />
                        </Form.Group>
                    );
                } else {
                    return (
                        <Form.Group controlId={x.input.id} key={x.input.id}>
                            <Form.Label>{x.input.label}</Form.Label>
                            <Form.Control
                                type={x.input.type}
                                placeholder={x.input.placeholder}
                            />
                        </Form.Group>
                    );
                }
            } else if (x.select) {
                if (x.select.selectType === "select") {
                    return (
                        <Form.Group controlId={x.select.id} key={x.select.id}>
                            <Form.Label>{x.select.label}</Form.Label>
                            <Form.Control as="select">
                                {x.select.options.map((option) => (
                                    <option name={option} key={option}>
                                        {option}
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    );
                } else {
                    return (
                        <Form.Group controlId={x.select.id} key={x.select.id}>
                            <Form.Label>{x.select.label}</Form.Label>
                            <Form.Control as="select" multiple>
                                {x.select.options.map((option) => (
                                    <option className={option} key={option}>
                                        {option}
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    );
                }
            } else if (x.button) {
                if (x.button.style === "stacked") {
                    return (
                        <Form.Group key={x.button.id}>
                            <Form.Label as="legend">{x.button.label}</Form.Label>
                            {x.button.options.map((option) => {
                                return (
                                    <Form.Check
                                        type={x.button.type}
                                        label={option}
                                        name={x.button.label}
                                        id={option}
                                        key={option}
                                    />
                                );
                            })}
                        </Form.Group>
                    );
                }
            } else if (x.button.style === "inline") {
                return (
                    <Form.Group key={x.button.id}>
                        <Form.Label as="legend">{x.button.label}</Form.Label>
                        {x.button.options.map((option) => {
                            return (
                                <Form.Check
                                    inline
                                    type={x.button.type}
                                    label={option}
                                    name={x.button.label}
                                    id={option}
                                    key={option}
                                />
                            );
                        })}
                    </Form.Group>
                );
            }
        });
    };

    handleClickXButton = (e) => {
        e.preventDefault()
        const userData = {
            authenticationToken: this.props.authenticationToken,
            email: this.props.email,
            formId: e.target.name,
        }
        this.props.deleteForm(userData)
    }

    handleClickEditButton = (e) => {

    }

    render() {
        return (
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                <Row>
                    <Col sm={4}>
                        <ListGroup>
                            {this.props.forms.map(form => <ListGroup.Item key={form.id} action href={`#${form.id}`}>{form.title}</ListGroup.Item>)}
                        </ListGroup>
                    </Col>
                    <Col sm={8}>
                        <Tab.Content>
                            {this.props.forms.map(form => <Tab.Pane key={form.id} eventKey={`#${form.id}`}>{this.renderForm(form.form)}

                                <Button
                                    variant="danger"
                                    type="submit"
                                    name={form.id}
                                    onClick={this.handleClickXButton}
                                    className='float-right'
                                >
                                    X
                                </Button>
                                <Link to={`/forms/${form.id}/edit`} className='btn btn-primary'>
                                    Edit
                                </Link>
                                <DisplayHTML id={`form${form.id}`} />
                                <HiddenForm form={form.form} id={`form${form.id}`} />
                            </Tab.Pane>)

                            }

                        </Tab.Content>

                    </Col>
                </Row>
            </Tab.Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        authenticationToken: state.user.data.authenticationToken,
        email: state.user.data.email,
        forms: state.forms
    }
}

export default connect(mapStateToProps, { deleteForm })(FormsDisplay)
