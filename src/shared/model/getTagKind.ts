import type { TagKind } from "@admiral-ds/react-ui";

export const getTagKind = (kind: string): TagKind => {
  const tagKinds: Record<string, TagKind> = {
    "To Do": "warning",
    "In Progress": "primary",
    "Done": "success",
    "Low": "neutral",
    "Medium": "warning",
    "High": "danger",
    "Bug": "danger",
    "Feature": "primary",
    "Documentation": "warning",
    "Refactor": "primary",
    "Test": "warning",
  };

  return tagKinds[kind] ?? "neutral";
};