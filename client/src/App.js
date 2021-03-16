import {useState} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import useApplicationData from "./hooks/useApplicationData";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Services from "./components/Services";
import Availability from "./components/Availability";
import NewServiceForm from "./components/NewServiceForm";
import Header from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";
import PageNotFound from "./components/PageNotFound";

//bootstrap stylesheet
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const {state, dispatch} = useApplicationData();
  const [user, setUser] = useState(null);
  const [location, setLocation] = useState(null);
  const userList = state.users.map((user) => (
    <li key={user.id}>
      {" "}
      {user.first_name} {user.last_name} {user.email}{" "}
    </li>
  ));

  const logout = (val) => {
    setUser(false);
    console.log("logout value", val);
  };
  return (
    <Router>
      <div className="App">
        <Header user={user} setUser={setUser} logout={logout} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register">
            <Register
              user={user}
              setUser={setUser}
              location={location}
              setLocation={setLocation}
            />
          </Route>
          <Route path="/login">
            <Login setUser={setUser} />
          </Route>
          <Route path="/services/new">
            <NewServiceForm />
          </Route>
          <Route path="/services">
            <Services user={user} location={location} />
          </Route>

          <Route path="/availability">
            <Availability />
          </Route>

          <Route component={PageNotFound} />
        </Switch>
        <Footer class="footer" />
      </div>
    </Router>
  );
};
export default App;
