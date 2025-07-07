import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import adminLoginApi from "../../Store/auth/adminLoginApi.js";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { loading, error, admin } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(adminLoginApi({ username, password }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-md p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Admin Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              UserName
            </label>
            <input
              type="text"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md"
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        {/* ✅ Show error */}
        {error && (
          <p className="text-red-600 text-sm mt-4 text-center">{error}</p>
        )}

        {/* ✅ Show success (optional) */}
        {admin && (
          <p className="text-green-600 text-sm mt-4 text-center">
            Welcome, {admin.name}!
            <Navigate to="/"/>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
