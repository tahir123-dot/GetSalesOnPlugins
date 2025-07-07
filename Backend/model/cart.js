import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: { type: Number, required: true, min: 1 },
  operatingSystem: { type: String, required: true }, 
  addedAt: { type: Date, default: Date.now },
});

const Cart = mongoose.model("Cart", cartSchema, "Cart");
export default Cart;
