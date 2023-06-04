import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

export const Select = styled.select`
  width: 300px;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  font-weight: bold;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
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
`;

export const CodeBlock = styled.div`
  background-color: rgb(1, 22, 39);
  color: #abb2bf;
  border-radius: 5px;
  padding: 1em 0 0 5em;
  font-family: "Courier New", monospace;
  width: 100%;
  max-width: 100%;
  white-space: pre;
`;