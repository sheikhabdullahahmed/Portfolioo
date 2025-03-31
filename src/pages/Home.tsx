import { Navbar } from "../Components/Navbar/Navbarl";
import { Sidebar } from "../Components/SideBar/Sidebar";
import { Hero } from "../Components/Hero/Hero";
import { About } from "../About/about";
import { Contact } from "../Components/Contact/Contact";

const HomePage = () => {
  return (
    <>
      <main>
        <Navbar />
        <Sidebar />
        <Hero />
        <About />
        <Contact />
      </main>
    </>
  );
};

export default HomePage;
