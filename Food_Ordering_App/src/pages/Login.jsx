import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPasswrod] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) return alert("enter email and password");
    try {
      await signInWithEmailAndPassword
        (auth, email, password);
      alert("login successfull")
      navigate("/chef")
    }
    catch (error) {
      alert(error.message);
    }

  }
  return (
    <div className='flex justify-centeri items-center h-screen bg-gray-400'>
<form onSubmit={handleLogin} className="flex flex-col gap-4"/>
<h2>Login</h2>
<input type='email' placeholder='enter email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
<input type='password' placeholder='enter password' value={password} onChange={(e)=>setPasswrod(e.target.value)}/>
    </div>
  )
}

export default Login