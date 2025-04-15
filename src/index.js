import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId="1070160737835-ot2s86guen7aam71hbflft4hkiv0v5ju.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);

