import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";

// required for react toastify
import "react-toastify/dist/ReactToastify.css";

// required for react bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import { AuthProvider } from "./context/AuthProvider"
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
        <ToastContainer
          position="bottom-right"
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);