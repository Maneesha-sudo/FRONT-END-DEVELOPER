import { useState, useEffect } from "react";

function UserData() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then(res => res.json())
      .then(data => {
        setUser(data);       // store user
        setLoading(false);   // stop loading
      })
      .catch(error => {
        console.error("Error fetching user:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserData;
