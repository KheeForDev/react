import React from "react";
import { Link, useNavigate } from "react-router-dom";

import useAuth from "../hook/useAuth";

const Sidebar = () => {
    const { auth, setAuth } = useAuth();
    const navigate = useNavigate();

    const logout = async () => {
        setAuth({});
        navigate('/login');
    }

    return (
        <nav className="sidebar">
            <ul>
                <li><Link to="/">About</Link></li>
                {auth?.roles?.includes("ROLE_USER") && <li><Link to="/warranty">Warranty</Link></li>}
                {auth?.roles?.includes("ROLE_ADMIN") && <li><Link to="/setting">Setting</Link></li>}
                <li><Link to="/login" onClick={logout}>Logout</Link></li>
            </ul>
        </nav>
    );
}

export default Sidebar;