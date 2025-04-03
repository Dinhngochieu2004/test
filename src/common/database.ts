import mongoose from "mongoose";
import config from "../../config/db";
const connectDB =()=> {
    mongoose.set('strictQuery', true);
    mongoose
      .connect(config.mongodb.uri)
      .then(() => console.log("✅ Database Connected!"))
      .catch((error) => console.error("❌ Database connection error:", error));
  };
export default connectDB;