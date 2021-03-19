import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Oauth from "./Oauth";
import { useHistory } from "react-router-dom";

export default function Header(props) {
  const history = useHistory();
  const gotToLink = (link) => {
    history.push(link);
  };
  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top">
        <Navbar.Brand href="/">AppName</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <button onClick={() => gotToLink("/")}>Home</button>
            </Nav.Link>
            <Nav.Link>
              <button onClick={() => gotToLink("/services/new")}>
                Provide Service
              </button>
            </Nav.Link>
            <Nav.Link>
              <button onClick={() => gotToLink("/services")}>
                Find Service
              </button>
            </Nav.Link>
            <Nav.Link>
              <button onClick={() => gotToLink("/myservices")}>
                My Services
              </button>
            </Nav.Link>
          </Nav>
          <Nav>
            <Oauth
              user={props.user}
              setUser={props.setUser}
              logout={props.logout}
              setLocation={props.setLocation}
            />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
