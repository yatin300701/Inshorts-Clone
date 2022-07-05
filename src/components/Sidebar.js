import "../css-files/sidebar.css";
import { useState } from "react";
import React from "react";
import { BsList } from "react-icons/bs";
import { Button, Offcanvas } from "react-bootstrap";
import NewsBody from "./NewsBody";
function Sidebar({ setCategory }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant=""
        size="lg"
        className="d-flex justify-content-center"
        onClick={handleShow}
      >
        <BsList />
        <sup>Menu</sup>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <div className="offset-top">
            <Offcanvas.Title></Offcanvas.Title>
            <div className="close_tab">
              <sup>Close Btn -</sup>
            </div>
          </div>
        </Offcanvas.Header>
        <hr />

        <Offcanvas.Body>
          <p className="category">Categories</p>
          <NewsBody setCategory={setCategory} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
export default Sidebar;
