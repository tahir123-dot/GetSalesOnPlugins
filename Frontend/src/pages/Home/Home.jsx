import React from "react";

import Hero from "../../component/Hero/Hero";
import Heading from "../../component/Heading";
import Subheading from "../../component/Subheading";
import Product from "../../component/Product/Product";
import { ChevronRight } from "lucide-react";

import { customerTrust, highLights } from "../../product";
import { blogImage } from "../../assets/image";

const Home = () => {
  const blogData = [
    {
      src: blogImage.blog1,
      alt: "Blog 1",
      name: "Maximize Your Music Production",
      description:
        "Discover essential techniques to enhance your audio projects.",
    },
    {
      src: blogImage.blog2,
      alt: "Blog 2",
      name: "Creating Unique Soundscapes",
      description: "Learn how to craft immersive audio experiences.",
    },
    {
      src: blogImage.blog3,
      alt: "Blog 3",
      name: "Top Plugins of 2023",
      description: "Check out our favorite plugins for this year.",
    },
  ];

  return (
    <>
      <Hero />

      <Heading
        title="Explore Our Extensive Collection of Kontakt Libraries and Audio Plugins"
        items={highLights}
      />

      <Subheading
        subHeading="Featured"
        mainHeading="Products"
        description="Explore our top-rated production tools."
        view={true}
      />
      <Product limit={8} />
      <Subheading
        subHeading="Blog"
        mainHeading="Inspiration for Creators"
        description="Explore tips and tricks for music production."
        view={false}
      />
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 sm:p-7 md:p-6 lg:p-8 xl:p-10 my-10">
        {blogData.map((item, index) => (
          <div
            key={index}
            className="bg-white  overflow-hidden hover:shadow-lg transition duration-300 flex flex-col"
          >
            {/* Image */}
            <div className="w-full h-64 overflow-hidden">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col gap-2">
              <h2 className="text-lg font-semibold text-gray-900">
                {item.name}
              </h2>
              <p className="text-sm text-gray-600">{item.description}</p>

              <div className="mt-4 flex items-center justify-between text-gray-600 font-medium cursor-pointer hover:underline">
                <span>Read More</span>
                <ChevronRight className="w-5 h-5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <Heading
        title="Discover Why Our Customers Trust Us for Their Music Production Needs"
        items={customerTrust}
      />

      <Subheading
        subHeading="Highlights"
        mainHeading="Products"
        description="Discover our top-rated production tools today!"
        view={false}
      />
      <Product limit={4} />
    </>
  );
};

export default Home;
