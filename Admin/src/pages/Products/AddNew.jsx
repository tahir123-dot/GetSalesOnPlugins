import React, { useState, useEffect } from "react";
import { shopdata } from "../BrandCategory";
import addProductApi from "../../Store/Product/ProductApi.js";
import { useDispatch, useSelector } from "react-redux";
import { resetProductState } from "../../Store/Product/ProductSlice.js";

const AddNew = () => {
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.product);

  const [form, setForm] = useState({
    productName: "",
    description: "",
    shortDescription: "",
    brand: "",
    category: "",
    deviceSetup: [],
    downloadUrl: "",
    isFree: false,
    price: "",
    image: null,
    imagePreview: null,
  });

  // ⏱ Auto reset success/error after 4 seconds
  useEffect(() => {
    if (success || error) {
      const timeout = setTimeout(() => {
        dispatch(resetProductState());
      }, 4000);
      return () => clearTimeout(timeout);
    }
  }, [success, error, dispatch]);

  // 🔁 Update Form State
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && name === "isFree") {
      setForm({ ...form, [name]: checked });
    } else if (type === "checkbox" || type === "radio") {
      let updated = [...form.deviceSetup];
      if (checked) {
        updated.push(value);
      } else {
        updated = updated.filter((item) => item !== value);
      }
      setForm({ ...form, deviceSetup: updated });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewURL = URL.createObjectURL(file);
      setForm({ ...form, image: file, imagePreview: previewURL });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("productName", form.productName);
    formData.append("description", form.description);
    formData.append("shortDescription", form.shortDescription);
    formData.append("brand", form.brand);
    formData.append("category", form.category);
    form.deviceSetup.forEach((item) => formData.append("deviceSetup", item));
    formData.append("downloadUrl", form.downloadUrl);
    formData.append("isFree", form.isFree);
    formData.append("price", form.price);
    formData.append("image", form.image);

    dispatch(addProductApi(formData));

    // ✅ Optional: Reset form after submission
    setForm({
      productName: "",
      description: "",
      shortDescription: "",
      brand: "",
      category: "",
      deviceSetup: [],
      downloadUrl: "",
      isFree: false,
      price: "",
      image: null,
      imagePreview: null,
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white rounded-2xl shadow-lg border border-gray-200">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">
        🏍️ Add New Product
      </h2>

      {/* 🔄 Loader */}
      {loading && (
        <div className="text-center text-indigo-600 font-medium mb-4">
          <div className="flex items-center justify-center gap-2">
            <svg
              className="animate-spin h-5 w-5 text-indigo-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8z"
              ></path>
            </svg>
            Uploading Product...
          </div>
        </div>
      )}

      {/* ✅ Success Message */}
      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4 text-center">
          ✅ {success}
        </div>
      )}

      {/* ❌ Error Message */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4 text-center">
          ❌ {error}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        encType="multipart/form-data"
      >
        {/* Image Upload */}
        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Product Image
          </label>
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            accept="image/*"
            className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-indigo-100 file:text-indigo-700 hover:file:bg-indigo-200"
          />
          {form.imagePreview && (
            <img
              src={form.imagePreview}
              alt="Preview"
              className="mt-4 h-40 w-40 object-cover rounded-lg shadow-md border border-gray-300"
            />
          )}
        </div>

        {/* Product Name */}
        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Product Name
          </label>
          <input
            type="text"
            name="productName"
            value={form.productName}
            onChange={handleChange}
            placeholder="e.g. Artistry Audio - Origin X"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            rows={4}
            value={form.description}
            onChange={handleChange}
            placeholder="Full product description..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
        </div>

        {/* Short Description */}
        <div className="md:col-span-2">
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Short Description
          </label>
          <textarea
            name="shortDescription"
            rows={3}
            value={form.shortDescription}
            onChange={handleChange}
            placeholder="Highlight features with bullets..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
        </div>

        {/* Brand */}
        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Brand
          </label>
          <select
            name="brand"
            value={form.brand}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select Brand</option>
            {shopdata[1]?.brands?.map((brand, index) => (
              <option key={index} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>

        {/* Category */}
        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Category
          </label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select Category</option>
            {shopdata[0]?.categories?.map((category, index) => {
              if (typeof category === "object" && category.subcategories) {
                return (
                  <React.Fragment key={index}>
                    {category.subcategories.map((sub, subIndex) => (
                      <option key={subIndex} value={sub}>
                        &nbsp;&nbsp;&nbsp;&nbsp;➓ {sub}
                      </option>
                    ))}
                  </React.Fragment>
                );
              }
              return (
                <option key={index} value={category}>
                  {category}
                </option>
              );
            })}
          </select>
        </div>

        {/* Device Setup */}
        <div className="md:col-span-2">
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Device Setup
          </label>
          <div className="flex flex-wrap gap-4">
            {["MAC OS", "Windows"].map((os) => (
              <label key={os} className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  value={os}
                  onChange={handleChange}
                  checked={form.deviceSetup.includes(os)}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <span className="text-gray-700 font-medium">{os}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Download URL */}
        <div className="md:col-span-2">
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Download Link
          </label>
          <input
            type="url"
            name="downloadUrl"
            value={form.downloadUrl}
            onChange={handleChange}
            placeholder="https://example.com/download"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Free Download Toggle */}
        <div className="flex items-center gap-2 md:col-span-2">
          <input
            type="checkbox"
            name="isFree"
            checked={form.isFree}
            onChange={handleChange}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label className="text-gray-700 font-medium">
            Mark as Free Download
          </label>
        </div>

        {/* Price Field */}
        {!form.isFree && (
          <div className="md:col-span-2">
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Price (GBP)
            </label>
            <input
              type="text"
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="£20.99"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        )}

        {/* Submit Button */}
        <div className="md:col-span-2 flex justify-end ">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-8 py-2 cursor-pointer rounded-full text-sm font-semibold tracking-wide hover:bg-indigo-700 transition"
          >
            ➕ Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNew;
