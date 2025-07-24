import React, { useState } from "react";
import api from "../api/api";

const MaidRegistrationForm = () => {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    locality: "",
    availableTimings: "",
    skills: "",
    experience: "",
  });
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await api.post("/maids", {
        ...form,
        skills: form.skills.split(",").map((s) => s.trim()),
      });
      setMessage({ text: "Registration successful!", type: "success" });
      setForm({
        name: "",
        contact: "",
        locality: "",
        availableTimings: "",
        skills: "",
        experience: "",
      });
    } catch (error) {
      setMessage({
        text:
          error.response?.data?.message ||
          "Registration failed. Please try again.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-8 shadow-lg rounded-xl border border-gray-200 mt-8">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Maid Registration
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter full name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>

        {/* Contact */}
        <div>
          <label
            htmlFor="contact"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Contact Number
          </label>
          <input
            id="contact"
            name="contact"
            type="tel"
            value={form.contact}
            onChange={handleChange}
            placeholder="Phone number"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>

        {/* Locality */}
        <div>
          <label
            htmlFor="locality"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Locality <span className="text-red-500">*</span>
          </label>
          <input
            id="locality"
            name="locality"
            value={form.locality}
            onChange={handleChange}
            placeholder="Your area/locality"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>

        {/* Timings */}
        <div>
          <label
            htmlFor="availableTimings"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Available Timings
          </label>
          <input
            id="availableTimings"
            name="availableTimings"
            value={form.availableTimings}
            onChange={handleChange}
            placeholder="e.g., 9am–5pm, Mon–Sat"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>

        {/* Skills */}
        <div>
          <label
            htmlFor="skills"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Skills
          </label>
          <input
            id="skills"
            name="skills"
            value={form.skills}
            onChange={handleChange}
            placeholder="Cleaning, Cooking, Babysitting"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition"
          />
          <p className="mt-1 text-xs text-gray-500">
            Separate multiple skills with commas
          </p>
        </div>

        {/* Experience */}
        <div>
          <label
            htmlFor="experience"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Experience (in years)
          </label>
          <input
            id="experience"
            name="experience"
            type="number"
            min="0"
            value={form.experience}
            onChange={handleChange}
            placeholder="e.g. 3"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2 px-4 text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition ${
            isSubmitting ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? (
            <div className="flex justify-center items-center">
              <svg
                className="animate-spin h-4 w-4 mr-2 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Processing...
            </div>
          ) : (
            "Register Now"
          )}
        </button>

        {/* Message Box */}
        {message && (
          <div
            className={`p-3 mt-4 rounded-md text-sm font-medium ${
              message.type === "success"
                ? "bg-green-100 text-green-700 border border-green-300"
                : "bg-red-100 text-red-700 border border-red-300"
            }`}
          >
            {message.text}
          </div>
        )}
      </form>
    </div>
  );
};

export default MaidRegistrationForm;
