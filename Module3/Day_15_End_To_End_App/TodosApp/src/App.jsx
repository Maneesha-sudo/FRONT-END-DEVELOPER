import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from "./pages/Signup"
import Login from './pages/Login'
import Todos from './pages/Todos'
import ProtectedRoute from './routes/ProtectedRoute'
const App = () => {
  return (
    
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>

            <Route path="/todos" element={
                <ProtectedRoute>
                    <Todos/>
                </ProtectedRoute>
                }/>
        </Routes>
        </BrowserRouter>
    
  )
}

export default App