import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import getUserCartApi from "../../store/Cart/getUserCartApi";
import { removeFromCartApi } from "../../store/Cart/cartRemoveApi";

const Cart = () => {
  const dispatch = useDispatch();

  const { cartItems, totalPrice, loading, error } = useSelector(
    (state) => state.cartData
  );

  const user = localStorage.getItem("userId");

  useEffect(() => {
    if (user) {
      dispatch(getUserCartApi(user));
    }
  }, [dispatch, user]);

  const removeItem = async (id) => {
    const res = await dispatch(removeFromCartApi(id));
    if (res.meta.requestStatus === "fulfilled") {
      toast.success("Item removed from cart");
      dispatch(getUserCartApi(user));
    } else {
      toast.error("Failed to remove item");
    }
  };

  if (loading) {
    return <div className="text-center py-10">Loading Cart...</div>;
  }

  if (error) {
    return <div className="text-center py-10">{error.message}</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="hidden md:grid grid-cols-5 font-semibold text-gray-700 text-sm border-b pb-3 mb-4">
        <h2 className="col-span-2">Product</h2>
        <h2 className="text-center">Price</h2>
        <h2 className="text-center">Quantity</h2>
        <h2 className="text-center">Remove</h2>
      </div>

      {cartItems?.length > 0 ? (
        cartItems.map((item) => (
          <div
            key={item._id}
            className="border-b py-4 text-sm md:grid md:grid-cols-5 md:items-center md:gap-4"
          >
            <div className="flex items-center gap-4 md:col-span-2">
              <img
                src={item.product?.image}
                alt={item.product?.name}
                className="w-16 h-16 object-cover rounded-md border"
              />
              <div>
                <h3 className="font-medium">{item.product?.name}</h3>
                <p className="text-gray-500">
                  {item.product?.category} - {item.operatingSystem}
                </p>
              </div>
            </div>

            <div className="flex flex-col mt-4 md:mt-0 md:hidden gap-3">
              <div className="flex justify-between">
                <span className="text-gray-500">Price:</span>
                <span className="font-medium text-gray-800">
                  ${item.product?.price}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Quantity:</span>
                <span className="font-medium text-gray-800">
                  {item.quantity}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Remove:</span>
                <button
                  onClick={() => removeItem(item._id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="w-5 h-5 inline-block" />
                </button>
              </div>
            </div>

            <div className="hidden md:block text-center font-medium text-gray-800">
              ${item.product?.price}
            </div>
            <div className="hidden md:block text-center">
              <span>{item.quantity}</span>
            </div>
            <div className="hidden md:block text-center">
              <button
                onClick={() => removeItem(item._id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 className="w-5 h-5 inline-block" />
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center py-10 text-gray-600">
          Your cart is empty.
        </div>
      )}

      {cartItems?.length > 0 && (
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <Link to="/checkout">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition">
              Proceed to Checkout
            </button>
          </Link>

          <div className="p-4 shadow-sm w-full sm:w-auto">
            <div className="flex justify-between gap-8 text-sm text-gray-600 mb-1">
              <span>Subtotal:</span>
              <span className="font-medium text-gray-800">${totalPrice}</span>
            </div>
            <div className="border-t border-gray-300 mt-3 pt-3"></div>
            <div className="flex justify-between gap-8 text-base font-semibold text-gray-900">
              <span>Total:</span>
              <span>${totalPrice}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
