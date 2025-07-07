import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import loginUser from "../../store/user/Login/loginApi";

const Sign = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, error, token, success, user } = useSelector(
    (state) => state.login
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      localStorage.setItem("userId", user._id);
      navigate("/dashboard");
    }
  }, [token, navigate]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-purple-700 to-indigo-800 items-center justify-center px-10 py-12 relative">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white bg-opacity-10 rounded-full blur-2xl animate-pulse"></div>
        <div className="text-white text-center z-10 space-y-6 max-w-md">
          <h1 className="text-5xl font-extrabold leading-tight tracking-wide">
            Welcome Back
          </h1>
          <p className="text-lg font-light leading-relaxed">
            Sign in to{" "}
            <span className="font-semibold text-yellow-300">Extra Plugins</span>{" "}
            and unlock exclusive access to premium{" "}
            <strong>Kontakt Libraries</strong>, <strong>Audio Plugins</strong>,
            and <strong>Sound Packs</strong>.
          </p>
          <p className="text-sm text-gray-200">
            The world of music production starts here.
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50 px-4 py-12">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-xl">
          <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600">
            Sign In to Your Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {error && (
              <p className="text-sm text-red-600 text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          <div className="text-right mt-3">
            <Link
              to="/forgot-password"
              className="text-sm text-indigo-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
