import React, { useState } from "react";
import api from "../api/api";

const BookingForm = ({ maidId }) => {
  const [form, setForm] = useState({
    userName: "",
    contact: "",
    date: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/bookings", {
        maidId,
        ...form,
      });
      setMessage("✅ Booking successful! The maid will contact you soon.");
      setForm({ userName: "", contact: "", date: "" });
    } catch {
      setMessage("❌ Booking failed. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200"
    >
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        Book This Maid
      </h2>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="userName"
            className="block text-sm font-medium text-gray-700"
          >
            Your Name
          </label>
          <input
            id="userName"
            name="userName"
            value={form.userName}
            onChange={handleChange}
            placeholder="John Doe"
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="contact"
            className="block text-sm font-medium text-gray-700"
          >
            Contact Info
          </label>
          <input
            id="contact"
            name="contact"
            value={form.contact}
            onChange={handleChange}
            placeholder="Phone or Email"
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700"
          >
            Booking Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-150"
      >
        Confirm Booking
      </button>

      {message && (
        <div
          className={`mt-4 p-3 rounded-md text-sm font-medium ${
            message.includes("success")
              ? "bg-green-100 text-green-800 border border-green-300"
              : "bg-red-100 text-red-800 border border-red-300"
          }`}
        >
          {message}
        </div>
      )}
    </form>
  );
};

export default BookingForm;
