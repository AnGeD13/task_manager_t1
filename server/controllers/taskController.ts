import { NextFunction, Request, Response } from "express";
import { taskService } from "../services/taskServices";
import { ITask } from "../types/task";

export const taskController = {
  getAllTasks: (req: Request, res: Response, next: NextFunction) => {
    try {
      const tasks = taskService.getAllTasks();
      res.status(200).json(tasks);
    } catch (error) {
      next(error);
    }
  },

  getTaskById: (req: Request<{id: string}>, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const task = taskService.getTaskById(id);

      if (!task) {
        res.status(404).json({error: "Task with this id doesn't exist"});
      }

      res.status(200).json(task);

    } catch (error) {
      next(error);
    }
  },

  createTask: (req: Request, res: Response, next: NextFunction) => {
    try {
      const {
        id, title, description, category, status, priority, date
      } = req.body;
      if (!title || !category || !priority || !status) {
        return res.status(400).json({error: "Data isn't valid"});
      }

      const newTask: ITask = {
          id,
          title,
          description,
          category,
          status,
          priority,
          date
      };

      const createdTask = taskService.createTask(newTask);
      res.status(201).json(createdTask);
    } catch (error) {
      next(error);
    }
  },

  updateTask: (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    try {
      const {id} = req.params;
      const {
        title, category, status, priority
      } = req.body;

      if (!title || !category || !priority || !status) {
        return res.status(400).json({error: "Data isn't valid"});
      }

      const updatedTask = taskService.updateTask(id, req.body);
      if (!updatedTask) {
        return res.status(404).json({error: "Task doesn't exist"});
      }

      res.status(200).json(updatedTask);
    } catch (error) {
      next(error);
    }
  },

  deleteTask: (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const success = taskService.deleteTask(id);

        if (!success) {
          return res.status(404).json({error: "Task doesn't exist"});
        }

        res.status(204).send();
    } catch (error) {
      next(error);
    }
  },
}