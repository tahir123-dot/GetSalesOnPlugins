import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import fetchSingleOrder from "../../Store/Order/fetchSingleOrderApi";

const OrderDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { order, loading } = useSelector((state) => state.getSingleOrder);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(fetchSingleOrder({ orderId: id, token }));
    }
  }, [id]);

  if (loading || !order)
    return <p className="text-center text-gray-500 py-10">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 text-gray-800">
      <div className="bg-white shadow-lg rounded-2xl p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-indigo-700">
              Order #{order._id.slice(-6)}
            </h1>
            <p className="text-sm text-gray-500">
              Placed: {new Date(order.placedAt).toLocaleString()}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium 
              ${
                order.orderStatus === "Delivered"
                  ? "bg-green-100 text-green-700"
                  : order.orderStatus === "Shipped"
                  ? "bg-blue-100 text-blue-700"
                  : order.orderStatus === "Processing"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {order.orderStatus}
            </span>
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
              Payment: {order.paymentStatus}
            </span>
            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium">
              Total: £{order.totalAmount}
            </span>
          </div>
        </div>

        {/* Customer + Address in one row */}
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-10 text-sm">
          <div className="flex-1">
            <h2 className="text-lg font-semibold mb-2 text-gray-700">
              Customer Info
            </h2>
            <p>
              <strong>Name:</strong> {order.user?.username}
            </p>
            <p>
              <strong>Email:</strong> {order.user?.email}
            </p>
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold mb-2 text-gray-700">
              Shipping Address
            </h2>
            <p>
              <strong>City: </strong> {order.shippingAddress?.city}
            </p>
            <p>
              <strong>Country: </strong>
              {order.shippingAddress?.country}
            </p>
          </div>
        </div>

        {/* Products */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Ordered Products</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm border">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 border-b">Product</th>
                  <th className="px-4 py-2 border-b">Quantity</th>
                  <th className="px-4 py-2 border-b">Price</th>
                  <th className="px-4 py-2 border-b">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {order.products.map((item, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 flex items-center gap-3">
                      <img
                        src={item.product?.image}
                        alt={item.product?.name}
                        className="w-12 h-12 object-cover rounded border"
                      />
                      <span>{item.product?.name}</span>
                    </td>
                    <td className="px-4 py-3">{item.quantity}</td>
                    <td className="px-4 py-3">£{item.product?.price}</td>
                    <td className="px-4 py-3 font-semibold">
                      £{(item.quantity * item.product?.price).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
