import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const Select = styled.select`
  width: 300px;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  font-weight: bold;
`;

const Button = styled.button`
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

const CodeBlock = styled.div`
  background-color: rgb(1, 22, 39);
  color: #abb2bf;
  border-radius: 5px;
  padding: 10px;
  font-family: "Courier New", monospace;
  width: 100%;
  max-width: 100%;
  white-space: pre;
`;

function CodeForm() {
  const [language, setLanguage] = useState("python"); // 預設語言為Python
  const [operation, setOperation] = useState("");
  const [response, setResponse] = useState("");
  const [languageCapabilities, setLanguageCapabilities] = useState([]);
  const [loading, setLoading] = useState(false);

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

  const languages = {
    Python: "python",
    JavaScript: "javascript",
    Java: "java",
    HTML: "html",
    CSS: "css",
    SQL: "sql",
    Bash: "bash",
    PowerShell: "powershell",
    R: "r",
    MATLAB: "matlab",
    Perl: "perl",
    Ruby: "ruby",
    PHP: "php",
    Go: "go",
    Scala: "scala",
    Kotlin: "kotlin",
    Rust: "rust",
    TypeScript: "typescript",
    C: "c",
    "C#": "csharp",
    "C++": "c_cpp",
    Dart: "dart",
    Swift: "swift",
    Elixir: "elixir",
    Clojure: "clojure",
    Haskell: "haskell",
    Lua: "lua",
    "F#": "fsharp",
    Groovy: "groovy",
    Racket: "racket",
    OCaml: "ocaml",
    Julia: "julia",
    "Visual Basic": "vb",
    Pascal: "pascal",
  };

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Select value={language} onChange={(e) => {setLanguage(e.target.value); setResponse("");}}>
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
      <Button type="submit" disabled={loading}>Generate Code</Button>
      <CodeBlock>
        <SyntaxHighlighter language={language.toLowerCase()} style={nightOwl}>
          {loading
            ? "Please wait a moment..."
            : response
            ? response.generated_code
            : "Your code will be displayed here."}
        </SyntaxHighlighter>
      </CodeBlock>
    </Form>
  );
}

export default CodeForm;
