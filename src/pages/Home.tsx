import React from 'react';
import { Navbar } from '../Components/Navbar/Navbarl';
import { Sidebar } from '../Components/SideBar/Sidebar';
import {Hero} from '../Components/Hero/Hero';

const HomePage = () => {
  return (
    <>
      <main>  
        <Navbar />
        <Sidebar/>
        <Hero/>
      </main>
    </>
  );
};

export default HomePage;
