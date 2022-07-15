import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  const expand = "sm";
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Navbar
        fixed="top"
        key={expand}
        bg="light"
        expand={expand}
        className="mb-3"
        expanded={expanded}
      >
        <Container fluid>
          <Navbar.Brand href="#profile">Hyunjung Kim</Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(expanded ? false : "expanded")}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#home" onClick={() => setExpanded(false)}>
                HOME
              </Nav.Link>
              <Nav.Link href="#skills" onClick={() => setExpanded(false)}>
                SKILLS
              </Nav.Link>
              <Nav.Link href="#projects" onClick={() => setExpanded(false)}>
                PROJECTS
              </Nav.Link>
              <Nav.Link href="#contact" onClick={() => setExpanded(false)}>
                CONTACT
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
