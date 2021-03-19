import {useState, useEffect} from "react";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";

import axios from "axios";

export default function Profile(props) {
  const [provider, setProvider] = useState();
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("THIS IS users:", props.user);
    if (props.user !== null) {
      setImage(props.user.photo);
      setProvider(props.user.isserviceprovider);
    }
  }, [props.user]);

  const uploadImage = async (e) => {
    const userID = props.user.id;
    const files = e.target.files;

    const data = new FormData();

    data.append("file", files[0]);

    //upload preset is for cloudinary API
    data.append("upload_preset", "helperFinal");
    setLoading(true);
    const res = await fetch(
      "	https://api.cloudinary.com/v1_1/dyreq1qtf/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log("THIS IS FILE:", file.secure_url);
    console.log("THIS IS USER", props.user.id);

    axios
      .post(`/api/users/${userID}/photo`, {photo: file.secure_url})
      .then((response) => {
        console.log("success!!");
      });

    setImage(file.secure_url);
    setLoading(false);
  };

  // console.log("THIS IS PROVIDER STATUS CURRENTLY", provider);
  const handleSubmit = (event, provider, userID) => {
    event.preventDefault();

    axios
      .post(`/api/users/${userID}/provider`, {provider: !provider})
      .then((response) => {
        console.log("success!!");
        console.log("THIS IS RESPONSE:", response.data.isserviceprovider);
        setProvider(response.data.isserviceprovider);
      });
  };

  return (
    <Container fluid className="profile">
      <Container>
        {!image ? (
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
        ) : (
          <Row>
            <Col className="profile-image" md={{span: 6, offset: 3}}>
              <Col>
                <Image
                  className="profile-image-img"
                  src={image}
                  roundedCircle
                />
              </Col>
            </Col>
          </Row>
        )}
        <Col>{props.location && props.location.city}</Col>
        {loading ? <Spinner animation="border" variant="info" /> : <p></p>}
        <Row>
          <Col>
            <input
              type="file"
              name="file"
              placeholder="Upload an image"
              onChange={uploadImage}
            />
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
