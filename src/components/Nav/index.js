import React from 'react'
import { NavLink } from "react-router-dom";
import { Row, Col, Container } from "../../components/Grid/index";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Container>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <NavLink className="nav-link" exact to="/">
                    HOME
                </NavLink>
                <NavLink className="nav-link" exact to="/about">
                    ABOUT
                </NavLink>
                <NavLink className="nav-link" exact to="/projects">
                    PROJECTS
                </NavLink>
                <NavLink className="nav-link" exact to="/contact">
                    CONTACTS
                </NavLink>
              </ul>
            </div>
          </Container>
        </nav>
      );
}

export default Nav
