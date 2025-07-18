import { Link } from "react-router-dom"
import { Button, T, Tag, Tags } from "@admiral-ds/react-ui";
import { getTagKind } from "../../../shared/model";
import type { ITask } from "../../task";
import styles from "./taskCard.module.css";


export function TaskCard(task: ITask) {
  return (
    <li className={styles.card}>
        <div className={styles.textBlock}>
          <T font="Main/M" as="h2" className={styles.title}>{task.title}</T>
          <T font="Main/S" as="h3" className={styles.description}>{task.description}</T>
        </div>
        <Tags>
          <Tag as="span" statusViaBackground kind={getTagKind(task.category)}>{task.category}</Tag>
          <Tag as="span" statusViaBackground kind={getTagKind(task.status)}>{task.status}</Tag>
          <Tag as="span"statusViaBackground kind={getTagKind(task.priority)}>{task.priority}</Tag>
        </Tags>
        <Link to={`/task/${task.id}`}>
          <Button 
            dimension="s" 
            appearance="tertiary"
          >Редактировать</Button>
        </Link>
    </li>
  )
}