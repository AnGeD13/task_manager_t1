import { categoryTypes, categoryTypesWithAll } from "./category";
import { priorityTypes, priorityTypesWithAll } from "./priority";
import { statusTypes, statusTypesWithAll } from "./status";

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

export type TLabel = "category" | "status" | "priority";
