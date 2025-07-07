import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import getProductApi from "../../Store/Product/getProductApi";
import deleteByID from "../../Store/Product/deleteProduct/deleteapi";
import { resetDeleteState } from "../../Store/Product/deleteProduct/deleteSlice";
import { removeProductFromState } from "../../Store/Product/getProductSlice";

const AllProducts = () => {
  const dispatch = useDispatch();
  const { loading, products, error } = useSelector((state) => state.getProduct);

  const handleDelete = async (id) => {
    try {
      await dispatch(deleteByID(id)).unwrap();

      dispatch(removeProductFromState(id));
      toast.success("Product deleted successfully");

      dispatch(resetDeleteState());
    } catch (err) {
      toast.error("Error deleting product: " + err);
    }
  };

  useEffect(() => {
    dispatch(getProductApi());
  }, [dispatch]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Top Header with Button */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">All Products</h2>
        <Link
          to="/add-product"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded shadow text-sm"
        >
          + Add New Product
        </Link>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="text-center text-blue-600 py-10 font-semibold text-lg">
          Loading Products...
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="text-center text-red-500 py-6 font-medium">
          Error: {error}
        </div>
      )}

      {/* Product Table */}
      {!loading && !error && (
        <div className="overflow-x-auto shadow border border-gray-200 rounded-md bg-white">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 text-left text-sm text-gray-600">
              <tr>
                <th className="p-3">
                  <input type="checkbox" />
                </th>
                <th className="p-3">Name</th>
                <th className="p-3">Price</th>
                <th className="p-3">Category</th>
                <th className="p-3">Devices</th>
                <th className="p-3">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm bg-white">
              {products.map((product) => (
                <tr key={product._id}>
                  <td className="p-3">
                    <input type="checkbox" />
                  </td>
                  <td className="p-3 flex items-center gap-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div>
                      <div className="font-medium text-gray-800">
                        {product.name}
                      </div>
                      <div className="flex gap-2 mt-1">
                        <Link to={`/products/${product._id}`}>
                          <button className="text-xs text-blue-600 hover:underline cursor-pointer">
                            Edit
                          </button>
                        </Link>
                        <span className="text-gray-300">|</span>

                        <button
                          className="text-xs text-red-600 hover:underline cursor-pointer"
                          onClick={() => handleDelete(product._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="p-3">£{product.price || "0.00"}</td>
                  <td className="p-3 text-blue-600">{product.category}</td>
                  <td className="p-3 text-blue-600">
                    {product.device?.join(", ") || "N/A"}
                  </td>
                  <td className="p-3">
                    {new Date(product.createdAt).toLocaleString("en-GB")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllProducts;
