import TaskItem from "../task-item/TaskItem";
import type { TaskProps } from "../../data/taskType";
import styles from "./tasklist.module.css";
import { T } from "@admiral-ds/react-ui";

export default function TaskList({tasks}: {tasks: TaskProps[]}) {
  if (tasks.length == 0) {
    return <T as="div" font="Additional/L" className={styles.noTasks}>Задачи не найдены</T>;
  }

  return (
    <ul className={styles.list}>
      {tasks.map((task: TaskProps) => (
        <TaskItem key={task.id} {...task}/>
      ))}
    </ul>
  )
}