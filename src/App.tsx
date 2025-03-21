import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Contact } from './Components/Contact/Contact';
import { Footer } from './Components/Footer/Footer';
// import About from './pages/About';

// import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
        <Contact/>
        <Footer/>
    </Router>
  );
}

export default App;
