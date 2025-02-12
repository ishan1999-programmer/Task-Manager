import express from "express";
import {
  createTask,
  editTask,
  deleteTask,
} from "../controllers/taskController.js";

const router = express.Router();

router.post("/", createTask);

router.put("/:id", editTask);

router.delete("/:id", deleteTask);

export default router;
