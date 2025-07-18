import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TasksContext } from "../../../app/providers";
import type { ITask } from "../../../entities/task";

export function useTaskEdit() {
  const {id} = useParams();
  const navigate = useNavigate();
  const context = useContext(TasksContext);

  if (!context) {
    throw new Error("useTaskEdit must be used within a TasksProvider");
  }

  const { tasks, updateTask } = context;
  const task = tasks.find((task: ITask) => task.id === id);

  if (!task) {
    throw new Error("The task with the transmitted ID does not exist");
  }
  const [changedTask, setChangedTask] = useState<ITask>(task!);
  const [isTitle, setIsTitle] = useState<boolean>(true);

  const changeTaskField = <T extends keyof ITask>(field: T, value: ITask[T]) => {
    setChangedTask((prev) => ({ ...prev, [field]: value}));
  };

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

  return {
    task, isTitle, changeTaskField, handleUpdateTask, handleGoBack
  };
}