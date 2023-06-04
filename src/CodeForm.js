import React, { useState, useEffect } from "react";
import { languages } from "./languages";
import axios from "axios";
import { Form, Select, Button, CodeBlock } from "./styled";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

function CodeForm() {
  const [language, setLanguage] = useState("python"); // 預設語言為Python
  const [operation, setOperation] = useState("");
  const [response, setResponse] = useState("");
  const [languageCapabilities, setLanguageCapabilities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("Please wait a moment");
  useEffect(() => {
    let intervalId;
    if (loading) {
      let dotCount = 0;
      intervalId = setInterval(() => {
        dotCount = (dotCount + 1) % 7;
        setLoadingMessage(`Please wait a moment${".".repeat(dotCount)}`);
      }, 500);
    } else {
      setLoadingMessage("");
    }
    return () => clearInterval(intervalId);
  }, [loading]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResponse("");
    const result = await axios.post("http://localhost:3000/generate", {
      operation: operation,
      language: language.toLowerCase(),
    });
    setResponse(result.data);
    setLoading(false);
  };

  useEffect(() => {
    const fetchLanguageCapabilities = async () => {
      const result = await axios.get(
        `http://localhost:3000/capabilities?language=${language.toLowerCase()}`
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
      <Button type="submit" disabled={loading}>
        Generate Code
      </Button>
      <CodeBlock>
        <SyntaxHighlighter language={language.toLowerCase()} style={nightOwl}>
          {loading
            ? loadingMessage
            : response
            ? response.generated_code
            : "Your code will be displayed here."}
        </SyntaxHighlighter>
      </CodeBlock>
    </Form>
  );
}

export default CodeForm;
