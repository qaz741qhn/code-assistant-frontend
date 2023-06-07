import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  background-color: rgb(1, 22, 39);
  color: #abb2bf;
  padding: 10px 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0,0,0,.15);
  font-family: "Courier New", monospace;
  font-size: 22px;
  @media (max-width: 600px) {
    justify-content: center;
  }
`;

const NavItem = styled(Link)`
  text-decoration: none;
  color: #abb2bf;
  margin-left: 20px;
  padding: 10px 20px;
  &:hover {
    background-color: #282c34;
    color: #61dafb;
  }
  &:disabled {
    color: #ccc;
    background-color: #eee;
    cursor: not-allowed;
  }
  @media (max-width: 600px) {
    margin-left: 0;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavItem to="/generator">Generator</NavItem>
      <NavItem to="/converter">Converter</NavItem>
    </Nav>
  );
}

export default Navbar;
