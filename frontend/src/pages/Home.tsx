
import React from 'react';
import OnSale from '../components/OnSale';
import UbeenStitched from '../components/UbeenStitched';
import Slide from "../components/Slide";
import "../styles/global.css";
const Home: React.FC = () => {
  return (
    <div>
      <Slide/>
      <OnSale/>
      <UbeenStitched/> 
    </div>
  );
};

export default Home;

