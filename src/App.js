import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Journey from './pages/Journey';
import Gallery from './pages/Gallery';
import Community from './pages/Community';
import ChecklistPage from './pages/CheckListPage';
import TravelIntro from './pages/Info';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Journey />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/community" element={<Community />} />
        <Route path="/checklist" element={<ChecklistPage />} />
        <Route path="/info" element={<TravelIntro />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
