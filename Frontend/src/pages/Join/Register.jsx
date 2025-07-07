import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import registerUser from "../../store/user/Register/registerApi";
import { resetRegisterState } from "../../store/user/Register/registerSlice";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, success } = useSelector((state) => state.register);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await dispatch(registerUser(formData));
    if (res.meta.requestStatus === "fulfilled") {
      setFormData({ username: "", email: "", password: "" });
    }
  };

  useEffect(() => {
    if (success) {
      navigate("/");
      dispatch(resetRegisterState());
    }
  }, [success, navigate, dispatch]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Gradient Section */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-purple-700 to-indigo-800 items-center justify-center px-10 py-12 relative">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white bg-opacity-10 rounded-full blur-2xl animate-pulse"></div>
        <div className="text-white text-center z-10 space-y-6 max-w-md">
          <h1 className="text-5xl font-extrabold leading-tight tracking-wide">
            Unlock Your Sound
          </h1>
          <p className="text-lg font-light leading-relaxed">
            Join{" "}
            <span className="font-semibold text-yellow-300">Extra Plugins</span>{" "}
            — your gateway to top-tier Kontakt libraries, premium sample packs,
            and powerful audio plugins for professional music production.
          </p>
          <p className="text-sm text-gray-200">No limits. Just creativity.</p>
        </div>
      </div>

      {/* Right Side - Registration Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50 px-4 py-12">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-xl">
          <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600">
            Create Your Account
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your name"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
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
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </form>

          {error && (
            <div className="text-red-500 text-sm text-center mt-2">{error}</div>
          )}

          <div className="text-center mt-4 text-sm">
            Already have an account?{" "}
            <Link to="/sign-in" className="text-indigo-600 hover:underline">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
