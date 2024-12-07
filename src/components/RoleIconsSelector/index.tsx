import Typography from "../../components/Typography";
import React from "react";

interface RoleIcon {
  enabled: string;
  disabled: string;
}

interface RoleIconsSelectorProps {
  roleIcons: RoleIcon[];
  selectedIcon: number;
  onIconSelect: (index: number) => void;
}

const RoleIconsSelector: React.FC<RoleIconsSelectorProps> = ({
  roleIcons,
  selectedIcon,
  onIconSelect,
}) => (
  <div className="role-icons-container">
    <Typography variant="caption" className="color-gray-3">
      Select Role Icon
    </Typography>
    <div className="icons-container">
      {roleIcons.map((icon, index) => (
        <div
          key={index}
          className={`role-icon ${selectedIcon === index ? "selected" : ""}`}
          onClick={() => onIconSelect(index)}
        >
          <img
            src={selectedIcon === index ? icon.enabled : icon.disabled}
            alt="role icon"
          />
        </div>
      ))}
    </div>
  </div>
);

export default RoleIconsSelector;
