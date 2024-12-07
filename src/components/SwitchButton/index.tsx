import React, { useEffect, useState } from "react";
import "./SwitchButton.css";

interface Option {
  id: number;
  value: string;
}

interface SwitchButtonProps {
  label?: string;
  options: Option[];
  onChange: (selected: number) => void;
  selected?: string | number;
}

const SwitchButton: React.FC<SwitchButtonProps> = ({
  label,
  options,
  onChange,
  selected: initialSelected,
}) => {
  const [selected, setSelected] = useState(
    initialSelected !== undefined ? initialSelected : options[0].id
  );

  const handleSelect = (option: Option) => {
    setSelected(option.id);
    onChange(option.id);
  };

  useEffect(() => {
    if (initialSelected !== undefined) {
      setSelected(initialSelected);
    } else {
      setSelected(options[0].id);
    }
  }, [initialSelected, options]);

  return (
    <div className="switch-wrapper">
      {label && <div className="switch-label">{label}</div>}
      <div className="switch-container">
        {options.map((option) => (
          <div
            key={option.id}
            className={`switch-option ${
              selected === option.id ? "selected" : ""
            }`}
            onClick={() => handleSelect(option)}
          >
            {option.value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SwitchButton;
