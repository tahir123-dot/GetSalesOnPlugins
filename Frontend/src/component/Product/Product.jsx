import React, { useEffect } from "react";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import getProductApi from "../../store/product/getProductApi";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../store/Wishlist/whishSlice";

const Product = ({ limit, customProducts }) => {
  const dispatch = useDispatch();
  const { loading, products, error } = useSelector((state) => state.getProduct);
  const wishlist = useSelector((state) => state.Wishlist.wishlist);

  const displayedProducts =
    customProducts || (limit ? products.slice(0, limit) : products);

  useEffect(() => {
    if (!products.length) {
      dispatch(getProductApi());
    }
  }, [dispatch, products]);

  const toggleWishlist = (item) => {
    const exists = wishlist.find((wishItem) => wishItem._id === item._id);
    if (exists) {
      dispatch(removeFromWishlist(item._id));
    } else {
      dispatch(addToWishlist(item));
    }
  };

  const isInWishlist = (id) => {
    return wishlist.some((item) => item._id === id);
  };

  return (
    <>
      {loading && (
        <div className="text-center text-blue-600 py-10 font-semibold text-lg">
          Loading Products...
        </div>
      )}

      {error && (
        <div className="text-center text-red-500 py-6 font-medium">
          Error: {error}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 mt-16 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {displayedProducts.map((item) => (
          <div key={item._id}>
            <Link to={`/shop/${item._id}`}>
              <div className="bg-white overflow-hidden transition duration-300 flex flex-col group">
                <div className="px-4 pt-4 text-xs text-gray-500 font-medium tracking-wider">
                  {item.category}
                </div>
                <div className="px-4 text-sm font-semibold text-gray-900 mb-2">
                  {item.name.length > 27
                    ? item.name.slice(0, 27) + "..."
                    : item.name}
                </div>
                <div className="w-full h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src={item?.image}
                    alt={item.name}
                    className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </Link>

            {/* Price + Heart */}
            <div className="flex justify-between items-center px-4 py-4">
              <p className="text-sm font-bold text-gray-700">${item.price}</p>
              <Heart
                className={`w-5 h-5 cursor-pointer transition ${
                  isInWishlist(item._id) ? "text-red-500" : "text-gray-400"
                }`}
                onClick={() => toggleWishlist(item)}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
