<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/Bikinis.css";
import "./styles/Footer.css";
import "./styles/Onsale.css";
import "./styles/UbeenStitched.css";

const rootElement = document.getElementById("container");

=======

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/Navbar.css";

const rootElement = document.getElementById("container");


>>>>>>> origin/vy
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
<<<<<<< HEAD
    </React.StrictMode>
=======
    </React.StrictMode>,


>>>>>>> origin/vy
  );
  console.log("Running this function");
} else {
  console.error("No root element found!");
}
<<<<<<< HEAD
=======

>>>>>>> origin/vy
