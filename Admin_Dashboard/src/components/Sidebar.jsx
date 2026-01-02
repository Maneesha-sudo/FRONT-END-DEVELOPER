import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const linkStyle = ({ isActive }) =>
    `block px-4 py-2 rounded transition
     ${isActive ? "bg-blue-700 text-white" : "hover:bg-blue-800"}`;

  return (
    <div className="w-64 min-h-screen bg-blue-900 text-white p-6">
      <h2 className="text-xl font-bold mb-8">Admin Panel</h2>

      <nav className="space-y-3">
        <NavLink to="/" className={linkStyle}>
          Dashboard
        </NavLink>
        <NavLink to="/users" className={linkStyle}>
          Users
        </NavLink>
        <NavLink to="/reports" className={linkStyle}>
          Reports
        </NavLink>
        <NavLink to="/settings" className={linkStyle}>
          Settings
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
