import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ITask } from ".";


interface ITaskState {
  tasks: ITask[];
}

const LOCAL_STORAGE_KEY = "tasks";

const initialTasks: ITask[] = [
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

const saveInLocalStorage = (tasks: ITask[]) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
};

const loadTasksFromLocalStorage = (): ITask[] => {
  try {
    const serializedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (serializedTasks == null) {
      return initialTasks;
    }
    return JSON.parse(serializedTasks);
  } catch {
    return initialTasks;
  }
};

const initialState: ITaskState = {
  tasks: loadTasksFromLocalStorage(),
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    updateTask: (state, action: PayloadAction<{id: string, updatedTask: Partial<ITask>}>) => {
      const {id, updatedTask} = action.payload;
      const index = state.tasks.findIndex((task) => task.id === id);
      if (index !== -1) {
        state.tasks[index] = {...state.tasks[index], ...updatedTask};
        saveInLocalStorage(state.tasks);
      }
    },
    deleteTask: (state, action: PayloadAction<{id: string}>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
      saveInLocalStorage(state.tasks);
    },
    createTask: (state, action: PayloadAction<{newTask: ITask}>) => {
      state.tasks.push(action.payload.newTask);
      saveInLocalStorage(state.tasks);
    },
  }
});

export const {updateTask, deleteTask, createTask} = taskSlice.actions;
export default taskSlice.reducer;
