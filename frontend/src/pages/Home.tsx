
import React from 'react';
import OnSale from '../components/Onsale';
import UbeenStitched from '../components/UbeenStitched';
import Footer from '../components/Footer';
import Bikinis from '../components/Bikinis';
import "../styles/global.css"
import Navigator from "../components/Navigator";
import Slide from "../components/Slide";
import BestSeller from "../components/BestSeller";

const Home: React.FC = () => {
  return (
    <div>
      <OnSale/>
      <UbeenStitched/> 
      <Footer/> 
      <Bikinis/>

      <Navigator/>
        <Slide/>
        <BestSeller/>
    </div>
  );
};

export default Home;

