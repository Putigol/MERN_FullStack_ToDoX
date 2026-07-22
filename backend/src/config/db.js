import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTIONSTRING);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Lỗi khi kết nối với MongoDB:", error);
    //Exit with error
    process.exit(1);
  }
};
