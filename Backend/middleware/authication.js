import Jwt from "jsonwebtoken";
import Admin from "../model/admin.js";
import User from "../model/user.js";

const tokenGenerate = async (id) => {
  return Jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const decoded = Jwt.verify(token, process.env.JWT_SECRET);

    let user = await Admin.findById(decoded.id).select("-password");

    if (!user) {
      user = await User.findById(decoded.id).select("-password");
    }

    if (!user) {
      return res.status(401).json({ message: "User or Admin not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Invalid token", error: error.message });
  }
};

export { tokenGenerate, verifyToken };
