import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import useApplicationData from "./hooks/useApplicationData";
import Oauth from "./components/Oauth";
import { hasOnlyExpressionInitializer } from "typescript";

import Header from "./components/common/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Services from "./components/Services";
import Availability from "./components/Availability";
import NewServiceForm from "./components/NewServiceForm";

import "./App.css";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  const { state, dispatch } = useApplicationData();
  const userList = state.users.map((user) => (
    <li key={user.id}>
      {" "}
      {user.first_name} {user.last_name} {user.email}{" "}
    </li>
  ));
  const [user, setUser] = useState(null);
  const logout = () => {
    setUser(false);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register">
            <Register setUser={setUser} />
            <Oauth user={user} setUser={setUser} logout={logout} />
          </Route>
          <Route path="/login">
            <Login setUser={setUser} />
            <Oauth user={user} setUser={setUser} logout={logout} />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/availability">
            <Availability />
          </Route>
          <Route path="/services/:service_id">
            <NewServiceForm />
          </Route>
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
};
export default App;
