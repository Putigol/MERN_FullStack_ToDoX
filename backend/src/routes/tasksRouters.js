import express from "express";
import {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/tasksController.js";
const router = express.Router();

//Lấy danh sách nhiệm vụ
router.get("/", getAllTasks);

//Tạo nhiệm vụ mới
router.post("/", createTask);

// Cập nhật nhiệm vụ
router.put("/:id", updateTask);

//Xoá nhiệm vụ
router.delete("/:id", deleteTask);

export default router;
