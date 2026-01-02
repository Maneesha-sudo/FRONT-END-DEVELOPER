import React from "react";

const AccountDetails = ({ formData, handleChange, nextStep, prevStep }) => {
  const { password, confirmPassword } = formData;

  const handleNext = () => {
    if (!password || !confirmPassword) {
      alert("All fields are required!");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    nextStep();
  };

  return (
    <div className="p-6 bg-gradient-to-r from-green-100 via-teal-200 to-cyan-100 rounded-xl shadow-2xl w-full max-w-md mx-auto transform transition duration-500 hover:scale-105">
      <h2 className="text-2xl font-semibold mb-4 text-teal-700">Account Details</h2>

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => handleChange("password", e.target.value)}
        className="border border-teal-300 p-2 mb-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => handleChange("confirmPassword", e.target.value)}
        className="border border-teal-300 p-2 mb-1 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
      />
      {password && confirmPassword && password !== confirmPassword && (
        <p className="text-red-500 mb-2">Passwords do not match!</p>
      )}

      <div className="flex justify-between mt-4">
        <button
          onClick={prevStep}
          className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:scale-105 transform transition duration-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AccountDetails;
