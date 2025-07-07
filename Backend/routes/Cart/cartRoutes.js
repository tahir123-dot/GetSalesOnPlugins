import express from "express";
import {
  addToCart,
  getCartItems,
  removeFromCart,
} from "../../controller/Cart/cartController.js";
import { verifyToken } from "../../middleware/authication.js";

const router = express.Router();

router.post("/add", addToCart);
router.delete("/cart/remove/:id", verifyToken, removeFromCart);
router.get("/cart/:userId", getCartItems);

export default router;
