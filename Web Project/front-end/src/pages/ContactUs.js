import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ContactUs = () => {
  return (
    <div style={{ backgroundColor: "#d9d9d9", minHeight: "100vh" }}>
      <div style={{ paddingTop: "30px", paddingBottom: "30px" }}>
        <Container>
          <h2 className="text-center mb-4">Contact Us</h2>
          <Row>
            <Col md={6}>
              <h5>Get in Touch</h5>
              <p>
                If you have any questions or concerns, feel free to reach out to us.
                We are here to help!
              </p>
              <p>
                <strong>Email:</strong> support@luxemart.com
              </p>
              <p>
                <strong>Phone:</strong> +92 317-7212605
              </p>
              <p>
                <strong>Address:</strong> Imperial Mall, Rawalpindi, Pakistan.
              </p>
            </Col>
            <Col md={6}>
              <h5>Send Us a Message</h5>
              <Form>
                <Form.Group controlId="formName" className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group controlId="formMessage" className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={5} placeholder="Enter your message" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Send Message
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ContactUs;