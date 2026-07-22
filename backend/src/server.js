import express from "express";
import taskRoute from "./routes/tasksRouters.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 5001;

//Tạo 1 app
const app = express();

connectDB();

//Khai báo dùng API
app.use("/api/tasks", taskRoute);

//lắng nghe
app.listen(PORT, () => {
  console.log("Server is running on port 5001");
});
