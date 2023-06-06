import React from "react";
import styled from "styled-components";

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
  return <HeaderContainer>Code Generator 💎</HeaderContainer>;
}

export default Header;