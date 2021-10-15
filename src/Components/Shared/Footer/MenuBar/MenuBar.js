import React from "react";
import "./MenuBar.css";
import logo from "../../../../images/Banner&Background/logo.png";
import { Container, Nav, Navbar } from "react-bootstrap";

const MenuBar = () => {
  return (
    <div>
      <Navbar
        id="home"
        className="main-menu"
        collapseOnSelect
        expand="lg"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="items text-white" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="items text-white" href="#about">
                About
              </Nav.Link>
              <Nav.Link className="items text-white" href="#shop">
                Shop
              </Nav.Link>
              <Nav.Link className="items text-white" href="#contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MenuBar;
