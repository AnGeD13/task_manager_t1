import { useState } from "react";
import { useAppSelector } from "@app/store/hooks";
import { ALL_TYPES } from "@entities/task/model/taskTypes";

export function useTaskFilter() {
  const tasks = useAppSelector((state) => state.tasks.tasks); 

  const [filterCategory, setFilterCategory] = useState<string>(ALL_TYPES);
  const [filterStatus, setFilterStatus] = useState<string>(ALL_TYPES);
  const [filterPriority, setFilterPriority] = useState<string>(ALL_TYPES);
  
  const filteredTasks = tasks.filter((task) => {
    return (
      (filterCategory === ALL_TYPES || task.category === filterCategory) &&
      (filterStatus === ALL_TYPES || task.status === filterStatus) &&
      (filterPriority === ALL_TYPES || task.priority === filterPriority)
    );
  });

  return {
    filteredTasks,
    setFilterCategory,
    setFilterStatus,
    setFilterPriority
  };
}