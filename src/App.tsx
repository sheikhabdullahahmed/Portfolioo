import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact2 from './pages/Contact';
import { Footer } from './Components/Footer/Footer';
import { ScrollButto } from './ScrollButton';
import Projects from './pages/ProjectPage';
// import { Contact } from './Components/Contact/Contact';
// import { Navbar } from './Components/Navbar/Navbarl';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/project" element={<ProjectsPage />} /> */}
        https://github.com/soumyajit4419/Portfolio
        <Route path="/contactpage" element={<Contact2 />} />
        <Route path="/projectpage" element={<Projects />} />
      


      </Routes>
        {/* <Contact/> */}

        <Footer/>
        <ScrollButto/>
    </Router>
  );
}

export default App;
