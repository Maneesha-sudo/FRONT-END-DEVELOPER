import React, { useState, useNavigate, Children } from 'react'
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({children}) => {
  const { isAuth } = useContext(AuthContext);
    const navigate = useNavigate()

    
            if(isAuth){
                navigate("/Login")
            }

    return children
}

export default ProtectedRoute;