import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";

function Oauth() {
  const [user, setUser] = useState(false);

  const logout = () => {
    setUser(false);
  };

  const responseGoogle = (response) => {
    console.log(response.profileObj);
    if (response.profileObj.name) {
      // DOTO imprement and axios call to the backend to validate if the user exist or not. If user does not exist we need to be able
      //  to send user to the registration page
      // ?? do we need to send user data into a cookie ??
      console.log(response.profileObj.googleId);
      console.log(response.profileObj.name);
      console.log(response.profileObj.email);
      setUser(response.profileObj.name);
    }
  };
  if (!user) {
    return (
      <div className="App">
        <GoogleLogin
          clientId="678724353481-e9tdq2si3r8rfabm0bbn768enjt6qrt4.apps.googleusercontent.com"
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
        <GoogleLogout
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={logout}
        ></GoogleLogout>
      </div>
    );
  }
}

export default Oauth;
