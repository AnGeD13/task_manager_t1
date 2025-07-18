import { Button, T, TextArea, TextInput } from "@admiral-ds/react-ui";
import { FilterType } from "../../../features/filter";
import styles from "./detailpage.module.css";
import { useTaskEdit } from "../../../features/edit-task/lib/useTaskEdit";


export function DetailPage() {
  const {
    task, 
    isTitle, 
    changeTaskField, 
    handleUpdateTask, 
    handleGoBack
  } = useTaskEdit();

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

      <FilterType
        type="category"
        value={task.category}
        changeTask={changeTaskField}
      />

      <FilterType
        type="status"
        value={task.status}
        changeTask={changeTaskField}
      />

      <FilterType
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