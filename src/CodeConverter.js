import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, TextArea, Button, Select, RowContainer, ButtonContainer } from './styled';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeConverter = () => {
  const [sourceCode, setSourceCode] = useState('');
  const [detectedLanguage, setDetectedLanguage] = useState('');
  const [availableLanguages, setAvailableLanguages] = useState([]);
  const [targetLanguage, setTargetLanguage] = useState('');
  const [convertedCode, setConvertedCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('Detecting...');
  const [converting, setConverting] = useState(false);
  const [convertingMessage, setConvertingMessage] = useState('Converting...');

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingMessage((loadingMessage) => {
        let dots = loadingMessage.split('.').length - 1;
        dots = dots >= 3 ? 0 : dots + 1;
        return 'Detecting' + '.'.repeat(dots);
      });
    }, 500);
    return () => clearInterval(interval);
  }, []);  

  useEffect(() => {
    const interval = setInterval(() => {
      setConvertingMessage((convertingMessage) => {
        let dots = convertingMessage.split('.').length - 1;
        dots = dots >= 3 ? 0 : dots + 1;
        return 'Converting' + '.'.repeat(dots);
      });
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const handleDetectLanguageAndAvailableLanguages = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/detect_available_languages", { source_code: sourceCode });
      setDetectedLanguage(response.data.detected_language);
      setAvailableLanguages(response.data.available_languages);
    } catch (error) {
      console.error("Error detecting language: ", error);
    }
    setLoading(false);
  };

  const handleConvertCode = async (event) => {
    event.preventDefault();
    console.log(targetLanguage);
    setConverting(true);
    try {
      const response = await axios.post("http://localhost:3000/convert_code", { source_code: sourceCode, target_language: targetLanguage });
      setConvertedCode(response.data.converted_code);
    } catch (error) {
      console.error("Error converting code: ", error);
    }
    setConverting(false);
  };

  return (
    <Form>
      <RowContainer>
        <TextArea
          value={sourceCode}
          onChange={e => setSourceCode(e.target.value)}
          placeholder="Paste your source code here..."
        />
        <ButtonContainer>
          <Button onClick={handleDetectLanguageAndAvailableLanguages}>Detect Language</Button>
          {loading && <p>{loadingMessage}</p>}
          {!loading && detectedLanguage && <p>Detected language: {detectedLanguage}</p>}
          <Select value={targetLanguage || ""} onChange={e => setTargetLanguage(e.target.value)}>
            <option value="">Please select</option>
            {availableLanguages.map(lang => <option key={lang} value={lang}>{lang}</option>)}
          </Select>
          <Button onClick={handleConvertCode}>Convert Code</Button>
          {converting && <p>{convertingMessage}</p>}
        </ButtonContainer>
        <SyntaxHighlighter language={targetLanguage.toLowerCase()} style={nightOwl}>
          {convertedCode
            ? convertedCode
            : "Your code will be displayed here."}
        </SyntaxHighlighter>
      </RowContainer>
    </Form>
  );
  
};

export default CodeConverter;
