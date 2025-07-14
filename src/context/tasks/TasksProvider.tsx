import { useEffect, useState, type ReactNode } from "react";
import data from "../../data/tasks.json";
import { TasksContext } from "./TasksContext";
import type { TaskProps } from "../../data/taskType";

export const TasksProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<TaskProps[]>(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : data.tasks;
  });

  const updateTask = (id: string, updatedTask: Partial<TaskProps>) => {
    setTasks((prevTasks) =>
      prevTasks.map((task: TaskProps) =>
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