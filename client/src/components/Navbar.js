import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Oauth from "./Oauth";

export default function Header(props) {
  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top">
        <Navbar.Brand href="/">AppName</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/services/new">Provide Service</Nav.Link>
            <Nav.Link href="/services">Find Service</Nav.Link>
            <Nav.Link href="/myservices">My Services</Nav.Link>
          </Nav>
          <Nav>
            <Oauth
              user={props.user}
              setUser={props.setUser}
              logout={props.logout}
            />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
