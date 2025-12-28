import React, { useEffect, useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();
  const emailRef=useRef();
  useEffect(()=>{
    emailRef.current.focus();
  },[]);

  function HandleLogin() {
    if (email === "admin@gmail.com" && password === "admin1234") {
      alert("login success");
      localStorage.setItem("isAuth", true);
      navigate("/admin");
      
    }

    else {
      alert("Wrong email or password")
    }

  }
  return (
    <>

      <div className="box">
        <h2>Login page</h2>
       <form onSubmit={HandleLogin}>
        <input
        ref={emailRef}
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

        <button type="submit">Login</button>
        </form>
      </div>
    </>
  )
};

export default Login;

