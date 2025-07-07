import React from "react";
import { images } from "../../assets/image";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Power Your <span className="text-indigo-600">Sound</span>
            <br />
            with Premium Plugins
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
            Discover professional Kontakt libraries and high-quality audio tools
            tailored for producers, composers, and sound designers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <Link to="/shop">
              <button className="bg-indigo-600 cursor-pointer hover:bg-indigo-700 transition text-white px-6 py-3 rounded-lg font-semibold">
                Explore Library
              </button>
            </Link>

            <Link to="/blog">
              <button className="border cursor-pointer border-indigo-600 hover:bg-indigo-50 text-indigo-700 transition px-6 py-3 rounded-lg font-semibold">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 w-full max-w-full sm:max-w-md lg:max-w-lg">
          <img
            src={images.Banner3}
            alt="Studio Setup"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
