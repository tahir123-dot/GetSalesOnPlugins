import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";
import getUserAddressApi from "../../store/Address/getUserAddressApi";
import saveOrUpdateAddressApi from "../../store/Address/saveOrUpdateAddressApi";

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [stripeSelected, setStripeSelected] = useState(false);

  const { address, loading, error } = useSelector(
    (state) => state.getUserAddress
  );

  console.log(address);

  const { success } = useSelector((state) => state.saveOrUpdateAddress);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    city: "",
  });

  useEffect(() => {
    dispatch(getUserAddressApi());
  }, []);

  useEffect(() => {
    if (address) {
      setFormData({
        firstName: address.firstName || "",
        lastName: address.lastName || "",
        email: address.email || "",
        country: address.country || "",
        city: address.city || "",
      });
    }
  }, [address]);

  useEffect(() => {
    if (success) {
      toast.success("Address saved successfully");
      navigate("/stripe");
    }
  }, [success, navigate]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (!stripeSelected) {
      toast.error("Please select Stripe as your payment method");
      return;
    }

    dispatch(saveOrUpdateAddressApi(formData));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
      {/* Billing Details */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">Billing details</h2>

        <form className="space-y-5" onSubmit={handlePlaceOrder}>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="First name *"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded-full text-sm"
            />
            <input
              type="text"
              placeholder="Last name *"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded-full text-sm"
            />
          </div>

          <input
            type="text"
            placeholder="Country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded-full text-sm"
          />

          <input
            type="text"
            placeholder="Town / City *"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded-full text-sm"
          />

          <input
            type="email"
            placeholder="Email address *"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded-full text-sm"
          />
        </form>
      </div>

      {/* Order Summary */}
      <div className="bg-gray-100 rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4 border-b pb-2">Your order</h2>

        <div className="text-sm text-gray-700">
          <div className="flex justify-between border-b py-2 font-semibold">
            <span>Product</span>
            <span>Subtotal</span>
          </div>

          <div className="flex justify-between py-2 border-b">
            <span>Lexicon PCM Total Bundle - MAC OS × 1</span>
            <span>£0.00</span>
          </div>

          <div className="flex justify-between py-2 border-b">
            <span>Subtotal</span>
            <span>£0.00</span>
          </div>

          <div className="flex justify-between py-2 font-bold">
            <span>Total</span>
            <span>£0.00</span>
          </div>

          <p className="text-xs text-gray-600 mt-4">
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our privacy policy.
          </p>

          <div className="mt-4">
            <label className="inline-flex items-start gap-2">
              <input
                type="checkbox"
                className="mt-1"
                checked={stripeSelected}
                onChange={() => setStripeSelected(!stripeSelected)}
              />
              <span className="text-sm">
                I agree to terms & want to pay using <strong>Stripe</strong>.
              </span>
            </label>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png"
              alt="Stripe Logo"
              className="w-24 mt-2"
            />
          </div>

          <button
            onClick={handlePlaceOrder}
            disabled={loading}
            className="w-full mt-6 bg-black text-white py-3 rounded-full font-semibold text-sm hover:bg-gray-900 transition disabled:opacity-50"
          >
            {loading ? "Saving..." : "Place order"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
