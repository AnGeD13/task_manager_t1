import { Button, T, TextArea, TextInput } from "@admiral-ds/react-ui";
import { FilterType } from "@features/filter";
import { useTaskPost, type TmodeTaskPostHook } from "@features/edit-task/lib/useTaskPost";
import { RequiredField } from "@shared/required-field";
import styles from "./detailpage.module.css";


export function DetailPage(mode: TmodeTaskPostHook) {
  const {
    task, 
    isTask, 
    changeTaskField, 
    handlePostTask, 
    handleGoBack
  } = useTaskPost(mode);

  return (
    <form className={styles.form}>
      <div>
        <label>
          <T font="Main/S">Заголовок:<RequiredField/></T>
          <TextInput 
            className={styles.textInput}
            required
            defaultValue={task.title}
            onChange={event => changeTaskField('title', event.target.value)}
            dimension="s"
            placeholder="Введите заголовок"
          />
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
            placeholder="Опишите задачу"
          />
        </label>
      </div>

      <FilterType type="category" value={task.category} changeTask={changeTaskField}/>
      <FilterType type="status" value={task.status} changeTask={changeTaskField}/>
      <FilterType type="priority" value={task.priority} changeTask={changeTaskField}/>

      <T 
        font="Additional/S" 
        color="Error/Error 60 Main" 
        className={isTask ? styles.isNotVisible : styles.isVisible}
      >Заполните все обязательные поля</T>
      <div className={styles.btns}>
        <Button 
          type="button"
          appearance="success" 
          dimension="s" 
          onClick={handlePostTask}
        >Сохранить</Button>
        <Button 
          type="button"
          appearance="tertiary" 
          dimension="s"
          onClick={handleGoBack}
        >Отмена</Button>
      </div>
    </form>
  )
}