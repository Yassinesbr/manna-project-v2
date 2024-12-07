import { useEffect, useState, useContext } from "react";
import { getRoles } from "../api/roleService";
import { Role } from "../enum/role";
import { NotificationContext } from "../context/NotificationContext";
import useDeleteRole from "./useDeleteRole";
import { LoaderContext } from "../context/LoaderContext";
import { NOTIFICATION_TYPES } from "../enum/notificationType";

interface UseRolesReturnType {
  roles: Role[];
  isModalOpen: boolean;
  roleToDelete: Role | null;
  error: string | null;
  handleDeleteClick: (role: Role) => void;
  confirmDelete: () => Promise<void>;
  cancelDelete: () => void;
}

const useRoles = (): UseRolesReturnType => {
  const { showLoader, hideLoader } = useContext(LoaderContext);
  const { showNotification } = useContext(NotificationContext);

  const [roles, setRoles] = useState<Role[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [roleToDelete, setRoleToDelete] = useState<Role | null>(null);
  const [error, setError] = useState<string | null>(null);

  const { handleDelete } = useDeleteRole();

  const handleDeleteClick = (role: Role) => {
    if (!role.isCustom) {
      showNotification("Cannot delete default role.", NOTIFICATION_TYPES.ERROR);
      return;
    }
    setRoleToDelete(role);
    setIsModalOpen(true);
  };

  const confirmDelete = async () => {
    if (roleToDelete) {
      setIsModalOpen(false);
      await handleDelete(roleToDelete, (deletedId) => {
        setRoles((prevRoles) =>
          prevRoles.filter((role) => role.id !== deletedId)
        );
      });
    }
  };

  const cancelDelete = () => {
    setIsModalOpen(false);
    setRoleToDelete(null);
  };

  const fetchRoles = async () => {
    showLoader();
    try {
      const fetchedRoles = await getRoles();
      setRoles(fetchedRoles);
    } catch (error) {
      console.error("Error fetching roles:", error);
      setError("Failed to load roles.");
    } finally {
      hideLoader();
    }
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  return {
    roles,
    isModalOpen,
    roleToDelete,
    error,
    handleDeleteClick,
    confirmDelete,
    cancelDelete,
  };
};

export default useRoles;
