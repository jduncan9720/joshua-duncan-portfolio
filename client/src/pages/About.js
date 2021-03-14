import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container, Row, Col, Image } from "react-bootstrap"
import profileImg from "../images/2020Profilesm.jpg"
import "./style.css"

export default function About() {
    return (
        <Container>
            <Row className="justify-content-md-center main">
                <Col className="picInfo text-center" md={6} sm={12}>
                    <Image alt="Joshua Duncan" src={profileImg} className="mx-auto d-block" roundedCircle fluid />
                    <br />
                    <h3>Joshua Duncan</h3>
                    <h4>Full Stack Bootcamp Grad</h4>
                    <a href="mailto: jduncan97@gmail.com"><FontAwesomeIcon style={{color: 'white', margin: "10px"}} icon='envelope' size="3x" /></a>
                    <a href="https://github.com/jduncan9720"><FontAwesomeIcon style={{color: 'white', margin: "10px"}} icon={['fab', 'github']} size="3x"/></a>
                    <a href="https://www.linkedin.com/in/jduncan-9720/"><FontAwesomeIcon style={{color: 'white', margin: "10px"}} icon={['fab', 'linkedin']} size="3x"/></a>
                </Col>
                <Col className="bio" md={6} sm={12}>
                    <Row>
                        <h2>Biography</h2>
                        <p>I'm currently working my way through a full stack development bootcamp through the University of Utah. I've always had a strong passion for tech and the amazing things that can be done through full stack development.
                    My work for the last 20 years has been in the art publishing business with graphic design and overall business management being my main focus. I've worked with large publishers and distributors around the country and spent time in Hong Kong on printing projects. During that work though I've built websites and dealt with business online through self taught practices. I am focusing now on learning the full suite of resources to take my online development to the next level. While I love the art business, I would welcome a new challenge in the developement world. I am becoming fluent in HTML, CSS, JavaScript, Node.js, MongDB and many more languages and programs throughout my bootcamp experience. When not coding I love to spend time otdoors with my family. Fishing, hiking and enjoying wildlife are some of my hobbies. I'm an avid gamer and enjoy movies and entertainment media in general.</p>
                    </Row>
                    <Row>
                        <Col>
                            <h4>Interests</h4>
                        </Col>
                        <Col>
                            <h4>Education</h4>
                        </Col>
                    </Row>
                </Col>

            </Row>
        </Container>
    )
}
