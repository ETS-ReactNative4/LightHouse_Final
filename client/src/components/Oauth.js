import React from "react";
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Oauth(props) {
  const history = useHistory();

  // console.log(history);
  const responseGoogle = (response) => {
    if (response.profileObj.name) {
      // DOTO imprement and axios call to the backend to validate if the user exist or not. If user does not exist we need to be able
      //  to send user to the registration page
      // ?? do we need to send user data into a cookie ??
      let userObject = {
        name: response.profileObj.name,
        email: response.profileObj.email,
        gid: response.profileObj.googleId,
        isServiceProvider: response.profileObj.isServiceProvider,
      };
      axios.post("/api/login", userObject).then(
        (response) => {
          console.log(
            "This is the response data.msg from GET /api/login",
            response.data.msg
          );
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

      // For you guy's if you need to loo at the data
      // console.log(response.profileObj.googleId);
      // console.log(response.profileObj.name);
      // console.log(response.profileObj.email);
    }
  };
  if (!props.user) {
    return (
      <div className="App">
        <GoogleLogin
          clientId="678724353481-e9tdq2si3r8rfabm0bbn768enjt6qrt4.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
          //  isSignedIn={true}
        />
      </div>
    );
  } else {
    return (
      <div className="App">
        {props.user.full_name}
        <GoogleLogout
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={props.logout}
        ></GoogleLogout>
      </div>
    );
  }
}

export default Oauth;
