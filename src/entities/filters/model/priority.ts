export const priorityTypes = [
  "Low",
  "Medium",
  "High",
] as const;

export const priorityTypesWithAll = ["All", ...priorityTypes] as const;
