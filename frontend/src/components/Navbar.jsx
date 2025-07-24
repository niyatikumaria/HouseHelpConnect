import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-white shadow-md fixed w-full z-50 top-0">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16 items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            HouseHelpConnect
          </Link>
        </div>
        <div className="hidden sm:flex space-x-6">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 text-sm font-medium transition"
          >
            Home
          </Link>
          <Link
            to="/register"
            className="text-gray-700 hover:text-blue-600 text-sm font-medium transition"
          >
            Register Maid
          </Link>
          <Link
            to="/maids"
            className="text-gray-700 hover:text-blue-600 text-sm font-medium transition"
          >
            Find Maids
          </Link>
        </div>
      </div>
    </div>

    {/* Mobile Menu */}
    <div className="sm:hidden border-t border-gray-200">
      <div className="py-2 space-y-1">
        <Link
          to="/"
          className="block px-4 py-2 text-sm font-medium text-blue-700 bg-blue-50 border-l-4 border-blue-500"
        >
          Home
        </Link>
        <Link
          to="/register"
          className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
        >
          Register Maid
        </Link>
        <Link
          to="/maids"
          className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
        >
          Find Maids
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
