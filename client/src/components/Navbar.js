import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Oauth from "./Oauth";
import Notification from "../components/Notification/";
import {useHistory} from "react-router-dom";

export default function Header(props) {
  const history = useHistory();
  const gotToLink = (link) => {
    history.push(link);
  };
  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top">
        <Navbar.Brand onClick={() => gotToLink("/")}>AppName</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={() => gotToLink("/")}>Home</Nav.Link>

            <Nav.Link onClick={() => gotToLink("/services")}>
              Find Service
            </Nav.Link>

            {props.user ? (
              <>
                <Nav.Link onClick={() => gotToLink("/services/new")}>
                  Provide Service
                </Nav.Link>
                <Nav.Link onClick={() => gotToLink("/myservices")}>
                  My Services
                </Nav.Link>
                <Nav.Link onClick={() => gotToLink(`/users/${props.user.id}`)}>
                  Profile
                </Nav.Link>
              </>
            ) : (
              <p></p>
            )}
          </Nav>

          {props.user ? (
            <Nav>
              <Notification user={props.user} />
            </Nav>
          ) : (
            <p></p>
          )}
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
