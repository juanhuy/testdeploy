<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
=======

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/Bikinis.css";
import "./styles/Footer.css";
import "./styles/Onsale.css";
import "./styles/UbeenStitched.css";


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

>>>>>>> origin/Cuong2
