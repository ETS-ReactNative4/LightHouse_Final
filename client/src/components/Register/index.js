import axios from "axios";
import "./index.scss";
import {useHistory} from "react-router-dom";
import {useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Register(props) {
  console.log("this is props of register", props);
  const history = useHistory();
  const [geoLocation, setGeoLocation] = useState({});

  const getLocation = (e) => {
    console.log("getting location:");
    e.preventDefault();
    navigator.geolocation.getCurrentPosition(
      function (position) {
        console.log("got position", position);
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
            console.log("GOT RESPONSE AXIOS:", response);
            const location = {};
            console.log(response.data.address);
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
      {maximumAge: 0, enableHighAccuracy: false, timeout: 5000}
    );
  };
  const registration = (event) => {
    event.preventDefault();

    axios
      .post(`/api/register/?${props.user.email}`, {
        location: {...props.location, ...geoLocation},
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
        <div className="container register">
          <Form method="POST" action="/api/register">
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
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
            <div>
              <input type="checkbox" id="service" name="service"></input>
              <label for="service">Do you wish to provide services ?</label>
            </div>
            <div>
              <Button onClick={getLocation}>Get my current location</Button>
            </div>
            <div>
              <label>
                Address
                <input
                  type="text"
                  name="full_address"
                  value={props.location && props.location.address}
                />
              </label>
              <label>
                City
                <input
                  type="text"
                  name="city"
                  value={props.location && props.location.city}
                />
              </label>
            </div>
            <div>
              <label>
                Postal code
                <input
                  type="text"
                  name="postal_code"
                  value={props.location && props.location.postal}
                />
              </label>
              <label>
                Country
                <input
                  type="text"
                  name="country"
                  value={props.location && props.location.country}
                />
              </label>
            </div>
            <div>
              <Button type="submit" onClick={registration}>
                Register
              </Button>
            </div>
          </Form>
        </div>
      ) : (
        history.push("/home")
      )}
      {/* <h2>{props.user.email}</h2>
  <h2>{props.user.full_name}</h2> */}
    </>
  );
}
