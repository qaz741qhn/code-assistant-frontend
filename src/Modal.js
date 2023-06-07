
import React from "react";
import { ModalContainer, ModalContent, Button } from "./styled";

const Modal = ({ isOpen, onClose, children }) => {

  if (!isOpen) return null;

  return (
    <ModalContainer>
      <ModalContent>
        {children}
        <Button onClick={onClose}>Close</Button>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;