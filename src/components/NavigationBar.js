import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";

function NavigationBar() {
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="navbar-logo"
      >
        <Navbar.Brand href="#home">
          <span style={{ color: "#41E0FD" }}>Amit</span> Klein
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="navbar-logo"
          >
            <Nav.Link href="#pricing">About Me</Nav.Link>
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="navbar-logo"
          >
            <Nav.Link href="#pricing">Projects</Nav.Link>
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="navbar-logo"
          >
            <Nav.Link href="#pricing">Skills</Nav.Link>
          </Link>
          <Link
            activeClass="active"
            to="military"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="navbar-logo"
          >
            <Nav.Link href="#pricing">Military</Nav.Link>
          </Link>
          <Link
            activeClass="active"
            to="education"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="navbar-logo"
          >
            <Nav.Link href="#pricing">Education</Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
