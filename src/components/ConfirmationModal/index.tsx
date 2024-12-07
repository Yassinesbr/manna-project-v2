import React from "react";
import "./ConfirmationModal.css";
import Button from "../Button";

interface ConfirmationModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>{title}</h2>
        <p>{message}</p>
        <div className="modal-actions">
          <Button label="Cancel" variant="secondary" onClick={onCancel} />
          <Button label="Confirm" variant="primary" onClick={onConfirm} />
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
