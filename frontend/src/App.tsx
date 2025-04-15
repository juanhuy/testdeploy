
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


import ItemPage from "./pages/ItemPage";


import Shopping_Cart from "./pages/Shopping_Cart";
import OnSale from "./components/Onsale";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/clothing" element = {<ClothingPage />} />
          <Route path="/swimwear" element = {<Swimwear />} />
          <Route path="/accessories" element = {<AccessoriesPage />} />
          <Route path="/sale" element = {<Sale />} />

          <Route path="/myaccount/" element = {<MyAccount />} />
          <Route path="/item/*" element = {<ItemPage />} />

          <Route path="/myaccount/*" element = {<MyAccount />} />
          <Route path="/shoppingcart/*" element = {<Shopping_Cart />} />

          <Route path="/" element={<OnSale />} />
          <Route path="/product/:productName" element={<ItemPage />} />
        </Routes>
        <Footer />
      </Router>
    </QueryClientProvider>
  );
};



export default App;
