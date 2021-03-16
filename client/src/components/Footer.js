import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Footer.css";

export default function Footer(props) {
  return (
    <Container fluid className="footer">
      <Row>
        <Col>Footer information</Col>
        <Col>About us</Col>
      </Row>
    </Container>
  );
}
