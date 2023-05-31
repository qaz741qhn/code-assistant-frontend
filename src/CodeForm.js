import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  font-size: 16px;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  font-size: 16px;
  color: white;
  background-color: #3b82f6;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const CodeBlock = styled.pre`
  width: 100%;
  background-color: #1e1e1e;
  color: #dcdcdc;
  padding: 10px;
  overflow-x: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

function CodeForm() {
  const [request, setRequest] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await axios.post('http://localhost:3000/generate', { prompt: request });
    setResponse(result.data);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextArea value={request} onChange={(e) => setRequest(e.target.value)} />
      <Button type="submit">Generate Code</Button>
      <CodeBlock>{response && response.generated_code}</CodeBlock>
    </Form>
  );
}

export default CodeForm;
