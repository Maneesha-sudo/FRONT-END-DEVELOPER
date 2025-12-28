import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login";
import Admin from "./Admin";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Unprotected / Public routes */}
        <Route path="/" element={<Login />} />

        {/* Protected route */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>

          } />
          <Route path="*" element={<Login/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
