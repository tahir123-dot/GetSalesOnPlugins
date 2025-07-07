import Cart from "../../model/cart.js";
import Product from "../../model/product.js";

export const addToCart = async (req, res) => {
  try {
    const { userId, productId, quantity, selectedOS } = req.body;

    if (!userId || !productId || !selectedOS || !quantity) {
      return res.status(400).json({ message: "Missing fields" });
    }

    // Check if already in cart (optional)
    const existing = await Cart.findOne({ user: userId, product: productId });

    if (existing) {
      existing.quantity += parseInt(quantity);
      existing.operatingSystem = selectedOS;
      await existing.save();
      return res.status(200).json({ message: "Cart updated", cart: existing });
    }

    // New entry
    const newCart = new Cart({
      user: userId,
      product: productId,
      quantity,
      operatingSystem: selectedOS,
    });

    await newCart.save();
    res.status(201).json({ message: "Added to cart", cart: newCart });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const removeFromCart = async (req, res) => {
  try {
    const { id } = req.params;

    const removedItem = await Cart.findByIdAndDelete(id);
    if (!removedItem) {
      return res.status(404).json({ message: "Item not found in cart" });
    }

    res.status(200).json({ message: "Item removed from cart", removedItem });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// controllers/cartController.js

export const getCartItems = async (req, res) => {
  try {
    const userId = req.params.userId;

    // Fetch all cart items for the user and populate product details
    const cartItems = await Cart.find({ user: userId }).populate("product");

    let totalPrice = 0;

    let totalCount = cartItems.length;

    // Calculate totalPrice
    cartItems.forEach((item) => {
      totalPrice += item.quantity * item.product.price;
    });

    res.status(200).json({
      cart: cartItems,
      totalCount,
      totalPrice,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch cart items", error });
  }
};
