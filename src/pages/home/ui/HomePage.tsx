import { TaskList } from "@widgets/tasklist";
import styles from "./homepage.module.css";
import { useTaskFilter } from "@features/filter-task/lib/useTaskFilter";
import { Header } from "@widgets/header";
import { FilterType } from "@features/filter";


export function HomePage() {
  const {
    filteredTasks, 
    setFilterCategory, 
    setFilterStatus, 
    setFilterPriority
  } = useTaskFilter();

  return (
    <div className={styles.wrapper}>
      <Header/>
      <div className={styles.filter}>
        <FilterType type="category" setState={setFilterCategory}/>
        <FilterType type="status" setState={setFilterStatus}/>
        <FilterType type="priority" setState={setFilterPriority}/>
      </div>
      <TaskList tasks={filteredTasks}/>
    </div>
  )
}