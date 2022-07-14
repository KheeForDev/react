import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";

import useAuth from "../hook/useAuth";

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();

    return (
        // return child component
        // auth has roles and is in the allowed role list
        //
        // return unauthorized page
        // auth has no role, but is logged in
        //
        // return login page
        // auth has no role and not logged in
        auth?.roles?.find(role => allowedRoles.includes(role))
            ? <Outlet />
            : auth?.username
                ? <Navigate to="/unauthorized" />
                : <Navigate to="/login" />
    );
}

export default RequireAuth;