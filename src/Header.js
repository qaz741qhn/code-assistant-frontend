import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const HeaderContainer = styled.div`
  background-color: rgb(1, 22, 39);
  color: #abb2bf;
  padding: 10px;
  font-family: "Courier New", monospace;
  font-size: 4em;
  font-weight: bold;
  text-align: center;
`;

function Header() {
  const location = useLocation();

  let headerText;
  switch (location.pathname) {
    case "/converter":
      headerText = "Code Converter 🔄";
      break;
    default:
      headerText = "Code Generator 💎";
  }

  return <HeaderContainer>{headerText}</HeaderContainer>;
}

export default Header;
