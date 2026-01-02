import React from 'react'
import {BrowserRouter, Routes, Router, Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import ChefDashboard from "./chef/ChefDashboard"
const App = () => {
  return (
    <BrowserRouter>
      <Router>
        <Navbar />
        <div className='min-h-screen'>
          <Routes>
            <Route path="./login" element={< Login />} />
            <Route path="./signup" element={< Signup />} />
            <Route path="./chefdashboard" element={< ChefDashboard />} />
          </Routes>
        </div>

        <Footer />
      </Router>
  
    </BrowserRouter>
  )
}

export default App