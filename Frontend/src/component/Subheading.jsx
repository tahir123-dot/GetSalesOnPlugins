import React from "react";
import { Button } from "@headlessui/react";
import { Link } from "react-router-dom";

const Subheading = ({ subHeading, mainHeading, description, view }) => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
      {/* Subheading */}
      <span className="text-sm sm:text-base text-gray-600 font-bold uppercase tracking-wide block mb-2 text-center sm:text-left">
        {subHeading}
      </span>

      {/* Main Heading */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 text-center sm:text-left">
        {mainHeading}
      </h2>

      {/* Description + Button */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm sm:text-base text-gray-600 max-w-3xl text-center sm:text-left">
          {description}
        </p>

        {view && (
          <Link to="/shop">
            <Button className="px-6 py-2 cursor-pointer text-sm font-semibold text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-600 hover:text-white transition duration-300">
              View All
            </Button>
          </Link>
        )}
      </div>
    </section>
  );
};

export default Subheading;
