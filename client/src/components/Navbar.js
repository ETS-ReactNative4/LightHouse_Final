import React from "react";
import Navbar from "react-bootstrap/Navbar";

export default function Navbar(props) {
  //check to is if user is logged in or not
  if (props.isAuth) {
    return (
      <Navbar bg="light" expand="lg" sticky="top">
        <Navbar.Brand href="/home">AppName</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/services/new">Provide Service</Nav.Link>
            <Nav.Link href="/services">Find Service</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  } else {
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand href="/home">AppName</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/services/new">Provide Service</Nav.Link>
          <Nav.Link href="/services">Find Service</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>;
  }
}
