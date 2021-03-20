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
                    <a href="mailto: jduncan97@gmail.com"><FontAwesomeIcon style={{ color: 'white', margin: "10px" }} icon='envelope' size="3x" /></a>
                    <a href="https://github.com/jduncan9720"><FontAwesomeIcon style={{ color: 'white', margin: "10px" }} icon={['fab', 'github']} size="3x" /></a>
                    <a href="https://www.linkedin.com/in/jduncan-9720/"><FontAwesomeIcon style={{ color: 'white', margin: "10px" }} icon={['fab', 'linkedin']} size="3x" /></a>
                </Col>
                <Col className="bio" md={6} sm={12}>
                    <Row>
                        <h2>Biography</h2>
                        <p> I'm Josh and I'm looking forward to an amazing career in the web engineering field. I've always had a strong passion for tech and I love the amazing things I'm able to do with full stack technology! I'm a strong self starter that can be trusted to work hard to meet goals and learn the latest technologies.
                        <br/>
                        <br/>
                        My past career has been in the art publishing business with graphic design and overall business management being my main focus. I've worked with large publishers and distributors around the country and spent time in Hong Kong on printing projects. During that work, I've built websites and dealt with ecommerce through self taught practices. Through my recent bootcamps and hours of practice and study, I now feel confident in my skills and am able to use the full suite of development resources to take my online development to the next level. While I love the art business, I would welcome a new challenge in the web engineering world. I have a strong set of skills in HTML, CSS, JavaScript, Node.js, Express, MySql, MongDB, React and many more frameworks and libraries. I'm eager to continue learning. 
                        <br/>
                        <br/>
                        When not coding, I love to spend time outdoors with my family. Fishing, hiking and enjoying music are some of my hobbies. I'm an avid gamer and enjoy movies and entertainment media in general.
                        I enjoy life and I like to carryover that feeling to my career as well. </p>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <h4>Interests</h4>
                            <ul>
                                <li>Front/Back End Developement</li>
                                <li>Graphic Design</li>
                                <li>Video Gaming</li>
                                <li>Fishing, Skiing, Outdoors</li>
                                <li>Live Music</li>
                            </ul>
                        </Col>
                        <Col md={6}>
                            <h4>Education</h4>
                            <ul className="eduList">
                                <li><FontAwesomeIcon icon='graduation-cap' /> University of Utah <br /> Full Stack Development Bootcamp <br /> Certificate of Graduation</li>
                                <br />
                                <li><FontAwesomeIcon icon='graduation-cap' /> Utah Valley University<br /> Business Management <br /> Associates Degree</li>
                            </ul>

                        </Col>
                    </Row>
                </Col>

            </Row>
        </Container>
    )
}
