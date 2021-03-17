import {useState} from "react";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import axios from "axios";

export default function Profile(props) {
  // const [provider, setProvider] = useState(props.user.isServiceProvider);

  console.log(props.user);
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const tempProvider = !provider;
  //   console.log(props.user.isServiceProvider);
  // };

  //   axios
  //     .put(`/api/users/${user.id}`, {provider: tempProvider})
  //     .then((response) => {
  //       console.log("success!!");
  //       setProvider(tempProvider);
  //     });
  // };

  return (
    <Container fluid className="profile">
      <Container>
        <Row>
          <Col className="profile-image" md={{span: 6, offset: 3}}>
            <Image
              className="profile-image-img"
              src="/images/default_profile.png"
              roundedCircle
            />
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
          <Col>{props.user && props.user.full_name}</Col>
          {/* <Col>{props.user.last_name}</Col> */}
        </Row>
        <Row>
          <Col>
            <b>Email</b>
          </Col>
        </Row>
        <Row>{/* <Col>{props.user.email}</Col> */}</Row>
        <Row>
          <Col>
            <b>Address</b>
          </Col>
        </Row>
        <Row>{/* <Col>{props.location.address}</Col> */}</Row>
        <Row>
          <Button
            // onClick={handleSubmit}
            className="profile-services-btn"
            variant="primary"
            size="sm"
          >
            Become a provider
          </Button>
        </Row>
      </Container>
    </Container>
  );
}
