import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import '../styles/Breadcrumb.css';

const Breadcrumb = () => {
  const navigate = useNavigate();

  return (
    <div className="breadcrumb-container">
      <span className="breadcrumb-back" onClick={() => navigate(-1)}>
        <ArrowLeft size={24} className="breadcrumb-icon" />
      </span>
      <span>Accessories</span>
    </div>
  );
};

export default Breadcrumb;
