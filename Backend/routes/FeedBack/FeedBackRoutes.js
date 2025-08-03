import express from "express";
import {
  addFeedBack,
  getProductFeedbacks,
} from "../../controller/FeedBack/feedBackController.js";

const router = express.Router();

router.post("/add/feedBack/product", addFeedBack);
router.get("/add/feedback/get/:productId", getProductFeedbacks);

export default router;
