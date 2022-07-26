import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Unauthorized from "./pages/Unauthorized"
import Home from "./pages/Home";
import Warranty from "./pages/warranty/Warranty";
import AddWarranty from "./pages/warranty/AddWarranty";
import Admin from "./pages/Admin";
import Missing from "./pages/Missing";

function App() {
  return (
    <Routes>

      {/* public routes */}
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="unauthorized" element={<Unauthorized />} />

      <Route path="/" element={<Layout />}>
        {/* protected routes */}
        <Route element={<RequireAuth allowedRoles={["ROLE_USER", "ROLE_ADMIN"]} />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={["ROLE_USER"]} />}>
          <Route path="/warranty" element={<Warranty />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={["ROLE_USER"]} />}>
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
