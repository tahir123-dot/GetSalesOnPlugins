// components/SearchModal.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchKeyword } from "../../store/product/searchSlice";

const SearchModal = ({ onClose }) => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = () => {
    if (keyword.trim()) {
      dispatch(setSearchKeyword(keyword.trim()));
      onClose(); // modal band
      navigate("/shop", { state: { fromSearch: true } });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="text-center w-full max-w-2xl px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          GetSaleonPlugins
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Find the perfect plugin deal by searching below
        </p>

        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden shadow-md">
          <input
            type="text"
            placeholder="Search by name, category, price..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="flex-1 px-5 py-4 text-lg focus:outline-none"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 text-lg font-semibold"
          >
            Search
          </button>
        </div>

        <button
          onClick={onClose}
          className="mt-6 text-sm text-gray-600 hover:underline"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default SearchModal;
