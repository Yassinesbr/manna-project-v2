export interface Role {
  identifier?: string;
  id: string;
  name: string;
  isCustom?: boolean;
  roleIcon: number;
  permissions: {
    id: number;
    accessLevel: number;
  }[];
  usersAssigned?: number;
}

export interface RoleData {
  id?: string;
  name: string;
  roleIcon: number;
  permissions: Permission[];
}

export interface Permission {
  id: number;
  accessLevel: number;
}
