import { createContext } from "react";
import type { ITask } from "../../../entities/task";



export interface TasksContextType {
  tasks: ITask[];
  updateTask: (id: string, updatedTask: Partial<ITask>) => void;
}

export const TasksContext = createContext<TasksContextType | undefined>(undefined);