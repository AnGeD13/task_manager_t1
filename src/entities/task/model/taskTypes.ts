import type { TagKind } from "@admiral-ds/react-ui";

export interface ITaskTypeConfig {
  value: string;
  tagKind: TagKind;
}

export const taskTypes = {
  priority: [
    {value: "Низкий", tagKind: "neutral"},
    {value: "Средний", tagKind: "warning"},
    {value: "Высокий", tagKind: "danger"},
  ],
  status: [
    {value: "К выполнению", tagKind: "warning"},
    {value: "В процессе", tagKind: "primary"},
    {value: "Завершено", tagKind: "success"},
  ],
  category: [
    {value: "Баг", tagKind: "danger"},
    {value: "Функциональность", tagKind: "primary"},
    {value: "Документация", tagKind: "warning"},
    {value: "Рефакторинг", tagKind: "primary"},
    {value: "Тестирование", tagKind: "warning"},
  ],
} as const;

export const labelForType = {
  category: "Категория",
  status: "Статус",
  priority: "Приоритет",
} as const;

export const ALL_TYPES = "Все";

/**
 * Возвращает массив типов.
 * 
 * @template T
 * @param {T} types - Массив конфигураций типов. 
 * @returns {ReadonlyArray<string>} Массив типов.
 * @example
 * getTypes("status") // ["К выполнению", "В процессе", "Завершено"]
 */
export const getTypes = <T extends readonly {value: string}[]>(type: T) => {
  return [...type.map((t) => t.value)];
};

/**
 * Возвращает массив типов с добавлением опции "Все" в начале.
 * 
 * @template T
 * @param {T} types - Массив конфигураций типов. 
 * @returns {ReadonlyArray<string>} Массив типов.
 * @example
 * getTypesWithAll("status") // ["Все", "К выполнению", "В процессе", "Завершено"]
 */
export const getTypesWithAll = <T extends readonly {value: string}[]>(type: T) => {
  return [ALL_TYPES, ...type.map((t) => t.value)];
};

export type TaskTypeKey = keyof typeof taskTypes;

/**
 * Возвращает TagKind для заданного типа задачи. 
 * Используется для стилизации компонента Tag.
 * 
 * @param {TaskTypeKey} typeKey - Ключ типа (priority, category, status). 
 * @param {string} value - Значение типа.
 * @returns {TagKind} Визуальный стиль тега.
 */
export const getTagKind = (typeKey: TaskTypeKey, value: string) => {
  const typeConfig = taskTypes[typeKey].find((item) => item.value === value);
  return typeConfig?.tagKind ?? "neutral";
};