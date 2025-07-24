import React, { useEffect, useState } from "react";
import api from "../api/api";
import MaidCard from "./MaidCard";

const MaidList = ({ locality }) => {
  const [maids, setMaids] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMaids = async () => {
      setLoading(true);
      try {
        const res = await api.get(`/maids?locality=${locality}`);
        setMaids(res.data);
      } catch {
        setMaids([]);
      }
      setLoading(false);
    };
    fetchMaids();
  }, [locality]);

  if (loading) {
    return (
      <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md p-6 animate-pulse space-y-4"
          >
            <div className="h-6 bg-gray-200 rounded w-2/3" />
            <div className="h-4 bg-gray-200 rounded w-full" />
            <div className="h-4 bg-gray-200 rounded w-5/6" />
            <div className="h-4 bg-gray-200 rounded w-4/6" />
            <div className="h-4 bg-gray-200 rounded w-3/4" />
            <div className="h-10 bg-gray-200 rounded w-full mt-4" />
          </div>
        ))}
      </div>
    );
  }

  if (!maids.length) {
    return (
      <div className="text-center py-20 px-4">
        <div className="mx-auto w-20 h-20 text-gray-400 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-full h-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-1">
          No maids found
        </h3>
        <p className="text-gray-500">
          We couldn’t find any maids in <span className="font-medium text-blue-600">{locality}</span>.
        </p>
      </div>
    );
  }

  return (
    <div className="py-10 px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        Available Maids in <span className="text-blue-600">{locality}</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {maids.map((maid) => (
          <MaidCard key={maid._id} maid={maid} />
        ))}
      </div>
    </div>
  );
};

export default MaidList;
