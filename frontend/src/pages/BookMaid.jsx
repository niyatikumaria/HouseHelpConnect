import React from "react";
import { useParams } from "react-router-dom";
import BookingForm from "../components/BookingForm";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const BookMaid = () => {
  const { maidId } = useParams();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <Link 
          to="/maids" 
          className="flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors duration-200"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Back to maids list
        </Link>
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Book Your Maid
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Fill in your details to complete the booking
          </p>
        </div>

        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          <BookingForm maidId={maidId} />
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>
            Need help?{' '}
            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
              Contact our support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookMaid;