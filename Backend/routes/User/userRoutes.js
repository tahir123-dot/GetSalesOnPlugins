import express from "express";
import {
  registerUser,
  loginUser,
  sendResetOTP,
  verifyOTP,
  resetPassword,
} from "../../controller/User/userController.js";
import {
  getProduct,
  getProductById,
} from "../../controller/addProductController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/send-reset-otp", sendResetOTP);
router.post("/verify-otp", verifyOTP);
router.post("/reset-password", resetPassword);
router.get("/AllProduct", getProduct);
router.get("/:id", getProductById);

export default router;
