import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { Login, isAuth } = useContext(AuthContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  function handleLogin() {
    // validation first
    if (!email || !password) {
      alert("Fields cannot be empty")
      return
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters")
      return
    }

    // login check
    if (email === "admin@gmail.com" && password === "admin1234") {
      Login() // update auth state
      alert("Login successful")
      navigate("/todos")
    } else {
      alert("Invalid credentials")
      navigate("/signup")
    }
  }

  return (
    <div>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
