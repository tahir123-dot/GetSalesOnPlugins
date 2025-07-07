import React, { useState } from "react";
import { shopdata } from "./sshop";
import { ChevronDown, Filter } from "lucide-react";
import { useDispatch } from "react-redux";
import { toggleCategory, toggleBrand } from "../../store/product/filterSlice";

const ShopSidebar = () => {
  const [openSections, setOpenSections] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="md:hidden flex items-center justify-end p-4">
        <button
          onClick={toggleSidebar}
          className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md"
        >
          <Filter size={18} />
          Filter
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 h-full z-40 bg-gray-100 border-r rounded-sm border-gray-300 w-64 p-4 overflow-y-auto transition-transform duration-300 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {shopdata.map((category, catIndex) => (
          <div key={catIndex} className="mb-6">
            <div
              className="flex justify-between items-center mb-2 cursor-pointer"
              onClick={() => toggleSection(catIndex)}
            >
              <span className="font-bold text-gray-800">
                {category.heading}
              </span>
              <ChevronDown className="text-gray-600" />
            </div>

            {openSections[catIndex] && category.categories && (
              <div className="ml-3 space-y-2">
                {category.categories.map((subCategory, subIndex) => (
                  <div key={subIndex}>
                    {typeof subCategory === "string" ? (
                      <label className="flex items-center gap-2 text-sm text-gray-700">
                        <input
                          type="checkbox"
                          className="accent-black"
                          onChange={() => dispatch(toggleCategory(subCategory))}
                        />
                        <span>{subCategory}</span>
                      </label>
                    ) : (
                      <div className="ml-2">
                        <div
                          className="flex justify-between items-center cursor-pointer mb-1"
                          onClick={() =>
                            toggleSection(`${catIndex}-${subIndex}`)
                          }
                        >
                          <span className="text-sm font-medium text-gray-700">
                            {subCategory.heading}
                          </span>
                          <ChevronDown className="text-gray-500" size={16} />
                        </div>
                        {openSections[`${catIndex}-${subIndex}`] && (
                          <div className="ml-4 space-y-1">
                            {subCategory.subcategories.map((item, i) => (
                              <label
                                key={i}
                                className="flex items-center gap-2 text-sm text-gray-600"
                              >
                                <input
                                  type="checkbox"
                                  className="accent-black"
                                  onChange={() =>
                                    dispatch(toggleCategory(item))
                                  }
                                />
                                <span>{item}</span>
                              </label>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {openSections[catIndex] &&
              category.brands &&
              category.brands.map((brand, brandIndex) => (
                <label
                  key={brandIndex}
                  className="ml-3 flex items-center gap-2 text-sm text-gray-700"
                >
                  <input
                    type="checkbox"
                    className="accent-black"
                    onChange={() => dispatch(toggleBrand(brand))}
                  />
                  <span>{brand}</span>
                </label>
              ))}
          </div>
        ))}
      </div>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
        ></div>
      )}
    </>
  );
};

export default ShopSidebar;
