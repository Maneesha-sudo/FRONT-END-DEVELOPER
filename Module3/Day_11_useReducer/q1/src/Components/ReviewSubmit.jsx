// components/ReviewSubmit.jsx

const ReviewSubmit = ({ formData, dispatch }) => {
  return (
    <>
      <h2>Review & Submit</h2>

      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Username:</strong> {formData.username}</p>

      <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
        Back
      </button>

      <button onClick={() => dispatch({ type: "SUBMIT_FORM" })}>
        Submit
      </button>
    </>
  );
};

export default ReviewSubmit;
