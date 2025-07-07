import cloudinary from "./configCloudinary.js";
import fs from "fs";

const uploadOnCloudinary = async (filepath) => {
  try {
    if (!filepath) return null;

    const response = await cloudinary.uploader.upload(filepath, {
      resource_type: "image",
    });

    fs.unlinkSync(filepath);

    return response;
  } catch (error) {
    console.error("Cloudinary Upload Error:", error);
    fs.unlinkSync(filepath);
    return null;
  }
};

export { uploadOnCloudinary };
