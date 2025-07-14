import { useContext, useState } from "react";
import FilterSection from "../../components/filters/filter-section/FilterSection";
import TaskList from "../../components/task-list/TaskList";
import { TasksContext } from "../../context/tasks/TasksContext";
import styles from "./mainpage.module.css";
import { categoryTypesWithAll } from "../../data/constants/category";
import { priorityTypesWithAll } from "../../data/constants/priority";
import { statusTypesWithAll } from "../../data/constants/status";

export default function MainPage() {
  const context = useContext(TasksContext);

  const [filterCategory, setFilterCategory] = useState<string>(categoryTypesWithAll[0]);
  const [filterStatus, setFilterStatus] = useState<string>(statusTypesWithAll[0]);
  const [filterPriority, setFilterPriority] = useState<string>(priorityTypesWithAll[0]);

  if (!context) {
    return null;
  }

  const {tasks} = context;
  
  const filteredTasks = tasks.filter((task) => {
    return (
      (filterCategory === categoryTypesWithAll[0] || task.category === filterCategory) &&
      (filterStatus === statusTypesWithAll[0] || task.status === filterStatus) &&
      (filterPriority === priorityTypesWithAll[0] || task.priority === filterPriority)
    );
  });

  return (
    <div className={styles.wrapper}>
      <FilterSection
        setFilterCategory={setFilterCategory}
        setFilterStatus={setFilterStatus}
        setFilterPriority={setFilterPriority}
      />
      <TaskList tasks={filteredTasks}/>
    </div>
  )
}