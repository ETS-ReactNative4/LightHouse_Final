import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Oauth from "./Oauth";
import {Button} from "react-bootstrap";

export default function Header(props) {
  //check to is if user is logged in or not
  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top">
        <Navbar.Brand href="/home">AppName</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/services/new">Provide Service</Nav.Link>
            <Nav.Link href="/services">Find Service</Nav.Link>
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

//   return (
//     <>
//       {props.isAuth ? (
//         <>
//           <Navbar bg="light" expand="lg" sticky="top">
//             <Navbar.Brand href="/home">AppName</Navbar.Brand>
//             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//             <Navbar.Collapse id="responsive-navbar-nav">
//               <Nav className="mr-auto">
//                 <Nav.Link href="/home">Home</Nav.Link>
//                 <Nav.Link href="/services/new">Provide Service</Nav.Link>
//                 <Nav.Link href="/services">Find Service</Nav.Link>
//               </Nav>
//               <Nav>
//                 <Nav.Link href="/home">Logout</Nav.Link>
//               </Nav>
//             </Navbar.Collapse>
//           </Navbar>
//         </>
//       ) : (
//         <>
//           <Navbar bg="light" expand="lg" sticky="top">
//             <Navbar.Brand href="/home">AppName</Navbar.Brand>
//             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//             <Navbar.Collapse id="responsive-navbar-nav">
//               <Nav className="mr-auto">
//                 <Nav.Link href="/home">Home</Nav.Link>
//                 <Nav.Link href="/services/new">Provide Service</Nav.Link>
//                 <Nav.Link href="/services">Find Service</Nav.Link>
//               </Nav>
//               <Nav>
//                 <Nav.Link href="/login">Login</Nav.Link>
//                 <Nav.Link href="/register">Register</Nav.Link>
//               </Nav>
//             </Navbar.Collapse>
//           </Navbar>
//         </>
//       )}
//     </>
//   );
// }
