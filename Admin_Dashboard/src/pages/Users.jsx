import { useEffect, useState } from "react";
import api from "../services/api";
import UserTable from "../components/UserTable";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Users</h1>
      <UserTable users={users} />
    </div>
  );
};

export default Users;
