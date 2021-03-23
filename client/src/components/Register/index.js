import axios from "axios";
import "./Register.scss";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

export default function Register(props) {
  const history = useHistory();
  const [geoLocation, setGeoLocation] = useState({});

  const getLocation = (e) => {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const geo = {
          lat: position.coords.latitude,
          long: position.coords.longitude,
        };
        setGeoLocation(geo);

        axios
          .get(
            `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?f=pjson&featureTypes=&location=${position.coords.longitude}%2C${position.coords.latitude}`
          )
          .then((response) => {
            const location = {};
            location.lat = geoLocation.lat;
            location.long = geoLocation.long;
            location.address = response.data.address.ShortLabel;
            location.num = response.data.address.AddNum;
            location.city = response.data.address.City;
            location.country = response.data.address.CountryCode;
            location.region = response.data.address.region;
            location.postal =
              response.data.address.Postal +
              " " +
              response.data.address.PostalExt;
            props.setLocation(location);
          });
      },
      console.error,
      { maximumAge: 0, enableHighAccuracy: false, timeout: 5000 }
    );
  };
  const registration = (event) => {
    event.preventDefault();

    axios
      .post(`/api/register/?${props.user.email}`, {
        location: { ...props.location, ...geoLocation },
        user: props.user,
      })
      .then(
        (response) => {
          props.setUser(response.data.msg);
          history.push("/");
        },
        (error) => {
          console.log(error);
        }
      );
  };
  return (
    <>
      {props.user && props.user.register ? (
        <div className="register">
          <div className="main-register">
            <div className="col-md-3 register-left">
              <Image src="/images/random.png" alt="" />
              <h3>Welcome to AppName</h3>
              <p>You are almost there - please register to continue</p>
            </div>
            <div className="col-md-9 register-right">
              <div className="col">
                <h3 className="heading">Signup</h3>
                <Form
                  className="register-form"
                  method="POST"
                  action="/api/register"
                >
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridName">
                      <Form.Control
                        type="text"
                        name="name"
                        value={props.user.name}
                        placeholder="Your email"
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Control
                        type="text"
                        name="name"
                        value={props.user.email}
                        placeholder="Your email"
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Group id="formGridCheckbox">
                    <Form.Check
                      type="checkbox"
                      id="service"
                      name="service"
                      label="Do you wish to provide services ?"
                    ></Form.Check>
                  </Form.Group>

                  <Form.Group className="btn-form" controlId="location">
                    <Button className="btn-register" onClick={getLocation}>
                      Get my current location
                    </Button>
                  </Form.Group>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridAddress">
                      <Form.Control
                        type="text"
                        name="full_address"
                        value={props.location && props.location.address}
                        placeholder="Your address"
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Control
                        type="text"
                        name="city"
                        value={props.location && props.location.city}
                        placeholder="Your city"
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridPostal">
                      <Form.Control
                        type="text"
                        name="postal_code"
                        value={props.location && props.location.postal}
                        placeholder="Postal code"
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridCountry">
                      <Form.Control
                        type="text"
                        name="country"
                        value={props.location && props.location.country}
                        placeholder="Country"
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Group className="btn-form" controlId="submit">
                    <Button
                      className="btn-register"
                      type="submit"
                      onClick={registration}
                    >
                      Register
                    </Button>
                  </Form.Group>
                </Form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        history.push("/home")
      )}
      {/* <h2>{props.user.email}</h2>
  <h2>{props.user.full_name}</h2> */}
    </>
  );
}
