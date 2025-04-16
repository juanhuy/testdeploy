import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AccessoriesPage from "./pages/AccessoriesPage";
import "./styles/app.css";
import Home from './pages/Home';
import Sale from './pages/Sale';
import Footer from "./components/Footer";
import Swimwear from "./pages/Swimwear";
import ClothingPage from "./pages/ClothingPage";
import MyAccount from "./pages/MyAccount";
import ItemPage from "./pages/ItemPage";
import LoginSection from "./pages/LoginSection";
import AdminPage from "./pages/AdminPage";
import './assets/themify-icons/themify-icons.css';
import RegisterSection from "./pages/RegisterSection";
import ShoppingCartPopup from "./components/ShoppingCartPopup";
import ForgotPassword from './components/ForgotPassword';




const App = () => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <Router>
      {/* Truyền hàm mở cart xuống Navbar nếu muốn trigger từ đó */}
      <Navbar onCartClick={() => setCartOpen(true)} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clothing" element={<ClothingPage />} />
        <Route path="/swimwear" element={<Swimwear />} />
        <Route path="/accessories" element={<AccessoriesPage />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/myaccount/" element={<MyAccount />} />
        <Route path="/item/*" element={<ItemPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/myaccount/*" element={<MyAccount />} />
        <Route path="/login" element={<LoginSection />} />
        <Route path="/signup" element={<RegisterSection />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>

      {/* Shopping Cart Popup */}
      <ShoppingCartPopup
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
      />

      <Footer />
    </Router>
  );
};

export default App;
