import {useState} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Services from "./components/Services";
import Service from "./components/Service";
import Availability from "./components/Availability";
import MyServices from "./components/MyServices";
import NewServiceForm from "./components/NewServiceForm";
import Header from "./components/Navbar";
import Footer from "./components/Footer";
import Calendar from "./components/Availability/calendar";
import Profile from "./components/Profile";
import Confirm from "./components/Availability/confirm";
import "./App.css";
import PageNotFound from "./components/PageNotFound";
import Appointment from "./components/Appointment";
//bootstrap stylesheet
import "bootstrap/dist/css/bootstrap.min.css";
require("dotenv").config();

const App = () => {
  const [services, setServices] = useState([]);
  const [user, setUser] = useState(null);
  const [magicFix, setMagicFix] = useState(false);
  const [timeframe, setTimeFrame] = useState([]);
  const [location, setLocation] = useState(null);
  const [booking, setBooking] = useState([]);
  const logout = (val) => {
    // localStorage.removeItem("user");
    setUser(false);
  };

  return (
    <Router>
      <div className="App">
        <Header
          user={user}
          setUser={setUser}
          logout={logout}
          setLocation={setLocation}
        />
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
          <Route path="/calendar">
            {timeframe ? (
              <Calendar
                timeframe={timeframe}
                services={services}
                user={user}
                booking={booking}
                setBooking={setBooking}
              />
            ) : (
              <p>loading</p>
            )}
          </Route>

          <Route path="/services/new">
            <NewServiceForm user={user} />
          </Route>
          <Route path="/myservices">
            {user ? (
              <MyServices
                setMagicFix={setMagicFix}
                apiUrl={`api/services/myservices/`}
                user={user}
                location={location}
                timeframe={timeframe}
                setServices={setServices}
              />
            ) : (
              <p>loading</p>
            )}
          </Route>
          <Route path="/services">
            <Services
              setMagicFix={setMagicFix}
              apiUrl={`api/services/`}
              user={user}
              location={location}
              timeframe={timeframe}
              setTimeFrame={setTimeFrame}
              setServices={setServices}
              services={services}
              booking={booking}
              setBooking={setBooking}
            />
          </Route>
          <Route path="/service" component={Service} exact>
            <Service
              magicFix={magicFix}
              user={user}
              location={location}
              timeframe={timeframe}
              services={services}
              booking={booking}
              setBooking={setBooking}
            />
          </Route>
          <Route path="/confirm" component={Service} exact>
            <Confirm booking={booking} setBooking={setBooking} />
          </Route>
          <Route path="/availability">
            <Availability />
          </Route>
          <Route path="/appointments">
            {user ? (
              <Appointment user={user} services={services} />
            ) : (
              <p>Loading</p>
            )}
          </Route>
          <Route path="/users/:id">
            <Profile user={user} location={location} />
          </Route>

          <Route component={PageNotFound} />
        </Switch>
      </div>
      {/* <Footer class="footer" /> */}
    </Router>
  );
};
export default App;
