import React, { useState, useEffect } from "react";
import { webLogo } from "../../assets/image";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { resetOrderState } from "../../store/order/placeOrderSlice";
import orderPlaced from "../../store/order/placeOrderApi";

const Stripe = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { totalPrice } = useSelector((state) => state.cartData);
  const { success, error, order } = useSelector((state) => state.placeOrder);

  const [form, setForm] = useState({
    cardholder: "",
    cardNumber: "",
    expireDate: "",
    cvc: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFakeStripeSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    const stripeResponse = {
      paymentIntentId: "pi_fake_" + Date.now(),
      amount: totalPrice,
      payment_status: "succeeded",
    };

    try {
      await dispatch(orderPlaced({ paymentData: stripeResponse, token }));
    } catch (error) {
      toast.error("Payment failed!");
    }
  };

  // 🔥 Success + Redirect effect
  useEffect(() => {
    if (success && order) {
      toast.success("🎉 " + order.message || "Order placed successfully!");
      dispatch(resetOrderState());
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    }

    if (error) {
      toast.error(error);
    }
  }, [success, error, order, dispatch, navigate]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-6xl p-0 overflow-hidden flex flex-col md:flex-row">
        <div className="hidden md:block md:w-1/2">
          <img
            src={webLogo.payment}
            alt="Payment Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Secure Payment with Stripe
          </h2>

          <form className="space-y-6" onSubmit={handleFakeStripeSubmit}>
            <input
              type="text"
              name="cardholder"
              value={form.cardholder}
              onChange={handleChange}
              placeholder="e.g. John Doe"
              className="w-full border px-4 py-2 rounded-md"
            />
            <input
              type="text"
              name="cardNumber"
              value={form.cardNumber}
              onChange={handleChange}
              placeholder="0000 0000 0000 0000"
              className="w-full border px-4 py-2 rounded-md"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="expireDate"
                value={form.expireDate}
                onChange={handleChange}
                placeholder="MM/YY"
                className="w-full border px-4 py-2 rounded-md"
              />
              <input
                type="text"
                name="cvc"
                value={form.cvc}
                onChange={handleChange}
                placeholder="123"
                className="w-full border px-4 py-2 rounded-md"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-md"
            >
              Confirm and Pay
            </button>
          </form>

          <div className="mt-8 text-center">
            <img
              src="https://stripe.com/img/v3/home/twitter.png"
              alt="Stripe Logo"
              className="mx-auto h-8"
            />
            <p className="text-xs text-gray-500 mt-2">
              Payments powered by Stripe. All transactions are secure and
              encrypted.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stripe;
