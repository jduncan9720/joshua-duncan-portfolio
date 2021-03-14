import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Row, Col, Container, Containerfluid} from "../Grid/index";
import "./style.css"

function darkLight (){
alert("change color")
}


function Navigation() {
  return (
    
      <Navbar className="navMain" collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/home">JOSHUA DUNCAN</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="social"
              href="https://github.com/jduncan9720">
              <FontAwesomeIcon style={{color: 'white'}} icon={['fab', 'github']} /> Github: jduncan9720
            </Nav.Link>
            <Nav.Link
              className="social"
              href="https://www.linkedin.com/in/jduncan-9720/">
              <FontAwesomeIcon style={{color: 'white'}} icon={['fab', 'linkedin']} /> LinkedIn: jduncan-9720
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/home"><FontAwesomeIcon icon='home' /></Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/skills">Skills</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link onClick={darkLight}><FontAwesomeIcon icon='palette' /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    
  )
}


export default Navigation
