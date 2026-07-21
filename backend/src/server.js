import express from "express";
import taskRoute from "./routes/tasksRouters.js";

//Tạo 1 app
const app = express();

//Khai báo dùng API
app.use("/api/tasks", taskRoute);

//lắng nghe
app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
