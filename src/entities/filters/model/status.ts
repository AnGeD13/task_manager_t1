export const statusTypes = [
  "To Do",
  "In Progress",
  "Done",
] as const;

export const statusTypesWithAll = ["All", ...statusTypes] as const;
