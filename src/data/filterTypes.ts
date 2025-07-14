import { categoryTypes, categoryTypesWithAll } from "./constants/category";
import { priorityTypes, priorityTypesWithAll } from "./constants/priority";
import { statusTypes, statusTypesWithAll } from "./constants/status";

export const labelForType = {
  "category": "Категория",
  "status": "Статус",
  "priority": "Приоритет",
};

export const filtersDataWithAll = {
  "category": categoryTypesWithAll,
  "status": statusTypesWithAll,
  "priority": priorityTypesWithAll,
};

export const filtersData = {
  "category": categoryTypes,
  "status": statusTypes,
  "priority": priorityTypes,
};

export type labelType = "category" | "status" | "priority";
