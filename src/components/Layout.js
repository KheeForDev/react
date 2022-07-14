import React from "react";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
    return (
        <main className="main">
            <Outlet />
        </main>
    );
}

export default Layout;