
import React from 'react';
import OnSale from '../components/OnSale';
import UbeenStitched from '../components/UbeenStitched';
import Slide from "../components/Slide";
import "../styles/global.css";
import ProductItem from '../components/ProductItem';
const Home: React.FC = () => {
  return (
    <div>
      <Slide/>
      <OnSale/>
      <UbeenStitched/>
      <ProductItem/> 
    </div>
  );
};

export default Home;

