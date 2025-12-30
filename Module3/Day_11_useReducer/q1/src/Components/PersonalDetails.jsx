// components/PersonalDetails.jsx

const PersonalDetails = ({ formData, dispatch }) => {
  return (
    <>
      <h2>Personal Details</h2>

      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_FIELD",
            field: "name",
            value: e.target.value
          })
        }
      />

      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_FIELD",
            field: "email",
            value: e.target.value
          })
        }
      />

      <button onClick={() => dispatch({ type: "NEXT_STEP" })}>
        Next
      </button>
    </>
  );
};

export default PersonalDetails;
