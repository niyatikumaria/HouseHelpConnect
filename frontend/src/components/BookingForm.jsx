import React, { useState } from "react";
import api from "../api/api";

const BookingForm = ({ maidId }) => {
  const [form, setForm] = useState({
    userName: "",
    contact: "",
    date: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await api.post("/bookings", {
        maidId,
        ...form,
      });
      setMessage("Booking successful! The maid will contact you soon.");
      setForm({ userName: "", contact: "", date: "" });
    } catch {
      setMessage("Booking failed. Please try again.");
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Book This Maid</h2>
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="userName">
          Your Name
        </label>
        <input
          id="userName"
          name="userName"
          value={form.userName}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="John Doe"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="contact">
          Contact Info
        </label>
        <input
          id="contact"
          name="contact"
          value={form.contact}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Phone or Email"
          required
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="date">
          Booking Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200"
      >
        Confirm Booking
      </button>

      {message && (
        <div className={`mt-4 p-3 rounded-md ${message.includes("success") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
          {message}
        </div>
      )}
    </form>
  );
};

export default BookingForm;