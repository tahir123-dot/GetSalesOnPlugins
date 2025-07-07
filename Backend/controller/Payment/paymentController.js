import Order from "../../model/order.js";
import Cart from "../../model/cart.js";
import Address from "../../model/address.js";
import Payment from "../../model/payment.js";

export const placeOrder = async (req, res) => {
  try {
    const userId = req.user._id;
    const {paymentIntentId, payment_status, amount } = req.body;

    
    // 1. Get cart items
    const cartItems = await Cart.find({ user: userId });
    console.log(cartItems);

    if (cartItems.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    // 2. Get address
    const shippingAddress = await Address.findOne({ user: userId });
    if (!shippingAddress) {
      return res.status(400).json({ message: "Shipping address not found" });
    }

    // 3. Create order
    const order = await Order.create({
      user: userId,
      products: cartItems.map((item) => ({
        product: item.product._id,
        quantity: item.quantity,
      })),
      shippingAddress: shippingAddress._id,
      totalAmount: amount,
      paymentStatus: payment_status === "succeeded" ? "Paid" : "Unpaid",
    });

    // 4. Save payment info
    await Payment.create({
      paymentIntentId,
      amount,
      payment_status,
      user: userId,
      order: order._id,
    });

    // 5. Clear cart
    await Cart.deleteMany({ user: userId });

    res.status(200).json({ message: "Order placed successfully", order });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
