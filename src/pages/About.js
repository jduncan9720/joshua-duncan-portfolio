import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Image from "react-bootstrap/Image";
import { Container, Row, Col } from '../components/Grid'
import profileImg from "../images/2020Profilesm.jpg"
import "./style.css"

export default function About() {
    return (
        <Container>
            <Row name="main text-center">
                <Col size="md-6">
                    <Image alt="Joshua Duncan" src={profileImg} roundedCircle fluid/>
                </Col>
                <Col size="md-6 bio">
                    <h2>Biography</h2>
                    <p>I'm currently working my way through a full stack development bootcamp through the University of Utah. I've always had a strong passion for tech and the amazing things that can be done through full stack development.
                    My work for the last 20 years has been in the art publishing business with graphic design and overall business management being my main focus. I've worked with large publishers and distributors around the country and spent time in Hong Kong on printing projects. During that work though I've built websites and dealt with business online through self taught practices. I am focusing now on learning the full suite of resources to take my online development to the next level. While I love the art business, I would welcome a new challenge in the developement world. I am becoming fluent in HTML, CSS, JavaScript, Node.js, MongDB and many more languages and programs throughout my bootcamp experience. When not coding I love to spend time otdoors with my family. Fishing, hiking and enjoying wildlife are some of my hobbies. I'm an avid gamer and enjoy movies and entertainment media in general.</p>
                </Col>
            </Row>
        </Container>
    )
}
