import { Link } from "react-router-dom"
import { Button, T, Tag, Tags } from "@admiral-ds/react-ui";
import { useAppDispatch } from "@app/store/hooks";
import { deleteTask } from "@/entities/task/model/taskSlice";
import type { ITask } from "@/entities/task/model";
import { getTagKind } from "@/entities/task";
import { ConfirmModal } from "@shared/confirm-modal";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import styles from "./taskCard.module.css";


export function TaskCard(task: ITask) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleDeleteTask = (id: string) => {
    dispatch(deleteTask({id: id}));
    handleCancelModal();
  };

  /**
   * Обработчик события клика для открытия модального окна.
   * 
   * Поскольку кнопка расположена внутри карточки-ссылки на отдельную страницу,
   * то используется предотвращение стандартного поведения - 
   * блокируется переход на страницу задачи.
   * 
   * @param event - Событие клика мыши на элемент кнопки. 
   */
  const handleOpenModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  const handleCancelModal = () => {
    setIsModalOpen(false);
  };

  return (
    <li className={styles.cardWrapper}>
      <Link to={`/task/${task.id}`} className={styles.card}>
        <div className={styles.textBlock}>
          <T font="Main/M" as="h2" className={styles.title}>{task.title}</T>
          <T font="Main/S" as="h3" className={styles.description}>{task.description}</T>
        </div>
        <div className={styles.card_bottom}>
          <Tags>
            <Tag as="span" statusViaBackground kind={getTagKind("category", task.category)}>{task.category}</Tag>
            <Tag as="span" statusViaBackground kind={getTagKind("status", task.status)}>{task.status}</Tag>
            <Tag as="span"statusViaBackground kind={getTagKind("priority", task.priority)}>{task.priority}</Tag>
          </Tags>
          <div className={styles.delete_btn_wrapper}>
            <Button 
              type="button"
              onClick={(event) => handleOpenModal(event)}
              iconStart={<MdDelete/>}
              displayAsSquare 
              appearance="danger"
              style={{height: "100%", width: "100%"}}
            />
          </div>
        </div>
        <T font="Additional/S" as="p" className={styles.date}>{task.date}</T>
      </Link>
      <ConfirmModal
        isOpen={isModalOpen}
        title="Удаление задачи"
        message="Вы действительно хотите удалить эту задачу?"
        onConfirm={() => handleDeleteTask(task.id)}
        onCancel={handleCancelModal}
      />
    </li>
  )
}