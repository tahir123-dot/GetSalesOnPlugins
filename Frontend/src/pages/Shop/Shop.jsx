import React, { useEffect, useState } from "react";
import ShopSidebar from "./ShopSidebar";
import Product from "../../component/Product/Product";
import { useDispatch, useSelector } from "react-redux";
import getProductApi from "../../store/product/getProductApi";
import { clearSearchKeyword } from "../../store/product/searchSlice";
import { useLocation } from "react-router-dom";

const Shop = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const { products } = useSelector((state) => state.getProduct);
  const { keyword } = useSelector((state) => state.search);
  const { selectedCategories, selectedBrands } = useSelector(
    (state) => state.filters
  );

  const [sort, setSort] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 32;

  // Load products and clear search if not from search
  useEffect(() => {
    dispatch(getProductApi());

    if (!location.state?.fromSearch) {
      dispatch(clearSearchKeyword());
    }
  }, [dispatch, location.state]);

  // Reset to page 1 on filter/sort change
  useEffect(() => {
    setCurrentPage(1);
  }, [keyword, selectedCategories, selectedBrands, sort]);

  // Apply filtering
  const filteredProducts = products
    ?.filter((item) => {
      const keywordLower = keyword?.toLowerCase() || "";
      const matchesKeyword =
        !keyword ||
        item.name?.toLowerCase().includes(keywordLower) ||
        item.category?.toLowerCase().includes(keywordLower) ||
        item.price?.toString().includes(keywordLower);

      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(item.category);

      const matchesBrand =
        selectedBrands.length === 0 || selectedBrands.includes(item.brand);

      return matchesKeyword && matchesCategory && matchesBrand;
    })
    .sort((a, b) => {
      if (sort === "low-to-high") return a.price - b.price;
      if (sort === "high-to-low") return b.price - a.price;
      return 0;
    });

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 mt-10 gap-6">
      <ShopSidebar />

      <div className="flex-1">
        {/* Sort & Info */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3 px-4 py-2 border rounded-md w-fit text-sm text-gray-700">
            <label htmlFor="sort" className="font-semibold">
              Sort by:
            </label>
            <select
              id="sort"
              name="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border-none bg-transparent focus:outline-none"
            >
              <option value="newest">Newest</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
            </select>
          </div>
          <div>
            <p>
              Showing {currentProducts.length} of {filteredProducts.length}{" "}
              results
            </p>
          </div>
        </div>

        {/* Products */}
        <Product customProducts={currentProducts} />

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex flex-col items-center mt-10 gap-4">
            {/* Page numbers */}
            <ul className="flex gap-2 flex-wrap">
              {Array.from({ length: totalPages }, (_, index) => (
                <li key={index}>
                  <button
                    className={`px-4 py-2 border rounded ${
                      currentPage === index + 1
                        ? "bg-black text-white"
                        : "bg-white text-gray-800"
                    }`}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>

            {/* Prev / Next buttons */}
            <div className="flex gap-4">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`px-4 py-2 border rounded ${
                  currentPage === 1
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-white text-gray-800"
                }`}
              >
                Prev
              </button>

              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className={`px-4 py-2 border rounded ${
                  currentPage === totalPages
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-white text-gray-800"
                }`}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
