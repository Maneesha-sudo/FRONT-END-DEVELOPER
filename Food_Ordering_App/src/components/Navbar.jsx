import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='bg-blue-700 text-white flex justify-between items-center'>
      <h1 className='text-2xl font-bold'>Food App</h1>
      <div className='flex gap-4'>
        <Link to="/" className='hover:underline'>Home</Link>
        <Link to="/login" className='hover:underline'>Login</Link>
        <Link to="/signup" className='hover:underline'>Signup</Link>
        <Link to="/chef" className='hover:underline'>Chef</Link>
        <Link to="/customer" className='hover:underline'>Customer</Link>

      </div>
    </nav>
  )
}

export default Navbar;