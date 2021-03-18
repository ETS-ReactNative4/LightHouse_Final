import {useState, useEffect} from "react";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import axios from "axios";

const handleSubmit = (event, provider, userID) => {
  event.preventDefault();

  console.log(provider);
  // axios.post(`/api/users/${userID}`, {provider: !provider}).then((response) => {
  //   console.log("success!!");
  //   setProvider(response.isserviceprovider);
  // });
};

const handleFileSelect = (event) => {
  console.log(event);
};

export default function Profile(props) {
  const [provider, setProvider] = useState(false);
  useEffect(() => {
    console.log("THIS IS users:", props.user);
    if (props.user !== null) {
      setProvider(props.user.isserviceprovider);
    }
  }, [props.user]);

  return (
    <Container fluid className="profile">
      <Container>
        <Row>
          <Col className="profile-image" md={{span: 6, offset: 3}}>
            <Col>
              <Image
                className="profile-image-img"
                src="/images/default_profile.png"
                roundedCircle
              />
            </Col>
          </Col>
        </Row>
        <Col>{props.location && props.location.city}</Col>

        <Row>
          <Col>
            <input type="file" onChange={handleFileSelect} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button className="profile-pic-btn" variant="primary" size="sm">
              Upload a profile picture
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
        <Row>
          <Col>{props.user && props.user.email}</Col>
        </Row>

        <Row>
          <Col>
            <b>Address</b>
          </Col>
        </Row>
        <Col>{props.location && props.location.full_address}</Col>
        <Row>
          {props.user && (
            <Col>
              <Button
                onClick={(e) => handleSubmit(e, provider, props.user.id)}
                className="profile-services-btn"
                variant="primary"
                size="sm"
              >
                Become a provider
              </Button>
            </Col>
          )}
        </Row>
      </Container>
    </Container>
  );
}
