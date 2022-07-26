import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UilExclamationCircle, UilShieldCheck, UilSetting, UilSignout } from '@iconscout/react-unicons'

import useAuth from "../hook/useAuth";
import img_placeholder from "../asserts/images/profile_placeholder.jpg";

const Sidebar = () => {
    const { auth, setAuth } = useAuth();
    const navigate = useNavigate();

    const logout = async () => {
        setAuth({});
        navigate('/login');
    }

    return (
        <nav className="sidebar">
            {/* <div>
                <img src={img_placeholder} />
            </div> */}
            <ul>
                <li><Link to="/"><UilExclamationCircle />About</Link></li>
                {auth?.roles?.includes("ROLE_USER") && <li><Link to="/warranty"><UilShieldCheck />Warranty</Link></li>}
                {auth?.roles?.includes("ROLE_ADMIN") && <li><Link to="/setting"><UilSetting />Setting</Link></li>}
                <li><Link to="/login" onClick={logout}><UilSignout />Logout</Link></li>
            </ul>
        </nav>
    );
}

export default Sidebar;