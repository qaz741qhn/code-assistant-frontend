import styled from "styled-components";

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
  width: 200px;
  padding: 10px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  font-weight: bold;
  @media (max-width: 600px) {
    width: 80%;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
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
    width: 80%;
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
  width: 30%;
  height: 350px;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
