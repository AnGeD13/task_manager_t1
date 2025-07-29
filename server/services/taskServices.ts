import { ITask } from "../types/task";


let TASKS: ITask[] = [
  {
    id: "1",
    title: "Разработка интерфейса",
    description: "Создать пользовательский интерфейс для главной страницы",
    category: "Функциональность",
    priority: "Высокий",
    status: "В процессе",
    date: "22.07.2025 21:44",
  },
  {
    id: "2",
    title: "Тестирование API",
    description: "Провести тестирование всех конечных точек API",
    category: "Тестирование",
    priority: "Средний",
    status: "К выполнению",
    date: "22.07.2025 21:48",
  },
  {
    id: "3",
    title: "Исправление ошибок",
    description: "Устранить баги в модуле авторизации",
    category: "Баг",
    priority: "Высокий",
    status: "В процессе",
    date: "22.07.2025 21:49",
  }
];

export const taskService = {
  getAllTasks: (): ITask[] => {
    return TASKS;
  },

  getTaskById: (id: string): ITask | null => {
    const task = TASKS.find((task) => task.id === id);
    return task || null;
  },
  
  createTask: (task: ITask): ITask => {
    TASKS.push(task);
    return task;
  },

  updateTask: (id: string, updatedTask: Partial<ITask>): ITask | null => {
    const taskIndex = TASKS.findIndex((task) => task.id === id);
    if (taskIndex === -1) {
      return null;
    } 

    TASKS[taskIndex] = {...TASKS[taskIndex], ...updatedTask};
    return TASKS[taskIndex];
  },

  deleteTask: (id: string): boolean => {
    const taskIndex = TASKS.findIndex((task) => task.id === id);
    if (taskIndex === -1) {
      return false;
    } 

    TASKS = TASKS.filter((task) => task.id !== id);
    return true;
  },
}