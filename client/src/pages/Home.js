import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container, Row, Col, Image } from "react-bootstrap"
import "./style.css"
import TypeIt from "../components/TypeIt"


export default function Home() {
    return (
        <Container className="homeBack" fluid >
        <Container className="text-center landingDiv">
            <h1 className="mainName" style={{color: 'white'}}>JOSHUA DUNCAN</h1>
            <TypeIt />
        </Container>
        </Container>
    )
}
