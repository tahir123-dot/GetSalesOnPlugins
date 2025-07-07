import { uploadOnCloudinary } from "../config/cloudinary.js";
import Blog from "../model/Blog.js";

// ✅ Create Blog (already done)
export const createBlog = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }

    const localFilePath = req.file.path;
    const cloudinaryRes = await uploadOnCloudinary(localFilePath);

    if (!cloudinaryRes) {
      return res.status(500).json({ message: "Image upload failed" });
    }

    const newBlog = new Blog({
      title,
      description,
      image: cloudinaryRes.secure_url,
    });

    await newBlog.save();

    res.status(201).json({ message: "Blog created successfully", newBlog });
  } catch (error) {
    console.error("Error creating blog:", error);
    res.status(500).json({ message: error.message });
  }
};

// ✅ Get All Blogs
export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    console.error("Error getting blogs:", error);
    res.status(500).json({ message: error.message });
  }
};

// ✅ Get Single Blog by ID
export const getSingleBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json(blog);
  } catch (error) {
    console.error("Error getting single blog:", error);
    res.status(500).json({ message: error.message });
  }
};

// ✅ Delete Blog
export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json({ message: "Blog deleted successfully", blog });
  } catch (error) {
    console.error("Error deleting blog:", error);
    res.status(500).json({ message: error.message });
  }
};
