import express from "express";
import { placeOrder } from "../../controller/Payment/paymentController.js";
import { verifyToken } from "../../middleware/authication.js";
import {
  getSingleOrder,
  getUserOrders,
} from "../../controller/Order/orderController.js";

const router = express.Router();

router.post("/order", verifyToken, placeOrder);
router.get("/order/getorder", verifyToken, getUserOrders);
router.get("/order/:orderId", verifyToken, getSingleOrder);


export default router;
