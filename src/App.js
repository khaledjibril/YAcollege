import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Pages
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import GalleryPage from './pages/GalleryPage/GalleryPage';
import ProgramsPage from './pages/ProgramsPage/ProgramsPage';
import AdmissionPage from './pages/AdmissionPage/AdmissionPage';
import EventsPage from './pages/EventPage/EventPage';
import NewsPage from './pages/NewsPage/NewsPage';

import './App.module.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/admission" element={<AdmissionPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/news" element={<NewsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
