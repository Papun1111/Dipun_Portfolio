import React from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import location_icon from "../assets/location_icon.svg";
import mail_icon from "../assets/mail_icon.svg";
import call_icon from "../assets/call_icon.svg";
import "./Contact.css";

export const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "4b7d74ac-c3ce-40a8-a3c9-f1291d36b233");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (response.success) {
      alert("Form has been submitted successfully");
    }
  };

  return (
    <Container className="contact-animate">
      <Row className="mb-4">
        <Col>
          <h1>Get in Touch</h1>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <h2>Let's Talk</h2>
          <p>
            I am eager to connect and collaborate on exciting new projects.
            Currently, I am open to communication and actively seeking
            collaboration opportunities. If you are interested in working
            together or if you have a project idea, please reach out to me.
            Additionally, I am in the process of building a development team and
            would love to connect with talented individuals who are passionate
            about creating innovative solutions. Don’t hesitate to contact me if
            you’re interested in joining forces or discussing potential
            collaborations.
          </p>
          <div className="space-y-2">
            <div className="d-flex align-items-center mb-2">
              <img src={mail_icon} alt="" /><p>dipunmohapatra.2024@gmail.com</p>
            </div>
            <div className="d-flex align-items-center mb-2">
              <img src={call_icon} alt="" /><p>+91 9937067671</p>
            </div>
            <div className="d-flex align-items-center mb-2">
              <img src={location_icon} alt="" /><p>India</p>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <Form onSubmit={onSubmit} className="mt-4">
            <Form.Group className="mb-3">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" name="name"/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Your Email</Form.Label>
              <Form.Control type="email" placeholder="Your email" name="email"/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Write Your Message Here</Form.Label>
              <Form.Control as="textarea" rows={8} placeholder="Enter your message" name="message"/>
            </Form.Group>
            <Button type="submit" className="button-gradient">Submit Now</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
