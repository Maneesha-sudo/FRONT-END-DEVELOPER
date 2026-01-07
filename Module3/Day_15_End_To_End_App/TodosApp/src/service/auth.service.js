import axios from "./axiosInstance";

const AUTH_URL =
  "https://identitytoolkit.googleapis.com/v1/accounts";
const API_KEY = "YOUR_FIREBASE_API_KEY";

// SIGNUP
export const signupUser = async (email, password) => {
  const response = await axios.post(
    `${AUTH_URL}:signUp?key=${API_KEY}`,
    {
      email,
      password,
      returnSecureToken: true,
    }
  );
  return response.data;
};

// LOGIN
export const loginUser = async (email, password) => {
  const response = await axios.post(
    `${AUTH_URL}:signInWithPassword?key=${API_KEY}`,
    {
      email,
      password,
      returnSecureToken: true,
    }
  );
  return response.data;
};

// LOGOUT (handled locally)
export const logoutUser = () => {
  localStorage.removeItem("token");
};
