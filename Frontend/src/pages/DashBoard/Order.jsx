import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import { fetchUserOrders } from "../../store/order/fetchOrdersApi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Star, X } from "lucide-react";

const getStatusColor = (status) => {
  switch (status) {
    case "Delivered":
      return "text-green-600 bg-green-100";
    case "Cancelled":
      return "text-red-600 bg-red-100";
    case "Processing":
      return "text-yellow-600 bg-yellow-100";
    default:
      return "text-gray-600 bg-gray-100";
  }
};

const Order = () => {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state) => state.userOrders);
  const [feedback, setFeedBack] = useState(false);
  const [rating, setRating] = useState(0);

  const feedBackPopup = () => {
    setFeedBack(true);
  };

  const renderStarsRating = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`w-4 h-4 ${
            i <= rating ? "text-yellow-500" : "text-gray-300"
          }`}
          fill={i <= rating ? "#facc15" : "none"}
        />
      );
    }
    return stars;
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(fetchUserOrders(token));
    }
  }, [dispatch]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">My Orders</h1>

      {loading && <p className="text-center">Loading orders...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-sm text-left">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase tracking-wider">
              <th className="p-3 whitespace-nowrap">Order ID</th>
              <th className="p-3 whitespace-nowrap">Date</th>
              <th className="p-3 whitespace-nowrap">Status</th>
              <th className="p-3 whitespace-nowrap">Total</th>
              <th className="p-3 whitespace-nowrap">Actions</th>
              <th className="p-3 whitespace-nowrap">FeedBack</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr
                  key={order._id}
                  className="border-b hover:bg-gray-50 transition duration-150"
                >
                  <td className="p-3 font-medium whitespace-nowrap">
                    #{order._id.slice(-5)}
                  </td>
                  <td className="p-3 whitespace-nowrap">
                    {format(new Date(order.placedAt), "MMM dd, yyyy")}
                  </td>
                  <td className="p-3 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                        order.orderStatus
                      )}`}
                    >
                      {order.orderStatus}
                    </span>
                  </td>
                  <td className="p-3 whitespace-nowrap">
                    £{order.totalAmount}
                  </td>
                  <td className="p-3 whitespace-nowrap">
                    <Link
                      to={`/order/${order._id}`}
                      className="text-indigo-600 hover:underline"
                    >
                      View
                    </Link>
                  </td>
                  <td className="p-3 whitespace-nowrap">
                    <button
                      className="text-indigo-600 hover:underline cursor-pointer"
                      onClick={feedBackPopup}
                    >
                      Give Feedback
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={5}
                  className="text-center text-gray-500 py-6 font-medium"
                >
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {feedback ? (
        <>
          <div className="fixed inset-0 z-50  bg-opacity-0 flex items-center justify-center">
            <div className="relative bg-white rounded-2xl shadow-xl p-6 w-[90%] max-w-md">
              {/* Close Icon */}
              <button
                onClick={() => setFeedBack(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-red-500 cursor-pointer"
              >
                <X size={20} />
              </button>

              {/* Star Icon */}
              <div className="flex justify-center mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="px-2">
                    <Star
                      onClick={() => setRating(i + 1)}
                      className={
                        i < rating ? "text-yellow-400" : "text-gray-400"
                      }
                      fill={i <= rating ? "#facc15" : "none"}
                    />
                  </div>
                ))}
              </div>

              {/* Description Textarea */}
              <div className="mb-4">
                <textarea
                  rows="5"
                  placeholder="Write your feedback..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
                Submit Feedback
              </button>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Order;
