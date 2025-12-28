import React from 'react';
import {Navigate } from "react-router-dom"

 const ProtectedRoute = ({children}) => {
  if(!isLoggedIn){
    return <Navigate to="/Login" />
  }
    
  return children;
}
export default ProtectedRoute;

