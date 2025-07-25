import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { EMPTY_TASK, type ITask } from "@entities/task";
import { useAppDispatch, useAppSelector } from "@app/store/hooks";
import { createTask, updateTask } from "@entities/task/model/taskSlice";
import { formateDate } from "@shared/utils";

export type TmodeTaskPostHook = {
  mode: "edit" | "create";
};

/**
 * Хук для управления формой задачи.
 * 
 * @param mode - режим использования хука. 
 * "edit" - для страницы создания новой задачи.
 * "create" - для редактирования уже существующей задачи.
 * @returns 
 */
export function useTaskPost(mode: TmodeTaskPostHook) {
  const {id} = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [isTask, setIsTask] = useState<boolean>(true);

  const tasks = useAppSelector((state) => state.tasks.tasks);
  const task = tasks.find((task: ITask) => task.id === id) || EMPTY_TASK;
  
  const [changedTask, setChangedTask] = useState<ITask>(task);

  if (mode.mode === "edit" && !id) {
    throw new Error("The task with the transmitted ID does not exist");
  }

  const changeTaskField = <T extends keyof ITask>(field: T, value: ITask[T]) => {
    setChangedTask((prev) => ({ ...prev, [field]: value}));
  };

  const handlePostTask = () => {
    if (changedTask.title && changedTask.category && changedTask.priority && changedTask.status) {
      const taskDate = formateDate();
      const currentDate = new Date();
      const taskID = currentDate.getTime().toString();

      if (mode.mode === "create") {
        const updatedTask = { ...changedTask, id: taskID, date: taskDate };
        dispatch(createTask({newTask: updatedTask}));
      } else if (mode.mode === "edit" && id) {
        const updatedTask = { ...changedTask, date: taskDate };
        dispatch(updateTask({id: id, updatedTask: updatedTask}));
      }

      handleGoBack();
    }
    else {
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