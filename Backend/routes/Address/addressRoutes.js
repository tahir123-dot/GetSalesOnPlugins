import express from "express";

import {
  getUserAddress,
  saveOrUpdateAddress,
} from "../../controller/Address/addressController.js";
import { verifyToken } from "../../middleware/authication.js";

const router = express.Router();

router.get("/address/:userId", verifyToken, getUserAddress);
router.post("/address", verifyToken, saveOrUpdateAddress);

export default router;
