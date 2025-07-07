// controller/Order/orderController.js

import Order from "../../model/order.js";

import Product from "../../model/product.js";
import User from "../../model/user.js";

export const updateOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    const validStatuses = ["Processing", "Shipped", "Delivered", "Cancelled"];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: "Invalid order status" });
    }

    // ✅ Update and fully populate the updated order
    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { orderStatus: status },
      { new: true }
    )
      .populate("products.product", "name price") // ✅ FIXED (space not comma)
      .populate("user", "username email"); // ✅ Also populate user

    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    let totalDeliveredPrice = 0;

    // ✅ Calculate total delivered orders' price
    if (status === "Delivered") {
      const deliveredOrders = await Order.find({
        orderStatus: "Delivered",
      }).populate("products.product", "name price");

      for (const order of deliveredOrders) {
        for (const item of order.products) {
          const productPrice = item.product?.price || 0;
          totalDeliveredPrice += productPrice * item.quantity;
        }
      }
    }

    // ✅ Send fully populated updatedOrder + totalDeliveredPrice if needed
    res.status(200).json({
      message: "Order status updated successfully",
      updatedOrder,
      ...(status === "Delivered" && { totalDeliveredPrice }),
    });
  } catch (err) {
    console.error("Update Order Status Error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({})
      .populate("products.product", "name image price")
      .populate("user", "username email")
      .populate("shippingAddress");

    const totalOrder = orders.length;

    res.status(200).json({ orders, totalOrder });
  } catch (err) {
    console.error("Get Orders Error:", err);
    res.status(500).json({ message: "Failed to fetch orders" });
  }
};

export const singleOrderId = async (req, res) => {
  try {
    const { orderId } = req.params;

    const order = await Order.findById(orderId)
      .populate("user", "username email")
      .populate("products.product", "name image price")
      .populate("shippingAddress");

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json({ order });
  } catch (err) {
    console.error("Get single order error:", err);
    res.status(500).json({ message: "Failed to fetch order" });
  }
};
