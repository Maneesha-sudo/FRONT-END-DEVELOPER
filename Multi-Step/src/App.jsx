import React, { useReducer, useState } from "react";
import { reducer, initialState } from "./reducer";
import PersonalDetails from "./components/PersonalDetails";
import AccountDetails from "./components/AccountDetails";
import ReviewSubmit from "./components/ReviewSubmit";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const reset = () => {
    dispatch({ type: "RESET" });
    setStep(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-50 flex flex-col items-center justify-center p-4">
      
      {/* Main Heading */}
      <div className="text-center mb-6">
  <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-lg mb-2">
          User Registration
        </h1>
        <p className="text-purple-600 text-lg">
          Fill in your details to create an account
        </p>
      </div>

      {/* Progress Bar */}
      <ProgressBar step={step} />

      {/* Form Steps */}
      {step === 1 && <PersonalDetails state={state} dispatch={dispatch} nextStep={nextStep} />}
      {step === 2 && <AccountDetails state={state} dispatch={dispatch} nextStep={nextStep} prevStep={prevStep} />}
      {step === 3 && <ReviewSubmit state={state} prevStep={prevStep} reset={reset} />}
    </div>
  );
}

export default App;
