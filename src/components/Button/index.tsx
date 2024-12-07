import "./Button.css";
import React from "react";

interface ButtonProps {
  label: string;
  variant?: string;
  onClick: () => void;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  onClick,
  style,
}) => {
  return (
    <button
      className={`custom-button ${variant}`}
      onClick={onClick}
      style={{ ...style }}
    >
      {label}
    </button>
  );
};

export default Button;
