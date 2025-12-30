import React from "react";

const PersonalDetails = ({ state, dispatch, nextStep }) => {
  const { firstName, lastName, email } = state;

  const handleNext = () => {
    if (!firstName || !lastName || !email) {
      alert("All fields are required!");
      return;
    }
    nextStep();
  };

  return (
    <div className="p-6 bg-gradient-to-r from-blue-100 via-purple-200 to-pink-100 rounded-xl shadow-2xl w-full max-w-md mx-auto transform transition duration-500 hover:scale-105">
      <h2 className="text-2xl font-semibold mb-4 text-purple-700">Personal Details</h2>
      
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) =>
          dispatch({ type: "SET_FIELD", field: "firstName", value: e.target.value })
        }
        className="border border-purple-300 p-2 mb-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) =>
          dispatch({ type: "SET_FIELD", field: "lastName", value: e.target.value })
        }
        className="border border-purple-300 p-2 mb-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) =>
          dispatch({ type: "SET_FIELD", field: "email", value: e.target.value })
        }
        className="border border-purple-300 p-2 mb-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
      />

      <button
        onClick={handleNext}
        className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:scale-105 transform transition duration-300"
      >
        Next
      </button>
    </div>
  );
};

export default PersonalDetails;
