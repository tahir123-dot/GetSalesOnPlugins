import Product from "../../model/product.js";
import User from "../../model/user.js";
import Feedback from "../../model/Feedback.js";

const addFeedBack = async (req, res) => {
  try {
    const { userId, productId, description, rating } = req.body;

    // Check user exists
    const userExist = await User.findById(userId);
    if (!userExist) {
      return res.status(404).json({ message: "User does not exist." });
    }

    // Check product exists
    const productExist = await Product.findById(productId);
    if (!productExist) {
      return res.status(404).json({ message: "Invalid product." });
    }

    // Prevent duplicate feedback
    const alreadyReviewed = await Feedback.findOne({
      user: userId,
      product: productId,
    });
    if (alreadyReviewed) {
      return res.status(400).json({ message: "Feedback already submitted." });
    }

    // Create feedback
    const feedback = await Feedback.create({
      user: userId,
      product: productId,
      description,
      rating,
    });

    res.status(200).json({
      message: "Feedback added successfully",
      response: feedback,
    });
  } catch (error) {
    console.error("Feedback error:", error);
    res.status(500).json({ error: error.message });
  }
};

const getProductFeedbacks = async (req, res) => {
  const { productId } = req.params;

  try {
    const feedbacks = await Feedback.find({ product: productId })
      .populate("user", "name")
      .sort({ placedAt: -1 });

    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { addFeedBack, getProductFeedbacks };
