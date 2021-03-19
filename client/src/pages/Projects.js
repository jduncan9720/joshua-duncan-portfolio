import React from 'react'
import { Container, Row, Col, Image } from "react-bootstrap"
import Projectcard from "../components/Projectcard"
import Athletes from "../images/athletesandactivism.jpg"
import burger from "../images/burger.jpg"
import portfolio from "../images/portfolio2020.jpg"
import mtg from "../images/mtg-backend.jpg"
import rds from "../images/rds-order-calc.jpg"
import weather from "../images/weatherapi.jpg"
import witcher from "../images/witcherGame.jpg"





export default function Projects() {
    return (
        <Container className="mt-5" style={{ color: 'white' }}>
        <Row>
            <Col md={12} className="text-center">
            <h1>Projects</h1>
            </Col>
        </Row>
        <Row className="justify-content-md-center">
            <Projectcard 
                imagesrc={Athletes}
                title="Athletes and Activism"
                text="This app was my most recent group project.  It is an app designed to help folks find the charities and causes that their favorite athlete supports. "
                steps={["Setup routes etc for 3rd party API Call", "Navigation design with React Router", "Login form and passport authorization"]}
                repo="https://github.com/jduncan9720/athletes-and-activism"
                deploy="https://athletes-and-activism.herokuapp.com/"
            />
            <Projectcard 
                imagesrc={mtg}
                title="Mountain Trails Backend"
                text="This is a backend for a website I'm currently developing for Mountain Trails Gallery "
                steps={["Node/Express", "Routes", "Jquery", "MySequel Database", "AWS Image Upload and Storage"]}
                repo="https://github.com/jduncan9720/mtnTrails-PC"
                deploy="https://mtgalleries-backend.herokuapp.com/"
            />
            <Projectcard 
                imagesrc={witcher}
                title="The Witcher Matching Game"
                text="A mathing game based on The Witcher Video Game"
                steps={["Navigation design with React Router", "Login form and passport authorization"]}
                repo="https://github.com/jduncan9720/clicky-game"
                deploy="https://jduncan9720.github.io/clicky-game/"
            />
            <Projectcard 
                imagesrc={rds}
                title="Robert Duncan Studios Order Calculator"
                text="A quick app I wrote to easily calculate phone order totals on the fly for Robert Duncan Studios"
                steps={["Javascript heavy code", "Simple design for quick mobile use"]}
                repo="https://github.com/jduncan9720/rds-orderform"
                deploy="https://jduncan9720.github.io/rds-orderform/"
            />
            <Projectcard 
                imagesrc={weather}
                title="Weather Dashboard"
                text="Get the weather and a 5 day forcast for any location. Saved searches."
                steps={["API calls to 3rd party API", "Local Storage", "Moment.js", "Bootstrap"]}
                repo="https://github.com/jduncan9720/weatherapi-BC2"
                deploy="https://jduncan9720.github.io/weatherapi-BC2/"
            />
            <Projectcard 
                imagesrc={burger}
                title="Weather Dashboard"
                text="Get the weather and a 5 day forcast for any location. Saved searches."
                steps={["Node/Express", "Handlebars", "Sequelize,Mysql", "Full Stack Design"]}
                repo="https://github.com/jduncan9720/burger"
                deploy="https://obscure-coast-51520.herokuapp.com/"
            />
        </Row>
        </Container>
    )
}
