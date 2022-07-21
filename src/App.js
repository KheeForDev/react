import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";
import Login from "./components/Login";
import Register from "./components/Register";
import Unauthorized from "./components/Unauthorized"
import Home from "./components/Home";
import AddWarranty from "./components/AddWarranty";
import Admin from "./components/Admin";
import Missing from "./components/Missing";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* protected routes */}
        <Route element={<RequireAuth allowedRoles={["ROLE_USER", "ROLE_ADMIN"]} />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={["ROLE_USER", "ROLE_ADMIN"]} />}>
          <Route path="/addwarranty" element={<AddWarranty />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={["ROLE_ADMIN"]} />}>
          <Route path="/admin" element={<Admin />} />
        </Route>

        {/* for route that does not match any of the above */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
