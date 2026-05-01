import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { TradeProvider } from "./context/TradeContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <TradeProvider>
        <App />
      </TradeProvider>
    </AuthProvider>
  </React.StrictMode>
);