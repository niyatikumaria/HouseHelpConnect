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

  if (loading) return (
    <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="bg-white rounded-lg shadow-md p-6 animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-4/6 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-6"></div>
          <div className="h-10 bg-gray-200 rounded w-full"></div>
        </div>
      ))}
    </div>
  );

  if (!maids.length) return (
    <div className="text-center py-12">
      <div className="mx-auto w-24 h-24 text-gray-400 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-1">No maids found</h3>
      <p className="text-gray-500">We couldn't find any maids in {locality}.</p>
    </div>
  );

  return (
    <div className="py-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Available Maids in <span className="text-blue-600">{locality}</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {maids.map(maid => (
          <MaidCard key={maid._id} maid={maid} />
        ))}
      </div>
    </div>
  );
};

export default MaidList;