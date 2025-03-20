import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/Bikinis.css";
import "./styles/Footer.css";
import "./styles/Onsale.css";
import "./styles/UbeenStitched.css";
import "./styles/Navbar.css";

const rootElement = document.getElementById("container");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
      </React.StrictMode>
  );
  console.log("Running this function");
} else {
  console.error("No root element found!");
}
