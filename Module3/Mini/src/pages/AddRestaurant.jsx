import React from 'react'
import { useNavigate } from 'react-router-dom'

const AddRestaurant = () => {
    const[data, setData] = ({

  restaurantID: 26,
  restaurantName: "1135 AD",
  address: "Jaipur, Amber Fort, Rajasthan",
  type: "Rajasthani",
  parkingLot: true,
  image: "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"
  })
const navigate=useNavigate();
function handlesubmit(){
    const restarants=JSON.parse(localStorage.getItem)
}

  return (
    <div>AddRestaurant</div>
  )
}

export default AddRestaurant