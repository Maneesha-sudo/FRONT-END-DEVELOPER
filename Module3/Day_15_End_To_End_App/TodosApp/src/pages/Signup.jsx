import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const { Signup } = useContext(AuthContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  function handleSignup() {
    // validation
    if (!email || !password) {
      alert("Fields cannot be empty")
      return
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters")
      return
    }

    // signup success
    Signup() // update auth state
    alert("Signup successful")

    // redirect to login page
    navigate("/login")
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

      <button onClick={handleSignup}>Signup</button>
    </div>
  )
}

export default Signup
