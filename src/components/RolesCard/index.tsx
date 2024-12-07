import { FC } from "react";
import usersIcon from "../../assets/users.svg";
import editIcon from "../../assets/edit.svg";
import deleteIcon from "../../assets/delete.svg";
import "./RoleCard.css";
import Typography from "../Typography";
import { getRoleById } from "../../api/roleService";
import { useNavigate } from "react-router-dom";
import { addRoleRoute, editRoleNeutralRoute } from "../../App";

interface RoleCardProps {
  id: string;
  role: string;
  users: number;
  isDefault?: boolean;
  icon: string;
  onDelete?: () => void;
}

const RoleCard: FC<RoleCardProps> = ({
  id,
  role,
  users,
  isDefault = false,
  icon,
  onDelete,
}) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`${editRoleNeutralRoute}/${id}`);
  };

  const handleUseAsTemplate = async () => {
    try {
      const roleData = await getRoleById(id);
      navigate(addRoleRoute, {
        state: { permissions: roleData.permissions },
      });
    } catch (error) {
      console.error("Error fetching role:", error);
    }
  };

  const cardTitle = isDefault ? "Default Role" : "Custom Role";

  return (
    <div className="role-card">
      <div className="role-card-header">
        <div className="role-card-edit">
          <Typography variant="caption" className="color-gray-1">
            {cardTitle}
          </Typography>
          {!isDefault && (
            <div className="role-card-edit-icons-container">
              <img
                src={editIcon}
                alt="edit"
                className="edit-icons"
                onClick={handleEdit}
              />
              {onDelete && (
                <img
                  src={deleteIcon}
                  alt="delete"
                  className="edit-icons"
                  onClick={onDelete}
                />
              )}
            </div>
          )}
        </div>
        <div className="role-card-avatar">
          <img src={icon} alt="profile" className="role-card-profile-icon" />
          <Typography variant="subheading1" className="color-black">
            {role}
          </Typography>
        </div>
      </div>
      <div className="role-card-body">
        <div className="role-card-body-item">
          <img src={usersIcon} alt="users" className="users-icon" />
          <Typography variant="subheading2" className="color-gray-1">
            {users}
          </Typography>
        </div>
        <Typography variant="body1" className="color-gray-1">
          Users assigned
        </Typography>
      </div>
      <div className="clickable-text" onClick={handleUseAsTemplate}>
        <Typography variant="underline" className="color-primary">
          Use as template
        </Typography>
      </div>
    </div>
  );
};

export default RoleCard;
