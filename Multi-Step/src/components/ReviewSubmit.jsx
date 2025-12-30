import React, { useState } from "react";
import axios from "axios";

const ReviewSubmit = ({ state, prevStep, reset }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setError("");

    try {
      // Example: sending data to a fake API
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", state);
      
      if (response.status === 201) {
        alert("Form submitted successfully!");
        reset();
      }
    } catch (err) {
      setError("Submission failed! Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gradient-to-r from-yellow-100 via-orange-200 to-red-100 rounded-xl shadow-2xl w-full max-w-md mx-auto transform transition duration-500 hover:scale-105">
      <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent mb-4">
        Review & Submit
      </h2>

      <div className="mb-4 space-y-2 text-gray-700">
        <p><strong>First Name:</strong> {state.firstName}</p>
        <p><strong>Last Name:</strong> {state.lastName}</p>
        <p><strong>Email:</strong> {state.email}</p>
      </div>

      {error && <p className="text-red-500 mb-2">{error}</p>}

      <div className="flex justify-between mt-4">
        <button
          onClick={prevStep}
          className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-4 py-2 rounded-lg hover:scale-105 transform transition duration-300"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default ReviewSubmit;
