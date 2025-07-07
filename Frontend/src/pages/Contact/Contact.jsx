"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { Field, Label, Switch } from "@headlessui/react";

const Contact = () => {
  return (
    <div className="bg-white py-24 sm:py-32 lg:px-8 px-6">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-3 lg:gap-24
        px-4 mt-16 grid    gap-8
      ">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Get in touch
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Quam nunc nunc eu sed. Sed rhoncus quis ultricies ac pellentesque.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:mt-0">
          <div className="rounded-2xl bg-gray-50 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Headquarter</h3>
            <p className="mt-2 text-gray-600">48 Great Marlborough St, London W1F 7BB, UK</p>
            
          </div>
          <div className="rounded-2xl bg-gray-50 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Media Relations</h3>
            <p className="mt-2 text-gray-600">press@example.com</p>
            <p className="text-gray-600">+1 (555) 905-3456</p>
          </div>
          <div className="rounded-2xl bg-gray-50 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">
              Join our team
            </h3>
            <p className="mt-2 text-gray-600">careers@example.com</p>
            <p className="text-gray-600">+1 (555) 905-4567</p>
          </div>
          <div className="rounded-2xl bg-gray-50 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Contact Directly</h3>
            <p className="mt-2 text-gray-600">hello@example.com</p>
            <p className="text-gray-600">+1 (555) 905-5678</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
