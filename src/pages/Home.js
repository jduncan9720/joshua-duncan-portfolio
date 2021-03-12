import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Image from "react-bootstrap/Image";
import { Container, Row, Col, Containerfluid } from '../components/Grid'
import "./style.css"
import TypeIt from "../components/TypeIt"


export default function Home() {
    return (
        <Containerfluid title="homeBack">
        <Container title="text-center landingDiv">
            <h1 className="mainName" style={{color: 'white'}}>JOSHUA DUNCAN</h1>
            <TypeIt />
        </Container>
        </Containerfluid>
    )
}
