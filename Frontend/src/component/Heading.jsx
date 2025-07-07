import React from "react";

const Heading = ({ title, items }) => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight max-w-3xl mx-auto mb-16">
          {title}
        </h2>

        {/* Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map((item, index) => (
            <div
              key={index}
              className="p-8 bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 rounded-2xl text-center flex flex-col items-center gap-4"
            >
              {/* Icon */}
              <div className="bg-indigo-100 text-indigo-600 p-4 rounded-full">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                {item.Title}
              </h3>

              {/* Paragraph */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Heading;
