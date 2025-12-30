// App.jsx

import React, { useReducer } from "react";
import { formReducer, initialState } from "./reducer";
import PersonalDetails from "./components/PersonalDetails";
import AccountDetails from "./components/AccountDetails";
import ReviewSubmit from "./components/ReviewSubmit";

const App = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { step, formData, isSubmitted } = state;

  if (isSubmitted) {
    return (
      <div>
        <h2>Form Submitted Successfully 🎉</h2>
        <button onClick={() => dispatch({ type: "RESET_FORM" })}>
          Reset Form
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>Multi-Step Registration Form</h1>

      {step === 1 && (
        <PersonalDetails formData={formData} dispatch={dispatch} />
      )}

      {step === 2 && (
        <AccountDetails formData={formData} dispatch={dispatch} />
      )}

      {step === 3 && (
        <ReviewSubmit formData={formData} dispatch={dispatch} />
      )}
    </div>
  );
};

export default App;
