
import { TaskList } from "../../../widgets/tasklist";
import { FilterSection } from "../../../widgets/filter-section";
import styles from "./homepage.module.css";
import { useTaskFilter } from "../../../features/filter-task/lib/useTaskFilter";


export function HomePage() {
  const {filteredTasks, setFilterCategory, setFilterStatus, setFilterPriority} = useTaskFilter();

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