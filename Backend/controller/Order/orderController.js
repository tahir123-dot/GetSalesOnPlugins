import Order from "../../model/order.js";

export const getUserOrders = async (req, res) => {
  try {
    const userId = req.user._id; 

    const orders = await Order.find({ user: userId })
      .populate("products.product") 
      .populate("shippingAddress") 
      .sort({ placedAt: -1 }); 

    res.status(200).json({ orders });
  } catch (err) {
    console.error("Error fetching user orders:", err);
    res
      .status(500)
      .json({ message: "Failed to fetch orders", error: err.message });
  }
};



export const getSingleOrder = async (req, res) => {
  try {
    const userId = req.user._id; 
    const { orderId } = req.params;

    // Find order by ID and match with user
    const order = await Order.findOne({ _id: orderId, user: userId })
      .populate("products.product")
      .populate("shippingAddress");

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json({ order });
  } catch (error) {
    console.error("Get Order Error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
