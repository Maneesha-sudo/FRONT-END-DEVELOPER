import React, { useState } from 'react'


const Admin = () => {
  const [fleet, setFleet] = useState([]);
  const [form, setForm] = useState({
    regNo: "",
    category: "",
    driverName: "",
    available: "Available"
  });

  function handlechange(e) {
    setForm({...form, [e.target.name]:e.target.value});
  }
  function addFleet(e){
    e.preventDefault();
    // if (!form.regNo || !form.category || !form.driverName) {
    //   alert("All fields are required");
    //   return;
    // }
    setFleet([...fleet, { ...form, id: Date.now() }]);
    setForm({
      regNo: "",
      category: "",
      driverName: "",
      available: "Available"
    });
  }
  function updateDriver(id) {
    const newName = prompt("Enter drivers name");
    if (!newName) return;
    setFleet(fleet.map((item) =>
      item.id === id ? { ...item, driver: newName } : item));
  }

  function toggleAvailability(id) {
    setFleet(
      fleet.map((item) =>
        item.id === id ? {
          ...item, available: item.available === "Available" ? "Unavailable" : "Available",
        } : item)
    );
    function deleteVehicle(id) {
      setFleet(fleet.filter((item) =>
        item.id !== id));
    }
  }

  return (

    <div className='card'>
      <h2>Fleet cards</h2>
      <form onSubmit={addFleet}>
        <input
          name='regNo'
          placeholder='vehicle reg no'
          value={form.regNo}
          onChange={handlechange}
        />
        <select
          name='category'
          value={form.category}
          onChange={handlechange}>
          <option value="Auto">Auto</option>
          <option value="Car">Car</option>
          <option value="Truck">Truck</option>
          <option value="Bus"> Bus</option>
        </select>
        <br /><br />

        <input
          name='driver'
          placeholder='driver name'
          value={form.driver}
          onChange={handlechange}
        />
        <select
          name='available'
          value={form.available}
          onChange={handlechange} >
          <option>Available</option>
          <option>Unavailable</option>
        </select>
        <br /><br />
        <button type='submit'>Add fleet</button>
      </form>


      <div style={{ width: "70%" }}>
        
        {fleet.map((item) => (
          <div key={item.id}
            style={{
              border: "1px solid grey",
              padding: "10px"
            }}>
            <p>RegNo: {item.regNo}</p>
            <p>Category:{item.category}</p>
            <p>Driver:{item.driver}</p>
            <p>Status:{item.available}</p>

            <button onClick={() =>
              updateDriver(item.id)
            }>Update Driver</button>

            <button onClick={() =>
              toggleAvailability(item.id)
            }>Toggle Availablity</button>

            <button onClick={() =>
              deleteVehicle(item.id)
            }>Delete</button>
          </div>
        )
        )}

      </div>
    </div>
  );
}

export default Admin;