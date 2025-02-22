<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
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
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css'; 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
>>>>>>> b32e009e222af6d715c47291abd3bce31259fb55
