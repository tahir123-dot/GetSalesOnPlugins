import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import React from "react";
import { webLogo } from "../../assets/image";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black px-6 py-10 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <img src={webLogo.logo} alt="Logo" className="w-32 h-auto" />
        </div>

        {/* Links & Social Icons */}
        <div className="flex flex-col sm:flex-row justify-between items-center w-full lg:w-auto gap-8">
          {/* Links */}
          <ul className="flex flex-col sm:flex-row items-center gap-6 text-sm text-gray-900">
            <li className="hover:text-indigo-600 cursor-pointer transition-colors">
              <Link to="/refund">Refund Policy</Link>
            </li>
            <li className="hover:text-indigo-600 cursor-pointer transition-colors">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="hover:text-indigo-600 cursor-pointer transition-colors">
              <Link to="/terms">Terms of Use</Link>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-gray-500">
            <Facebook className="hover:text-indigo-600 cursor-pointer w-5 h-5 transition-colors" />
            <Instagram className="hover:text-indigo-600 cursor-pointer w-5 h-5 transition-colors" />
            <Twitter className="hover:text-indigo-600 cursor-pointer w-5 h-5 transition-colors" />
            <Youtube className="hover:text-indigo-600 cursor-pointer w-5 h-5 transition-colors" />
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-300 mt-8 pt-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} All rights reserved by{" "}
        <span className="text-gray-600 font-semibold">Tahir</span>
      </div>
    </footer>
  );
};

export default Footer;
