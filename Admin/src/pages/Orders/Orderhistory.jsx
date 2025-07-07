import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StatusDropdown from "./StatusDropdown";
import { Link } from "react-router-dom";
import { fetchAllOrders } from "../../Store/Order/fetchOrdersApi";

const OrderHistory = () => {
  const dispatch = useDispatch();
  const { orders, loading } = useSelector((state) => state.getAllOrdersdata);

  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch(fetchAllOrders(token));
  }, [dispatch]);

  if (loading) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Order History
        </h2>

        <div className="overflow-x-auto bg-white border rounded-xl shadow-sm">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left">Product</th>
                <th className="px-4 py-3 text-left">User</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Date</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white text-sm">
              {orders.map((order) => (
                <tr key={order._id} className="hover:bg-gray-50">
                  <td className="px-4 py-4">
                    {order.products[0]?.product?.name || "N/A"}
                  </td>
                  <td className="px-4 py-4">{order.user?.username}</td>
                  <td className="px-4 py-4">
                    <StatusDropdown
                      orderId={order._id}
                      currentStatus={order.orderStatus}
                    />
                  </td>
                  <td className="px-4 py-4">
                    {new Date(order.placedAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-4">
                    <Link
                      to={`/orders/${order._id}`}
                      className="text-indigo-600 font-medium hover:underline"
                    >
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
