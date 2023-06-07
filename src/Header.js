import React from "react";
import { useLocation } from "react-router-dom";
import { HeaderContainer } from "./styled";

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
