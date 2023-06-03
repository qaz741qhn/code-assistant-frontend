// 做一個顯示app名稱的header，以下為相關程式碼：
// // Path: src/Header.js
import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  background-color: rgb(1, 22, 39);
  color: #abb2bf;
  padding: 10px;
  font-family: "Courier New", monospace;
  font-size: 80px;
  font-weight: bold;
  text-align: center;
`;

function Header() {
  return <HeaderContainer>Code Generator</HeaderContainer>;
}

export default Header;