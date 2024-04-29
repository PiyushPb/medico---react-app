import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContextProvider } from "./context/authContext.jsx";
import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <Router>
      <AuthContextProvider>
        <ToastContainer
          theme="dark"
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
        />
        <App />
      </AuthContextProvider>
    </Router>
  </ThemeProvider>
);
