import express from "express";
import multer from "multer";
import { createBlog, deleteBlog, getBlogs, getSingleBlog } from "../../controller/blogController.js";


const router = express.Router();
const upload = multer({ dest: "uploads/" });

// ✅ Create blog
router.post("/admin/create", upload.single("image"), createBlog);

// ✅ Get all blogs
router.get("/admin/blogs", getBlogs);

// ✅ Get single blog by ID
router.get("/admin/blogs/:id", getSingleBlog);

// ✅ Delete blog by ID
router.delete("/:id", deleteBlog);

export default router;
