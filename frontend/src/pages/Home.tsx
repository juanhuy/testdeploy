import React from 'react';
import OnSale from '../components/Onsale';
import UbeenStitched from '../components/UbeenStitched';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div>
      {/* <CustomNavbar/> */}
      <OnSale/>
      <UbeenStitched/> 
      <Footer/>
    </div>
  );
};

export default Home;