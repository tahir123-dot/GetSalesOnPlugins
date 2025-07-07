import React, { useEffect } from "react";
import {
  UserIcon,
  ShoppingBagIcon,
  ClipboardDocumentCheckIcon,
  CurrencyPoundIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import getProductApi from "../Store/Product/getProductApi";
import { fetchAllUsers } from "../Store/User/fetchUsersApi";
import { fetchAllOrders } from "../Store/Order/fetchOrdersApi";

const Dashboard = () => {
  const dispatch = useDispatch();

  const { totalCount } = useSelector((state) => state.getProduct);
  const { users } = useSelector((state) => state.allUsers);
  const { orders } = useSelector((state) => state.getAllOrdersdata);

  const totalUser = localStorage.getItem("Users");
  const totalOrder = localStorage.getItem("totalOrder");
  const Revenue = localStorage.getItem("Revenue") || 0;

  const stats = [
    {
      id: 1,
      name: "Total Users",
      value: totalUser,
      icon: UserIcon,
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      id: 2,
      name: "Total Products",
      value: totalCount,
      icon: ShoppingBagIcon,
      color: "bg-green-100 text-green-600",
    },
    {
      id: 3,
      name: "Total Orders",
      value: totalOrder,
      icon: ClipboardDocumentCheckIcon,
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      id: 4,
      name: "Total Revenue",
      value: `£${Revenue}`,
      icon: CurrencyPoundIcon,
      color: "bg-purple-100 text-purple-600",
    },
  ];

  useEffect(() => {
    dispatch(getProductApi());
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(fetchAllUsers(token));
      dispatch(fetchAllOrders(token));
    }
  }, [dispatch]);

  const recentOrders = orders.slice(0, 3);
  const recentUsers = users.slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white shadow rounded-lg p-5 flex items-center gap-4"
          >
            <div className={`p-3 rounded-full ${stat.color}`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm text-gray-600 font-medium">{stat.name}</h4>
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Orders Section */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Recent Orders
        </h2>
        <ul className="divide-y divide-gray-200 text-sm">
          {recentOrders.map((order) => (
            <li
              key={order._id}
              className="py-3 flex justify-between items-center"
            >
              <span>{order.products[0]?.product?.name || "N/A"}</span>
              <span className="text-gray-600 font-medium">
                {order.orderStatus}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Users Section */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Recent Users
        </h2>
        <ul className="divide-y divide-gray-200 text-sm">
          {recentUsers.map((user) => (
            <li
              key={user._id}
              className="py-3 flex justify-between items-center"
            >
              <span>
                {user.name} ({user.email})
              </span>
              <span className="text-gray-600">
                {user.totalOrders || 0} orders
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
