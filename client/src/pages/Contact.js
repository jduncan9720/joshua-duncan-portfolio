import React, { useState } from 'react'
import { Container, Row, Col, Image } from "react-bootstrap"
import axios from "axios";

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
          url: "http://localhost:5000/contact",
          data: formData,
        }).then((response) => {
          if (response.data.status === "sent") {
            alert("Message Sent");
            setFormData({ name: "", email: "", message: "", status: "Submit" });
          } else if (response.data.status === "failed") {
            alert("Message Failed");
          }
        });
      }

        return (
            <Container className="bg-white mt-5">
            <Row>
                <Col md={12} className="text-center">
                <h1>Contact Me:</h1>
                </Col>
            </Row>
            <Row>
            <Col md={12} className="formControl mt-3 mb-3">
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
            </Row>
            </Container>     
        );
    }

    