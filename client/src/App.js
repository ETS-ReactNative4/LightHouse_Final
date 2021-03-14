import "./App.css";
import React, {useState} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Main from "./components/Main";
import Login from "./components/Login";
import Oauth from "./components/oauth";
import Navbar from "./components/Navbar";

export default function Application(props) {
  const [user, setUser] = useState(false);

  const logout = () => {
    setUser(false);
  };

  return (
    // <div className="App">
    //   <Oauth user={user} setUser={setUser} logout={logout} />
    // </div>

    <Router>
      <Navbar />
      <Switch>
        <Route path="/">
          <Landing />
        </Route>
        <Route path="/login">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}
