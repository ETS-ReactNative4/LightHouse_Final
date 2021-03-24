import {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import "./Profile.scss";

import axios from "axios";

export default function Profile(props) {
  const history = useHistory();

  const [provider, setProvider] = useState();
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (props.user !== null) {
      setImage(props.user.photo);
      setProvider(props.user.isserviceprovider);
    }
  }, [props.user]);

  const gotToLink = (link) => {
    history.push(link);
  };

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

    axios.post(`/api/users/${userID}/photo`, {photo: file.secure_url});

    setImage(file.secure_url);
    setLoading(false);
  };

  const handleSubmit = (event, provider, userID) => {
    event.preventDefault();
    console.log("SUBMITTED");
    console.log(provider);

    axios
      .post(`/api/users/${userID}/provider`, {provider: !provider})
      .then((response) => {
        setProvider(response.data.isserviceprovider);
      });
  };

  return (
    <div className="profileMainContainer">
      <Container fluid id="profile">
        <Container id="profileContents">
          {!image ? (
            <div className="col-md-7 profileImageContainer">
              <Image
                className="profile-image-img"
                src="/images/default_profile.png"
                fluid
              />
            </div>
          ) : (
            <div className="col-md-7 profileImageContainer">
              <Image className="profile-image-img" src={image} />
            </div>
          )}
          <div className="col-md-5profileInfoContainer">
            <Row id="profileFullName">
              <Col>
                <h1 id="headerProfile">
                  <b>{props.user && props.user.full_name}</b>
                </h1>
              </Col>
            </Row>
            <Col id="columnLocation">
              <b>{props.location && props.location.city}</b>
            </Col>

            <Col id="columnEmail">{props.user && props.user.email}</Col>

            <Col id="columnAddress">
              {props.location && props.location.full_address}
            </Col>

            {props.user && (
              <Row>
                {props.user.isserviceprovider === true ? (
                  <Col className="btn-form" id="profilePageButtonView">
                    <Button
                      onClick={() => gotToLink("/myservices")}
                      className="profile-services-btn"
                      variant="primary"
                      size="sm"
                    >
                      View my services
                    </Button>
                  </Col>
                ) : (
                  <Col className="btn-form" id="profilePageButton">
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
            )}
            {loading ? <Spinner animation="border" variant="info" /> : <p></p>}
            <Row>
              <div className="imgUploadRow">
                <input
                  className="contImgUpload"
                  type="file"
                  name="file"
                  placeholder="Upload an image"
                  onChange={uploadImage}
                />
              </div>
            </Row>
          </div>
        </Container>
      </Container>
    </div>
  );
}
