import React from "react";

const ProgressBar = ({ step }) => {
  const steps = ["Personal", "Account", "Review"];
  const width = ((step - 1) / (steps.length - 1)) * 100;

  return (
    <div className="mb-6 w-full max-w-md mx-auto">
      {/* Progress Line */}
      <div className="relative h-2 bg-gray-300 rounded">
        <div
          className="absolute h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded transition-all duration-500"
          style={{ width: `${width}%` }}
        ></div>
      </div>

      {/* Step Labels */}
      <div className="flex justify-between mt-3">
        {steps.map((label, index) => (
          <span
            key={index}
            className={`text-lg font-bold transition-colors duration-300 ${
              step - 1 >= index
                ? "text-purple-700"
                : "text-gray-400"
            }`}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
