import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
      minlength: [3, "Product name must be at least 3 characters long"],
      maxlength: [100, "Product name must be less than 100 characters"],
    },

    description: {
      type: String,
      required: [true, "Description is required"],
      minlength: [20, "Description must be at least 20 characters long"],
    },

    shortDescription: {
      type: String,
      required: [true, "Short description is required"],
      maxlength: [700, "Short description must be under 300 characters"],
    },

    brand: {
      type: String,
      required: [true, "Brand is required"],
      trim: true,
    },

    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true,
    },

    device: {
      type: [String],
      required: [true, "At least one device setup is required"],
      validate: {
        validator: function (val) {
          return val.length > 0;
        },
        message: "At least one device must be selected",
      },
    },

    downloadUrl: {
      type: String,
      required: [true, "Download URL is required"],
      select: false,
      validate: {
        validator: function (v) {
          return /^https?:\/\/.+/.test(v);
        },
        message: "Please enter a valid URL",
      },
    },

    isFree: {
      type: Boolean,
      default: false,
    },

    price: {
      type: Number,
      required: function () {
        return !this.isFree;
      },
      min: [0, "Price must be a positive number"],
    },

    image: {
      type: String,
      required: [true, "Product image is required"],
    },
  },
  {
    timestamps: true, 
  }
);

const Product = mongoose.model("Product", productSchema,"Product");
export default Product;
