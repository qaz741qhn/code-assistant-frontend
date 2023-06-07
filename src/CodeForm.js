import React, { useState, useEffect } from "react";
import { languages } from "./languages";
import axios from "axios";
import { Form, Select, SelectContainer, Button, CodeContainer, CodeBlock } from "./styled";
import Modal from "./Modal";
import {useLoadingDots} from "./useHooks";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

function CodeForm() {
  const [language, setLanguage] = useState("python"); // 預設語言為Python
  const [operation, setOperation] = useState("");
  const [response, setResponse] = useState("");
  const [languageCapabilities, setLanguageCapabilities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const loadingMessage = useLoadingDots("Generating");

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResponse("");
    try {
      const result = await axios.post(
        "https://code-assistant-backend.herokuapp.com/generate",
        {
          operation: operation,
          language: language.toLowerCase(),
        }
      );
      setLoading(false);
      if (result.status === 200) {
        setResponse(result.data);
        toggleModal();
      } else {
        setResponse("Error: The server responded with status 500");
      }
    } catch (error) {
      setLoading(false);
      setResponse(`Error: ${error}`);
    }
  };

  useEffect(() => {
    const fetchLanguageCapabilities = async () => {
      const result = await axios.get(
        `https://code-assistant-backend.herokuapp.com/capabilities?language=${language.toLowerCase()}`
      );
      setLanguageCapabilities(result.data.capabilities);
    };
    fetchLanguageCapabilities();
  }, [language]);

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <Form onSubmit={handleSubmit}> 
      <SelectContainer>
        <h3>Language:　</h3>
        <Select
          value={language}
          onChange={(e) => {
            setLanguage(e.target.value);
            setResponse("");
          }}
        >
          {Object.keys(languages).map((lang) => (
            <option key={lang} value={languages[lang]}>
              {lang}
            </option>
          ))}
        </Select>
      </SelectContainer>
      <SelectContainer>
        <h3>Operation:　</h3>
        <Select value={operation} onChange={(e) => setOperation(e.target.value)}>
          {languageCapabilities ? (
            languageCapabilities.map((capability) => (
              <option key={capability} value={capability}>
                {capitalize(capability.replace("_", " "))}
              </option>
            ))
          ) : (
            <option>Loading operations...</option>
          )}
        </Select>
      </SelectContainer>
      <Button type="submit" disabled={loading}>
        Generate
      </Button>
      {!isModalOpen && (
        <CodeContainer>
          <CodeBlock>
            <SyntaxHighlighter
              language={language.toLowerCase()}
              style={nightOwl}
            >
              {loading
                ? loadingMessage
                : response
                ? response.generated_code
                : "Your code will be displayed here."}
            </SyntaxHighlighter>
          </CodeBlock>
        </CodeContainer>
      )}
      <Modal isOpen={isModalOpen} onClose={toggleModal} copyText={response.generated_code}>
        <SyntaxHighlighter language={language.toLowerCase()} style={nightOwl}>
          {loading
            ? loadingMessage
            : response.generated_code}
        </SyntaxHighlighter>
      </Modal>
    </Form>
  );
}

export default CodeForm;
