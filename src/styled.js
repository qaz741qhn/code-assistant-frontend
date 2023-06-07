import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  color: #abb2bf;
  font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  max-width: 100%;
  margin: 0 auto;
  @media (max-width: 600px) {
    width: 100%;
    padding: 10px;
  }
`;

export const Select = styled.select`
  width: 15vw;
  padding: 10px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  font-weight: bold;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  width: 15vw;
  font-size: 14px;
  font-weight: bold;
  color: #282c34;
  background-color: #61dafb;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
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
    width: 40vw;
  }
`;

export const CodeContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
  @media (max-width: 600px) {
    padding: 10px;
  }
`;

export const CodeBlock = styled.div`
  background-color: rgb(1, 22, 39);
  color: #abb2bf;
  border-radius: 5px;
  padding: 20px;
  font-family: "Courier New", monospace;
  width: 100%;
  max-width: 100%;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow-wrap: break-word;
  
  pre {
    white-space: pre-wrap;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  @media (max-width: 600px) {
    font-size: 16px;
    padding: 1em;
  }
`;

export const TextArea = styled.textarea`
  resize: none;
  width: 30%;
  height: 350px;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  @media (max-width: 600px) {
    width: 95%;
    height: 250px;
    margin: 0 auto;
  }
`;

export const RowContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  align-items: center;
  gap: 10px;
  margin-left: 30px;
  @media (max-width: 600px) {
    margin-left: 0;
    padding: 10px;
    gap: 20px;
  }
`;

export const MessageContainer = styled.div`
  height: 20px;
`;

export const FixedContainer = styled.div`
  height: 250px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
  @media (max-width: 600px) {
    height: 40px;
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  overflow-y: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 4px;
  max-width: 500px;
  max-height: 500px;
  overflow-y: auto;
  @media (max-width: 600px) {
    max-width: 90%;
    max-height: 80%;
    overflow: auto;
    width: 100%;
  }
`;

export const HeaderContainer = styled.div`
background-color: rgb(1, 22, 39);
color: #abb2bf;
padding: 10px;
font-family: "Courier New", monospace;
font-size: 3.5em;
font-weight: bold;
text-align: center;
`;

export const Nav = styled.nav`
  background-color: rgb(97, 218, 251, 0.2);
  padding: 10px 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0,0,0,.15);
  font-family: "Courier New", monospace;
  font-size: 22px;
  @media (max-width: 600px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const NavItem = styled(Link)`
  text-decoration: none;
  color: white;
  margin-left: 20px;
  padding: 10px 20px;
  &:hover {
    background-color: rgb(1, 22, 39);
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

export const FooterContainer = styled.footer`
  background-color: rgb(1, 22, 39);
  font-family: "Courier New", monospace;
  color: #abb2bf;
  padding: 10px;
  text-align: center;
  font-size: 16px;
  position: fixed;
  bottom: 0;
  width: 100%;
  @media (max-width: 600px) {
    font-size: 12px; 
  }
`;

export const ModalButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
`;