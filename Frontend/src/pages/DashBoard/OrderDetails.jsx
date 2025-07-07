import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import fetchSingleOrder from "../../store/order/fetchSingleOrderApi";

const OrderDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { order, loading, error } = useSelector(
    (state) => state.userSingleOrders
  );

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && id) {
      dispatch(fetchSingleOrder({ orderId: id, token }));
    }
  }, [dispatch, id]);

  if (loading)
    return <p className="text-center py-10">Loading order details...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!order) return null;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Order #{order._id.slice(-6)}
      </h2>

      {/* Order + Shipping Summary */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-white rounded-2xl shadow p-6 space-y-2">
          <h3 className="text-xl font-semibold mb-3 text-gray-700 border-b pb-2">
            🧾 Order Summary
          </h3>
          <p>
            <span className="font-medium text-gray-600">Status:</span>{" "}
            <span className="text-gray-800">{order.orderStatus}</span>
          </p>
          <p>
            <span className="font-medium text-gray-600">Payment:</span>{" "}
            <span className="text-gray-800">{order.paymentStatus}</span>
          </p>
          <p>
            <span className="font-medium text-gray-600">Total:</span>{" "}
            <span className="text-gray-800">£{order.totalAmount}</span>
          </p>
          <p>
            <span className="font-medium text-gray-600">Placed:</span>{" "}
            <span className="text-gray-800">
              {format(new Date(order.placedAt), "PPP")}
            </span>
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 space-y-2">
          <h3 className="text-xl font-semibold mb-3 text-gray-700 border-b pb-2">
            🚚 Shipping Address
          </h3>
          <p>
            <span className="font-medium text-gray-600">Street:</span>{" "}
            <span className="text-gray-800">
              {order.shippingAddress?.street}
            </span>
          </p>
          <p>
            <span className="font-medium text-gray-600">City:</span>{" "}
            <span className="text-gray-800">{order.shippingAddress?.city}</span>
          </p>
          <p>
            <span className="font-medium text-gray-600">Zip:</span>{" "}
            <span className="text-gray-800">
              {order.shippingAddress?.postalCode}
            </span>
          </p>
          <p>
            <span className="font-medium text-gray-600">Country:</span>{" "}
            <span className="text-gray-800">
              {order.shippingAddress?.country}
            </span>
          </p>
        </div>
      </div>

      {/* Ordered Products */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h3 className="text-xl font-semibold mb-5 text-gray-700 border-b pb-3">
          🛍️ Ordered Products
        </h3>
        <div className="space-y-6">
          {order.products.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center gap-4 border-b pb-4"
            >
              <img
                src={item.product.image}
                alt={item.product.name}
                className="w-full sm:w-24 h-24 object-cover rounded-lg border"
              />
              <div className="flex-1">
                <h4 className="font-semibold text-lg text-gray-800">
                  {item.product.name}
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  Quantity:{" "}
                  <span className="text-gray-800">{item.quantity}</span>
                </p>
                <p className="text-sm text-gray-600">
                  Price:{" "}
                  <span className="text-gray-800">£{item.product.price}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
