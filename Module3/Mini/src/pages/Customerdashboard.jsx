import React from 'react'

const Customerdashboard = () => {

  const restaurants = JSON.parse(localStorage.getItem("restaurants"))
  return (
    <div>
      <h2>Customer dashboard</h2>
      {restaurants.map(r => (
        <div key={r.restaurantId}>
          <img src={r.image} width="150" />
          <h4>{r.restaurantName}</h4>
          <p>{r.address}</p>
          <p>{r.type}</p>
          <p>{r.parkingLot ? "Parking Available" : "No parking"}</p>

        </div>
      ))}


    </div>
  )
}

export default Customerdashboard