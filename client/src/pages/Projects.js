import React from 'react'
import { Container, Row, Col, Image } from "react-bootstrap"
import Projectcard from "../components/Projectcard"
import Athletes from "../images/athletesandactivism.jpg"

export default function Projects() {
    return (
        <Container className="mt-5" style={{ color: 'white' }}>
        <Row>
            <Col md={12} className="text-center">
            <h1>Projects</h1>
            </Col>
        </Row>
        <Row>
            <Projectcard 
                imagesrc={Athletes}
                title="Athletes and Activism"
                text="This app was my most recent group project.  It is an app designed to help folks find the charities and causes that their favorite athlete supports. "
                steps={["Setup routes etc for 3rd party API Call", "Navigation design with React Router", "Login form and passport authorization"]}
                repo="https://github.com/jduncan9720/athletes-and-activism"
                deploy="https://athletes-and-activism.herokuapp.com/"
            />
        </Row>
        </Container>
    )
}
