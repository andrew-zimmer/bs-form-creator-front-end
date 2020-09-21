import React from "react";
import HTMLModal from "./HTMLModal";

import Button from "react-bootstrap/Button";

const DisplayHTML = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [html, setHtml] = React.useState("");

  return (
    <>
      <Button
        variant="primary"
        onClick={() => {
          setModalShow(true);
          setHtml(document.getElementById("hiddenForm").innerHTML);
          console.log(html);
        }}
      >
        Get HTML
      </Button>

      <HTMLModal
        html={html}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default DisplayHTML;
