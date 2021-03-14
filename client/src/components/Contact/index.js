import React from 'react'
import React, { useState, useEffect } from 'react'



function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        status: "Submit"
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

return (
    <Container className="mt-5 loginDivs">
        {console.log(state)}
        <Row>
            <Column className="col-md-6 offset-md-3">
                <h1 className="mb-4">Contact</h1>
                <form onSubmit={_handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="username"
                            value={formData.name}
                            onChange={_handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email Address:</label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={_handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            value={formData.message}
                            onChange={_handleChange}
                        />
                    </div>
                    <div className="text-right">
                        <Button className="btn-primary">Submit</Button>
                    </div>
                </form>
            </Column>
        </Row>
    </Container>
)
}

export default Contact
