import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Login from "./components/Login";
import Register from "./components/Register";
import Unauthorized from "./components/Unauthorized"
import Missing from "./components/Missing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="unauthorized" element={<Unauthorized />} />
      </Route>

      {/* for route that does not match any of the above */}
      <Route path="*" element={<Missing />} />
    </Routes>
  );
}

export default App;
