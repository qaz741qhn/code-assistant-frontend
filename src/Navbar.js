// 寫一個風格適合（style.js）的navbar程式碼，連結有generator和converter兩個頁面，以下為相關程式碼：
// // Path: src/Navbar.js

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  background-color: rgb(1, 22, 39);
  color: #abb2bf;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Courier New", monospace;
  font-size: 16px;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const NavItem = styled(Link)`
  text-decoration: none;
  color: #abb2bf;
  padding: 10px;
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
    width: 80%;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/generator">Generator</NavItem>
      <NavItem to="/converter">Converter</NavItem>
    </Nav>
  );
}

export default Navbar;