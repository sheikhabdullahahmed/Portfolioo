import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Contact } from './Components/Contact/Contact';
import { Footer } from './Components/Footer/Footer';
import ProjectsPage from './pages/ProjectPage';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<ProjectsPage />} />

      </Routes>
        <Contact/>
        <Footer/>
    </Router>
  );
}

export default App;
