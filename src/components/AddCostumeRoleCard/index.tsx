import React from "react";
import { useNavigate } from "react-router-dom";
import addIcon from "../../assets/add.svg";
import { addRoleRoute } from "../../App";
import "./AddCostumeRoleCard.css";
import Typography from "../Typography";

const AddCostumeRoleCard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="add-role-card" onClick={() => navigate(addRoleRoute)}>
      <img src={addIcon} alt="add" className="add-icon" />
      <Typography variant="underline" className="color-primary">
        Add Custom Role
      </Typography>
    </div>
  );
};

export default AddCostumeRoleCard;
