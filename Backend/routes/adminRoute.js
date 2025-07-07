import express from "express";
import { login, register } from "../controller/adminController.js";
import { verifyToken } from "../middleware/authication.js";
import { deleteUser, getAllUsers } from "../controller/User/getAllUsers.js";
import {
  getAllOrders,
  singleOrderId,
  updateOrderStatus,
} from "../controller/Order/updateOrderStatus.js";

const adminRouter = express.Router();

adminRouter.post("/register", register);
adminRouter.post("/login", login);
adminRouter.get("/admin", verifyToken, getAllUsers);
adminRouter.delete("/admin/:id", verifyToken, deleteUser);
adminRouter.patch("/admin/order/:orderId", verifyToken, updateOrderStatus);
adminRouter.get("/allorders", verifyToken, getAllOrders);
adminRouter.get("/admin/singleorder/:orderId", verifyToken, singleOrderId);

export default adminRouter;
