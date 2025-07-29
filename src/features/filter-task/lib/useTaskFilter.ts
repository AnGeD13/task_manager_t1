import { useState } from "react";
import { ALL_TYPES } from "@entities/task/model/taskTypes";
import { useGetTasksQuery } from "@/entities/task/api/taskApi";

export function useTaskFilter() {
  const {data: tasks = []} = useGetTasksQuery();

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
