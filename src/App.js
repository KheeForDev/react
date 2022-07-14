import React from "react";
import { Routes, Route } from "react-router-dom";

// required for react bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";
import Login from "./components/Login";
import Register from "./components/Register";
import Unauthorized from "./components/Unauthorized"
import Home from "./components/Home";
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

        {/* for route that does not match any of the above */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
