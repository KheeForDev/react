import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
    return (
        <main className="main">
            <Sidebar />
            <Outlet />
        </main>
    );
}

export default Layout;