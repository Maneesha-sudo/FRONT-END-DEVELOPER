import { useState } from "react";

const UserTable = ({ users }) => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const usersPerPage = 5;

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const lastIndex = currentPage * usersPerPage;
  const firstIndex = lastIndex - usersPerPage;
  const currentUsers = filteredUsers.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      {/* Search */}
      <div className="relative w-64 group mb-4">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-hover:text-blue-600">
          🔍
        </span>
        <input
          type="text"
          placeholder="Search users..."
          className="w-full pl-10 py-2 border rounded-lg transition-all
                     hover:shadow-md focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-blue-300">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="py-2">Name</th>
              <th>Email</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user.id} className="border-b hover:bg-gray-50">
                <td className="py-2">{user.name}</td>
                <td>{user.email}</td>
                <td>{user.company.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end gap-2 mt-4">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded 
              ${currentPage === i + 1
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UserTable;
