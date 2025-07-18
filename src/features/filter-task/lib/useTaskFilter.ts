import { useContext, useState } from "react";
import { TasksContext } from "../../../app/providers";
import { categoryTypesWithAll, priorityTypesWithAll, statusTypesWithAll } from "../../../entities/filters";

export function useTaskFilter() {
  const context = useContext(TasksContext);

  const [filterCategory, setFilterCategory] = useState<string>(categoryTypesWithAll[0]);
  const [filterStatus, setFilterStatus] = useState<string>(statusTypesWithAll[0]);
  const [filterPriority, setFilterPriority] = useState<string>(priorityTypesWithAll[0]);

  if (!context) {
    throw new Error("useTaskFilter must be used within a TasksProvider");
  }

  const {tasks} = context;
  
  const filteredTasks = tasks.filter((task) => {
    return (
      (filterCategory === categoryTypesWithAll[0] || task.category === filterCategory) &&
      (filterStatus === statusTypesWithAll[0] || task.status === filterStatus) &&
      (filterPriority === priorityTypesWithAll[0] || task.priority === filterPriority)
    );
  });

  return {
    filteredTasks,
    setFilterCategory,
    setFilterStatus,
    setFilterPriority
  };
}