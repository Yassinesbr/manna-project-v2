import SwitchButton from "../SwitchButton";
import { AccessLevel } from "../../enum/accessLevel";
import React from "react";

import {
  PermissionTypeEnum,
  PermissionTypes,
  getPermissionLabel,
} from "../../enum/permissionTypes";

interface Permission {
  id: PermissionTypeEnum;
  accessLevel: number;
}

interface PermissionsListProps {
  permissions: Permission[];
  onSwitchChange: (value: number, permissionId: PermissionTypeEnum) => void;
}

const PermissionsList: React.FC<PermissionsListProps> = ({
  permissions,
  onSwitchChange,
}) => (
  <div className="permissions-container">
    {PermissionTypes.map((permission) => {
      const options =
        permission.id === PermissionTypeEnum.TRANSFER_FACILITIES ||
        permission.id === PermissionTypeEnum.EDIT_ADMINS
          ? [
              { id: 1, value: "Yes" },
              { id: 0, value: "No" },
            ]
          : AccessLevel.map((level) => ({
              id: level.value,
              value: level.label,
            }));
      const selectedValue = permissions.find(
        (perm) => perm.id === permission.id
      )?.accessLevel;

      return (
        <SwitchButton
          key={permission.id}
          label={getPermissionLabel(permission.id)}
          options={options}
          onChange={(value) => onSwitchChange(value, permission.id)}
          selected={selectedValue}
        />
      );
    })}
  </div>
);

export default PermissionsList;
