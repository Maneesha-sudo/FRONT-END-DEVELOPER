import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Admindashboard from './pages/Admindashboard'
import Customerdashboard from './pages/Customerdashboard'

const App = () => {


  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin/dashboard" element={
          <ProtectedRoute role="admin"><Admindashboard />

          </ProtectedRoute>} />

        <Route path='/admin/add' element={
          <ProtectedRoute
            role="admin"><AddRestaurant />

          </ProtectedRoute>
        } />

        <Route path='/customers/dashboard' element={
          <ProtectedRoute
            role="customer"><Customerdashboard />

          </ProtectedRoute>
        } />


      </Routes>
    </BrowserRouter>


  )
}

export default App