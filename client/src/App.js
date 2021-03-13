import "./App.css";
import React, { useState } from "react";

import Oauth from "./components/oauth";
const App = () => {
  const [user, setUser] = useState(false);

  const logout = () => {
    setUser(false);
  };

  return (
    <div className="App">
      <Oauth user={user} setUser={setUser} logout={logout} />
    </div>
  );
};
export default App;
