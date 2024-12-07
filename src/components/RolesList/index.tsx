import RoleCard from "../RolesCard";
import { Role } from "../../enum/role";
import roleIcons from "../../enum/roleIcon";

interface RolesListProps {
  roles: Role[];
  onDelete: (role: Role) => void;
}

const RolesList: React.FC<RolesListProps> = ({ roles, onDelete }) => (
  <>
    {roles.map((role) => (
      <RoleCard
        key={role.id}
        id={role.id}
        role={role.name}
        users={role.usersAssigned ?? 0}
        isDefault={!role.isCustom}
        icon={roleIcons[role.roleIcon]?.disabled}
        onDelete={() => onDelete(role)}
      />
    ))}
  </>
);

export default RolesList;
