import { Router } from "express";
import { taskController } from "../controllers/taskController";

const router = Router();

router.get("/", taskController.getAllTasks);
router.post("/task/new", taskController.createTask);
router.get("/task/:id", taskController.getTaskById);
router.patch("/task/:id", taskController.updateTask);
router.delete("/task/:id", taskController.deleteTask);

export default router;