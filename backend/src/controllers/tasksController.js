import Task from "../models/Task.js";

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 }); //sắp xếp theo task mới nhất
    res.status(200).json(tasks);
  } catch (error) {
    console.error("Lỗi khi gọi getAllTasks:", error);
    res.status(500).json({ message: "Lỗi hệ thống !" });
  }
};

export const createTask = async (req, res) => {
  try {
    const { title } = req.body;
    const task = new Task({ title }); //tạo task
    const newTask = await task.save(); //lưu vào database
    res.status(201).json(newTask);
  } catch (error) {
    console.error("Lỗi khi gọi createTask:", error);
    res.status(500).json({ message: "Lỗi hệ thống !" });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { title, status, completedAt } = req.body;
    //tạo task để dễ test API
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id, //lấy id từ URL
      {
        title,
        status,
        completedAt,
      },
      { new: true }, //Trả về value sau khi update
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Nhiệm vụ không tồn tại!" });
    }

    res.status(200).json(updatedTask);
  } catch (error) {
    console.error("Lỗi khi gọi updateTask:", error);
    res.status(500).json({ message: "Lỗi hệ thống !" });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask) {
      return res.status(404).json({ message: "Nhiệm vụ không tồn tại!" });
    }
    res.status(200).json({ message: "Nhiệm vụ được xoá!" });
  } catch (error) {
    console.error("Lỗi khi gọi deleteTask:", error);
    res.status(500).json({ message: "Lỗi hệ thống !" });
  }
};
