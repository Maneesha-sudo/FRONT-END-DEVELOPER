const DashboardCards = ({ users }) => {
  const totalUsers = users.length;
  const activeUsers = Math.max(users.length - 2, 0);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
      <div className="bg-blue-100 p-6 rounded-xl shadow 
                      transition transform hover:-translate-y-1 hover:shadow-lg">
        <h3 className="text-blue-700 font-bold">Total Users</h3>
        <p className="text-3xl font-bold text-yellow-600">
          {totalUsers}
        </p>
      </div>

      <div className="bg-blue-100 p-6 rounded-xl shadow 
                      transition transform hover:-translate-y-1 hover:shadow-lg">
        <h3 className="text-blue-700 font-bold">Active Users</h3>
        <p className="text-3xl font-bold text-yellow-600">
          {activeUsers}
        </p>
      </div>

      <div className="bg-blue-100 p-6 rounded-xl shadow 
                      transition transform hover:-translate-y-1 hover:shadow-lg">
        <h3 className="text-blue-700 font-bold">Admins</h3>
        <p className="text-3xl font-bold text-yellow-600">2</p>
      </div>
    </div>
  );
};

export default DashboardCards;
