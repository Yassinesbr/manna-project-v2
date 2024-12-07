export type AccessLevelType = {
  value: number;
  label: string;
};

export const AccessLevel: AccessLevelType[] = [
  { value: 1, label: "None" },
  { value: 2, label: "Read" },
  { value: 3, label: "Write" },
];
