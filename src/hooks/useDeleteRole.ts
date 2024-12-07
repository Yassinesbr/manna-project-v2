import { useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";
import { deleteRole } from "../api/roleService";
import { LoaderContext } from "../context/LoaderContext";
import { NOTIFICATION_TYPES } from "../enum/notificationType";

interface UseDeleteRoleProps {
  handleDelete: (
    roleToDelete: { id: string },
    onSuccess?: (deletedId: string) => void
  ) => Promise<void>;
}

const useDeleteRole = (): UseDeleteRoleProps => {
  const { showNotification } = useContext(NotificationContext);
  const { showLoader, hideLoader } = useContext(LoaderContext);

  const handleDelete = async (
    roleToDelete: { id: string },
    onSuccess: (deletedId: string) => void = () => {}
  ): Promise<void> => {
    showLoader();
    try {
      const deletedId = await deleteRole(roleToDelete.id);
      onSuccess(deletedId);
      showNotification("Custom Role Deleted.", NOTIFICATION_TYPES.SUCCESS);
    } catch (err) {
      console.error("Error deleting role:", err);
      showNotification("Failed to delete role.", NOTIFICATION_TYPES.ERROR);
    } finally {
      hideLoader();
    }
  };

  return { handleDelete };
};

export default useDeleteRole;
