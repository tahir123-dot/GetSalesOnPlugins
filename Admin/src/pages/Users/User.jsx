import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../../Store/User/fetchUsersApi";
import { deleteUser } from "../../Store/User/deleteUserApi";

const User = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.allUsers);


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) dispatch(fetchAllUsers(token));
  }, [dispatch]);

  const handleResetPassword = (email) => {
    alert(`Reset password link sent to: ${email}`);
  };

  const handleDelete = (id) => {
    const token = localStorage.getItem("token");
    if (window.confirm("Are you sure you want to delete this user?")) {
      dispatch(deleteUser({ userId: id, token }));
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">All Users</h2>

      {loading && <p className="text-center">Loading users...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="overflow-x-auto shadow border border-gray-200 rounded-md bg-white">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 text-left text-sm text-gray-600">
            <tr>
              <th className="p-3">
                <input type="checkbox" />
              </th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Total Orders</th>
              <th className="p-3">Total Spent</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm bg-white">
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user._id}>
                  <td className="p-3">
                    <input type="checkbox" />
                  </td>
                  <td className="p-3 font-medium text-gray-800">{user.name}</td>
                  <td className="p-3 text-gray-700">{user.email}</td>
                  <td className="p-3">{user.totalOrders || 0}</td>
                  <td className="p-3">
                    £{user.totalSpent?.toFixed(2) || "0.00"}
                  </td>
                  <td className="p-3">
                    <div className="flex gap-3 items-center">
                     
                      <span className="text-gray-300">|</span>
                      <button
                        onClick={() => handleDelete(user._id)}
                        className="text-red-600 hover:underline text-xs"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center py-6 text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
