import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-600 text-black py-3.5'>
      <p>&copy;{new Date().getFullYear()}FoodApp.
        All rights reserved
      </p>
    </footer>
  )
}

export default Footer