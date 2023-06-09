import React, { useState } from 'react';
import axios from 'axios';
import { Form, TextArea, Button, Select, RowContainer, ButtonContainer, MessageContainer, FixedContainer } from './styled';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import {useLoadingDots} from './useHooks';
import Modal from './Modal';

const CodeConverter = ({apiURL}) => {
  const [sourceCode, setSourceCode] = useState('');
  const [detectedLanguage, setDetectedLanguage] = useState('');
  const [availableLanguages, setAvailableLanguages] = useState([]);
  const [targetLanguage, setTargetLanguage] = useState('');
  const [convertedCode, setConvertedCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [converting, setConverting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const loadingMessage = useLoadingDots('Detecting');
  const convertingMessage = useLoadingDots('Converting');

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleDetectLanguageAndAvailableLanguages = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${apiURL}/detect_available_languages`, { source_code: sourceCode });
      setDetectedLanguage(response.data.detected_language);
      setAvailableLanguages(response.data.available_languages);
    } catch (error) {
      console.error("Error detecting language: ", error);
    }
    setLoading(false);
  };

  const handleConvertCode = async (event) => {
    event.preventDefault();
    setConverting(true);
    try {
      const response = await axios.post(`${apiURL}/convert_code`, { source_code: sourceCode, target_language: targetLanguage });
      if (response.status === 200) {
        setConvertedCode(response.data.converted_code);
        toggleModal();
      } else {
        setConvertedCode("Error converting code: Server responded with status 500");
      }
    } catch (error) {
      console.error("Error converting code: ", error);
      setConvertedCode(`Error converting code: ${error}`);
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
          <Button onClick={handleDetectLanguageAndAvailableLanguages} disabled={loading}>
            {loading ? loadingMessage : 'Detect Language'}
          </Button>
          <MessageContainer>
            {!loading && detectedLanguage && <p>Detected language: {detectedLanguage}</p>}
          </MessageContainer>
          <FixedContainer visible={!!detectedLanguage}>
            <Select value={targetLanguage || ""} onChange={e => setTargetLanguage(e.target.value)}>
              <option value="">Please select</option>
              {availableLanguages.map(lang => <option key={lang} value={lang}>{lang}</option>)}
            </Select>
            <Button onClick={handleConvertCode} disabled={converting}>
              {converting ? convertingMessage : 'Convert'}
            </Button>
          </FixedContainer>
        </ButtonContainer>
        <Modal isOpen={isModalOpen} onClose={toggleModal} copyText={convertedCode}>
          <SyntaxHighlighter language={targetLanguage.toLowerCase()} style={nightOwl}>
            {convertedCode
              ? convertedCode
              : "Your code will be displayed here."}
          </SyntaxHighlighter>
        </Modal>
      </RowContainer>
    </Form>
  );
  
};

export default CodeConverter;
