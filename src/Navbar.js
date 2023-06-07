import React from "react";
import { Nav, NavItem } from "./styled";

const Navbar = () => {
  return (
    <Nav>
      <NavItem to="/generator">Generator</NavItem>
      <NavItem to="/converter">Converter</NavItem>
    </Nav>
  );
}

export default Navbar;
