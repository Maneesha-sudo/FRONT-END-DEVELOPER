import React from 'react'

const Protected_Route = ({ children, role }) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
        return <Navigate to="/" />;
    }
    if (role && user.role !== role) {
        return <Navigate to="/" />;
    }

return children;
}

export default Protected_Route;