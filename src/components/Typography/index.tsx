import React from "react";
import "./Typography.css";

interface TypographyProps {
  variant?:
    | "heading1"
    | "subheading1"
    | "subheading2"
    | "body1"
    | "body2"
    | "caption"
    | "underline";
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  gutterBottom?: boolean;
}

const Typography: React.FC<TypographyProps> = ({
  variant = "body1",
  children,
  className = "",
  style = {},
  gutterBottom = false,
  ...props
}) => {
  return (
    <div
      className={`typography ${variant} ${className}`}
      style={{ marginBottom: gutterBottom ? "16px" : "0px", ...style }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Typography;
