import React from "react";

import Container from 'react-bootstrap/Container'

class Home extends React.Component {
  render() {
    return (
      <Container className=' mt-4'>
        <h1>Bootstrap Form Creator</h1>
        <hr />
        <div className='border border-solid rounded p-3'>
          <h4>Create forms, easily, with minimalistic styling powered by bootstrap.</h4>
          <ol>
            <li>Create an account (or don't).</li>
            <p>Creating an account allows you to save your forms to be reused and modified over and over.</p>
            <li>Click on the 'create form' button in the navbar.</li><br />
            <li>Use the accordions on the left to pick the input type.</li>
            <p>Fill out the fields and click submit to add a field to your form.</p>
            <li>On the right you will see the form you are creating.</li>
            <p>When fields are added to your form, you can drag and drop them in any order you may like.</p>
            <li>When finished, click 'get html' at the button of the accordion on the left.</li>
            <p>A modal will pop up to give you your HTML.</p>

          </ol>

          <a target='_blank' href='https://youtu.be/uXwkT_Xap2o' className="lab la-youtube" style={{ fontSize: '40px' }}></a>

          <a target='_blank' href='https://github.com/andrew-zimmer/bs-form-creator-front-end' className="lab la-github " style={{ fontSize: '40px' }}></a>

        </div>
      </Container>
    );
  }
}

export default Home;
