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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900">
            Find Professional Maids
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Enter your locality to discover available, trusted home service providers.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="mb-10">
            <div className="flex rounded-md shadow-lg overflow-hidden border border-gray-200 bg-white">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <SearchIcon className="h-6 w-6 text-gray-400" />
                </div>
                <input
                  value={locality}
                  onChange={e => setLocality(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-lg border-none focus:ring-2 focus:ring-blue-500 rounded-none"
                  placeholder="Enter your locality (e.g. 'Mumbai Central')"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-4 text-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              >
                Search
              </button>
            </div>
          </form>

          {search && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Results for <span className="text-blue-600">"{locality}"</span>
              </h3>
            </div>
          )}

          {search ? (
            <MaidList locality={locality} />
          ) : (
            <div className="text-center py-14 px-6 bg-white rounded-lg shadow border border-gray-200">
              <div className="mx-auto w-20 h-20 text-gray-300 mb-4">
                <SearchIcon className="w-full h-full" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Start Your Search
              </h3>
              <p className="text-gray-500">
                Enter your locality above to see trusted maids available in your area.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Maids;
