import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import Services from '../../components/Service/Service';
import Portfolio from '../../components/Portofolio/Portofolio';


const Home = () => {
    return (
      <div className='pt-20'>
         <Navbar />
        <div className="flex flex-col xl:flex-row w-full h-auto xl:h-[85vh] gap-6 p-6">
          <div className="w-full xl:w-1/2 flex flex-col gap-6">
            <section id="hero"><Hero /></section>
            <section id="services"><Services /></section>
          </div>

          <div className="w-full xl:w-1/2">
            <section id="portfolio"><Portfolio /></section>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;
  
  