import React, { useState } from 'react'
import { Container, Row, Col } from '../components/Grid'
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
            setFormData({ name: event.target.value });
        } else if (field === "email") {
            setFormData({ email: event.target.value });
        } else if (field === "message") {
            setFormData({ message: event.target.value });
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
            <div>  
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
            </div>     
        );
    }