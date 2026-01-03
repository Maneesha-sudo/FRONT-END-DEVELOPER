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
    <div>
        <input placeholder='Name' onChange={(e)=>setData({...data,restaurantName:e.target.value})}/>
        <select onChange={e=>setData({...data, type:e.target.value})}>
            <option>Rajasthani</option>
            <option>Gujarathi</option>
            <option>Mughlai</option>
            <option>Jain</option>
            <option>Thai</option>
            <option>North Indian</option>
            <option>South Indian</option>
        </select>
        <select onChange={e=>
            setData({...data, parkingLot:e.target.value==="true"})
        }>
            <option value="true">Parking Available</option>
        </select>
        <button onClick={handlesubmit}>Add</button>
    </div>
  )
}

export default AddRestaurant;