import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

export default function Profile(props) {
  return (
    <Container fluid className="profile">
      <Container>
        <Row>
          <Col className="profile-image" md={{span: 6, offset: 3}}>
            <Image src="holder.js/171x180" roundedCircle />
            <Button className="profile-btn" variant="primary" size="sm">
              Photo
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <b>Name</b>
          </Col>
        </Row>
        <Row>
          <Col>{props.user}</Col>
        </Row>
        <Row>
          <Col>
            <b>Email</b>
          </Col>
        </Row>
        <Row>
          <Col>
            <b>Address</b>
          </Col>
        </Row>
        <Row>
          <Button className="profile-services-btn" variant="primary" size="sm">
            Become a provider
          </Button>
        </Row>
      </Container>
    </Container>
  );
}
