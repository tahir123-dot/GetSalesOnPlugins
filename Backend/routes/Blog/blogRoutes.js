import express from "express";
import {
  getBlogs,
  getSingleBlog,
  deleteBlog,
} from "../../controller/blogController.js";

const router = express.Router();




// ✅ Get all blogs
router.get("/usr/blogs", getBlogs);

// ✅ Get single blog by ID
router.get("/usr/blogs/:id", getSingleBlog);

// ✅ Delete blog by ID
router.delete("/usr/:id", deleteBlog);

export default router;
