import React from "react";

import FormsDisplay from './displayForms/FormsDisplay'

import Container from 'react-bootstrap/Container'

class Forms extends React.Component {
  render() {
    return (
      <Container>
        <FormsDisplay />
      </Container>
    )
  }
}

export default Forms;
