import React, { useState, useEffect } from 'react';
import TypeWriter from 'typewriter-effect';
import axios from 'axios';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: #282c34;
  background-color: #61dafb;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #282c34;
    color: #61dafb;
  }
`;

const CodeBlock = styled.pre`
  background-color: #282c34;
  color: #abb2bf;
  border-radius: 5px;
  padding: 10px;
  font-family: 'Courier New', monospace;
  height: 300px;
  overflow: auto;
  white-space: pre;
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
      <CodeBlock>
        {response && (
          <TypeWriter
            onInit={(typewriter) => {
              typewriter
                .typeString(response.generated_code)
                .start();
            }}
          />
        )}
      </CodeBlock>
    </Form>
  );
}

export default CodeForm;
