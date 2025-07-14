import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TasksContext } from "../../context/tasks/TasksContext";
import type { TaskProps } from "../../data/taskType";
import styles from "./detailpage.module.css";
import { Button, T, TextArea, TextInput } from "@admiral-ds/react-ui";
import DetailedFilterType from "../../components/filters/detailed-filter-type/DetailedFilterType";

export default function DetailPage() {
  const {id} = useParams();
  const navigate = useNavigate();
  const { tasks, updateTask } = useContext(TasksContext)!;
  const task = tasks.find((task: TaskProps) => task.id === id);
  const [changedTask, setChangedTask] = useState<TaskProps>(task!);
  const [isTitle, setIsTitle] = useState<boolean>(true);

  const changeTaskField = <T extends keyof TaskProps>(field: T, value: TaskProps[T]) => {
    setChangedTask((prev) => ({ ...prev, [field]: value}));
  };

  if (!task || !id) {
    return (
      <div className={styles.errorPage}>
        <T as="p" font="Body/Body 1 Long">Такой задачи не существует...</T>
      </div>
    )
  }

  const handleUpdateTask = () => {
    if (changedTask.title) {
      updateTask(id!, changedTask);
      handleGoBack();
    }
    else {
      setIsTitle(false);
    }
  };

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <form className={styles.form}>
      <div>
        <label>
          <T font="Main/S">Заголовок:</T>
          <TextInput 
            className={styles.textInput}
            required
            defaultValue={task.title}
            onChange={event => changeTaskField('title', event.target.value)}
            dimension="s"
          />
          <T 
            font="Additional/S" 
            color="Error/Error 60 Main" 
            className={isTitle ? styles.isNotVisible : styles.isVisible}
          >Заголовок обязателен для заполнения</T>
        </label>
      </div>

      <div>
        <label>
          <T font="Main/S">Описание:</T>
          <TextArea
            className={styles.textArea}
            defaultValue={task.description}
            onChange={event => changeTaskField('description', event.target.value)}
            dimension="s"
          />
        </label>
      </div>

      <DetailedFilterType
        type="category"
        value={task.category}
        changeTask={changeTaskField}
      />

      <DetailedFilterType
        type="status"
        value={task.status}
        changeTask={changeTaskField}
      />

      <DetailedFilterType
        type="priority"
        value={task.priority}
        changeTask={changeTaskField}
      />

      <div className={styles.btns}>
        <Button 
          appearance="success" 
          dimension="s" 
          onClick={handleUpdateTask}
        >Сохранить</Button>
        <Button 
          appearance="tertiary" 
          dimension="s"
          onClick={handleGoBack}
        >Отмена</Button>
      </div>
    </form>
  )
}