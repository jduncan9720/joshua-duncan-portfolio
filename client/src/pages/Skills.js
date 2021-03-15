import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container, Row, Col, Image } from "react-bootstrap"

export default function Skills() {
    return (
        <Container className="mt-5" style={{ color: 'white' }}>
            <Row>
                <Col md={12} className="text-center">
                    <h1>Technical Skills</h1>
                </Col>
            </Row>
            <Row className="mt-4 frontEnd" style={{ color: 'white' }}>
                <Col md={4} className="text-center">
                    <h1>Front End</h1>
                    <div className="mt-4">
                        <div><h3><FontAwesomeIcon icon={['fab', 'html5']} /> HTML 5</h3></div>
                        <div><h3><FontAwesomeIcon icon={['fab', 'css3-alt']} /> CSS 3</h3></div>
                        <div><h3><FontAwesomeIcon icon={['fab', 'js-square']} /> JavaScript / jQuery</h3></div>
                        <div><h3><FontAwesomeIcon icon={['fab', 'react']} /> React</h3></div>
                        <div><h3><FontAwesomeIcon icon={['fab', 'bootstrap']} /> React-Bootstrap</h3></div>
                    </div>
                </Col>
                <Col md={4} className="text-center">
                    <h1>Back End</h1>
                    <div className="mt-4">
                        <div><h3><FontAwesomeIcon icon={['fab', 'node']} /> Node</h3></div>
                        <div><h3><FontAwesomeIcon icon='server'/> Express</h3></div>
                        <div><h3><FontAwesomeIcon icon='table' /> MySql / Sequelize</h3></div>
                        <div><h3><FontAwesomeIcon icon='database' /> MongoDB / Mongoose</h3></div>
                    </div>
                </Col>
                <Col md={4} className="text-center">
                    <h1>Graphic Design, Etc</h1>
                    <div className="mt-4">
                        <div><h3><FontAwesomeIcon icon='camera'/> Adobe Photoshop</h3></div>
                        <div><h3><FontAwesomeIcon icon='newspaper'/> Adobe Indesign</h3></div>
                        <div><h3><FontAwesomeIcon icon='palette' /> Adobe Illustrator</h3></div>
                        <div><h3><FontAwesomeIcon icon='chart-bar' /> Quickbooks</h3></div>
                        <div><h3><FontAwesomeIcon icon={['fab', 'microsoft']} /> Microsoft Office</h3></div>
                        
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
