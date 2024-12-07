// export type PermissionType = {
//   id: number;
//   label: string;
// };

// export const PermissionTypes: PermissionType[] = [
//   { id: 1, label: "Locks" },
//   { id: 2, label: "Activate Locks" },
//   { id: 3, label: "Inventory" },
//   { id: 4, label: "Tenant Locks" },
//   { id: 5, label: "Facilities" },
//   { id: 6, label: "Transfer Facilities" },
//   { id: 7, label: "Users" },
//   { id: 8, label: "Edit Admins" },
//   { id: 9, label: "Subdomains" },
//   { id: 10, label: "API Settings" },
// ];

export enum PermissionTypeEnum {
  LOCKS = 1,
  ACTIVATE_LOCKS = 2,
  INVENTORY = 3,
  TENANT_LOCKS = 4,
  FACILITIES = 5,
  TRANSFER_FACILITIES = 6,
  USERS = 7,
  EDIT_ADMINS = 8,
  SUBDOMAINS = 9,
  API_SETTINGS = 10,
}

export type PermissionType = {
  id: PermissionTypeEnum;
  label: string;
};

export const PermissionTypes: PermissionType[] = [
  { id: PermissionTypeEnum.LOCKS, label: "Locks" },
  { id: PermissionTypeEnum.ACTIVATE_LOCKS, label: "Activate Locks" },
  { id: PermissionTypeEnum.INVENTORY, label: "Inventory" },
  { id: PermissionTypeEnum.TENANT_LOCKS, label: "Tenant Locks" },
  { id: PermissionTypeEnum.FACILITIES, label: "Facilities" },
  { id: PermissionTypeEnum.TRANSFER_FACILITIES, label: "Transfer Facilities" },
  { id: PermissionTypeEnum.USERS, label: "Users" },
  { id: PermissionTypeEnum.EDIT_ADMINS, label: "Edit Admins" },
  { id: PermissionTypeEnum.SUBDOMAINS, label: "Subdomains" },
  { id: PermissionTypeEnum.API_SETTINGS, label: "API Settings" },
];

// Helper function to get label from enum
export const getPermissionLabel = (id: PermissionTypeEnum): string => {
  const permission = PermissionTypes.find((p) => p.id === id);
  return permission?.label || "";
};
