import React, { useState, useEffect } from "react";
import { ModalContainer, ModalContent, Button, ModalButtons } from "./styled";

const Modal = ({ isOpen, onClose, children, copyText }) => {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = (event) => {
    event.stopPropagation();
    event.preventDefault();
    navigator.clipboard.writeText(copyText);
    setCopied(true);
  };

  useEffect(() => {
    setCopied(false);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <ModalContainer>
      <ModalContent>
        {children}
        <ModalButtons>
          <Button onClick={handleCopy} style={copied ? { backgroundColor: "#abb2bf", color: "white" } : {}}>
            {copied ? "Copied!" : "Copy"}
          </Button>
          <Button onClick={onClose}>Close</Button>
        </ModalButtons>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
