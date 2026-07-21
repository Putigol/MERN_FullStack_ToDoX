export const getAllTasks = (req, res) => {
  res.status(200).send("Bạn có 21 việc cần làm");
};

export const createTask = (req, res) => {
  res
    .status(201)
    .json({ message: "Nhiệm vụ mới đã được thêm vào thành công!" });
};

export const updateTask = (req, res) => {
  res.status(200).json({ message: "Nhiệm vụ được cập nhật!" });
};

export const deleteTask = (req, res) => {
  res.status(200).json({ message: "Nhiệm vụ được xoá!" });
};
