import React from 'react'
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap"
import "./style.css"


function index(props) {

    const steps = props.steps
    const stepItems = steps.map((step => <li>{step}</li>));
    return (

        <Card style={{ width: '20rem', color: 'black', backgroundColor: 'darkgrey', margin: "10px" }}>
            {console.log(steps)}
            <Card.Img variant="top" src={props.imagesrc} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
                <Card.Title>Highlights/Tech:</Card.Title>
                <ul>{stepItems}</ul>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    <Button className="btn" variant="primary" href={props.repo}>Github Repo</Button>
                    <Button variant="primary" href={props.deploy}>Deployed App</Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default index
