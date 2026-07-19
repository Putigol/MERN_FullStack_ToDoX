import express from "express";
//Tạo 1 app
const app = express();

//lắng nghe
app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
