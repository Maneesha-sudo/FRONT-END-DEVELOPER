import React from "react";

const Navbar = ({ filter, setFilter, isAuth, onLogout }) => {
  return (
    <nav className="navbar">
      <h2>Todos App</h2>

      <div className="filters">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All Todos
        </button>

        <button
          className={filter === "completed" ? "active" : ""}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>

        <button
          className={filter === "pending" ? "active" : ""}
          onClick={() => setFilter("pending")}
        >
          Pending
        </button>
      </div>

      <div>
        {isAuth ? (
          <button onClick={onLogout}>Sign Out</button>
        ) : (
          <button disabled>Sign In</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
