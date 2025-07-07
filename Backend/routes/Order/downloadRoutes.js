// routes/Order/downloadRoutes.js

import express from "express";

import { verifyToken } from "../../middleware/authication.js";
import { getDownloadableProducts } from "../../controller/Order/downloadController.js";

const router = express.Router();

router.get("/userss/downloads", verifyToken, getDownloadableProducts);

export default router;
