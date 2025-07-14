export const categoryTypes = [
  "Bug",
  "Feature",
  "Documentation",
  "Refactor",
  "Test"
] as const;

export const categoryTypesWithAll = ["All", ...categoryTypes] as const;