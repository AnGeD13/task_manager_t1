/**
 * Получение текущей даты и её форматирование 
 * в формате "DD.MM.YYYY HH:MM".
 * @returns {string} Отформатированная дата.
 */

export const formateDate = () => {
  const now = new Date();
  return now.toLocaleString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).replace(",", "");
};