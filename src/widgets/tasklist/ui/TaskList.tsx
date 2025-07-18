import { T } from "@admiral-ds/react-ui";
import type { ITask } from "../../../entities/task";
import { TaskCard } from "../../../entities/task-card";
import styles from "./tasklist.module.css";

export function TaskList({tasks}: {tasks: ITask[]}) {
  if (tasks.length == 0) {
    return <T as="div" font="Additional/L" className={styles.noTasks}>Задачи не найдены</T>;
  }

  return (
    <ul className={styles.list}>
      {tasks.map((task: ITask) => (
        <TaskCard key={task.id} {...task}/>
      ))}
    </ul>
  )
}