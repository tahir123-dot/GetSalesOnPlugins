import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Trash2 } from "lucide-react";

import { removeFromWishlist } from "../../store/Wishlist/whishSlice";
import { Link } from "react-router-dom";

const WhishList = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.Wishlist.wishlist);

  const handleRemove = (id) => {
    dispatch(removeFromWishlist(id));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="hidden md:grid grid-cols-5 font-semibold text-gray-700 text-sm border-b pb-3 mb-4">
        <h2 className="col-span-2">Product</h2>
        <h2 className="text-center">Price</h2>
        <h2 className="text-center">Product Info</h2>
        <h2 className="text-center">Remove</h2>
      </div>

      {wishlistItems.map((item) => (
        <div
          key={item._id}
          className="border-b py-4 text-sm md:grid md:grid-cols-5 md:items-center md:gap-4"
        >
          <div className="flex items-center gap-4 md:col-span-2">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover rounded-md border"
            />
            <div>
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-gray-500">{item.category}</p>
            </div>
          </div>

          <div className="hidden md:block text-center font-medium text-gray-800">
            ${item.price}
          </div>
          <div className="hidden md:block text-center">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1 rounded-md text-sm">
              <Link to={`/shop/${item._id}`}>Go to Product Page</Link>
            </button>
          </div>
          <div className="hidden md:block text-center">
            <button
              onClick={() => handleRemove(item._id)}
              className="text-red-500 hover:text-red-700"
            >
              <Trash2 className="w-5 h-5 inline-block" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhishList;
