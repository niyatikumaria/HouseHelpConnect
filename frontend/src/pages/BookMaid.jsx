import React from "react";
import { useParams } from "react-router-dom";
import BookingForm from "../components/BookingForm";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const BookMaid = () => {
  const { maidId } = useParams();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <Link
          to="/maids"
          className="flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors duration-200"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          <span className="text-sm font-medium">Back to maids list</span>
        </Link>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-800">Book Your Maid</h2>
          <p className="mt-2 text-sm text-gray-600">
            Fill in your details to complete the booking.
          </p>
        </div>

        <div className="bg-white py-8 px-6 shadow-md rounded-xl sm:px-10">
          <BookingForm maidId={maidId} />
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            Need help?{" "}
            <a
              href="#"
              className="font-medium text-blue-600 hover:text-blue-500 transition-colors"
            >
              Contact our support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookMaid;
