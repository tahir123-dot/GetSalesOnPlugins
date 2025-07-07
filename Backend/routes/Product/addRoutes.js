import express from "express";
import upload from "../../middleware/multerMiddleware.js";
import {
  addProduct,
  deleteProduct,
  editProduct,
  getProduct,
  getProductById,
} from "../../controller/addProductController.js";
import { verifyToken } from "../../middleware/authication.js";

const productRouter = express.Router();

productRouter.post("/add", verifyToken, upload.single("image"), addProduct);
productRouter.get("/AllProduct", getProduct);
productRouter.put("/edit/:id", upload.single("image"), editProduct);
productRouter.get("/:id", getProductById);
productRouter.delete("/delete/:id", verifyToken, deleteProduct);

export default productRouter;
