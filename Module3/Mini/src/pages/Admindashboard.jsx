import React from 'react'
import { useNavigate } from 'react-router-dom'

const Admindashboard = () => {
const navigate=useNavigate();
const restaurents= JSON.parse(localStorage.getItem("restarants"))

const delresto=(id)=>
{
    const updated=restaurents.filter(r=>r.restaurantId!==id);
    localStorage.setItem("restaurants", JSON.stringify(updated))

};
  return (
    <div>
        <h2>Admin Dashboard</h2>
        <button onClick={()=>navigate("/admin/add")}>Add resto</button>
        {restaurents.map(r=>(
            <div key={r.restaurantId}>
                <h4>{r.restaurantName}</h4>
                <button onClick={()=>navigate(`/admin/update/${r.restaurantId}`)}>Update</button>
                <button onClick={()=>
                    delresto(r.restaurantId)}>Delete</button>
            </div>
        ))}
    </div>
  )
}

export default Admindashboard