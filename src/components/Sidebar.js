import React from "react";
import { Link, useNavigate } from "react-router-dom";

import useAuth from "../hook/useAuth";

const Sidebar = () => {
    const { setAuth } = useAuth();
    const navigate = useNavigate();

    const logout = async () => {
        setAuth({});
        navigate('/login');
    }

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
                <li><Link to="/warranty">Warranty</Link></li>
                <li><Link to="/editor">Editors Page</Link></li>
                <li><Link to="/admin">Admin Page</Link></li>
                <li><Link to="/login" onClick={logout}>Logout</Link></li>
            </ul>
        </nav>
    );
}

export default Sidebar;