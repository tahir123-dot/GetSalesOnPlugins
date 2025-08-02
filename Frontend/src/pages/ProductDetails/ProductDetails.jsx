import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Star, X } from "lucide-react";
import Subheading from "../../component/Subheading";
import { useDispatch, useSelector } from "react-redux";

import Product from "../../component/Product/Product";
import getSingleProductApi from "../../store/product/getSingleProductApi.js";
import { addToCartApi } from "../../store/Cart/cartAddApi.js";
import getUserCartApi from "../../store/Cart/getUserCartApi.js";
import { createFeedBack } from "../../store/FeedBack/feedBackApi";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { product, loading } = useSelector((state) => state.singleProduct);
  const user = localStorage.getItem("userId");
  const [feedback, setFeedBack] = useState(null);

  const [activeTab, setActiveTab] = useState("description");
  const [quantity, setQuantity] = useState(1);
  const [selectedOS, setSelectedOS] = useState(null);
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");

  const feedBackPopup = () => {
    if (user) {
      setFeedBack(true);
    } else {
      alert("please login for give feedback");
    }
  };

  const handleSubmit = () => {
    const data = {
      userId: user,
      productId: product._id,
      description,
      rating,
    };

    dispatch(createFeedBack(data));

    setDescription("");
    setRating(0);
    setFeedBack(false);
  };

  useEffect(() => {
    dispatch(getSingleProductApi(id));
  }, [dispatch, id]);

  const AddTOCart = async () => {
    if (!selectedOS) {
      alert("Please select an operating system before adding to cart.");
      return;
    }

    const payload = {
      userId: user,
      productId: product._id,
      quantity,
      selectedOS,
    };

    try {
      await dispatch(addToCartApi(payload));
      dispatch(getUserCartApi(user));
    } catch (error) {
      console.error("Failed to add to cart:", error);
    }
  };

  const renderStars = (ratingg) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`w-4 h-4 ${
            i <= rating ? "text-yellow-500" : "text-gray-300"
          }`}
          fill={i <= ratingg ? "#facc15" : "none"}
        />
      );
    }
    return stars;
  };

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (!product)
    return (
      <div className="text-center py-10 text-red-600">Product not found.</div>
    );

  const ratingg = 3;
  const totalReviews = 12;
  const reviewsList = [
    {
      userId: "user1",
      name: "Ali",
      imgUser: "A",
      description: "Great plugin, works like magic!",
      rating: 5,
    },
    {
      userId: "user2",
      name: "Sara",
      imgUser: "S",
      description: "Good quality and free!",
      rating: 4,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div className="w-full">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-lg object-cover w-full h-[400px] lg:h-[500px]"
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            {product.isFree && (
              <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                Free Downloads
              </span>
            )}
            <span className="text-gray-500 text-sm capitalize">
              {product.category}
            </span>
          </div>

          <h2 className="text-3xl font-bold">{product.name}</h2>

          <div className="flex items-center gap-2">
            <div className="flex">{renderStars(ratingg)}</div>
            <span className="text-gray-500 text-sm">
              ({totalReviews} reviews)
            </span>
          </div>

          <div>
            <h3 className="font-semibold mb-2">System Requirements:</h3>
            <p className="text-sm text-gray-600 whitespace-pre-wrap">
              {product.shortDescription}
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Operating System</h2>
            <div className="flex flex-wrap gap-6">
              {product.device?.map((item, i) => (
                <label
                  key={i}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="operatingSystem"
                    value={item}
                    onChange={(e) => setSelectedOS(e.target.value)}
                    checked={selectedOS === item}
                    className="form-radio text-blue-600"
                  />
                  <span className="text-sm text-gray-700">{item}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="text-2xl font-bold text-gray-800">
            Price: {product.isFree ? "Free" : `$${product.price}`}
          </div>

          <div className="mt-4 flex flex-row items-center gap-4">
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-24 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
            />
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg shadow transition duration-300 text-sm"
              onClick={AddTOCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-12">
        <div className="flex gap-6 border-b">
          {["description", "specification", "reviews"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 capitalize border-b-2 ${
                activeTab === tab
                  ? "border-blue-600 text-blue-600 font-semibold"
                  : "border-transparent text-gray-500"
              } transition duration-200`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-6 text-sm text-gray-700">
          {activeTab === "description" && <p>{product.description}</p>}

          {activeTab === "specification" && (
            <ul className="list-disc pl-5 space-y-1">
              <li>Brand: {product.brand}</li>
              <li>Device: {product.device.join(", ")}</li>
              <li>Category: {product.category}</li>
            </ul>
          )}

          {/* feed back section bro check this okay  */}
          <div>
            <td className="p-3 whitespace-nowrap">
              <button
                className="text-indigo-600 hover:underline cursor-pointer"
                onClick={feedBackPopup}
              >
                Give Feedback
              </button>
            </td>

            {feedback ? (
              <>
                <div className="fixed inset-0 z-50  bg-opacity-0 flex items-center justify-center">
                  <div className="relative bg-white rounded-2xl shadow-xl p-6 w-[90%] max-w-md">
                    {/* Close Icon */}
                    <button
                      onClick={() => setFeedBack(false)}
                      className="absolute top-3 right-3 text-gray-400 hover:text-red-500 cursor-pointer"
                    >
                      <X size={20} />
                    </button>

                    {/* Star Icon */}
                    <div className="flex justify-center mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="px-2">
                          <Star
                            onClick={() => setRating(i + 1)}
                            className={
                              i < rating ? "text-yellow-400" : "text-gray-400"
                            }
                            fill={i < rating ? "#facc15" : "none"}
                          />
                        </div>
                      ))}
                    </div>

                    {/* Description Textarea */}
                    <div className="mb-4">
                      <textarea
                        rows="5"
                        placeholder="Write your feedback..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                      onClick={handleSubmit}
                    >
                      Submit Feedback
                    </button>
                  </div>
                </div>
              </>
            ) : null}
          </div>

          {activeTab === "reviews" && (
            <div className="space-y-4">
              {reviewsList.map((item) => (
                <div
                  key={item.userId}
                  className="border p-3 rounded-md bg-gray-50"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm">
                      {item.imgUser}
                    </span>
                    <h4 className="font-semibold">{item.name}</h4>
                  </div>
                  <p className="text-sm text-gray-700">{item.description}</p>
                  <div className="flex mt-1">{renderStars(item.rating)}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <Subheading
          subHeading=""
          mainHeading="Related Products"
          description="Explore our top-rated production tools."
          view={false}
        />
        <Product limit={4} />
      </div>
    </div>
  );
};

export default ProductDetails;
