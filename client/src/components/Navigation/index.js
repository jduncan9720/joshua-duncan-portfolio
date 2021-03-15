import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Row, Col, Image } from "react-bootstrap"
import "./style.css"

function darkLight (){
alert("change color")
}


function Navigation() {
  return (
    
      <Navbar className="navMain" collapseOnSelect expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/home">JOSHUA DUNCAN</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="social"
              href="https://github.com/jduncan9720">
              <FontAwesomeIcon style={{color: 'white'}} icon={['fab', 'github']} /> <span style={{color: 'white'}}>Github:</span> jduncan9720
            </Nav.Link>
            <Nav.Link
              className="social"
              href="https://www.linkedin.com/in/jduncan-9720/">
              <FontAwesomeIcon style={{color: 'white'}} icon={['fab', 'linkedin']} /> <span style={{color: 'white'}}>LinkedIn:</span> jduncan-9720
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/home" className="navLinks"><FontAwesomeIcon icon='home'/></Nav.Link>
            <Nav.Link href="/about" className="navLinks">About</Nav.Link>
            <Nav.Link href="/skills" className="navLinks">Skills</Nav.Link>
            <Nav.Link href="/projects" className="navLinks">Projects</Nav.Link>
            <Nav.Link href="/contact" className="navLinks">Contact</Nav.Link>
            <Nav.Link onClick={darkLight}><FontAwesomeIcon icon='palette' /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    
  )
}


export default Navigation
