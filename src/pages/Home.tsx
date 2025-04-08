import React from "react";
import { Navbar } from "../Components/Navbar/Navbarl";
import { Sidebar } from "../Components/SideBar/Sidebar";
import { Hero } from "../Components/Hero/Hero";
import { About } from "../About/about";
import { ContactPage } from "../Components/Contact/Contact";


const HomePage: React.FC = () => {
  return (
    <>
      <main>
        <Navbar />
        <Sidebar />
        <Hero />
        <About />
        <ContactPage />
      </main>
    </>
  );
};

export default HomePage;
