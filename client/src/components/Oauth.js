import React from "react";
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Oauth(props) {
  const history = useHistory();
  const API_KEY = process.env.REACT_APP_G_API_KEY;

  const responseGoogle = (response) => {
    if (response.profileObj.name) {
      let userObject = {
        name: response.profileObj.name,
        email: response.profileObj.email,
        gid: response.profileObj.googleId,
        isServiceProvider: response.profileObj.isServiceProvider,
      };
      axios.post("/api/login", userObject).then(
        (response) => {
          if (response.data.register) {
            let user = {
              ...userObject,
              register: true,
            };
            props.setUser(user);

            history.push("/register");
          } else {
            axios
              .get(`/api/locations/${response.data.msg.id}`)
              .then((response) => {
                props.setLocation(response.data);
              });
            props.setUser(response.data.msg);
          }
        },
        (error) => {
          console.log("this is the error", error);
        }
      );
    }
  };
  if (!props.user) {
    return (
      <div className="App">
        <GoogleLogin
          clientId={API_KEY}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    );
  } else {
    return (
      <div className="App">
        {props.user.full_name}
        <GoogleLogout
          clientId={API_KEY}
          buttonText="Logout"
          onLogoutSuccess={props.logout}
        ></GoogleLogout>
      </div>
    );
  }
}

export default Oauth;
