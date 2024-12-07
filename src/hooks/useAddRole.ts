import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NotificationContext } from "../context/NotificationContext";
import { addRole, getRoleById } from "../api/roleService";
import useModifyRole from "./useModifyRole";
import { rolesRoute } from "../App";
import { LoaderContext } from "../context/LoaderContext";
import { PermissionTypeEnum, PermissionTypes } from "../enum/permissionTypes";
import { RoleData } from "../enum/role";
import { NOTIFICATION_TYPES } from "../enum/notificationType";

interface Permission {
  id: PermissionTypeEnum;
  accessLevel: number;
}

interface UseAddRoleProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  selectedIcon: number;
  setSelectedIcon: React.Dispatch<React.SetStateAction<number>>;
  permissions: Permission[];
  setPermissions: React.Dispatch<React.SetStateAction<Permission[]>>;
  handleSwitchChange: (
    selectedValue: number,
    permissionId: PermissionTypeEnum
  ) => void;
  handleSave: () => Promise<void>;
}

const useAddRole = (): UseAddRoleProps => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { showNotification } = useContext(NotificationContext);
  const { showLoader, hideLoader } = useContext(LoaderContext);
  const { modifyRole: modifyExistingRole } = useModifyRole();

  const [value, setValue] = useState<string>("");
  const [selectedIcon, setSelectedIcon] = useState<number>(0);
  const [permissions, setPermissions] = useState<Permission[]>(
    PermissionTypes.map((permission) => ({
      id: permission.id,
      accessLevel: 1,
    }))
  );

  const handleSwitchChange = (
    selectedValue: number,
    permissionId: PermissionTypeEnum
  ) => {
    setPermissions((prevPermissions) =>
      prevPermissions.map((perm) =>
        perm.id === permissionId
          ? { ...perm, accessLevel: selectedValue }
          : perm
      )
    );
  };

  const fetchRole = async () => {
    if (id) {
      showLoader();
      try {
        const role: RoleData = await getRoleById(id);
        setValue(role.name);
        setSelectedIcon(role.roleIcon);
        setPermissions(role.permissions);
      } catch (error) {
        console.error("Error fetching role:", error);
        showNotification("Failed to load role.", NOTIFICATION_TYPES.ERROR);
      } finally {
        hideLoader();
      }
    }
  };

  useEffect(() => {
    fetchRole();
  }, [id]);

  const handleSave = async () => {
    if (!value.trim()) {
      showNotification("Role name cannot be empty.", NOTIFICATION_TYPES.ERROR);
      return;
    }

    const roleData: RoleData = {
      name: value,
      roleIcon: selectedIcon,
      permissions,
    };

    try {
      if (id) {
        await modifyExistingRole(id, roleData);
      } else {
        await addRole(roleData);
        showNotification(
          "Role added successfully!",
          NOTIFICATION_TYPES.SUCCESS
        );
        navigate(rolesRoute);
      }
    } catch (error) {
      console.error("Error saving role:", error);
      showNotification("An error has occurred.", NOTIFICATION_TYPES.ERROR);
    }
  };

  return {
    value,
    setValue,
    selectedIcon,
    setSelectedIcon,
    permissions,
    setPermissions,
    handleSwitchChange,
    handleSave,
  };
};

export default useAddRole;
