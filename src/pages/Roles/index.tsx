import React, { useContext } from "react";
import "./Roles.css";
import AddCostumeRoleCard from "../../components/AddCostumeRoleCard";
import Typography from "../../components/Typography";
import ConfirmationModal from "../../components/ConfirmationModal";
import useRoles from "../../hooks/useRoles";
import { LoaderContext } from "../../context/LoaderContext";
import RolesList from "../../components/RolesList";

const Roles: React.FC = () => {
  const {
    roles,
    isModalOpen,
    roleToDelete,
    handleDeleteClick,
    confirmDelete,
    cancelDelete,
  } = useRoles();
  const { isLoading } = useContext(LoaderContext);

  return (
    <div className="roles-container">
      <Typography
        variant="heading1"
        className="color-black"
        style={{ marginBottom: "24px" }}
      >
        User Roles
      </Typography>
      <div className="cards-container">
        <RolesList roles={roles} onDelete={handleDeleteClick} />
        {!isLoading && <AddCostumeRoleCard />}
      </div>

      <ConfirmationModal
        isOpen={isModalOpen}
        title="Confirm Deletion"
        message={`Are you sure you want to delete the role "${roleToDelete?.name}"?`}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
      />
    </div>
  );
};

export default Roles;
