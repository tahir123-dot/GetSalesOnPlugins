import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateOrderStatus } from "../../Store/Order/updateOrderStatusApi";

const StatusDropdown = ({ orderId, currentStatus }) => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState(currentStatus);
  const [loading, setLoading] = useState(false);

  const handleChange = async (e) => {
    const newStatus = e.target.value;
    setStatus(newStatus);
    setLoading(true);

    try {
      const token = localStorage.getItem("token");
      await dispatch(updateOrderStatus({ orderId, status: newStatus, token }));
    } catch (err) {
      console.error("Failed to update status", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <select
      value={status}
      onChange={handleChange}
      disabled={loading}
      className={`border rounded px-2 py-1 text-sm ${
        loading ? "opacity-70 cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      <option value="Processing">Processing</option>
      <option value="Shipped">Shipped</option>
      <option value="Delivered">Delivered</option>
      <option value="Cancelled">Cancelled</option>
    </select>
  );
};

export default StatusDropdown;
