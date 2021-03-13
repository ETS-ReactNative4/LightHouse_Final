import React from "react";
import GoogleLogin from "react-google-login";

const responseGoogle = (response) => {
  console.log(response.profileObj);
};
function Oauth() {
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
}

export default Oauth;
