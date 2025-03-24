
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import AccessoriesPage from "./pages/AccessoriesPage";
import "./styles/App.css"; 
import Home from './pages/Home';
import Sale from './pages/Sale';
import Footer from "./components/Footer";
import Swimwear from "./pages/Swimwear";
import ClothingPage from "./pages/ClothingPage";
import MyAccount from "./pages/MyAccount";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/clothing" element = {<ClothingPage />} />
        <Route path="/swimwear" element = {<Swimwear />} />
        <Route path="/accessories" element = {<AccessoriesPage />} />
        <Route path="/sale" element = {<Sale />} />
        <Route path="/myaccount/*" element = {<MyAccount />} />
      </Routes>
      <Footer />
    </Router>
  );
};



export default App;
