import React, { Component } from 'react'
import { connect } from 'react-redux'

import EditForm from './EditForm'

class EditFormForm extends Component {
    render() {
        return (<EditForm id={this.props.id} />)
    }
}

export default EditFormForm
