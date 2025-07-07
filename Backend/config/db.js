import mongoose from "mongoose";

const connectDB = async () => {
  try {
    
    await mongoose.connect(process.env.MONGO_URL);

    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("Initial MongoDB Connection Error:", error.message);
    process.exit(1); 
  }

  
  mongoose.connection.on("error", (err) => {
    console.error("MongoDB Runtime Error:", err);
  });

 
  mongoose.connection.on("disconnected", () => {
    console.warn("MongoDB Disconnected");
  });

  
  process.on("SIGINT", async () => {
    await mongoose.connection.close();
    console.log("MongoDB connection closed due to app termination");
    process.exit(0);
  });
};

export default connectDB;
