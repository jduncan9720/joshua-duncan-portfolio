import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Row, Col, Image } from "react-bootstrap"
import axios from "axios";
import "./style.css"

// axios.defaults.baseURL = 'https://jduncandev-portfolio.herokuapp.com/';

export default function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    function _handleChange(event) {
        const field = event.target.id;
        if (field === "name") {
            setFormData({ ...formData, name: event.target.value });
        } else if (field === "email") {
            setFormData({ ...formData, email: event.target.value });
        } else if (field === "message") {
            setFormData({ ...formData, message: event.target.value });
        }
    }

    function _handleSubmit(event) {
        event.preventDefault();  
        setFormData({ status: "Sending" });  
        axios({
          method: "POST",
          url: "http://localhost:5000/send",
          data: formData,
        }).then((response) => {
            console.log("form data", formData)
          if (response.data.status === "sent") {
            alert("Message Sent");
            setFormData({ name: "", email: "", message: "", status: "Submit" });
          } else if (response.data.status === "failed") {
            alert("Message Failed");
          }
        });
      }

        return (
            <Container className="mt-5" style={{ color: 'white' }}>
            <Row>
                <Col md={12} className="text-center">
                <h1>Contact Me:</h1>
                </Col>
            </Row>
            <Row>
            <Col md={6} className="formControl mt-3 mb-3">
            {console.log(formData)} 
            <form onSubmit={_handleSubmit} method="POST">
                <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={_handleChange}
                    required
                />
                </div>
                <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={_handleChange}
                    required
                />
                </div>
                <div>
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    value={formData.message}
                    onChange={_handleChange}
                    required
                />
                </div>
                <button type="submit">Submit</button>
            </form> 
            </Col>
            <Col md={6} className="mt-3 mb-3">
                <h2><FontAwesomeIcon style={{color: 'white'}} icon='phone' /> Phone: <a href="tel:435-657-0500">(435) 503-1978</a></h2>
                <h2><FontAwesomeIcon style={{color: 'white'}} icon='envelope' /> Email: <a href="mailto:jduncan97@gmail.com">jduncan97@gmail.com</a></h2>
            </Col>
            </Row>
            </Container>     
        );
    }

    