import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Store } from "./Redux/Strore.js";
import { Provider } from "react-redux";
import ProtectedRoute from "./Validation/ProtectedRoute.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ChakraProvider>
      <ToastContainer />
      <Provider store={Store}>
        <ProtectedRoute>
          <App />
        </ProtectedRoute>
      </Provider>
    </ChakraProvider>
  </BrowserRouter>
);
