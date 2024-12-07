import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NotificationContext } from "../context/NotificationContext";
import { updateRole } from "../api/roleService";
import { rolesRoute } from "../App";
import { RoleData } from "../enum/role";
import { NOTIFICATION_TYPES } from "../enum/notificationType";

interface UseModifyRoleProps {
  modifyRole: (id: string, roleData: RoleData) => Promise<void>;
  loading: boolean;
}

const useModifyRole = (): UseModifyRoleProps => {
  const navigate = useNavigate();
  const { showNotification } = useContext(NotificationContext);
  const [loading, setLoading] = useState<boolean>(false);

  const modifyRole = async (id: string, roleData: RoleData) => {
    setLoading(true);
    try {
      showNotification("Custom Role Updating...", NOTIFICATION_TYPES.UPDATING);
      await updateRole({ id, ...roleData });
      showNotification(
        "Role updated successfully!",
        NOTIFICATION_TYPES.SUCCESS
      );
      navigate(rolesRoute);
    } catch (error) {
      console.error("Error saving role:", error);
      showNotification("An error has occurred.", NOTIFICATION_TYPES.ERROR);
    } finally {
      setLoading(false);
    }
  };

  return { modifyRole, loading };
};

export default useModifyRole;
