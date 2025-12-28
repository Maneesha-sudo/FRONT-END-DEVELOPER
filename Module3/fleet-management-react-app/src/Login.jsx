import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function HandleLogin() {
    if (email === "admin@gmail.com" && password === "admin1234") {
      alert("login success")
      setIsLoggedIn(true);
    }

    else {
      alert("Wrong email or password")
    }

    if (isLoggedIn) {
      return <Navigate to="/admin" />;
    }
  }
  return (
    <>

      <div>
        <h2>Login page</h2>

        <input
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        <button onClick={HandleLogin}>Login</button>
      </div>
    </>
  )


};

export default Login;

