import Product from "../model/product.js";
import { uploadOnCloudinary } from "../config/cloudinary.js";

// ✅ Add Product (Already Done)
const addProduct = async (req, res) => {
  try {
    const {
      productName,
      description,
      shortDescription,
      brand,
      category,
      deviceSetup,
      downloadUrl,
      isFree,
      price,
    } = req.body;

    const localFilePath = req.file?.path;

    const cloudinaryResponse = await uploadOnCloudinary(localFilePath);
    if (!cloudinaryResponse) {
      return res.status(500).json({ message: "Cloudinary upload failed" });
    }

    const newProduct = new Product({
      name: productName,
      description,
      shortDescription,
      brand,
      category,
      device: deviceSetup,
      downloadUrl, // ✅ FIXED
      isFree, // ✅ FIXED
      price,
      image: cloudinaryResponse.secure_url,
    });

    await newProduct.save();

    res.status(201).json({ message: "Product added successfully", newProduct });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ error: error.message });
  }
};

// ✅ Edit Product
const editProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const {
      productName,
      description,
      shortDescription,
      brand,
      category,
      deviceSetup,
      downloadUrl,
      isFree,
      price,
    } = req.body;

    const updateData = {
      name: productName,
      description,
      shortDescription,
      brand,
      category,
      device: deviceSetup,
      downloadUrl,
      isFree,
      price,
    };

    // If image is updated
    if (req.file) {
      const localFilePath = req.file?.path;
      const cloudinaryResponse = await uploadOnCloudinary(localFilePath);
      if (!cloudinaryResponse) {
        return res.status(500).json({ message: "Cloudinary upload failed" });
      }
      updateData.image = cloudinaryResponse.secure_url;
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      updateData,
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product updated", updatedProduct });
  } catch (error) {
    console.error("Error editing product:", error);
    res.status(500).json({ error: error.message });
  }
};

// ✅ Delete Product
const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted", deletedProduct });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get All Products
const getProduct = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 }); // latest first
    const totalCount = products.length;
    res.status(200).json({ products, totalCount });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get Single Product by ID
const getProductById = async (req, res) => {
  try {
    const productId = req.params.id;

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    res.status(500).json({ error: error.message });
  }
};

export { addProduct, editProduct, deleteProduct, getProduct, getProductById };
