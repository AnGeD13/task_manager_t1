import { createContext } from "react";
import type { TaskProps } from "../../data/taskType";

export interface TasksContextType {
  tasks: TaskProps[];
  updateTask: (id: string, updatedTask: Partial<TaskProps>) => void;
}

export const TasksContext = createContext<TasksContextType | undefined>(undefined);