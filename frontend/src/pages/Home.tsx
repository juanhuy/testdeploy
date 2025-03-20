import "../styles/global.css"
import Navigator from "../components/Navigator";
import Slide from "../components/Slide";
import BestSeller from "../components/BestSeller";


import React from 'react';
// import CustomNavbar from '../components/Navbar';


const Home: React.FC = () => {
  return (
    <div>
      <Navigator/>
        <Slide/>
        <BestSeller/>
    </div>
  );
};


export default Home;

