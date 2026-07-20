import express from "express";
//Tạo 1 app
const app = express();

//lắng nghe
app.listen(5001, () => {
  console.log("Server is running on port 5001");
});

//Lấy danh sách nhiệm vụ
app.get("/api/tasks", (req, res) => {
  res.status(200).send("Bạn có 21 việc cần làm");
});

//Tạo nhiệm vụ mới
app.post("/api/tasks/:id", (req, res) => {
  res
    .status(201)
    .json({ message: "Nhiệm vụ mới đã được thêm vào thành công!" });
});
// Cập nhật nhiệm vụ
app.put("/api/tasks/:id", (req, res) => {
  res.status(200).json({ message: "Nhiệm vụ được cập nhật!" });
});

//Xoá nhiệm vụ
app.delete("/api/tasks/:id", (req, res) => {
  res.status(200).json({ message: "Nhiệm vụ được xoá!" });
});
