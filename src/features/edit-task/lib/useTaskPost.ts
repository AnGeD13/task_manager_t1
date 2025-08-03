import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { EMPTY_TASK, type ITask } from "@entities/task";
import { formateDate } from "@shared/utils";
import { useCreateTaskMutation, useGetTaskByIdQuery, useUpdateTaskMutation } from "@/entities/task/api/taskApi";

export type TmodeTaskPostHook = {
  mode: "edit" | "create";
};

/**
 * Хук для управления формой задачи.
 * 
 * @param mode - режим использования хука. 
 * 
 * "create" - для страницы создания новой задачи.
 * 
 * "edit" - для редактирования уже существующей задачи.
 * @returns {ITask} task - текущие данные для задачи;
 * @returns {boolean} isTask - флаг валидности задачи (true, если все обязательные поля заполнены);
 * @returns {Function} changeTaskField - функция для изменения поля задачи;
 * @returns {Function} handlePostTask - функция для отправки задачи (создание/изменение);
 * @returns {Function} handleGoBack - функция для возврата на главную страницу.
 */
export function useTaskPost(mode: TmodeTaskPostHook) {
  const {id} = useParams();
  const navigate = useNavigate();
  const [createTask] = useCreateTaskMutation();
  const [updateTask] = useUpdateTaskMutation();

  const [isTask, setIsTask] = useState<boolean>(true);

  const {data: currentTask} = useGetTaskByIdQuery(id!, {
    skip:  !id,
  });
  
  const [task, setTask] = useState<ITask>(EMPTY_TASK);

  useEffect(() => {
    if (mode.mode === "edit" && currentTask) {
      setTask(currentTask);
    }
  }, [currentTask, mode.mode])

  if (mode.mode === "edit" && !id) {
    throw new Error("The task with the transmitted ID does not exist");
  }

  const changeTaskField = <T extends keyof ITask>(field: T, value: ITask[T]) => {
    setTask((prev) => ({ ...prev, [field]: value}));
  };

  const handlePostTask = () => {
    if (task.title.trim() && task.priority && task.status && task.category) {
      const taskDate = formateDate();
      
      if (mode.mode === "create") {
        const currentDate = new Date();
        const taskID = currentDate.getTime().toString();
        const createdTask = { ...task, id: taskID, date: taskDate };
        createTask(createdTask);
      } else if (mode.mode === "edit" && id) {
        const updatedTask = { ...task, date: taskDate };
        updateTask({id: id, changedTask: updatedTask});
      }
      handleGoBack();
    } else {
      setIsTask(false);
    }
  };

  const handleGoBack = () => {
    navigate("/");
  };

  return {
    task, isTask, changeTaskField, handlePostTask, handleGoBack
  };
}