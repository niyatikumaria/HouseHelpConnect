import React from "react";
import MaidRegistrationForm from "../components/MaidRegistrationForm";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/outline";

const RegisterMaid = () => (
  <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <Link 
          to="/" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          <span className="text-sm font-medium">Back to home</span>
        </Link>
      </div>

      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-blue-900 sm:text-4xl">
          Join Our Professional Network
        </h2>
        <p className="mt-3 text-lg text-gray-600">
          Register as a home service provider and start getting clients in your area.
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6 sm:p-8">
          <div className="border-b border-gray-200 pb-4 mb-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Maid Registration Form
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Please fill in your details accurately
            </p>
          </div>
          <MaidRegistrationForm />
        </div>

        <div className="bg-gray-50 px-6 py-4 sm:px-8">
          <p className="text-xs text-gray-500">
            By registering, you agree to our{" "}
            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
              Privacy Policy
            </a>.
          </p>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Already registered?{" "}
          <Link 
            to="/login" 
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Sign in to your account
          </Link>
        </p>
      </div>
    </div>
  </div>
);

export default RegisterMaid;