import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import adminRouter from "./routes/adminRoute.js";
import productRouter from "./routes/Product/addRoutes.js";
import userRouter from "./routes/User/userRoutes.js";
import cartRoutes from "./routes/Cart/cartRoutes.js";
import addressRoutes from "./routes/Address/addressRoutes.js";
import orderRoutes from "./routes/Order/orderRoutes.js";
import blogRoutes from "./routes/Blog/blogRoutes.js";
import adminBlogRoutes from "./routes/Blog/adminBlogRouter.js";
import downloadRoutes from "./routes/Order/downloadRoutes.js";
import feedBackRoutes from "./routes/FeedBack/FeedBackRoutes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 500;

connectDB();

app.use("/auth", adminRouter);
app.use("/auth", productRouter);
app.use("/auth", adminBlogRoutes);
app.use("/user", userRouter);
app.use("/user", cartRoutes);
app.use("/user", addressRoutes);
app.use("/user", orderRoutes);
app.use("/user", blogRoutes);
app.use("/user", downloadRoutes);
app.use("/user", feedBackRoutes);

app.listen(PORT, () => {
  console.log("Server Runing on this Port :", PORT);
});
