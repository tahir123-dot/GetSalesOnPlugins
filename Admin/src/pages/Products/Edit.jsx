import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import getSingleProductApi from "../../Store/Product/singleProdcut/getSingleProductApi";
import updateProductApi from "../../Store/Product/updateProduct/updateProductApi";

const Edit = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { product, loading } = useSelector((state) => state.singleProduct);

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
    imagePreview: "",
  });

  useEffect(() => {
    dispatch(getSingleProductApi(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (product && product._id) {
      setForm({
        productName: product.name || "",
        description: product.description || "",
        shortDescription: product.shortDescription || "",
        brand: product.brand || "",
        category: product.category || "",
        deviceSetup: product.device || [],
        downloadUrl: product.downloadUrl || "",
        isFree: product.isFree || false,
        price: product.price || "",
        image: null,
        imagePreview: product.image || "",
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && name === "deviceSetup") {
      let updatedDevices = [...form.deviceSetup];
      if (checked) {
        updatedDevices.push(value);
      } else {
        updatedDevices = updatedDevices.filter((item) => item !== value);
      }
      setForm({ ...form, deviceSetup: updatedDevices });
    } else if (type === "checkbox") {
      setForm({ ...form, [name]: checked });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("productName", form.productName);
    formData.append("description", form.description);
    formData.append("shortDescription", form.shortDescription);
    formData.append("brand", form.brand);
    formData.append("category", form.category);
    formData.append("downloadUrl", form.downloadUrl);
    formData.append("isFree", form.isFree);
    formData.append("price", form.price);
    form.deviceSetup.forEach((item) => formData.append("deviceSetup", item));
    if (form.image) {
      formData.append("image", form.image);
    }

    try {
      await dispatch(updateProductApi({ id, formData })).unwrap();
      navigate("/products");
    } catch (error) {
      console.error("Update failed:", error);
      alert("Product update failed!");
    }
  };

  return loading ? (
    <p className="text-center mt-20">Loading product data...</p>
  ) : (
    <div className="max-w-6xl mx-auto p-8 bg-white rounded-2xl shadow-lg border border-gray-200">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">
        ✏️ Edit Product
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* Image Upload */}
        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Product Image
          </label>
          <input
            type="file"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                setForm({
                  ...form,
                  image: file,
                  imagePreview: URL.createObjectURL(file),
                });
              }
            }}
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
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
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
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
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
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
        </div>

        {/* Brand */}
        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Brand
          </label>
          <input
            type="text"
            name="brand"
            value={form.brand}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Category
          </label>
          <input
            type="text"
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
        </div>

        {/* Device Setup */}
        <div className="md:col-span-2">
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Device Setup
          </label>
          <div className="flex gap-4">
            {["MAC OS", "Windows"].map((os) => (
              <label key={os} className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  name="deviceSetup"
                  value={os}
                  checked={form.deviceSetup.includes(os)}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
                {os}
              </label>
            ))}
          </div>
        </div>

        {/* Download URL */}
        <div className="md:col-span-2">
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Download URL
          </label>
          <input
            type="url"
            name="downloadUrl"
            value={form.downloadUrl}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
        </div>

        {/* Free Checkbox */}
        <div className="flex items-center gap-2 md:col-span-2">
          <input
            type="checkbox"
            name="isFree"
            checked={form.isFree}
            onChange={handleChange}
            className="h-4 w-4"
          />
          <label className="text-gray-700">Mark as Free Download</label>
        </div>

        {/* Price */}
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
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>
        )}

        {/* Submit Button */}
        <div className="md:col-span-2 flex justify-end">
          <button
            type="submit"
            className="bg-yellow-500 text-white px-8 py-2 rounded-full font-semibold hover:bg-yellow-600"
          >
            📀 Update Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
