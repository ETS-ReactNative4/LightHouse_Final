import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header(props) {
  const activeStyle = { color: "blue"};
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>Home</NavLink> { " | " }
      <NavLink to="/login" activeStyle={activeStyle} exact>Login</NavLink> { " | " }
      <NavLink to="/register" activeStyle={activeStyle} exact>Register</NavLink> { " | " }
      <NavLink to="/availability" activeStyle={activeStyle} exact>Availability</NavLink> { " | " }
      <NavLink to="/services" activeStyle={activeStyle} exact>Services</NavLink> { " | " }
      <NavLink to="/services/:service_id" activeStyle={activeStyle} exact>Service Form</NavLink>
    </nav>
    );
}