import React, { useState } from "react";
import MaidList from "../components/MaidList";
import { SearchIcon } from "@heroicons/react/outline";

const Maids = () => {
  const [locality, setLocality] = useState("");
  const [search, setSearch] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setSearch(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Find Professional Maids
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600 sm:mt-4">
            Search by your locality to find available home service providers
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="mb-10">
            <div className="flex shadow-sm rounded-md">
              <div className="relative flex-grow focus-within:z-10">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  value={locality}
                  onChange={e => setLocality(e.target.value)}
                  className="block w-full rounded-l-md pl-10 py-4 border-gray-300 focus:ring-blue-500 focus:border-blue-500 text-lg"
                  placeholder="Enter your locality (e.g. 'Mumbai Central')"
                  required
                />
              </div>
              <button
                type="submit"
                className="-ml-px relative inline-flex items-center px-6 py-4 border border-gray-300 text-lg font-medium rounded-r-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
              >
                Search
              </button>
            </div>
          </form>

          {search && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Results for <span className="text-blue-600">"{locality}"</span>
              </h3>
            </div>
          )}

          {search && <MaidList locality={locality} />}

          {!search && (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="mx-auto w-24 h-24 text-gray-300 mb-4">
                <SearchIcon className="w-full h-full" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">
                Search for maids
              </h3>
              <p className="text-gray-500">
                Enter a locality above to find available maids in your area
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Maids;