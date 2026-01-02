import { useEffect, useState } from "react";
import api from "../services/api";
import DashboardCards from "../components/DashboardCards";
import UserTable from "../components/UserTable";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      <DashboardCards users={users} />
      <UserTable users={users} />
    </div>
  );
};

export default Dashboard;
