import { useEffect, useState, type ReactNode } from "react";
import data from "../../../data/tasks.json";
import { TasksContext } from "./TasksContext";
import type { ITask } from "../../../entities/task";


export const TasksProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<ITask[]>(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : data.tasks;
  });

  const updateTask = (id: string, updatedTask: Partial<ITask>) => {
    setTasks((prevTasks) =>
      prevTasks.map((task: ITask) =>
        task.id === id ? { ...task, ...updatedTask } : task
      )
    );
  };

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks])

  return (
    <TasksContext.Provider value={{tasks, updateTask}}>
      {children}
    </TasksContext.Provider>
  )
};