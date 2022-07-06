import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";

const NavBar = () => {
  const expand = "sm";
  return (
    <>
      <Navbar
        fixed="top"
        key={expand}
        bg="light"
        expand={expand}
        className="mb-3"
      >
        <Container fluid>
          <Navbar.Brand href="#profile">Hyunjung Kim</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="top"
          >
            <Offcanvas.Header
              className="ms-auto"
              closeButton
            ></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#home">HOME</Nav.Link>
                <Nav.Link href="#skills">SKILLS</Nav.Link>
                <Nav.Link href="#projects">PROJECTS</Nav.Link>
                <Nav.Link href="#contact">CONTACT</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
