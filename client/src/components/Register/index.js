import axios from "axios";
import "./index.scss";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export default function Register(props) {
  console.log("this is props of register", props);
  const history = useHistory();
  const [geoLocation, setGeoLocation] = useState({});

  const getLocation = (e) => {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition(function (position) {
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
    });
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
          console.log("response from register", response);
          props.setUser(response.user);
          history.push("/");
        },
        (error) => {
          console.log(error);
        }
      );
  };
  return (
    <>
      <h1>I am Register</h1>
      {props.user && props.user.register ? (
        <form method="POST" action="/api/register">
          <div>
            <label>
              Full Name:
              <input type="text" name="name" value={props.user.name} />
            </label>
            <label>
              Email:
              <input type="text" name="name" value={props.user.email} />
            </label>
          </div>
          <div>
            <input type="checkbox" id="service" name="service"></input>
            <label for="service">Do you wish to provide services ?</label>
          </div>
          <div>
            <button onClick={getLocation}>Get my current location</button>
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
            <button type="submit" onClick={registration}>
              Register
            </button>
          </div>
        </form>
      ) : (
        history.push("/home")
      )}
    </>
  );
}
