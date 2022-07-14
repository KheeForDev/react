import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <nav className="sidebar">
            <h2>Public</h2>
            <ul>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
            <br />
            <h2>Private</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/editor">Editors Page</Link></li>
                <li><Link to="/admin">Admin Page</Link></li>
                <li><Link to="/">Logout</Link></li>
            </ul>
        </nav>
    );
}

export default Sidebar;