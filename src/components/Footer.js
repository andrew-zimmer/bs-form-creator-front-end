import React, { Component } from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

export default class Footer extends Component {
    render() {
        return (
            <Navbar expand="md" bg="primary" className='fixed-bottom mt-2 '>
                <Container>
                    <Navbar.Brand className='text-light' href="#">Bootstrap Form Creator</Navbar.Brand>
                    <i className="lab la-github text-white" onClick={() => console.log('clicked')} style={{ fontSize: '40px' }}></i>
                </Container>
            </Navbar>
        )
    }
}
