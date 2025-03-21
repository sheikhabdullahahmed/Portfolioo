import React from 'react';
import { Navbar } from '../Components/Navbar/Navbarl';
import { Sidebar } from '../Components/SideBar/Sidebar';
import {Hero} from '../Components/Hero/Hero';
import { About } from '../About/about';

const HomePage = () => {
  return (
    <>
      <main>  
        <Navbar />
        <Sidebar/>
        <Hero/>
        <About/>
      </main>
    </>
  );
};

export default HomePage;
