import React from "react";
import { Link } from "react-router-dom";

const Forget = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Info & Branding */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-purple-700 to-indigo-800 items-center justify-center px-10 py-12 relative">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white bg-opacity-10 rounded-full blur-2xl animate-pulse"></div>
        <div className="text-white text-center z-10 space-y-6 max-w-md">
          <h1 className="text-5xl font-extrabold leading-tight tracking-wide">
            Forgot Your Password?
          </h1>
          <p className="text-lg font-light leading-relaxed">
            No worries! Enter your email to reset your password and get back to
            creating with{" "}
            <span className="font-semibold text-yellow-300">Extra Plugins</span>
            .
          </p>
          <p className="text-sm text-gray-200">
            Your sound tools are just a few clicks away.
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50 px-4 py-12">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-xl">
          <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600">
            Reset Password
          </h2>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
            >
              Send Reset Link
            </button>
          </form>

          <div className="text-center mt-4 text-sm">
            Remember your password?{" "}
            <Link to="/sign-in" className="text-indigo-600 hover:underline">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forget;
