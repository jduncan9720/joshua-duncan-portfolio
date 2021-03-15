import React from 'react'
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap"



function index(props) {

    const steps = props.steps
    const stepItems = steps.map((step => <li>{step}</li>));
    return (

        <Card style={{ width: '25rem', color: 'black'}}>
        {console.log(steps)}
            <Card.Img variant="top" src={props.imagesrc} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
                <Card.Title>What I did:</Card.Title>
                    <ul>{stepItems}</ul>
                <Button variant="primary" href={props.repo}>Github Repo</Button>
                <Button variant="primary" href={props.deploy}>Deployed App</Button>
            </Card.Body>
        </Card>
    )
}

export default index
